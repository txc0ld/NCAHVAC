import { cn } from "@/lib/cn";

/**
 * Scroll-entrance reveal (translation + fade only, design.md §26), driven by
 * CSS scroll-driven animations: no client JS, content visible by default,
 * static fallback on browsers without animation-timeline and under
 * prefers-reduced-motion.
 *
 * `delay` is accepted for API compatibility; scroll-linked timing makes
 * per-element delays unnecessary.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
