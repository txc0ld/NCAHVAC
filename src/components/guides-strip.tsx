import Link from "next/link";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { posts, type Post } from "@/content/blog";
import { SolarIcon } from "@/lib/icons";

/**
 * Compact list of guides. On the homepage it shows the first three (the
 * commercial leads); on a service section it shows the guides tagged to
 * that service. Pure server component, no images, so it stays light.
 */
export function GuideLinks({ items, className }: { items: Post[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={className}>
      {items.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/blog/${p.slug}`}
            className="group flex items-start gap-3 border-b border-ink/10 py-4 transition-colors duration-300 hover:text-primary-bright"
          >
            <SolarIcon
              name="document-text-linear"
              className="mt-0.5 shrink-0 text-lg text-primary"
            />
            <span>
              <span className="block font-condensed text-lg leading-tight font-semibold tracking-[-0.01em] uppercase">
                {p.title}
              </span>
              <span className="mt-1 block text-sm text-muted">{p.lede}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function guidesForService(slug: string, limit = 3) {
  return posts.filter((p) => p.relatedServices.includes(slug)).slice(0, limit);
}

export function GuidesStrip() {
  const latest = posts.slice(0, 3);
  return (
    <section aria-labelledby="guides-heading" className="border-y border-ink/5 bg-surface-alt py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              Guides
            </p>
            <h2
              id="guides-heading"
              className="mt-4 font-condensed text-5xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-6xl"
            >
              Straight answers for <span className="text-primary">Perth sites.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Maintenance programmes, running costs and fault diagnosis, written by the technician who does the work.
            </p>
            <Link href="/blog" className="btn-ghost mt-8">
              All guides
              <SolarIcon name="arrow-right-linear" className="text-base" />
            </Link>
          </Reveal>
          <Reveal>
            <GuideLinks items={latest} className="border-t border-ink/10" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
