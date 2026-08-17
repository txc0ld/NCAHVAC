import Image from "next/image";
import Link from "next/link";
import logoDark from "../../public/brand/logo-dark.png";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { QuoteCta, CallCta } from "./cta";
import { SolarIcon } from "@/lib/icons";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-20 border-b border-white/5 bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between gap-6 px-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="NCA HVAC home">
          <Image
            src={logoDark}
            alt="NCA HVAC. Air conditioning and refrigeration services."
            priority
            className="logo-screen h-14 w-auto"
            sizes="180px"
          />
        </Link>

        <NavLinks className="hidden lg:block" />

        <div className="flex items-center gap-3">
          <CallCta className="hidden xl:inline-flex" />
          <QuoteCta className="hidden lg:inline-flex" />
          <MobileMenu
            menuIcon={<SolarIcon name="hamburger-menu-linear" />}
            closeIcon={<SolarIcon name="close-circle-linear" />}
            phoneIcon={<SolarIcon name="phone-linear" className="text-base" />}
            letterIcon={<SolarIcon name="letter-linear" className="text-base" />}
          />
        </div>
      </div>
    </header>
  );
}
