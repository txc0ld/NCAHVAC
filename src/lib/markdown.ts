import { site } from "@/lib/site";
import { serviceGroups } from "@/content/services";
import { faqs, whyChoose } from "@/content/home";
import { about, aboutPage } from "@/content/about";
import { privacySections } from "@/content/privacy";
import { posts, getPost, blogIntro, type Post, type Block } from "@/content/blog";

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

function blockMarkdown(b: Block): string {
  switch (b.type) {
    case "h2":
      return `## ${b.text}`;
    case "h3":
      return `### ${b.text}`;
    case "p":
      return b.text;
    case "ul":
      return b.items.map((i) => `- ${i}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${i}`).join("\n");
    case "table": {
      const esc = (s: string) => s.replace(/\|/g, "\\|");
      const lines = [
        `| ${b.head.map(esc).join(" | ")} |`,
        `| ${b.head.map(() => "---").join(" | ")} |`,
        ...b.rows.map((r) => `| ${r.map(esc).join(" | ")} |`),
      ];
      return (b.caption ? `${b.caption}\n\n` : "") + lines.join("\n");
    }
    case "callout":
      return `> **${b.title}** ${b.text}`;
    case "howto":
      return [
        `**${b.name}**`,
        "",
        ...b.steps.map((s, n) => `${n + 1}. **${s.name}.** ${s.text}`),
      ].join("\n");
  }
}

function postMarkdown(post: Post) {
  return [
    `# ${post.title}`,
    "",
    `> ${post.answer}`,
    "",
    `Published ${post.publishedAt}. Updated ${post.updatedAt}. By ${site.name}, ARC licence ${site.arcLicence}. Canonical: ${site.url}/blog/${post.slug}`,
    "",
    "## Key takeaways",
    "",
    ...post.keyTakeaways.map((t) => `- ${t}`),
    "",
    post.body.map(blockMarkdown).join("\n\n"),
    "",
    "## Frequently asked questions",
    "",
    post.faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n"),
    "",
    contactBlock,
  ].join("\n");
}

function blogIndexMarkdown() {
  return [
    `# ${site.name} Guides`,
    "",
    `> ${blogIntro}`,
    "",
    ...posts.map(
      (p) =>
        `- [${p.title}](${site.url}/blog/${p.slug}) (${p.category}, updated ${p.updatedAt}): ${p.description}`,
    ),
    "",
    contactBlock,
  ].join("\n");
}

const pages: Record<string, () => string> = {
  "/blog": blogIndexMarkdown,
  "/": homeMarkdown,
  "/services": servicesMarkdown,
  "/about": aboutMarkdown,
  "/contact": contactMarkdown,
  "/privacy": privacyMarkdown,
};

export function getPageMarkdown(path: string): string | null {
  const render = pages[path];
  if (render) return render();
  const match = /^\/blog\/([a-z0-9-]+)$/.exec(path);
  if (match) {
    const post = getPost(match[1]);
    if (post) return postMarkdown(post);
  }
  return null;
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
