import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { serviceGroups } from "@/content/services";
import { SolarIcon } from "@/lib/icons";

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-7xl">
            HVAC services built around{" "}
            <span className="text-primary">the job.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Residential and commercial installation, maintenance, fault-finding
            and refrigeration services across Perth.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative block aspect-square overflow-hidden bg-surface lg:aspect-[3/4]"
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-[filter,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 group-hover:grayscale-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-canvas/60 text-xl text-white backdrop-blur-sm">
                    <SolarIcon name={service.icon} />
                  </span>
                  <h3 className="mt-4 font-condensed text-2xl leading-none font-semibold text-white uppercase">
                    {service.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />
                    <span className="h-0.5 w-4 shrink-0 origin-left scale-x-0 bg-secondary transition-transform delay-100 duration-500 group-hover:scale-x-100" />
                  </div>
                  <p className="mt-0 max-h-0 overflow-hidden text-sm leading-relaxed text-muted opacity-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-condensed text-xs font-semibold tracking-[0.12em] text-white/70 uppercase transition-colors duration-300 group-hover:text-primary-bright">
                    View services
                    <SolarIcon
                      name="arrow-right-linear"
                      className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 font-condensed text-sm font-semibold text-white/30"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
