import { siteConfig } from "./site-config";
import type { FAQItem } from "@/content/types";

const BASE = siteConfig.domain;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: siteConfig.name,
    url: `${BASE}/`,
    logo: `${BASE}/images/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    vatID: siteConfig.btw,
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.linkedin,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "sales",
      areaServed: "NL",
      availableLanguage: ["nl", "en"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${BASE}/#localbusiness`,
    name: siteConfig.name,
    url: `${BASE}/`,
    image: `${BASE}/images/logo.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: siteConfig.serviceArea.region },
      ...[siteConfig.serviceArea.primary, ...siteConfig.serviceArea.cities].map(
        (city) => ({ "@type": "City", name: city }),
      ),
    ],
    parentOrganization: { "@id": `${BASE}/#organization` },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: siteConfig.name,
    url: `${BASE}/`,
    inLanguage: ["nl", "en"],
    publisher: { "@id": `${BASE}/#organization` },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    provider: { "@id": `${BASE}/#localbusiness` },
    areaServed: { "@type": "AdministrativeArea", name: siteConfig.serviceArea.region },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Only emit on pages where the FAQ is visibly rendered. */
export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
