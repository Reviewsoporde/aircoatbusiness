# Airco@Business — Site & Link Architecture

> Distilled from the client SEO document (Link Architecture Guide + Homepage SEO Outline). This is the **client-approved final structure**. It replaces the earlier 4-cluster proposal (overlapping pages such as *Airco Voor Bedrijven*, *Airco Zakelijk*, *Klimaatbeheersing Kantoor*, *Airco Werkplek* are **not** built).

- **Primary local focus:** Voorschoten · **Primary regional focus:** Zuid-Holland
- **Wider service area:** Leiden, Den Haag, Rotterdam, Hoofddorp, Utrecht, Delft, Wassenaar, Oegstgeest, Katwijk, Noordwijk, Zoetermeer, Alphen aan den Rijn

## 1. Final Site Structure

```
Homepage (/)
├─ Business Air Conditioning        /zakelijke-airconditioning/
│  ├─ Office Air Conditioning       /airco-kantoor/
│  ├─ Commercial Building AC        /airco-bedrijfspand/
│  ├─ Retail Air Conditioning       /airco-winkel/
│  └─ Showroom Air Conditioning     /airco-showroom/
├─ Installation                     /installatie/
│  ├─ Commercial AC Installation    /zakelijke-airco-installatie/
│  ├─ Cassette Air Conditioning     /cassette-airco-bedrijf/
│  ├─ Ducted Air Conditioning       /kanaal-airco-bedrijf/
│  └─ Wall Mounted AC               /wandmodel-airco-bedrijf/
├─ Maintenance                      /onderhoud/
│  ├─ Maintenance                   /airco-onderhoud-zakelijk/
│  ├─ Repairs                       /airco-reparatie-zakelijk/
│  └─ Maintenance Contracts         /airco-onderhoudscontract-zakelijk/
├─ Projects                         /projecten/
├─ Our Process                      /werkwijze/
└─ Contact                          /contact/
```

Supporting pages (footer / contextual links only — **not** in main navigation):

| Page | URL | Purpose |
|---|---|---|
| About Airco@Business | `/over-ons/` | Company expertise, team, trust |
| Frequently Asked Questions | `/veelgestelde-vragen/` | General commercial airco questions |
| Service Area | `/werkgebied/` | Regional coverage + location-page hub |
| Brands and Systems | `/merken-en-systemen/` | Supported brands and system options |
| Residential Air Conditioning | external redirect | → https://airco-athome.nl/ for private customers |
| Privacy Policy / Cookie Policy | `/privacybeleid/`, `/cookiebeleid/` | Legal |

English locale: pages live under `/en/` with translated slugs (e.g. `/en/business-air-conditioning/`); Dutch URLs above are canonical and must match the SEO document verbatim, with trailing slashes.

## 2. Header Navigation (exact)

```
Logo
Home
Business Air Conditioning ▾
  Office Air Conditioning
  Commercial Building Air Conditioning
  Retail Air Conditioning
  Showroom Air Conditioning
Installation ▾
  Commercial Air Conditioning Installation
  Cassette Air Conditioning
  Ducted Air Conditioning
  Wall Mounted Air Conditioning
Maintenance ▾
  Maintenance
  Repairs
  Maintenance Contracts
Projects
Our Process
Contact  ← primary conversion button
```

Secondary link (visually subordinate): **"Residentieel? Ga naar Airco@home"**

Rules:
- No location pages in the main navigation
- No supporting SEO pages in the main navigation
- Contact is the primary conversion button
- Residential link stays visually secondary

## 3. Homepage Internal Linking

| Homepage section | Link target | Anchor (NL) |
|---|---|---|
| Hero | `/zakelijke-airconditioning/` | zakelijke airconditioning |
| Business Types | `/airco-kantoor/` | airco voor kantoren |
| Business Types | `/airco-bedrijfspand/` | airco voor bedrijfspanden |
| Business Types | `/airco-winkel/` | airco voor winkels |
| Business Types | `/airco-showroom/` | airco voor showrooms |
| Installation | `/installatie/` | zakelijke airco installatie |
| Systems | `/cassette-airco-bedrijf/` | cassette airco voor bedrijven |
| Systems | `/kanaal-airco-bedrijf/` | kanaal airco voor bedrijven |
| Systems | `/wandmodel-airco-bedrijf/` | wandmodel airco voor bedrijven |
| Maintenance | `/onderhoud/` | zakelijke airco onderhoud en service |
| Projects | `/projecten/` | zakelijke airco projecten |
| Process | `/werkwijze/` | onze werkwijze |
| CTA | `/contact/` | plan een adviesgesprek |
| CTA | `/contact/` | zakelijke offerte aanvragen |

The homepage links to all three parent clusters and selected high-priority child pages.

## 4. Cluster Internal-Linking Rules

**Business Air Conditioning (parent)** links to: its 4 child pages, Installation, Projects, Contact.
Each property child page links to: parent, 1–2 relevant system pages, Maintenance, Projects, Contact.
*Example — Office AC → Business AC, Cassette AC, Ducted AC, Maintenance, Contact.*

**Installation (parent)** links to: Commercial AC Installation, the 3 system pages, Projects, Contact.
Each system page links to: Installation parent, Commercial AC Installation, relevant property pages, Maintenance, Contact.
*Example — Cassette AC → Installation, Commercial AC Installation, Office AC, Retail AC, Maintenance, Contact.*

**Maintenance (parent)** links to: Maintenance, Repairs, Maintenance Contracts, Contact.
Each maintenance child links to: parent, the other maintenance services, Commercial AC Installation (where relevant), Contact.

Recommended related-link counts: parent pages 4–6 · property pages 3–4 · system pages 3–4 · maintenance pages 3–4 · repair page 2–4. Each link should support the next logical user action. **Do not link to every service page.**

## 5. Anchor-Text Rules

**Preferred anchors:** zakelijke airconditioning · airco voor kantoren · airco voor bedrijfspanden · airco voor winkels · airco voor showrooms · zakelijke airco installatie · cassette airco voor bedrijven · kanaal airco voor bedrijven · wandmodel airco voor bedrijven · airco onderhoud zakelijk · zakelijke airco reparatie · zakelijk onderhoudscontract · zakelijke airco projecten · plan een adviesgesprek

**Forbidden vague anchors:** "Klik hier" · "Lees meer" · "Meer informatie" · "Bekijk dit"

## 6. Footer Structure

| Column | Links |
|---|---|
| 1 — Core Services | Business Air Conditioning, Installation, Maintenance, Projects, Our Process, Contact |
| 2 — Property Types | Office AC, Commercial Building AC, Retail AC, Showroom AC |
| 3 — Systems & Maintenance | Commercial AC Installation, Cassette AC, Ducted AC, Wall Mounted AC, Maintenance, Repairs, Maintenance Contracts |
| 4 — Supporting Pages | About, FAQ, Service Area, Brands & Systems, Residential redirect |
| 5 — Locations | Voorschoten, Leiden, Den Haag, Rotterdam, Hoofddorp, "View All Service Areas" (→ `/werkgebied/`) |

Plus legal/business block: company name, address, phone, email, opening hours, KvK, Privacy Policy, Cookie Policy, socials, residential redirect.

Footer rules:
- Clear, descriptive labels; don't repeat the same link across columns unnecessarily
- Location links point to `/werkgebied/` until dedicated location pages exist
- "View All Service Areas" keeps the footer manageable — never list all locations

## 7. Location Pages Policy (deferred)

Location pages stay **outside** main navigation. Starting set: `/zakelijke-airco-voorschoten/`, `/zakelijke-airco-leiden/`, `/zakelijke-airco-den-haag/`, `/zakelijke-airco-rotterdam/`, `/zakelijke-airco-hoofddorp/`. Linked from Service Area page, footer, relevant service pages, project pages, homepage local section. Each requires **unique local content** — never city-name-swapped duplicates.

## 8. User-Journey Hierarchy

```
Homepage → Main Service Cluster → Specific Property/System/Maintenance Page → Project Proof → Contact
```
