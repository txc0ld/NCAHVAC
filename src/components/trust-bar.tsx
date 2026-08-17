import { trustBar } from "@/content/home";
import { SolarIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";

/** Items kept visible on small screens (design.md §14). */
const MOBILE_KEEP = new Set([
  "Owner Operated",
  "Qualified & Licensed",
  "Free Quotes",
]);

export function TrustBar() {
  return (
    <section aria-label="Why customers trust NCA HVAC" className="bg-primary">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 lg:justify-between lg:gap-x-4">
        {trustBar.map((item, i) => (
          <span key={item.label} className="contents">
            <span
              className={cn(
                "inline-flex items-center gap-2.5 font-condensed text-sm font-semibold tracking-[0.12em] text-white uppercase",
                !MOBILE_KEEP.has(item.label) && "hidden sm:inline-flex",
              )}
            >
              <SolarIcon name={item.icon} className="text-lg" />
              {item.label}
            </span>
            {i < trustBar.length - 1 ? (
              <span
                aria-hidden="true"
                className="hidden size-1.5 rounded-full bg-secondary lg:block"
              />
            ) : null}
          </span>
        ))}
      </div>
    </section>
  );
}
