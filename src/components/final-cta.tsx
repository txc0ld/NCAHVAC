import { Container } from "./container";
import { Reveal } from "./reveal";
import { QuoteForm } from "./quote-form";
import { site, telHref } from "@/lib/site";
import { SolarIcon } from "@/lib/icons";

const RADIAL =
  "radial-gradient(circle at bottom left, rgba(11, 99, 216, 0.18), transparent 42%), radial-gradient(circle at 80% 20%, rgba(232, 34, 42, 0.06), transparent 34%)";

export function FinalCta({ id = "quote" }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 py-24 lg:py-32"
      style={{ background: RADIAL }}
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                Request a free quote
              </p>
              <h2 className="mt-6 font-condensed text-6xl leading-[0.9] font-semibold tracking-[-0.05em] uppercase lg:text-8xl">
                Let&rsquo;s <span className="text-primary">talk.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
                Tell NCA HVAC about the property, system and work required. You
                will be contacted directly to discuss the best way forward.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4">
                {site.phone ? (
                  <li>
                    <a
                      href={telHref(site.phone)}
                      className="group inline-flex items-center gap-4 text-ink transition-colors duration-300 hover:text-primary-bright"
                    >
                      <span className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-lg transition-colors duration-300 group-hover:border-primary">
                        <SolarIcon name="phone-linear" />
                      </span>
                      {site.phone}
                    </a>
                  </li>
                ) : null}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-4 text-ink transition-colors duration-300 hover:text-primary-bright"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-lg transition-colors duration-300 group-hover:border-primary">
                      <SolarIcon name="letter-linear" />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-4 text-muted">
                  <span className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-lg">
                    <SolarIcon name="map-point-linear" />
                  </span>
                  {site.location}
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <QuoteForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
