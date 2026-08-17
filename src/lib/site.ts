export const site = {
  name: "NCA HVAC",
  legalName: "NCA HVAC",
  tagline: "Residential | Commercial",
  supportLine: "Reliable HVAC Solutions Across Perth",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ncahvac.com.au",
  email: "admin@ncahvac.com.au",
  /**
   * Business phone is a launch blocker (PRD §30). Until confirmed via
   * NEXT_PUBLIC_PHONE, call CTAs fall back to email so no placeholder
   * number can ship (PRD §31).
   */
  phone: process.env.NEXT_PUBLIC_PHONE || null,
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
