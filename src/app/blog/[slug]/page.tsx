import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ArticleBody, headingId } from "@/components/article-body";
import { FinalCta } from "@/components/final-cta";
import { posts, getPost, relatedPosts } from "@/content/blog";
import { serviceGroups } from "@/content/services";
import { site } from "@/lib/site";
import { SolarIcon } from "@/lib/icons";
import {
  JsonLd,
  articleSchema,
  ownerSchema,
  faqSchemaFor,
  howToSchemaFor,
  breadcrumbSchema,
} from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: `${post.publishedAt}T00:00:00+08:00`,
      modifiedTime: `${post.updatedAt}T00:00:00+08:00`,
      authors: [site.owner.name],
      images: ["/og.png"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Perth",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const services = serviceGroups.filter((s) => post.relatedServices.includes(s.slug));
  const toc = post.body.filter((b) => b.type === "h2");

  return (
    <>
      <article>
        <header className="relative -mt-20 overflow-hidden pt-20">
          <Image
            src={post.image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent"
          />
          <Container className="relative z-10 pt-24 pb-14 lg:pt-32 lg:pb-20">
            <nav aria-label="Breadcrumb" className="hero-enter">
              <ol className="flex flex-wrap items-center gap-2 font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary-bright">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-primary-bright">Guides</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-secondary">{post.category}</li>
              </ol>
            </nav>
            <div className="hero-enter">
              <h1 className="mt-6 max-w-5xl font-condensed text-5xl leading-[0.92] font-semibold tracking-[-0.04em] uppercase sm:text-6xl lg:text-7xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">{post.lede}</p>
              <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/70">
                <span className="inline-flex items-center gap-2">
                  <SolarIcon name="user-check-linear" className="text-base text-primary" />
                  By {site.owner.name}, {site.owner.title.toLowerCase()} at {site.name}. ARC licence {site.arcLicence}
                </span>
                <span className="inline-flex items-center gap-2">
                  <SolarIcon name="calendar-linear" className="text-base text-primary" />
                  <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
                </span>
                {post.updatedAt !== post.publishedAt ? (
                  <span className="inline-flex items-center gap-2">
                    <SolarIcon name="refresh-linear" className="text-base text-primary" />
                    <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-2">
                  <SolarIcon name="clock-circle-linear" className="text-base text-primary" />
                  {post.readingMinutes} min read
                </span>
              </p>
            </div>
          </Container>
        </header>

        <Container className="py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
            <div className="min-w-0">
              <section aria-labelledby="short-answer" className="border-l-4 border-primary bg-surface p-6 lg:p-8">
                <h2
                  id="short-answer"
                  className="font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase"
                >
                  Short answer
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink">{post.answer}</p>
              </section>

              <section aria-labelledby="key-takeaways" className="mt-8">
                <h2
                  id="key-takeaways"
                  className="font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase"
                >
                  Key takeaways
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.keyTakeaways.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-base leading-snug text-ink/90">
                      <SolarIcon name="check-circle-linear" className="mt-0.5 shrink-0 text-lg text-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-12">
                <ArticleBody blocks={post.body} />
              </div>

              <section aria-labelledby="faqs" className="mt-16 border-t border-ink/10 pt-10">
                <h2
                  id="faqs"
                  className="font-condensed text-3xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-4xl"
                >
                  Frequently asked questions
                </h2>
                <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                  {post.faqs.map((f) => (
                    <div key={f.q} className="py-6">
                      <dt className="text-lg font-medium text-ink">{f.q}</dt>
                      <dd className="mt-2 text-base leading-relaxed text-muted">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="On this page" className="border border-ink/10 bg-surface p-6">
                <p className="font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-2 text-sm">
                  {toc.map((h) => (
                    <li key={h.text}>
                      <a
                        href={`#${h.id ?? headingId(h.text)}`}
                        className="text-ink/80 transition-colors duration-300 hover:text-primary-bright"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faqs" className="text-ink/80 transition-colors duration-300 hover:text-primary-bright">
                      Frequently asked questions
                    </a>
                  </li>
                </ol>
              </nav>

              {services.length ? (
                <div className="mt-6 border border-ink/10 bg-surface p-6">
                  <p className="font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase">
                    Related services
                  </p>
                  <ul className="mt-4 space-y-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services#${s.slug}`}
                          className="inline-flex items-center gap-2 text-sm text-ink/90 transition-colors duration-300 hover:text-primary-bright"
                        >
                          <SolarIcon name={s.icon} className="text-base text-primary" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact#quote" className="btn-primary mt-6 w-full">
                    Request a free quote
                    <SolarIcon name="arrow-right-linear" className="text-base" />
                  </Link>
                </div>
              ) : null}
            </aside>
          </div>

          {related.length ? (
            <section aria-labelledby="related" className="mt-20 border-t border-ink/10 pt-12">
              <h2
                id="related"
                className="font-condensed text-3xl leading-[0.95] font-medium tracking-[-0.02em] uppercase"
              >
                Related guides
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="flex h-full flex-col border border-ink/10 bg-surface p-6 transition-colors duration-300 hover:border-primary"
                    >
                      <p className="font-condensed text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                        {r.category}
                      </p>
                      <p className="mt-3 font-condensed text-2xl leading-[1] font-medium tracking-[-0.01em] uppercase">
                        {r.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{r.lede}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </Container>
      </article>

      <FinalCta />
      <JsonLd
        data={[
          articleSchema(post),
          ownerSchema(),
          faqSchemaFor(post.faqs),
          ...howToSchemaFor(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
    </>
  );
}
