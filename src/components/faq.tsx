import { Container } from "./container";
import { Reveal } from "./reveal";
import { faqs } from "@/content/home";
import { SolarIcon } from "@/lib/icons";

export function Faq() {
  return (
    <section className="bg-surface-alt py-24 lg:py-32">
      <Container className="max-w-4xl">
        <Reveal>
          <h2 className="font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-6xl">
            Common <span className="text-primary">questions</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-ink/10">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 font-condensed text-xl font-medium tracking-[0.02em] text-ink uppercase transition-colors duration-300 hover:text-primary lg:text-2xl">
                {faq.q}
                <SolarIcon
                  name="alt-arrow-down-linear"
                  className="shrink-0 text-xl text-primary transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pb-8 text-base leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
