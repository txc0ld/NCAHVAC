import { site } from "./site";
import { serviceGroups } from "@/content/services";
import { faqs } from "@/content/home";
import { posts, blogIntro, type Post, type Faq } from "@/content/blog";

const BUSINESS_ID = `${site.url}/#business`;

export function hvacBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness", "Organization"],
    "@id": BUSINESS_ID,
    name: site.name,
    slogan: site.supportLine,
    description:
      "Owner-operated air conditioning and refrigeration business servicing the Perth metropolitan area: split-system and ducted installation, repairs, commercial HVAC and preventative maintenance.",
    url: site.url,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    taxID: site.abn,
    identifier: [
      { "@type": "PropertyValue", propertyID: "ABN", value: site.abn },
      { "@type": "PropertyValue", propertyID: "ACN", value: site.acn },
      {
        "@type": "PropertyValue",
        propertyID: "ARC Licence",
        value: site.arcLicence,
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "licence",
      name: `ARCtick refrigerant handling licence ${site.arcLicence}`,
      recognizedBy: {
        "@type": "Organization",
        name: "Australian Refrigeration Council",
        url: "https://www.arctick.org",
      },
    },
    image: `${site.url}/og.png`,
    logo: `${site.url}/brand/logo-dark.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.9523,
      longitude: 115.8613,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        ...(site.phone ? { telephone: site.phone } : {}),
        areaServed: "Perth, Western Australia",
        availableLanguage: "en",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Perth" },
      { "@type": "City", name: "Joondalup" },
      { "@type": "City", name: "Fremantle" },
      { "@type": "City", name: "Rockingham" },
      { "@type": "City", name: "Midland" },
      {
        "@type": "State",
        name: "Western Australia",
        description: "Regional work considered by arrangement",
      },
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    publisher: { "@id": BUSINESS_ID },
  };
}

export function servicesSchema() {
  return serviceGroups.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.summary,
    serviceType: s.title,
    url: `${site.url}/services#${s.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Perth" },
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function faqSchemaFor(list: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/blog#blog`,
    name: `${site.name} Guides`,
    description: blogIntro,
    url: `${site.url}/blog`,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-AU",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${site.url}/blog/${p.slug}#article`,
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: `${p.publishedAt}T00:00:00+08:00`,
      dateModified: `${p.updatedAt}T00:00:00+08:00`,
    })),
  };
}

export function articleSchema(post: Post) {
  const url = `${site.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "Article"],
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    abstract: post.answer,
    articleSection: post.category,
    keywords: [post.category, "Perth", "air conditioning", "HVAC", "refrigeration"],
    image: `${site.url}${post.image.src}`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: `${post.publishedAt}T00:00:00+08:00`,
    dateModified: `${post.updatedAt}T00:00:00+08:00`,
    inLanguage: "en-AU",
    wordCount: countWords(post),
    timeRequired: `PT${post.readingMinutes}M`,
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    isPartOf: { "@id": `${site.url}/blog#blog` },
    about: {
      "@type": "Thing",
      name: "Air conditioning and refrigeration in Perth, Western Australia",
    },
    spatialCoverage: {
      "@type": "City",
      name: "Perth",
      containedInPlace: { "@type": "State", name: "Western Australia" },
    },
  };
}

export function howToSchemaFor(post: Post) {
  return post.body
    .filter((b) => b.type === "howto")
    .map((b) => ({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: b.name,
      ...(b.totalTime ? { totalTime: b.totalTime } : {}),
      step: b.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    }));
}

function countWords(post: Post) {
  const text = [
    post.answer,
    ...post.keyTakeaways,
    ...post.body.flatMap((b) => {
      switch (b.type) {
        case "h2":
        case "h3":
        case "p":
          return [b.text];
        case "ul":
        case "ol":
          return b.items;
        case "table":
          return b.rows.flat();
        case "callout":
          return [b.title, b.text];
        case "howto":
          return b.steps.flatMap((s) => [s.name, s.text]);
      }
    }),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
