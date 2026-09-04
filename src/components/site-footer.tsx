import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "./brand-logo";
import arcDark from "../../public/brand/arc-dark.png";
import arcLight from "../../public/brand/arc-light.png";
import { Container } from "./container";
import { serviceGroups } from "@/content/services";
import { nav, site, telHref } from "@/lib/site";
import { SolarIcon } from "@/lib/icons";

const ARC_ALT = `ARCtick licence ${site.arcLicence}. Australian Refrigeration Council authorised refrigerant handler.`;

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 bg-footer">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="NCA HVAC home" className="inline-block">
              <BrandLogo className="h-16" sizes="220px" />
            </Link>
            <p className="mt-5 font-condensed text-sm font-semibold tracking-[0.2em] text-ink uppercase">
              {site.tagline}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {site.supportLine}. Locally owned, family-run and owner-operated.
            </p>
          </div>

          <div>
            <h2 className="font-condensed text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">
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
            <h2 className="font-condensed text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">
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
            <h2 className="font-condensed text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">
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
            <a
              href="https://www.arctick.org"
              target="_blank"
              rel="noopener"
              aria-label={`ARCtick licensed refrigerant handler, licence ${site.arcLicence}`}
              className="mt-6 inline-block"
            >
              <Image
                src={arcDark}
                alt={ARC_ALT}
                sizes="150px"
                className="logo-screen theme-dark-only h-12 w-auto"
              />
              <Image
                src={arcLight}
                alt={ARC_ALT}
                sizes="150px"
                className="logo-multiply theme-light-only h-12 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/5 pt-6 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="flex flex-wrap gap-x-3">
              <span>ABN {site.abn}</span>
              <span>ACN {site.acn}</span>
              <span>ARC {site.arcLicence}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>
              Website created by{" "}
              <a
                href="https://fantomlabs.io"
                target="_blank"
                rel="noopener"
                className="transition-colors duration-300 hover:text-primary-bright"
              >
                Fantomlabs
              </a>
            </p>
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-primary-bright"
            >
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
