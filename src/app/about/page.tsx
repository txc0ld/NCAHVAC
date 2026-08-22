import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ParallaxY } from "@/components/parallax";
import { Stats } from "@/components/stats";
import { TrustTicker } from "@/components/ticker";
import { QuoteCta, CallCta } from "@/components/cta";
import { about, aboutPage } from "@/content/about";
import { SolarIcon } from "@/lib/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About | Owner-Operated HVAC Perth",
  description:
    "NCA HVAC is a family-run, owner-operated air conditioning and refrigeration business in Perth. Deal directly with a qualified technician with 10+ years hands-on experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About NCA HVAC | Owner-Operated HVAC Perth",
    description:
      "Family-run, owner-operated air conditioning and refrigeration in Perth. Deal directly with the technician doing the work.",
    url: "/about",
    type: "website",
    images: ["/og.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        overline="About NCA HVAC"
        title="Personal service."
        accent="Direct accountability."
        lede="A Perth-based, family-run and owner-operated air-conditioning and refrigeration business."
        image={{ src: "/images/planning.jpg", alt: "" }}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h2 className="font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-6xl">
                  Built on a decade of{" "}
                  <span className="text-primary">hands-on work.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    NCA HVAC is a new Perth business built on more than ten
                    years of the owner&rsquo;s hands-on HVAC industry
                    experience, across residential air conditioning, commercial
                    systems and refrigeration.
                  </p>
                  <p>
                    Being owner-operated means the person who quotes the job is
                    the qualified technician who completes it. Advice stays
                    honest and practical, workmanship stays accountable, and
                    communication stays direct from enquiry through to
                    completion.
                  </p>
                  <p>
                    The goal is simple: long-term relationships with local
                    customers and the Perth community, earned one job at a
                    time.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-3 -right-3 z-10 h-16 w-px bg-primary"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 -right-3 z-10 h-px w-16 bg-primary"
              />
              <div className="group relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
                <ParallaxY className="absolute inset-0" from={-5} to={5}>
                  <Image
                    src={about.image.src}
                    alt={about.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="scale-[1.12] object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                  />
                </ParallaxY>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 bg-secondary"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/5 bg-surface-alt py-24 lg:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-3xl font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-6xl">
              What working with NCA{" "}
              <span className="text-primary">looks like</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-ink/5 sm:grid-cols-2">
            {aboutPage.values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.06}
                className="group bg-canvas p-8 transition-colors duration-300 hover:bg-surface lg:p-10"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-ink/10 text-2xl text-primary">
                  <SolarIcon name={value.icon} />
                </span>
                <h3 className="mt-6 font-condensed text-2xl font-semibold uppercase">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <TrustTicker />

      <section className="py-24 lg:py-32">
        <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="max-w-2xl font-condensed text-5xl leading-[0.9] font-semibold tracking-[-0.05em] uppercase lg:text-7xl">
              Ready when <span className="text-primary">you are.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4">
              <QuoteCta />
              <CallCta />
            </div>
          </Reveal>
        </Container>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
