import Image from "next/image";
import Link from "next/link";
import logoDark from "../../public/brand/logo-dark.png";
import { Container } from "./container";
import { serviceGroups } from "@/content/services";
import { nav, site, telHref } from "@/lib/site";
import { SolarIcon } from "@/lib/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-footer">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="NCA HVAC home" className="inline-block">
              <Image
                src={logoDark}
                alt="NCA HVAC. Air conditioning and refrigeration services."
                className="logo-screen h-16 w-auto"
                sizes="220px"
              />
            </Link>
            <p className="mt-5 font-condensed text-sm font-semibold tracking-[0.2em] text-white uppercase">
              {site.tagline}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {site.supportLine}. Locally owned, family-run and owner-operated.
            </p>
          </div>

          <div>
            <h2 className="font-condensed text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-primary-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-condensed text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceGroups.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-muted transition-colors duration-300 hover:text-primary-bright"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services#commercial"
                  className="text-sm text-muted transition-colors duration-300 hover:text-primary-bright"
                >
                  Refrigeration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-condensed text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {site.phone ? (
                <li>
                  <a
                    href={telHref(site.phone)}
                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-primary-bright"
                  >
                    <SolarIcon name="phone-linear" className="text-base" />
                    {site.phone}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-primary-bright"
                >
                  <SolarIcon name="letter-linear" className="text-base" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <SolarIcon name="map-point-linear" className="text-base" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            {/* Add ARCtick licence number here once issued. */}
            <span className="ml-3">ABN 80 700 964 405</span>
          </p>
          <Link
            href="/privacy"
            className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-primary-bright"
          >
            Privacy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
