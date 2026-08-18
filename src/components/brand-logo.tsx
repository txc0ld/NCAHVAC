import Image from "next/image";
import logoDark from "../../public/brand/logo-dark.png";
import logoLight from "../../public/brand/logo-light.png";
import { cn } from "@/lib/cn";

const ALT = "NCA HVAC. Air conditioning and refrigeration services.";

/**
 * Theme-aware brand logo. The dark-field variant screens into dark surfaces,
 * the light-field variant multiplies into light surfaces; the active theme
 * decides which renders (CSS, no hydration).
 */
export function BrandLogo({
  className,
  priority = false,
  sizes = "220px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <>
      <Image
        src={logoDark}
        alt={ALT}
        priority={priority}
        sizes={sizes}
        className={cn("logo-screen theme-dark-only w-auto", className)}
      />
      <Image
        src={logoLight}
        alt={ALT}
        priority={priority}
        sizes={sizes}
        className={cn("logo-multiply theme-light-only w-auto", className)}
      />
    </>
  );
}
