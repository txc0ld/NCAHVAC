import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { TrustTicker } from "@/components/ticker";
import { FinalCta } from "@/components/final-cta";
import { site } from "@/lib/site";
import { SolarIcon } from "@/lib/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact | Air Conditioning Quote Perth",
  description:
    "Request a free HVAC quote in Perth. Contact NCA HVAC for residential and commercial air conditioning, refrigeration, repairs and maintenance.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NCA HVAC | Free HVAC Quotes Perth",
    description:
      "Request a free quote for air conditioning, refrigeration, repairs or maintenance in Perth.",
    url: "/contact",
    images: ["/og.png"],
  },
};

const details = [
  {
    icon: "letter-linear",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "map-point-linear",
    label: "Location",
    value: site.location,
  },
  {
    icon: "routing-2-linear",
    label: "Service area",
    value: "Perth metro, regional WA by arrangement",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="Contact"
        title="Talk to the technician,"
        accent="not a call centre."
        lede="Send the details of the job and you will hear back directly to arrange a free quote."
        image={{ src: "/images/repair.jpg", alt: "" }}
      />

      <TrustTicker />

      <section className="border-y border-white/5 bg-surface-alt">
        <Container>
          <dl className="grid divide-y divide-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06} className="flex items-center gap-4 px-2 py-6 sm:px-8">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-primary">
                  <SolarIcon name={d.icon} />
                </span>
                <div>
                  <dt className="font-condensed text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-sm text-white">
                    {"href" in d && d.href ? (
                      <a
                        href={d.href}
                        className="transition-colors duration-300 hover:text-primary-bright"
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <FinalCta />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
