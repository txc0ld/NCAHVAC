import Link from "next/link";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SolarIcon } from "@/lib/icons";

export function MaintenanceBanner() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden border-l-4 border-primary bg-gradient-to-r from-[#1a1a1a] to-canvas px-6 py-14 lg:px-16 lg:py-20">
            <SolarIcon
              name="wind-linear"
              className="pointer-events-none absolute -top-10 -right-10 text-[22rem] text-white/[0.02] lg:text-[30rem]"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-1 w-24 bg-secondary"
            />

            <div className="relative z-10 max-w-3xl">
              <p className="flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                Preventative maintenance
              </p>
              <h2 className="mt-6 font-condensed text-4xl leading-[0.95] font-medium tracking-[-0.02em] uppercase sm:text-5xl lg:text-6xl">
                Keep HVAC equipment working before a fault becomes{" "}
                <span className="text-primary">downtime.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                Scheduled residential and commercial maintenance can include
                filters, coils, drains, system performance checks, equipment
                condition reporting and repair recommendations.
              </p>
              <Link
                href="/contact#quote"
                className="btn-primary mt-10"
              >
                Discuss a Maintenance Schedule
                <SolarIcon name="arrow-right-linear" className="text-base" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
