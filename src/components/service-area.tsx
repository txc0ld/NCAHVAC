import { Container } from "./container";
import { Reveal } from "./reveal";
import { SolarIcon } from "@/lib/icons";

export function ServiceArea() {
  return (
    <section className="border-y border-ink/5 bg-surface-alt">
      <Container className="py-16 lg:py-20">
        <Reveal>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-ink/10 text-2xl text-primary">
                <SolarIcon name="map-point-linear" />
              </span>
              <div>
                <h2 className="font-condensed text-4xl leading-none font-semibold tracking-[-0.02em] uppercase lg:text-5xl">
                  Servicing Perth{" "}
                  <span className="text-primary">and Western Australia</span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  The Perth metropolitan area is the core service area — from
                  Joondalup to Rockingham and Fremantle to Midland, including
                  the CBD and surrounding suburbs. Regional Western Australian
                  work is considered by arrangement.
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="hidden h-px w-40 shrink-0 bg-gradient-to-r from-secondary to-primary lg:block"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
