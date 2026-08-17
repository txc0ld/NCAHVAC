import { sendQuoteEmail, type QuotePhoto } from "@/lib/email/send-quote";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { verifyTurnstile } from "@/lib/security/turnstile";
import { parseQuoteFormData } from "@/lib/validation/quote";

export const runtime = "nodejs";

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_PHOTO_BYTES = 25 * 1024 * 1024; // aggregate, stays under Resend's post-encode cap
const MAX_FILENAME_LENGTH = 80;

type ImageKind = "jpeg" | "png" | "heic";

const MIME_TO_KIND: Record<string, ImageKind> = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/heic": "heic",
};

const KIND_TO_MIME: Record<ImageKind, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  heic: "image/heic",
};

const EXTENSION_FOR_KIND: Record<ImageKind, string> = {
  jpeg: "jpg",
  png: "png",
  heic: "heic",
};

const HEIC_BRANDS = new Set(["heic", "heix", "mif1"]);

const GENERIC_ERROR =
  "We couldn't send your request. Please try again or contact NCA HVAC directly by phone or email.";

function json(status: number, body: unknown): Response {
  return Response.json(body, { status });
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (!forwarded) return "unknown";
  const first = forwarded.split(",")[0]?.trim();
  return first && first.length > 0 ? first : "unknown";
}

/** Detects the real image type from the file's leading bytes. */
function sniffImageKind(bytes: Uint8Array): ImageKind | null {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "jpeg";
  }

  if (
    bytes.length >= 4 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return "png";
  }

  if (bytes.length >= 12) {
    const boxType = String.fromCharCode(bytes[4], bytes[5], bytes[6], bytes[7]);
    const brand = String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11]);
    if (boxType === "ftyp" && HEIC_BRANDS.has(brand.toLowerCase())) {
      return "heic";
    }
  }

  return null;
}

function sanitizeFilename(name: string, kind: ImageKind, index: number): string {
  const base = name.split(/[\\/]/).pop() ?? "";
  const cleaned = base
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/^[.\-]+/, "")
    .slice(0, MAX_FILENAME_LENGTH);

  return cleaned.length > 0
    ? cleaned
    : `photo-${index + 1}.${EXTENSION_FOR_KIND[kind]}`;
}

type PhotoResult =
  | { ok: true; photos: QuotePhoto[] }
  | { ok: false; message: string };

async function collectPhotos(formData: FormData): Promise<PhotoResult> {
  const files = formData
    .getAll("photos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (files.length > MAX_PHOTOS) {
    return {
      ok: false,
      message: `Please attach no more than ${MAX_PHOTOS} photos.`,
    };
  }

  const photos: QuotePhoto[] = [];
  let totalBytes = 0;

  for (const [index, file] of files.entries()) {
    if (file.size > MAX_PHOTO_BYTES) {
      return {
        ok: false,
        message: "One of your photos is larger than 10MB. Please attach smaller photos.",
      };
    }

    totalBytes += file.size;
    if (totalBytes > MAX_TOTAL_PHOTO_BYTES) {
      return {
        ok: false,
        message:
          "Your photos are too large in total. Please attach up to 25MB of photos across all files.",
      };
    }

    const content = Buffer.from(await file.arrayBuffer());
    if (content.byteLength > MAX_PHOTO_BYTES) {
      return {
        ok: false,
        message: "One of your photos is larger than 10MB. Please attach smaller photos.",
      };
    }

    // Sniff first: some browsers send HEIC (and drag-dropped files) with an
    // empty content type. The magic bytes are authoritative; a declared type
    // is only required to agree with them when present.
    const actualKind = sniffImageKind(content);
    const declaredKind = MIME_TO_KIND[file.type];
    if (
      actualKind === null ||
      (file.type !== "" && declaredKind !== actualKind)
    ) {
      return {
        ok: false,
        message:
          "Unsupported photo format. Please attach JPG, PNG or HEIC images only.",
      };
    }

    photos.push({
      filename: sanitizeFilename(file.name, actualKind, index),
      content,
      contentType: KIND_TO_MIME[actualKind],
    });
  }

  return { ok: true, photos };
}

/** Cross-origin POSTs are rejected; browsers always send Origin for form fetches. */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    if (!isSameOrigin(request)) {
      return json(403, { ok: false, message: GENERIC_ERROR });
    }

    const ip = clientIp(request);

    if (!checkRateLimit(ip)) {
      return json(429, {
        ok: false,
        message:
          "Too many requests. Please try again shortly, or contact NCA HVAC directly by email.",
      });
    }

    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return json(400, {
        ok: false,
        message: "We couldn't read your submission. Please try again.",
      });
    }

    const tokenField = formData.get("turnstile_token");
    const token = typeof tokenField === "string" ? tokenField : null;

    if (!(await verifyTurnstile(token, ip))) {
      return json(400, {
        ok: false,
        message: "Spam check failed. Please try again.",
      });
    }

    const parsed = parseQuoteFormData(formData);
    if (!parsed.ok) {
      return json(400, {
        ok: false,
        errors: parsed.errors,
        message: "Please check the highlighted fields.",
      });
    }

    const photos = await collectPhotos(formData);
    if (!photos.ok) {
      return json(400, { ok: false, message: photos.message });
    }

    await sendQuoteEmail(parsed.data, photos.photos);

    return json(200, { ok: true });
  } catch (error) {
    // Never log submitted content or filenames - only the failure itself.
    console.error(
      "quote request failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return json(500, { ok: false, message: GENERIC_ERROR });
  }
}
