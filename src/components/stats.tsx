import { Container } from "./container";
import { stats } from "@/content/home";
import { cn } from "@/lib/cn";

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-surface-alt">
      <Container>
        <div className="grid divide-y divide-white/5 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-3d group px-2 py-10 lg:px-10 lg:py-16"
            >
              <p className="font-condensed text-6xl leading-none font-semibold text-primary uppercase transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 lg:text-7xl">
                {stat.value}
              </p>
              <p
                className={cn(
                  "mt-4 max-w-[26ch] text-sm leading-relaxed text-muted",
                  i === 0 &&
                    "border-l-2 border-secondary pl-3",
                )}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
