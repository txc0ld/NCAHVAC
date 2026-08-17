import Image from "next/image";
import { ParallaxY } from "./parallax";

/** Internal page hero (design.md §34): dark full-bleed, condensed uppercase, luminosity image. */
export function PageHero({
  overline,
  title,
  accent,
  lede,
  image,
}: {
  overline: string;
  title: string;
  /** Final word(s) rendered in NCA blue. */
  accent?: string;
  lede?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      {image ? (
        <ParallaxY className="absolute inset-0" from={-6} to={6}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-luminosity"
          />
        </ParallaxY>
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="hero-enter">
          <p className="flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-secondary" />
            {overline}
          </p>
          <h1 className="mt-6 max-w-4xl font-condensed text-6xl leading-[0.9] font-semibold tracking-[-0.05em] uppercase sm:text-7xl lg:text-8xl">
            {title}
            {accent ? (
              <>
                {" "}
                <span className="text-primary">{accent}</span>
              </>
            ) : null}
          </h1>
          {lede ? (
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
              {lede}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
