/**
 * Analytics event taxonomy (PRD §23). Pushes to a dataLayer/plausible if the
 * host page has one configured; otherwise a silent no-op. Never receives
 * sensitive form contents.
 */
type EventProps = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (event: string, opts?: { props?: EventProps }) => void;
  }
}

export function track(event: string, props?: EventProps) {
  if (typeof window === "undefined") return;
  window.plausible?.(event, { props });
  window.dataLayer?.push({ event, ...props });
}
