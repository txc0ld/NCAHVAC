import { site } from "./site";
import { serviceGroups } from "@/content/services";
import { faqs } from "@/content/home";

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
