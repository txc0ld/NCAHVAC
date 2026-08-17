import Link from "next/link";
import Image from "next/image";
import logoDark from "../../public/brand/logo-dark.png";
import { QuoteCta } from "@/components/cta";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start px-5">
        <Image
          src={logoDark}
          alt="NCA HVAC"
          className="logo-screen h-16 w-auto"
          sizes="220px"
        />
        <p className="mt-10 flex items-center gap-4 font-condensed text-xs font-semibold tracking-[0.2em] uppercase">
          <span aria-hidden="true" className="h-px w-8 bg-secondary" />
          404
        </p>
        <h1 className="mt-4 font-condensed text-6xl leading-[0.9] font-semibold tracking-[-0.05em] uppercase lg:text-8xl">
          Page <span className="text-primary">not found</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          The page you are after does not exist or has moved.
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
