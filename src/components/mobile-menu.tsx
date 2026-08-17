"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site, telHref } from "@/lib/site";
import { cn } from "@/lib/cn";

export function MobileMenu({
  menuIcon,
  closeIcon,
  phoneIcon,
  letterIcon,
}: {
  menuIcon: React.ReactNode;
  closeIcon: React.ReactNode;
  phoneIcon: React.ReactNode;
  letterIcon: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center text-2xl text-white transition-colors duration-300 hover:text-primary"
      >
        {open ? closeIcon : menuIcon}
      </button>

      {/* Positioned absolute to the fixed header (its backdrop-filter makes it
          the containing block, so `fixed` here would collapse the panel). */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-5rem)] flex-col justify-between overflow-y-auto border-t border-white/5 bg-canvas/98 px-5 py-10 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col divide-y divide-white/5">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-5"
                >
                  <span className="font-condensed text-xs font-semibold text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-condensed text-4xl font-semibold tracking-[-0.02em] text-white uppercase transition-colors duration-300 group-hover:text-primary">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 pt-10">
          <Link
            href="/contact#quote"
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            Request a Free Quote
          </Link>
          {site.phone ? (
            <a href={telHref(site.phone)} className="btn-ghost w-full">
              {phoneIcon}
              Call Now
            </a>
          ) : (
            <a href={`mailto:${site.email}`} className="btn-ghost w-full">
              {letterIcon}
              Email Us
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
