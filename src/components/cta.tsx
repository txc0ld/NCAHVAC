import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { SolarIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";

export function QuoteCta({
  className,
  label = "Request a Free Quote",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link href="/contact#quote" className={cn("btn-primary", className)}>
      {label}
      <SolarIcon name="arrow-right-linear" className="text-base" />
    </Link>
  );
}

/**
 * Call CTA. The business phone is a confirmed-at-launch value (PRD §30);
 * until NEXT_PUBLIC_PHONE is set this renders an email action instead so
 * no placeholder number can ship.
 */
export function CallCta({ className }: { className?: string }) {
  if (site.phone) {
    return (
      <a href={telHref(site.phone)} className={cn("btn-ghost", className)}>
        <SolarIcon name="phone-linear" className="text-base" />
        Call Now
      </a>
    );
  }
  return (
    <a href={`mailto:${site.email}`} className={cn("btn-ghost", className)}>
      <SolarIcon name="letter-linear" className="text-base" />
      Email Us
    </a>
  );
}
