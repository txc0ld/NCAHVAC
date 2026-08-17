import { tickerItems } from "@/content/home";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden ? true : undefined}
      className={
        hidden
          ? "flex shrink-0 items-center motion-reduce:hidden"
          : "flex shrink-0 items-center"
      }
    >
      {tickerItems.map((item) => (
        <li key={item} className="flex shrink-0 items-center">
          <span className="px-8 font-condensed text-3xl font-semibold whitespace-nowrap text-white/35 uppercase lg:px-12 lg:text-5xl">
            {item}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-secondary/70" />
        </li>
      ))}
    </ul>
  );
}

/** Continuous 40s trust ticker (design.md §17, §27). Static under reduced motion. */
export function TrustTicker() {
  return (
    <section
      aria-label="NCA HVAC at a glance"
      className="relative overflow-hidden border-y border-white/5 py-8 lg:py-10"
    >
      <div className="animate-ticker flex w-max motion-reduce:w-full motion-reduce:flex-wrap">
        <Track />
        <Track hidden />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent lg:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent lg:w-40"
      />
    </section>
  );
}
