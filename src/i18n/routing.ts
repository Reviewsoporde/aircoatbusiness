import { defineRouting } from "next-intl/routing";

// NL slugs are canonical per docs/site-architecture.md — never rename them.
// Internal route keys (= app dir folders) use the NL slug; EN gets a translated slug.
export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/zakelijke-airconditioning": { en: "/business-air-conditioning" },
    "/airco-kantoor": { en: "/office-air-conditioning" },
    "/airco-bedrijfspand": { en: "/commercial-building-air-conditioning" },
    "/airco-winkel": { en: "/retail-air-conditioning" },
    "/airco-showroom": { en: "/showroom-air-conditioning" },
    "/installatie": { en: "/installation" },
    "/zakelijke-airco-installatie": {
      en: "/commercial-air-conditioning-installation",
    },
    "/cassette-airco-bedrijf": { en: "/cassette-air-conditioning" },
    "/kanaal-airco-bedrijf": { en: "/ducted-air-conditioning" },
    "/wandmodel-airco-bedrijf": { en: "/wall-mounted-air-conditioning" },
    "/onderhoud": { en: "/maintenance" },
    "/airco-onderhoud-zakelijk": {
      en: "/commercial-air-conditioning-maintenance",
    },
    "/airco-reparatie-zakelijk": { en: "/air-conditioning-repairs" },
    "/airco-onderhoudscontract-zakelijk": { en: "/maintenance-contracts" },
    "/projecten": { en: "/projects" },
    "/werkwijze": { en: "/our-process" },
    "/contact": { en: "/contact" },
    "/over-ons": { en: "/about-us" },
    "/veelgestelde-vragen": { en: "/frequently-asked-questions" },
    "/werkgebied": { en: "/service-area" },
    "/merken-en-systemen": { en: "/brands-and-systems" },
    "/privacybeleid": { en: "/privacy-policy" },
    "/cookiebeleid": { en: "/cookie-policy" },
  },
});

export type AppPathname = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
