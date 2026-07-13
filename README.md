# Airco@Business — Website

Premium bilingual (NL/EN) B2B marketing site for **Airco@Business**, the commercial air-conditioning specialist in Voorschoten serving Zuid-Holland. Built as a pilot project by Sterk Systems NL.

**Stack:** Next.js 16 (App Router, SSG) · Tailwind CSS v4 · shadcn/ui · next-intl · react-hook-form + zod · Vercel

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages static)
npm run lint
```

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `GHL_WEBHOOK_URL` | GoHighLevel inbound-webhook URL — quote-form leads are forwarded here as JSON (incl. `sourcePage`, `locale`, `submittedAt`) |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; enables analytics + conversion events (`lead_form_submit`, `phone_click`) |

Without `GHL_WEBHOOK_URL`, form submissions still succeed but are only logged server-side.

## Project structure

```
docs/                  client brief, SEO strategy, site architecture, page templates
src/app/[locale]/      one folder per route — Dutch slugs are canonical (see docs/site-architecture.md)
src/app/api/lead/      lead intake → GoHighLevel webhook
src/content/{nl,en}/   all page copy as typed objects
src/i18n/              next-intl routing, localized pathnames, UI-chrome messages
src/components/        layout / sections / templates / seo / ui
src/lib/               site config (NAP), JSON-LD builders, metadata helpers
```

Read `AGENTS.md` (agent/developer conventions, hard SEO rules) and the `docs/` folder before changing structure, copy, or SEO behaviour.

## Deployment (Vercel)

1. Import the repo in Vercel — no special config needed (`trailingSlash` and i18n proxy are in the app).
2. Set `GHL_WEBHOOK_URL` and `NEXT_PUBLIC_GA_ID` in the project environment.
3. Point `aircoatbusiness.nl` at the project. `sitemap.xml`, `robots.txt`, and `llms.txt` are served by the app.

## Before go-live checklist

- [ ] Replace draft project entries (`src/content/{nl,en}/projects.ts`) with confirmed client projects + photography
- [ ] Add real client reviews (proof sections auto-render them once present in content)
- [ ] Have legal pages (`privacybeleid`, `cookiebeleid`) reviewed
- [ ] Configure the GoHighLevel inbound-webhook workflow and set `GHL_WEBHOOK_URL`
- [ ] Create GA4 property + Search Console, set `NEXT_PUBLIC_GA_ID`
- [ ] Confirm the "first maintenance visit" offer wording with the client
