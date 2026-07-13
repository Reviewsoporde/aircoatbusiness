# Airco@Business — SEO Strategy

> Distilled from the client document *"Airco@business - SEO Strategy.pdf"* (SEO Full Strategy, Audit Optimization & Timeline Phasing Proposal).
> Companion documents: [site-architecture.md](site-architecture.md) (URLs, navigation, internal linking) and [page-templates.md](page-templates.md) (section-by-section page guides).

## 1. Overview

Goal: build a strong **commercial SEO foundation** for business air-conditioning services, focused on **high-intent traffic from Google Search and Google Maps**.

Positioning: Airco@Business is a **dedicated B2B airconditioning specialist** for offices, business premises, commercial properties, and long-term service/maintenance. It must stay separate from consumer-focused positioning (Airco@home) and focus on **commercial quote requests only**.

- **Primary location:** Voorschoten
- **Primary region:** Zuid-Holland
- **Secondary expansion:** Leiden, Den Haag, Rotterdam, Hoofddorp, Utrecht, Delft, Wassenaar, Oegstgeest, Katwijk, Noordwijk, Zoetermeer, Alphen aan den Rijn

## 2. Audit Findings (current site)

### 2.1 On-page SEO
- Meta description missing; title not optimized for commercial/B2B intent
- Page is indexable; canonical self-referencing; robots `index, follow`; `X-Robots-Tag` missing
- Weak heading structure; no clear H1 observed
- Relies on broad sections instead of dedicated commercial service pages
- Keyword targeting too limited for B2B search intent
- **Needed:** cleaner service-page structure built around commercial airconditioning searches

### 2.2 Technical SEO
- robots.txt exists; XML sitemap exists (WordPress-generated)
- `llms.txt` returns 404 → **create one**
- Rich Results Test shows **no structured data detected** → implement schema (see §5)

### 2.3 SEO performance
- Authority Score very low; organic traffic ≈ 0; minimal keyword footprint; AI visibility 0; weak backlink profile
- **Main issue:** not enough dedicated commercial service pages to compete for high-intent B2B airconditioning keywords

### 2.4 Local SEO & Google Maps
- Focus foundation on Voorschoten + Zuid-Holland first
- Service-area copy may mention: Hoofddorp, Rotterdam, Utrecht, Leiden, Den Haag, Delft, Wassenaar, Oegstgeest, Katwijk, Noordwijk, Zoetermeer, Alphen aan den Rijn (where relevant)
- Review GBP (Google Business Profile): category alignment, commercial business description, credible business photos, services matching the site's service structure
- Local landing pages only **after** core service pages are stable

## 3. Keyword → Page Mapping

> The structure below reflects the **client-approved final site structure** (see site-architecture.md). The PDF's earlier 4-cluster proposal was superseded; keyword targets carry over to the final pages.

| Page | URL (NL) | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|---|
| Homepage | `/` | airco voor bedrijven Zuid-Holland | airco zakelijk Voorschoten, zakelijke airco installatie, airco bedrijfspand, airco kantoor | Commercial / Local |
| Business Air Conditioning (parent) | `/zakelijke-airconditioning/` | zakelijke airconditioning | airco voor bedrijven, airco zakelijk | Commercial |
| Office Air Conditioning | `/airco-kantoor/` | airco kantoor | airco installeren kantoor, kantoor airconditioning | Transactional |
| Commercial Building AC | `/airco-bedrijfspand/` | airco bedrijfspand | airco bedrijfsruimte, airco commercieel pand | Transactional |
| Retail Air Conditioning | `/airco-winkel/` | airco winkel | airconditioning winkel, airco retail | Commercial |
| Showroom Air Conditioning | `/airco-showroom/` | airco showroom | airconditioning showroom | Commercial |
| Installation (parent) | `/installatie/` | zakelijke airco installatie (overview) | airco installatie bedrijf | Commercial |
| Commercial AC Installation | `/zakelijke-airco-installatie/` | zakelijke airco installatie | airco installatie bedrijf, airco laten installeren zakelijk | Transactional |
| Cassette AC | `/cassette-airco-bedrijf/` | cassette airco bedrijf | cassette airco kantoor, plafond airco bedrijf | Product / Commercial |
| Ducted AC | `/kanaal-airco-bedrijf/` | kanaal airco bedrijf | kanaalunit airco bedrijf, kanaal airco kantoor | Product / Commercial |
| Wall-mounted AC | `/wandmodel-airco-bedrijf/` | wandmodel airco bedrijf | wand airco kantoor | Product / Commercial |
| Maintenance (parent) | `/onderhoud/` | airco onderhoud zakelijk (overview) | zakelijke airco service | Commercial |
| Maintenance | `/airco-onderhoud-zakelijk/` | airco onderhoud zakelijk | airco onderhoud bedrijf, onderhoud airco kantoor | Transactional |
| Repairs | `/airco-reparatie-zakelijk/` | airco reparatie zakelijk | airco storing bedrijf, airco reparatie kantoor | Urgent / Service |
| Maintenance Contracts | `/airco-onderhoudscontract-zakelijk/` | airco onderhoudscontract zakelijk | zakelijk onderhoudscontract airco | Transactional |

Notes:
- *Airco Voor Bedrijven*, *Airco Zakelijk*, *Klimaatbeheersing Kantoor*, and *Airco Werkplek* are **no longer separate pages** — their keywords are absorbed by the homepage, `/zakelijke-airconditioning/`, and `/airco-kantoor/`.
- Wandmodel airco earned a standalone page in the final structure.

## 4. Content Direction

- Advice-driven, commercial, educational, trust-building
- Focused on quote requests
- Answer-based FAQ content to support **AEO/GEO** (answer-engine / generative-engine optimization)
- Topics for supporting content (SEO Phase 3): office climate, workplace comfort, productivity, maintenance, system selection

## 5. Schema / Structured Data Checklist

Implement across the site:

- [ ] `Organization` — site-wide
- [ ] `LocalBusiness` — site-wide; supports Voorschoten + Zuid-Holland relevance (NAP: Dobbeweg 11 G, 2254 AG Voorschoten)
- [ ] `WebSite` — site-wide
- [ ] `ContactPoint` — site-wide
- [ ] `Service` — on **all** commercial service pages
- [ ] `BreadcrumbList` — for cleaner crawl structure
- [ ] `FAQPage` — **only** where FAQs are visibly rendered on the page

## 6. Technical SEO Checklist

- [ ] Clean XML sitemap (all indexable pages, both locales)
- [ ] robots.txt
- [ ] `llms.txt`
- [ ] Self-referencing canonicals; hreflang for nl/en
- [ ] One clear H1 per page; logical H2 hierarchy
- [ ] Unique meta title + description per page (commercial/B2B intent)
- [ ] GA4 + Google Search Console setup
- [ ] Conversion tracking: form submissions, phone clicks, consultation requests
- [ ] NAP consistency across website and GBP

## 7. Timeline & Phasing

### Phase 1 — SEO Fundamentals: Technical + Strategy
Technical SEO setup, keyword analysis, service-page cluster validation, homepage SEO strategy, keyword mapping, heading/metadata/schema planning, sitemap + robots review, llms.txt creation, GA4 + GSC confirmation, conversion-tracking review. *Target: Voorschoten + Zuid-Holland.*

### Phase 2 — On-Page + Local SEO Implementation
Optimize homepage metadata/headings; build and optimize the service clusters; commercial B2B copy on all core pages; internal linking between related service pages; visible FAQs (AEO/GEO); schema markup; GBP services optimization; local entity signals; NAP consistency; local citations/directories. *Target: Voorschoten, Zuid-Holland + surrounding commercial service areas.*

### Phase 3 — Content Creation: AEO, GEO, Local SEO
Publish commercial support content per keyword clusters; answer-based FAQ content; content on office climate, workplace comfort, productivity, maintenance, system selection; strengthen Zuid-Holland local content; supporting content for: airco voor bedrijven, airco kantoor, zakelijke airco installatie, airco onderhoud zakelijk, cassette airco bedrijf, kanaal airco bedrijf; internal links from content → service pages.

### Phase 4 — Scaling & Performance Tracking
Track rankings, organic traffic, Maps visibility, form submissions, phone clicks, consultation requests; review GBP performance; improve metadata from GSC data (pages with impressions but low clicks); expand into **city-focused pages only after core pages are stable**. Tracking: GA4 + GSC connected, conversion events, keyword monitoring, monthly reports.

## 8. Expected Results

| Horizon | Expectations |
|---|---|
| 0–3 months | Improved indexing; cleaner commercial structure; better keyword relevance; initial movement on low/mid-competition B2B terms; better branded + local visibility; stronger technical foundation |
| 3–6 months | Consistent rankings for commercial service keywords; more impressions; Voorschoten/Zuid-Holland visibility; more quote-request opportunities; better Maps relevance; stronger authority |
| 6+ months | Expansion into secondary cities; local landing pages; stronger topical authority; more qualified inbound leads; less reliance on paid ads |

## 9. Reporting KPIs

Keyword rankings · organic traffic growth · GSC query data · indexed pages · service-page performance · Google Maps visibility · GBP performance · form submissions · phone clicks · quote-request trends · technical issues · recommended next actions.

Reporting stays focused on business outcomes: **visibility, qualified traffic, quote requests, local commercial reach**.

## 10. Location Pages (deferred — SEO Phase 4)

Starting set once core pages are stable:

| Page | URL |
|---|---|
| Commercial AC Voorschoten | `/zakelijke-airco-voorschoten/` |
| Commercial AC Leiden | `/zakelijke-airco-leiden/` |
| Commercial AC Den Haag | `/zakelijke-airco-den-haag/` |
| Commercial AC Rotterdam | `/zakelijke-airco-rotterdam/` |
| Commercial AC Hoofddorp | `/zakelijke-airco-hoofddorp/` |

Rules: linked from Service Area page, footer, relevant service pages, project pages, homepage local section — **never in the main navigation**. Each must contain unique local information (no city-name swaps).

## 11. Final Recommendation

Use the three-cluster commercial architecture (Business Air Conditioning / Installation / Maintenance) with the homepage as the main commercial hub linking clearly to all core service pages. The hierarchy is:

```
Homepage → Main Service Cluster → Specific Property/System/Maintenance Page → Project Proof → Contact
```

This keeps the user journey clear, reduces overlapping search intent, and lowers unnecessary content and development work.
