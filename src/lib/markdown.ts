import { site } from "@/lib/site";
import { serviceGroups } from "@/content/services";
import { faqs, whyChoose } from "@/content/home";
import { about, aboutPage } from "@/content/about";
import { privacySections } from "@/content/privacy";

/**
 * Markdown renditions of every page, served via `Accept: text/markdown`
 * content negotiation (see src/proxy.ts) and directly under /md/*.
 */

const contactBlock = [
  "## Contact",
  "",
  ...(site.phone ? [`- Phone: ${site.phone}`] : []),
  `- Email: ${site.email}`,
  `- Service area: ${site.serviceArea}`,
  `- Free quotes: [${site.url}/contact](${site.url}/contact)`,
].join("\n");

function serviceSection(depth: string) {
  return serviceGroups
    .map((s) =>
      [
        `${depth} ${s.title}`,
        "",
        s.summary,
        "",
        ...s.items.map((item) => `- ${item}`),
      ].join("\n"),
    )
    .join("\n\n");
}

function homeMarkdown() {
  return [
    `# ${site.name} — Air Conditioning & Refrigeration, Perth WA`,
    "",
    `> ${about.body[0]} Free quotes on every job.`,
    "",
    "## Services",
    "",
    serviceSection("###"),
    "",
    "## Why choose NCA HVAC",
    "",
    ...whyChoose.map((w) => `- ${w}`),
    "",
    "## Service area",
    "",
    `${site.serviceArea}. From Joondalup to Rockingham and Fremantle to Midland, including the Perth CBD and surrounding suburbs.`,
    "",
    "## Common questions",
    "",
    faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n"),
    "",
    contactBlock,
  ].join("\n");
}

function servicesMarkdown() {
  return [
    `# ${site.name} Services — Perth`,
    "",
    "> Residential and commercial installation, maintenance, fault-finding and refrigeration services across Perth.",
    "",
    serviceSection("##"),
    "",
    contactBlock,
  ].join("\n");
}

function aboutMarkdown() {
  return [
    `# About ${site.name}`,
    "",
    ...about.body.map((p) => `${p}\n`),
    "## Values",
    "",
    aboutPage.values.map((v) => `### ${v.title}\n\n${v.body}`).join("\n\n"),
    "",
    contactBlock,
  ].join("\n");
}

function contactMarkdown() {
  return [
    `# Contact ${site.name}`,
    "",
    `> Request a free quote for air conditioning, refrigeration, repairs or maintenance in Perth.`,
    "",
    contactBlock,
    "",
    "## How to request a quote",
    "",
    `Use the quote form at [${site.url}/contact](${site.url}/contact) with your name, phone, email, job location and a description of the work${site.phone ? `, or call ${site.phone} directly` : ""}.`,
  ].join("\n");
}

function privacyMarkdown() {
  return [
    `# ${site.name} Privacy Statement`,
    "",
    privacySections.map((s) => `## ${s.heading}\n\n${s.body}`).join("\n\n"),
  ].join("\n");
}

const pages: Record<string, () => string> = {
  "/": homeMarkdown,
  "/services": servicesMarkdown,
  "/about": aboutMarkdown,
  "/contact": contactMarkdown,
  "/privacy": privacyMarkdown,
};

export function getPageMarkdown(path: string): string | null {
  const render = pages[path];
  return render ? render() : null;
}

export function notFoundMarkdown(path: string) {
  return [
    "# 404 — Page not found",
    "",
    `\`${path}\` does not exist on ${site.url}.`,
    "",
    "Where to look next:",
    "",
    `- Site index for agents: [${site.url}/llms.txt](${site.url}/llms.txt)`,
    `- Sitemap: [${site.url}/sitemap.xml](${site.url}/sitemap.xml)`,
    ...Object.keys(pages).map(
      (p) => `- [${site.url}${p === "/" ? "" : p}](${site.url}${p === "/" ? "" : p})`,
    ),
  ].join("\n");
}
