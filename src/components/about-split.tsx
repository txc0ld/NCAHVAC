import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { ParallaxY } from "./parallax";
import { about } from "@/content/about";
import { SolarIcon } from "@/lib/icons";

export function AboutSplit() {
  return (
    <section className="bg-surface-alt py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <span
              aria-hidden="true"
              className="absolute -top-3 -left-3 z-10 h-16 w-px bg-primary"
            />
            <span
              aria-hidden="true"
              className="absolute -top-3 -left-3 z-10 h-px w-16 bg-primary"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 z-10 h-16 w-px bg-primary"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 z-10 h-px w-16 bg-primary"
            />
            <div className="group relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
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

          <div>
            <Reveal>
              <p className="flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                {about.overline}
              </p>
              <h2 className="mt-6 font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-7xl">
                {about.headline[0]}
                <br />
                <span className="text-primary">{about.headline[1]}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
                {about.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <Link href="/about" className="btn-ghost mt-10">
                About NCA HVAC
                <SolarIcon name="arrow-right-linear" className="text-base" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
