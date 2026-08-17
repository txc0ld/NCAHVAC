import { icons as solar } from "@iconify-json/solar";
import { getIconData, iconToSVG } from "@iconify/utils";

interface SolarIconProps {
  name: string;
  className?: string;
  /** Accessible label. Omit for decorative icons (rendered aria-hidden). */
  label?: string;
}

/**
 * Server-rendered Solar icon (design.md §31: Solar via Iconify only).
 * Inlines the SVG at build time: no client JS, no icon fetch, no CLS.
 */
export function SolarIcon({ name, className, label }: SolarIconProps) {
  const data = getIconData(solar, name);
  if (!data) {
    throw new Error(`Unknown Solar icon: ${name}`);
  }
  const svg = iconToSVG(data, { height: "1em", width: "1em" });
  return (
    <svg
      {...svg.attributes}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg.body }}
    />
  );
}
