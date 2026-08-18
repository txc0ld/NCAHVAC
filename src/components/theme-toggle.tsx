"use client";

/**
 * Dark/light switch. Dark is the brand default; the choice persists in
 * localStorage and is applied pre-hydration by the inline script in layout.
 * The visible icon is driven purely by CSS theme classes.
 */
export function ThemeToggle({
  sunIcon,
  moonIcon,
}: {
  sunIcon: React.ReactNode;
  moonIcon: React.ReactNode;
}) {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("nca-theme", next ? "light" : "dark");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="flex size-11 items-center justify-center rounded-full border border-ink/10 text-lg text-ink transition-colors duration-300 hover:border-primary hover:text-primary-bright"
    >
      <span className="theme-dark-only">{sunIcon}</span>
      <span className="theme-light-only">{moonIcon}</span>
    </button>
  );
}
