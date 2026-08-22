import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteCta } from "@/components/cta";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start px-5">
        <BrandLogo className="h-16" sizes="220px" />
        <p className="mt-10 flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase">
          <span aria-hidden="true" className="h-px w-8 bg-secondary" />
          404
        </p>
        <h1 className="mt-4 font-condensed text-6xl leading-[0.9] font-semibold tracking-[-0.05em] uppercase lg:text-8xl">
          Page <span className="text-primary">not found</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          The page you are after does not exist or has moved. Everything on
          this site is linked from the{" "}
          <Link href="/" className="underline hover:text-primary-bright">
            home page
          </Link>
          ,{" "}
          <Link href="/services" className="underline hover:text-primary-bright">
            services
          </Link>
          ,{" "}
          <Link href="/about" className="underline hover:text-primary-bright">
            about
          </Link>{" "}
          and{" "}
          <Link href="/contact" className="underline hover:text-primary-bright">
            contact
          </Link>{" "}
          pages, and indexed in{" "}
          <a href="/sitemap.xml" className="underline hover:text-primary-bright">
            /sitemap.xml
          </a>{" "}
          and{" "}
          <a href="/llms.txt" className="underline hover:text-primary-bright">
            /llms.txt
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <QuoteCta />
          <Link href="/" className="btn-ghost">
            Home
          </Link>
          <Link href="/services" className="btn-ghost">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
