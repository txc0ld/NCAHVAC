import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ParallaxY } from "@/components/parallax";
import { TrustTicker } from "@/components/ticker";
import { FinalCta } from "@/components/final-cta";
import { serviceGroups } from "@/content/services";
import { SolarIcon } from "@/lib/icons";
import { JsonLd, servicesSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services | Split Systems, Ducted, Commercial HVAC & Refrigeration Perth",
  description:
    "Split system installation, ducted air conditioning, commercial HVAC, refrigeration repair and preventative maintenance across Perth. Residential and commercial. Free quotes.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "NCA HVAC Services | Air Conditioning, Refrigeration & Maintenance Perth",
    description:
      "Residential and commercial HVAC services across Perth: installation, repair, refrigeration and preventative maintenance.",
    url: "/services",
    images: ["/og.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        overline="Services"
        title="Install. Repair."
        accent="Maintain."
        lede="Residential and commercial installation, maintenance, fault-finding and refrigeration services across Perth."
        image={{ src: "/images/hero.jpg", alt: "" }}
      />

      <nav aria-label="Service categories" className="border-y border-white/5 bg-surface-alt">
        <Container>
          <ul className="hide-scrollbar flex snap-x items-center gap-8 overflow-x-auto py-4">
            {serviceGroups.map((s) => (
              <li key={s.slug} className="shrink-0 snap-start">
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 font-condensed text-xs font-semibold tracking-[0.12em] whitespace-nowrap text-white/70 uppercase transition-colors duration-300 hover:text-primary-bright"
                >
                  <SolarIcon name={s.icon} className="text-base text-primary" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {serviceGroups.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={
            index % 2 === 1
              ? "scroll-mt-20 border-y border-white/5 bg-surface-alt py-24 lg:py-28"
              : "scroll-mt-20 py-24 lg:py-28"
          }
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <Reveal>
                  <p className="flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
                    <span
                      aria-hidden="true"
                      className="font-condensed text-secondary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-6xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </Reveal>
                <Reveal delay={0.1} className="mt-8">
                  <div className="group relative aspect-[16/9] overflow-hidden lg:aspect-[4/3]">
                    <ParallaxY className="absolute inset-0" from={-5} to={5}>
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="scale-[1.12] object-cover"
                      />
                    </ParallaxY>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-1 w-24 bg-primary"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-24 h-1 w-6 bg-secondary"
                    />
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.08}>
                <ul className="grid border-t border-l border-white/5 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-r border-b border-white/5 p-5 transition-colors duration-300 hover:bg-surface lg:p-6"
                    >
                      <SolarIcon
                        name="check-circle-linear"
                        className="mt-0.5 shrink-0 text-lg text-primary"
                      />
                      <span className="text-base leading-snug text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact#quote"
                  className="btn-ghost mt-8"
                >
                  Get a quote for this work
                  <SolarIcon name="arrow-right-linear" className="text-base" />
                </Link>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <TrustTicker />
      <FinalCta />
      <JsonLd
        data={[
          ...servicesSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
    </>
  );
}
