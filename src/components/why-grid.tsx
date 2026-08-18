import { Container } from "./container";
import { Reveal } from "./reveal";
import { whyChoose } from "@/content/home";
import { cn } from "@/lib/cn";

export function WhyGrid() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-7xl">
            Why choose <span className="text-primary">NCA HVAC</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-14 grid border-t border-l border-ink/5 lg:grid-cols-2">
            {whyChoose.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "group flex items-baseline gap-5 border-r border-b border-ink/5 p-6 transition-colors duration-300 hover:bg-surface lg:p-8",
                  i === whyChoose.length - 1 && "lg:col-span-2",
                )}
              >
                <span
                  aria-hidden="true"
                  className="font-condensed text-sm font-semibold text-secondary"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-condensed text-xl font-medium tracking-[0.02em] text-ink uppercase transition-colors duration-300 group-hover:text-primary lg:text-2xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
