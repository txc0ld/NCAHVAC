# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Run everything from `site/` (this directory):

- `npm run dev` — dev server on :3000
- `npm run build` — production build (also the type check; there is no separate test suite)
- `npm run lint` — ESLint
- `npm run test:agents` — agent-readiness endpoint tests (404 behavior, markdown negotiation, llms.txt, JSON-LD). Needs a running server: `npm run build && npx next start -p 3111`, then `BASE_URL=http://localhost:3111 npm run test:agents`. Run this after touching proxy.ts, markdown.ts, llms.txt, schema.tsx or metadata.
- `node scripts/prepare-assets.mjs` — regenerate logo-derived assets (favicons, og.png, white/black-point-clamped logo variants) after swapping files in `public/`
- `node scripts/shoot.mjs` / `shoot-themes.mjs` / `shoot-scroll.mjs` — Playwright screenshot QA against a running dev server (visual verification of scroll animations and both themes)

Dev gotchas: Next's image optimizer cache serves stale images after swapping files in `public/` — `rm -rf .next/cache/images` and restart. A killed `npm start` background task can leave a node child bound to :3000; kill it by port (`Get-NetTCPConnection` on Windows).

## Architecture

Next.js App Router marketing site for NCA HVAC (Perth air conditioning/refrigeration client), deployed via GitHub → Vercel (https://ncahvac.vercel.app, production domain www.ncahvac.com.au). Specs live in `docs/PRD.md` and `docs/design.md`; image licensing/attribution obligations in `ASSETS.md`.

Three layers keep pages thin:

- **`src/content/*.ts`** — all copy (services, FAQs, trust items, about). Edit copy here, not in components.
- **`src/lib/site.ts`** — single source of truth for business identity (name, phone, email, URL, service area). `NEXT_PUBLIC_PHONE` / `NEXT_PUBLIC_SITE_URL` override at build time. Everything (metadata, JSON-LD, footer, CTAs) reads from here.
- **`src/lib/schema.tsx`** — all JSON-LD (HVACBusiness/LocalBusiness/Organization, WebSite, Service, FAQPage, BreadcrumbList) rendered via the `JsonLd` component. SEO changes flow through this file plus per-page `metadata` exports; `sitemap.ts`/`robots.ts` live in `src/app`.

Agent-readiness layer (keep in sync when adding pages):

- **`src/proxy.ts`** (Next 16's renamed middleware) rewrites requests with `Accept: text/markdown` to `/md/*` and appends `Vary: Accept` to HTML responses. Platform caveat: Vercel strips custom `Vary` values from static prerendered pages (verified via the `X-Md-Alternate` probe in next.config.ts) — the markdown responses carry it, which satisfies acceptmarkdown.com, and Vercel runs the proxy before its cache so the variants can't poison each other.
- **`src/lib/markdown.ts`** renders each page as markdown from the `src/content` modules; served by `src/app/md/[[...slug]]/route.ts` (markdown 404 with recovery links for unknown paths). A new page needs an entry in the `pages` map here and in `sitemap.ts`.
- **`src/app/llms.txt/route.ts`** — agent index with when-to-use guidance.
- Page-level `openGraph` objects fully replace the root layout's, so each page must declare its own `type: "website"`.

Other conventions:

- **Icons**: Solar icons inlined server-side via `src/lib/icons.tsx` (`SolarIcon` with iconify names). No client icon library.
- **Motion**: pure CSS scroll-driven animations (`.reveal`, `.parallax-drift` in `globals.css`, wrapped by `Reveal`/`ParallaxY` components). No JS animation library — keep it that way.
- **Theming**: dual dark/light via CSS variables in `globals.css` (`:root` is dark default, `.light` class on `<html>`). ALL colours flow through semantic tokens — use `ink`/`muted`/`surface` tokens, never `text-white`/`border-white` literals except on permanently-blue surfaces (trust bar, primary buttons/chips). Theme persists to localStorage key `nca-theme`, applied pre-paint by an inline script in `layout.tsx`.
- **Quote form**: `/api/quote` uses Resend + Zod validation (`src/lib/email`, `src/lib/validation`, `src/lib/security`).

## Deliberate fail-closed gates — do not "fix"

- `/api/quote` returns 500 in production until `RESEND_API_KEY` is set. Intentional launch blocker, not a bug.
- Turnstile keys, final licence/insurance wording, and approved client photography are also still pending client-side. CC BY / CC BY-SA stock images require attribution per `ASSETS.md` until replaced.
