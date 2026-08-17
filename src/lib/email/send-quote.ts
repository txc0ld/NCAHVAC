import { Resend } from "resend";

import {
  propertyTypeLabels,
  serviceLabels,
  timeframeLabels,
  type QuoteData,
} from "@/lib/validation/quote";

export interface QuotePhoto {
  filename: string;
  content: Buffer;
  contentType: string;
}

const DEFAULT_FROM = "NCA HVAC Website <onboarding@resend.dev>";
const DEFAULT_TO = "admin@ncahvac.com.au";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildRows(data: QuoteData, photoCount: number): [string, string][] {
  return [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Suburb", data.suburb],
    ["Property type", propertyTypeLabels[data.propertyType]],
    ["Service", serviceLabels[data.service]],
    ["Timeframe", timeframeLabels[data.timeframe]],
    ["Description", data.description],
    ["Photos attached", String(photoCount)],
  ];
}

function buildText(rows: [string, string][]): string {
  return [
    "New quote request from the NCA HVAC website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

function buildHtml(rows: [string, string][]): string {
  const cells = rows
    .map(
      ([label, value]) =>
        `<tr>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>` +
        `</tr>`,
    )
    .join("");

  return (
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111827;">` +
    `<h1 style="font-size:18px;margin:0 0 16px;">New quote request</h1>` +
    `<table style="border-collapse:collapse;width:100%;max-width:640px;">${cells}</table>` +
    `</div>`
  );
}

/**
 * Sends the quote request to the NCA HVAC inbox.
 *
 * With no RESEND_API_KEY configured (local dev) this logs a single line with
 * no personal data and returns. Throws if the Resend API rejects the send.
 */
export async function sendQuoteEmail(
  data: QuoteData,
  photos: QuotePhoto[],
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // In production a missing key must NOT silently swallow leads: fail so
    // the caller returns the "contact us directly" error to the customer.
    if (process.env.VERCEL_ENV === "production") {
      throw new Error("RESEND_API_KEY is not configured in production");
    }
    // Deliberately free of any submitted data (privacy requirement).
    console.info("quote request received (email disabled)");
    return;
  }

  const rows = buildRows(data, photos.length);
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM,
    to: process.env.QUOTE_TO_EMAIL || DEFAULT_TO,
    replyTo: data.email,
    subject: `New quote request - ${data.name} (${data.suburb})`,
    text: buildText(rows),
    html: buildHtml(rows),
    attachments: photos.map((photo) => ({
      filename: photo.filename,
      content: photo.content,
      contentType: photo.contentType,
    })),
  });

  if (error) {
    throw new Error(`Resend failed to send the quote email: ${error.message}`);
  }
}
