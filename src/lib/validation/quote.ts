import { z } from "zod";

/**
 * Human-readable labels for the enum values, used when rendering the
 * notification email (and safe to reuse in the UI).
 */
export const propertyTypeLabels = {
  residential: "Residential",
  commercial: "Commercial",
} as const;

export const serviceLabels = {
  "new-installation": "New installation",
  "replacement-upgrade": "Replacement / upgrade",
  "service-maintenance": "Service / maintenance",
  "breakdown-repair": "Breakdown / repair",
  "commercial-hvac": "Commercial HVAC",
  "commercial-refrigeration": "Commercial refrigeration",
  ventilation: "Ventilation",
  other: "Other",
} as const;

export const timeframeLabels = {
  asap: "As soon as possible",
  "within-1-week": "Within 1 week",
  "within-2-4-weeks": "Within 2-4 weeks",
  "planning-budgeting": "Planning / budgeting",
  other: "Other",
} as const;

export type PropertyType = keyof typeof propertyTypeLabels;
export type Service = keyof typeof serviceLabels;
export type Timeframe = keyof typeof timeframeLabels;

/** Australian-friendly: digits plus the usual separators people type. */
const PHONE_CHARACTERS = /^[0-9+()\s-]+$/;

const countDigits = (value: string): number => value.replace(/\D/g, "").length;

export const quoteSchema = z.object({
  name: z
    .string()
    .min(2, { error: "Please enter your name (at least 2 characters)." })
    .max(100, { error: "Your name is too long (100 characters maximum)." }),

  phone: z
    .string()
    .min(1, { error: "Please enter your phone number." })
    .max(30, { error: "That phone number is too long." })
    .regex(PHONE_CHARACTERS, {
      error:
        "Please enter a valid phone number using numbers, spaces, +, ( ) or -.",
    })
    .refine((value) => countDigits(value) >= 8 && countDigits(value) <= 15, {
      error: "Please enter a valid phone number with 8 to 15 digits.",
    }),

  email: z
    .string()
    .min(1, { error: "Please enter your email address." })
    .pipe(z.email({ error: "Please enter a valid email address." })),

  suburb: z
    .string()
    .min(2, { error: "Please enter your suburb." })
    .max(100, { error: "That suburb name is too long (100 characters maximum)." }),

  propertyType: z.enum(
    Object.keys(propertyTypeLabels) as [PropertyType, ...PropertyType[]],
    { error: "Please choose whether this is a residential or commercial property." },
  ),

  service: z.enum(
    Object.keys(serviceLabels) as [Service, ...Service[]],
    { error: "Please choose the service you need." },
  ),

  description: z
    .string()
    .min(10, {
      error: "Please tell us a little more about the job (at least 10 characters).",
    })
    .max(2000, {
      error: "Please shorten your description (2000 characters maximum).",
    }),

  timeframe: z.enum(
    Object.keys(timeframeLabels) as [Timeframe, ...Timeframe[]],
    { error: "Please choose how soon you need the work done." },
  ),
});

export type QuoteData = z.infer<typeof quoteSchema>;

export type QuoteParseResult =
  | { ok: true; data: QuoteData }
  | { ok: false; errors: Record<string, string> };

const FIELDS = [
  "name",
  "phone",
  "email",
  "suburb",
  "propertyType",
  "service",
  "description",
  "timeframe",
] as const;

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Parses a multipart/form-data submission into validated quote data.
 * Returns one plain-English message per invalid field.
 */
export function parseQuoteFormData(formData: FormData): QuoteParseResult {
  const raw: Record<string, string> = {};
  for (const field of FIELDS) {
    raw[field] = readField(formData, field);
  }

  const result = quoteSchema.safeParse(raw);
  if (result.success) {
    return { ok: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (typeof key !== "string" || key in errors) continue;
    errors[key] = issue.message;
  }

  return { ok: false, errors };
}
