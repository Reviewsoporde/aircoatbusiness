# Graph Report - .  (2026-07-16)

## Corpus Check
- 171 files · ~252,623 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 546 nodes · 1545 edges · 25 communities (13 shown, 12 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 87 edges (avg confidence: 0.81)
- Token cost: 0 input · 730,167 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Rendering & SEO Pipeline|Page Rendering & SEO Pipeline]]
- [[_COMMUNITY_Navigation & UI Primitives|Navigation & UI Primitives]]
- [[_COMMUNITY_Project Rules & SEO Strategy Docs|Project Rules & SEO Strategy Docs]]
- [[_COMMUNITY_Content Type System|Content Type System]]
- [[_COMMUNITY_Lead Capture & Content Types|Lead Capture & Content Types]]
- [[_COMMUNITY_Dutch Content Bundle|Dutch Content Bundle]]
- [[_COMMUNITY_Consent & Footer|Consent & Footer]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Business Service Pages|Business Service Pages]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_shadcn UI Config|shadcn UI Config]]
- [[_COMMUNITY_Service Page Factory Pattern|Service Page Factory Pattern]]
- [[_COMMUNITY_Coverage & Trust Sections|Coverage & Trust Sections]]
- [[_COMMUNITY_Overflow QA Script|Overflow QA Script]]
- [[_COMMUNITY_Metadata Bedrijfspand Page|Metadata: Bedrijfspand Page]]
- [[_COMMUNITY_Metadata Kantoor Page|Metadata: Kantoor Page]]
- [[_COMMUNITY_Metadata Onderhoud Zakelijk Page|Metadata: Onderhoud Zakelijk Page]]
- [[_COMMUNITY_Metadata Onderhoudscontract Page|Metadata: Onderhoudscontract Page]]
- [[_COMMUNITY_Metadata Reparatie Zakelijk Page|Metadata: Reparatie Zakelijk Page]]
- [[_COMMUNITY_Metadata Showroom Page|Metadata: Showroom Page]]
- [[_COMMUNITY_Metadata Winkel Page|Metadata: Winkel Page]]
- [[_COMMUNITY_Metadata Cassette Airco Page|Metadata: Cassette Airco Page]]
- [[_COMMUNITY_Metadata Installatie Page|Metadata: Installatie Page]]
- [[_COMMUNITY_Metadata Kanaal Airco Page|Metadata: Kanaal Airco Page]]
- [[_COMMUNITY_English UI Messages|English UI Messages]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 52 edges
2. `getBundle()` - 32 edges
3. `AGENTS.md (project conventions & hard rules)` - 30 edges
4. `routing` - 27 edges
5. `pageMetadata()` - 25 edges
6. `NotFound()` - 23 edges
7. `absoluteUrl()` - 21 edges
8. `Reveal()` - 20 edges
9. `siteConfig` - 20 edges
10. `breadcrumbSchema()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `robots()` --semantically_similar_to--> `public/llms.txt (LLM-facing site summary)`  [INFERRED] [semantically similar]
  src/app/robots.ts → public/llms.txt
- `POST()` --references--> `docs/page-templates.md (page structure guide)`  [INFERRED]
  src/app/api/lead/route.ts → docs/page-templates.md
- `sitemap()` --rationale_for--> `Dutch URLs verbatim with trailing slash (trailingSlash: true)`  [INFERRED]
  src/app/sitemap.ts → AGENTS.md
- `sitemap()` --shares_data_with--> `docs/site-architecture.md (canonical URLs, nav, linking)`  [INFERRED]
  src/app/sitemap.ts → docs/site-architecture.md
- `check-copy-style.mjs em/en-dash QA script` --rationale_for--> `Never use em dash or en dash in public copy`  [EXTRACTED]
  scripts/check-copy-style.mjs → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Client SEO strategy PDF distilled into three companion docs** — airco_business_seo_strategy_pdf, docs_seo_strategy_doc, docs_site_architecture_doc, docs_page_templates_doc [EXTRACTED 1.00]
- **Hard SEO rules defined in AGENTS.md and enforced/implemented across docs and route code** — agents_doc, docs_site_architecture_doc, docs_page_templates_doc, docs_seo_strategy_doc, app_sitemap_sitemap, src_proxy_middleware [INFERRED 0.85]
- **Lead capture pipeline: spec, documentation, and implementation** — lead_route_post, concept_lead_form_ghl_flow, agents_doc, readme_doc, docs_page_templates_doc [EXTRACTED 0.90]
- **Service pages built via createServicePage factory** — service_page_createservicepage, airco_bedrijfspand_page_page, airco_kantoor_page_page, airco_onderhoud_zakelijk_page_page, airco_onderhoudscontract_zakelijk_page_page, airco_reparatie_zakelijk_page_page, airco_showroom_page_page, airco_winkel_page_page, cassette_airco_bedrijf_page_page, installatie_page_page, kanaal_airco_bedrijf_page_page [INFERRED 0.90]
- **Contact page composed from PageHero, Section, LeadForm, ContactAside, FaqSection** — contact_page_contactpage, sections_page_hero_pagehero, sections_section_shell_section, sections_lead_form_leadform, sections_contact_aside_contactaside, sections_faq_section_faqsection [EXTRACTED 1.00]
- **Locale layout shell wraps every page with Header, Footer, SiteSchema, AnalyticsConsent** — locale_layout_localelayout, layout_header_header, layout_footer_footer, seo_site_schema_siteschema, components_analytics_consent_analyticsconsent [EXTRACTED 1.00]
- **Service pages built via createServicePage factory** — onderhoud_page, wandmodel_airco_bedrijf_page, zakelijke_airco_installatie_page, zakelijke_airconditioning_page [INFERRED 0.90]
- **Locale-guard boilerplate (hasLocale/notFound/setRequestLocale)** — locale_page, over_ons_page, merken_en_systemen_page, projecten_page, veelgestelde_vragen_page, werkgebied_page, werkwijze_page, privacybeleid_page [INFERRED 0.85]
- **Home reviews content reused via GoogleReviews on over-ons** — locale_page, over_ons_page, sections_google_reviews_googlereviews [EXTRACTED 1.00]
- **Analytics consent capture, gating, and reset flow** — components_analytics_consent, layout_consent_settings_button, layout_phone_link, lib_analytics_consent [INFERRED 0.90]
- **JSON-LD structured data rendering pattern** — seo_site_schema, templates_home_template, templates_service_page_template, seo_json_ld, lib_schema [INFERRED 0.85]
- **Header imperative DOM-effect layer bridging CSS-only interactions** — layout_header, layout_header_scroll_fx, layout_header_nav_fx, layout_desktop_nav [INFERRED 0.85]
- **Scroll-reveal animation pattern consumers** — sections_reveal_reveal, sections_card_grid_cardgrid, sections_checklist_checklist, sections_process_steps_processsteps, sections_proof_band_proofband, sections_related_links_relatedlinks, sections_index_list_indexlist, sections_google_reviews_googlereviews, sections_section_shell_section [INFERRED 0.85]
- **Dark ink hero components with rise animation and CTA** — sections_home_hero_homehero, sections_page_hero_pagehero, sections_cta_link_ctalink, sections_google_reviews_googlereviewbadge [INFERRED 0.85]
- **Lead capture and conversion flow** — sections_lead_form_leadform, sections_contact_aside_contactaside, sections_cta_link_ctalink [INFERRED 0.75]
- **Maintenance service pillar: parent + preventive/repair/contract children** — en_maintenance_onderhoud, en_maintenance_aircoonderhoud, en_maintenance_aircoreparatie, en_maintenance_onderhoudscontract [EXTRACTED 1.00]
- **Installation pillar: parent + cassette/ducted/wall-mounted system children** — en_installation_installatie, en_installation_zakelijkeinstallatie, en_installation_cassetteairco, en_installation_kanaalairco, en_installation_wandmodelairco [EXTRACTED 1.00]
- **Business air conditioning pillar: parent + office/commercial-building/retail/showroom children** — en_business_ac_businessac, en_business_ac_aircokantoor, en_business_ac_aircobedrijfspand, en_business_ac_aircowinkel, en_business_ac_aircoshowroom [EXTRACTED 1.00]
- **Standard process steps reused across business/installation/maintenance overview pages** — nl_shared_standardprocess, nl_business_ac_businessac, nl_installation_installatie, nl_maintenance_onderhoud [INFERRED 0.85]
- **FAQ topics duplicated across homepage, business-ac service page and dedicated FAQ page** — nl_home_home, nl_business_ac_businessac, nl_pages_faqpage [INFERRED 0.75]
- **next-intl locale routing configuration pipeline (routing consumed by request config and navigation helpers)** — i18n_routing_routing, i18n_request, i18n_navigation [EXTRACTED 1.00]
- **Per-page SEO metadata and structured-data generation** — lib_metadata_pagemetadata, lib_schema_organizationschema, lib_schema_localbusinessschema, lib_urls_localepath [INFERRED 0.80]
- **Service-page factory assembling metadata, hero visual, and Service schema** — lib_service_page_createservicepage, lib_page_visuals_servicepagevisual, lib_schema_serviceschema [INFERRED 0.80]

## Communities (25 total, 12 thin omitted)

### Community 0 - "Page Rendering & SEO Pipeline"
Cohesion: 0.08
Nodes (75): EXCLUDED, CID-based Google Maps embed avoids unnamed pin, ContactPage(), generateMetadata(), pointer-events-none overlay preserves map drag, Props, ServiceKey, bundles (+67 more)

### Community 1 - "Navigation & UI Primitives"
Cohesion: 0.06
Nodes (49): CtaKey, FAQItem, PropertyOption, ServiceOption, { Link, redirect, usePathname, useRouter, getPathname }, DesktopNav(), HeaderNavFx(), HeaderScrollFx() (+41 more)

### Community 2 - "Project Rules & SEO Strategy Docs"
Cohesion: 0.07
Nodes (52): AGENTS.md (project conventions & hard rules), Airco@business - SEO Strategy.pdf (client source document), robots(), sitemap(), CLAUDE.md (project instructions entry point), components.json (shadcn/ui config), Preferred anchor-text list / forbidden vague anchors, Strict B2B positioning vs Airco@home consumer brand (+44 more)

### Community 3 - "Content Type System"
Cohesion: 0.14
Nodes (44): Bundle, AboutPageContent, AreaPageContent, BrandsPageContent, ContactPageContent, FaqPageContent, HeroVariant, HomeContent (+36 more)

### Community 4 - "Lead Capture & Content Types"
Cohesion: 0.09
Nodes (33): Card, ImgRef, RelatedLink, Review, ReviewSection, LeadInput, leadSchema, propertyTypes (+25 more)

### Community 5 - "Dutch Content Bundle"
Cohesion: 0.14
Nodes (31): routing, nl.json (UI messages), aircoBedrijfspand, aircoKantoor, aircoShowroom, aircoWinkel, businessAC, home (+23 more)

### Community 6 - "Consent & Footer"
Cohesion: 0.09
Nodes (28): AnalyticsConsent(), ConsentSettingsButton(), coreServices, Footer(), FooterLink, propertyTypes, supportPages, systemsMaintenance (+20 more)

### Community 7 - "NPM Dependencies"
Cohesion: 0.06
Nodes (34): dependencies, class-variance-authority, clsx, @hookform/resolvers, lucide-react, next, next-intl, @next/third-parties (+26 more)

### Community 8 - "Business Service Pages"
Cohesion: 0.09
Nodes (17): { generateMetadata, Page }, { generateMetadata, Page }, { generateMetadata, Page }, { generateMetadata, Page }, { generateMetadata, Page }, { generateMetadata, Page }, { generateMetadata, Page }, { generateMetadata, Page } (+9 more)

### Community 9 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 10 - "shadcn UI Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 11 - "Service Page Factory Pattern"
Cohesion: 0.18
Nodes (11): Page (airco-bedrijfspand), Page (airco-kantoor), Page (airco-onderhoud-zakelijk), Page (airco-onderhoudscontract-zakelijk), Page (airco-reparatie-zakelijk), Page (airco-showroom), Page (airco-winkel), Page (cassette-airco-bedrijf) (+3 more)

### Community 12 - "Coverage & Trust Sections"
Cohesion: 0.33
Nodes (4): City, CoverageDiagram(), positions, TrustBar()

## Ambiguous Edges - Review These
- `layout.tsx` → `header-scroll-fx.tsx`  [AMBIGUOUS]
  src/components/layout/header-scroll-fx.tsx · relation: references
- `CoverageDiagram()` → `TrustBar()`  [AMBIGUOUS]
  src/components/sections/coverage-diagram.tsx · relation: semantically_similar_to
- `leadSchema` → `serviceCardsWithVisuals()`  [AMBIGUOUS]
  src/lib/page-visuals.ts · relation: semantically_similar_to
- `siteConfig` → `localePath()`  [AMBIGUOUS]
  src/lib/urls.ts · relation: references

## Knowledge Gaps
- **164 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+159 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `layout.tsx` and `header-scroll-fx.tsx`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `CoverageDiagram()` and `TrustBar()`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `leadSchema` and `serviceCardsWithVisuals()`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `siteConfig` and `localePath()`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `LeadForm()` connect `Page Rendering & SEO Pipeline` to `Navigation & UI Primitives`, `Project Rules & SEO Strategy Docs`, `Lead Capture & Content Types`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Why does `POST()` connect `Project Rules & SEO Strategy Docs` to `Page Rendering & SEO Pipeline`, `Lead Capture & Content Types`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `routing` (e.g. with `businessAC` and `home`) actually correct?**
  _`routing` has 7 INFERRED edges - model-reasoned connections that need verification._