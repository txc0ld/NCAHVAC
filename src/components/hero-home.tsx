import Image from "next/image";
import type { CSSProperties } from "react";
import { QuoteCta, CallCta } from "./cta";
import { ParallaxY } from "./parallax";
import { site } from "@/lib/site";

function enter(delay: number): CSSProperties {
  return { "--enter-delay": `${delay}s` } as CSSProperties;
}

export function HeroHome() {
  return (
    <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden pt-20 lg:items-center">
      <ParallaxY className="absolute inset-0" from={-3} to={6}>
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-[1.1] object-cover opacity-40 mix-blend-luminosity"
        />
      </ParallaxY>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-canvas via-canvas/70 to-transparent lg:w-3/4"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-28 pb-20 lg:py-40">
        <p
          className="hero-enter flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase"
          style={enter(0)}
        >
          <span aria-hidden="true" className="h-px w-8 bg-secondary" />
          {site.tagline}
        </p>

        <h1
          className="hero-enter mt-6 max-w-5xl font-condensed text-6xl leading-[0.9] font-semibold tracking-[-0.05em] uppercase sm:text-7xl lg:text-8xl xl:text-9xl"
          style={enter(0.1)}
        >
          Professional air conditioning{" "}
          <span className="text-primary">&amp; refrigeration</span> across
          Perth
        </h1>

        <p
          className="hero-enter mt-8 max-w-xl text-base leading-relaxed text-muted lg:text-lg"
          style={enter(0.2)}
        >
          NCA HVAC is a locally owned, family-run and owner-operated business
          providing residential and commercial air-conditioning and
          refrigeration services across Perth.
        </p>

        <div
          className="hero-enter mt-10 flex flex-wrap items-center gap-4"
          style={enter(0.3)}
        >
          <QuoteCta />
          <CallCta />
        </div>
      </div>

      <div
        className="hero-enter absolute right-0 bottom-0 z-20 hidden md:block"
        style={enter(0.45)}
      >
        <div className="border-t border-l border-white/10 bg-surface/90 px-8 py-6 backdrop-blur-sm">
          <span aria-hidden="true" className="block h-px w-10 bg-secondary" />
          <p className="mt-4 font-condensed text-3xl leading-none font-semibold text-white uppercase">
            10+ years
          </p>
          <p className="mt-1 font-condensed text-sm font-semibold tracking-[0.08em] text-muted uppercase">
            Owner&rsquo;s hands-on HVAC experience
          </p>
          <p className="mt-3 text-xs text-white/70">
            Owner Operated &bull; Perth, WA
          </p>
        </div>
      </div>
    </section>
  );
}
