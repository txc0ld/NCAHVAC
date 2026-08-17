# NCA HVAC — Marketing & Lead-Generation Website

Dark industrial marketing site for NCA HVAC (Perth, WA): residential and
commercial air conditioning, refrigeration, repair and preventative
maintenance. Built per `docs/PRD.md` and `docs/design.md`.

## Stack

- Next.js 16 (App Router, TypeScript, statically rendered)
- Tailwind CSS v4 (design tokens in `src/app/globals.css` `@theme`)
- Barlow / Barlow Condensed via `next/font`
- Solar icons (Iconify data, inlined server-side — zero client JS)
- Motion: CSS scroll-driven animations only (no animation library)
- Quote API: Zod validation, Cloudflare Turnstile, rate limiting,
  magic-byte photo validation, Resend email delivery

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

Regenerate brand-derived assets (favicon, OG image, trimmed logos):

```bash
node scripts/prepare-assets.mjs
```

QA screenshots (requires Edge; server must be running):

```bash
node scripts/shoot.mjs && node scripts/shoot-scroll.mjs
```

## Environment variables

| Variable | Purpose | Behaviour when unset |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin | defaults to `https://www.ncahvac.com.au` |
| `NEXT_PUBLIC_PHONE` | Business phone | Call CTAs fall back to email (no placeholder number can ship) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile widget | widget not rendered |
| `TURNSTILE_SECRET_KEY` | Turnstile verification | verification skipped (dev mode) |
| `RESEND_API_KEY` | Quote email delivery | submissions logged without personal data |
| `QUOTE_TO_EMAIL` | Recipient | `admin@ncahvac.com.au` |
| `QUOTE_FROM_EMAIL` | Sender | `NCA HVAC Website <onboarding@resend.dev>` |

## Pre-launch blockers (PRD §30)

- Business phone number (`NEXT_PUBLIC_PHONE`)
- Resend domain + API key, delivery test to `admin@ncahvac.com.au`
- Turnstile keys
- Approved client photography — current images are documented placeholders,
  see `ASSETS.md` (one CC BY image requires attribution or replacement)
- Final licence / insurance / ABN wording
- Client content approval

## Notes

- Rate limiting is in-memory (per serverless instance). Swap for a durable
  store (e.g. Upstash) if spam volume warrants.
- Analytics: `src/lib/analytics.ts` emits the PRD §23 event taxonomy to
  `window.plausible` / `dataLayer` when present; wire up a provider at launch.
