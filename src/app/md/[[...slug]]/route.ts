import { getPageMarkdown, notFoundMarkdown } from "@/lib/markdown";

const HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
  // /md/* mirrors the HTML pages; keep the HTML canonical in search indexes.
  "X-Robots-Tag": "noindex",
  "Cache-Control": "public, max-age=0, must-revalidate",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const path = `/${(slug ?? []).join("/")}`;
  const markdown = getPageMarkdown(path);
  if (markdown === null) {
    return new Response(notFoundMarkdown(path), {
      status: 404,
      headers: HEADERS,
    });
  }
  return new Response(markdown, { status: 200, headers: HEADERS });
}
