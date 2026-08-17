import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-linked vertical drift for layered depth (approved motion:
 * translation, design.md §26). Pure CSS scroll-driven animation; static on
 * unsupported browsers and under prefers-reduced-motion. Give the inner
 * image some overscan (e.g. scale-[1.12]) so the drift never exposes edges.
 */
export function ParallaxY({
  children,
  className,
  from = -5,
  to = 5,
}: {
  children: React.ReactNode;
  className?: string;
  /** percent of own height */
  from?: number;
  to?: number;
}) {
  return (
    <div
      className={cn("parallax-drift", className)}
      style={
        {
          "--drift-from": `${from}%`,
          "--drift-to": `${to}%`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
