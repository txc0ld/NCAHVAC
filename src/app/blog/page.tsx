import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import { posts, blogIntro } from "@/content/blog";
import { SolarIcon } from "@/lib/icons";
import { JsonLd, breadcrumbSchema, blogSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "HVAC Guides for Perth Businesses & Homes | NCA HVAC Blog",
  description:
    "Practical air conditioning and refrigeration guides for Perth: commercial maintenance contracts, energy costs, coolroom care, running costs, servicing and troubleshooting.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "NCA HVAC Blog | Air Conditioning & Refrigeration Guides for Perth",
    description: blogIntro,
    url: "/blog",
    type: "website",
    images: ["/og.png"],
  },
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Perth",
  });
}

export default function BlogIndexPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        overline="Guides"
        title="HVAC guides for"
        accent="Perth."
        lede={blogIntro}
        image={{ src: "/images/planning.jpg", alt: "" }}
      />

      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid gap-8 border border-ink/10 bg-surface transition-colors duration-300 hover:border-primary lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
                <Image
                  src={lead.image.src}
                  alt={lead.image.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="flex items-center gap-3 font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase">
                  <span className="text-secondary">{lead.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lead.readingMinutes} min read</span>
                </p>
                <h2 className="mt-4 font-condensed text-4xl leading-[0.95] font-medium tracking-[-0.02em] uppercase lg:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{lead.lede}</p>
                <p className="mt-6 inline-flex items-center gap-2 font-condensed text-sm font-semibold tracking-[0.12em] text-primary-bright uppercase">
                  Read the guide
                  <SolarIcon name="arrow-right-linear" className="text-base" />
                </p>
              </div>
            </Link>
          </Reveal>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <li key={post.slug}>
                <Reveal className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col border border-ink/10 bg-surface transition-colors duration-300 hover:border-primary"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="flex items-center gap-3 font-condensed text-xs font-semibold tracking-[0.2em] text-ink/60 uppercase">
                        <span className="text-secondary">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readingMinutes} min</span>
                      </p>
                      <h2 className="mt-3 font-condensed text-2xl leading-[1] font-medium tracking-[-0.01em] uppercase">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{post.lede}</p>
                      <p className="mt-auto pt-5 text-xs text-ink/60">
                        <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta />
      <JsonLd
        data={[
          blogSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/blog" },
          ]),
        ]}
      />
    </>
  );
}
