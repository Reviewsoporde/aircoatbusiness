<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices. Notably: `middleware.ts` is now `proxy.ts`.
<!-- END:nextjs-agent-rules -->

# Airco@Business — Premium B2B Website

Bilingual (NL/EN) marketing site for **Airco@Business**, a B2B air-conditioning specialist in Voorschoten serving Zuid-Holland. Pilot project by Sterk Systems NL. The site's single job: **generate commercial quote requests** from business decision-makers (offices, commercial buildings, retail, showrooms).

## Client Context

- Strictly B2B. The consumer brand **Airco@home** (https://airco-athome.nl/) gets only a small, visually secondary "Residentieel?" redirect — never compete with the commercial CTA.
- NAP (single source of truth in `src/lib/site-config.ts` — never hardcode elsewhere): Dobbeweg 11 G, 2254 AG Voorschoten · +31 (0)71 240 05 97 · info@aircoatbusiness.nl · KvK 50312006 · BTW NL001978666B18
- USPs: personal advice/maatwerk, STEK-certified installers, premium A-brands (Daikin, Mitsubishi Electric, LG, Toshiba), maintenance contracts, neat & considerate technicians.
- Brand blue (from logo): `#0093CB` · Production domain: https://aircoatbusiness.nl

## Reference Docs (read before touching structure, copy, or SEO)

- [docs/ProjectInformation.md](docs/ProjectInformation.md) — client design brief
- [docs/seo-strategy.md](docs/seo-strategy.md) — keyword→page mapping, schema checklist, SEO phasing
- [docs/site-architecture.md](docs/site-architecture.md) — **canonical URL list**, navigation, footer, internal-linking + anchor-text rules
- [docs/page-templates.md](docs/page-templates.md) — homepage 17-section flow, universal 7-section service template, per-page-type flows, lead-form spec

## Tech Stack

Next.js 16 (App Router, TypeScript, static generation) · Tailwind CSS v4 · shadcn/ui (restyled, unified `radix-ui` package) · next-intl (locale routing + localized pathnames, `src/proxy.ts`) · react-hook-form + zod · deployed on Vercel.

```bash
npm run dev      # dev server
npm run build    # production build — must pass with zero type errors
npm run lint
```

## Architecture Conventions

- `src/app/[locale]/…` — one folder per route; NL slugs are canonical (see below)
- `src/content/{nl,en}/` — typed per-page copy objects (long-form marketing copy lives here, NOT in components or next-intl messages)
- `src/i18n/` — next-intl routing + localized `pathnames` map + `messages/{nl,en}.json` (UI chrome only: nav labels, form labels, buttons)
- `src/components/sections/` — reusable page sections · `src/components/ui/` — shadcn primitives · `src/lib/schema.ts` — JSON-LD builders · `src/lib/site-config.ts` — NAP, socials, URLs
- Pages are thin: they pick a template, pass a typed content object, and declare metadata.

## Hard SEO Rules (non-negotiable)

1. **Dutch URLs verbatim** from [docs/site-architecture.md](docs/site-architecture.md), with **trailing slashes** (`trailingSlash: true`). Never invent or rename slugs. English lives under `/en/` with translated slugs via the next-intl `pathnames` map.
2. Exactly **one H1 per page**; logical H2 hierarchy per the page templates.
3. Every page has unique `generateMetadata` (title + description targeting its mapped keyword), canonical, and hreflang (nl / en / x-default).
4. JSON-LD: Organization, LocalBusiness, WebSite, ContactPoint site-wide; Service + BreadcrumbList on service pages; **FAQPage only when the FAQ is visibly rendered on that page**.
5. Anchor texts follow the preferred list in site-architecture.md §5. Never "Klik hier" / "Lees meer" / "Meer informatie".
6. Internal links follow the cluster linking tables — 3–6 related links per page, never link every service page.
7. Location pages and supporting SEO pages never enter the main navigation.
8. Service pages: max 7 content sections. Repair page places contact CTA in the hero.
9. CTA labels per page type (see page-templates.md §1): Vraag een offerte aan / Plan een adviesgesprek / Vraag systeemadvies aan / Onderhoud aanvragen / Vraag contractadvies aan / Reparatie aanvragen.

## Design Rules

- **Primary color: black.** Premium, luxurious, high-end B2B — deliberately distinct from the warmer consumer brand. No consumer-style vibe. Brand blue `#0093CB` as accent.
- Strong contrast; everything must stay clearly readable (WCAG AA minimum).
- Use the real logo (`public/images/logo.png` — blue+white, designed for dark backgrounds), commercial/business imagery only.
- Fast + mobile-first: business visitors browse on the go. Use `next/image`, keep JS lean, target Lighthouse mobile ≥90 / SEO 100.
- Never make technical guarantees before a site assessment in any copy.
- Copywriting tone: professional, advice-driven, trust-building; Dutch uses **u** (formal), never "je/jij".

## Lead Form → GoHighLevel

- Fields per [docs/page-templates.md](docs/page-templates.md) §5; service + property type preselected per page; honeypot anti-spam.
- `POST /api/lead` re-validates with zod, then forwards JSON to `process.env.GHL_WEBHOOK_URL` (GoHighLevel inbound-webhook workflow). Payload must include `sourcePage`, `locale`, `submittedAt`.
- Env vars documented in `.env.example`: `GHL_WEBHOOK_URL`, `NEXT_PUBLIC_GA_ID`. Never commit real values.
- GA4 conversion events: `lead_form_submit`, `phone_click`.

## Deployment

Vercel. Static output; only `/api/lead` is dynamic. Set `GHL_WEBHOOK_URL` + `NEXT_PUBLIC_GA_ID` in Vercel project env. `sitemap.xml`, `robots.txt`, and `llms.txt` are generated/served by the app.

## Out of Scope (don't build unless asked)

Location pages (`/zakelijke-airco-<city>/`), blog/AEO content, GBP work, GA4/GSC account setup. See seo-strategy.md §7 phasing.
