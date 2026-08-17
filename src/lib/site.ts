export const site = {
  name: "NCA HVAC",
  legalName: "NCA HVAC",
  tagline: "Residential | Commercial",
  supportLine: "Reliable HVAC Solutions Across Perth",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ncahvac.com.au",
  email: "admin@ncahvac.com.au",
  /** Confirmed by the client 2026-08-17; NEXT_PUBLIC_PHONE overrides. */
  phone: process.env.NEXT_PUBLIC_PHONE || "0439 967 908",
  location: "Perth, WA",
  serviceArea:
    "Perth metropolitan area, with regional WA considered by arrangement",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
