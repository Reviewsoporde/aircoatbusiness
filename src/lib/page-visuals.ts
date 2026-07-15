import type { ServiceKey } from "@/content/bundle";
import type { Card, HeroVariant, ImgRef } from "@/content/types";
import type { AppPathname, Locale } from "@/i18n/routing";

const visuals = {
  office: {
    src: "/images/generated/commercial-office-hero.webp",
    alt: "Premium zakelijke kantoorruimte met geïntegreerde klimaatinstallatie",
    position: "58% 50%",
  },
  businessOverview: {
    src: "/images/generated/business-air-conditioning-hero.webp",
    alt: "Facility manager en klimaatadviseur lopen door een modern zakelijk kantoor met geïntegreerde airconditioning",
    position: "57% 50%",
  },
  officeComfort: {
    src: "/images/generated/office-air-conditioning-hero.webp",
    alt: "Medewerkers werken in een modern kantoor met discreet geïntegreerde klimaatinstallatie",
    position: "58% 48%",
  },
  building: {
    src: "/images/generated/commercial-building.webp",
    alt: "Moderne zakelijke ontvangstruimte met plafondairconditioning",
    position: "55% 50%",
  },
  installation: {
    src: "/images/generated/commercial-installation-assessment.webp",
    alt: "Aircomonteur en facility manager beoordelen een zakelijke installatie",
    position: "50% 45%",
  },
  installationDelivery: {
    src: "/images/generated/commercial-installation-delivery-hero.webp",
    alt: "Monteurs installeren zakelijke buitenunits op het dak van een modern kantoorgebouw",
    position: "54% 50%",
  },
  installationWork: {
    src: "/images/generated/commercial-installation-in-progress.webp",
    alt: "Monteurs installeren een cassette-unit in een zakelijke kantoorruimte",
    position: "50% 45%",
  },
  retail: {
    src: "/images/generated/retail-cassette.webp",
    alt: "Verzorgde winkelruimte met cassette-airconditioning in het plafond",
    position: "50% 48%",
  },
  showroom: {
    src: "/images/generated/showroom-cassette.webp",
    alt: "Architecturale showroom met meerdere cassette-units",
    position: "52% 48%",
  },
  cassetteDetail: {
    src: "/images/generated/cassette-air-conditioning-hero.webp",
    alt: "Cassette-airco geïntegreerd in het plafond van een moderne zakelijke ruimte",
    position: "58% 42%",
  },
  ducted: {
    src: "/images/generated/ducted-detail.webp",
    alt: "Architectuurdetail van een discreet kanaalrooster",
    position: "50% 50%",
  },
  wall: {
    src: "/images/generated/wall-model-office.webp",
    alt: "Zakelijk wandmodel in een moderne vergaderruimte",
    position: "50% 45%",
  },
  systemAdvice: {
    src: "/images/generated/commercial-system-advice.webp",
    alt: "Aircomonteur controleert een zakelijk wandmodel terwijl een facility manager het plan bekijkt",
    position: "56% 45%",
  },
  service: {
    src: "/images/generated/maintenance-service.webp",
    alt: "Technicus voert onderhoud uit aan een zakelijke cassette-unit",
    position: "58% 45%",
  },
  commercialMaintenanceIndoor: {
    src: "/images/generated/commercial-maintenance-indoor-hero.webp",
    alt: "Servicemonteur inspecteert een luchtfilter tijdens zakelijk preventief onderhoud",
    position: "52% 48%",
  },
  maintenanceRooftop: {
    src: "/images/generated/commercial-maintenance-rooftop.webp",
    alt: "Servicemonteur controleert een zakelijke buitenunit op een bedrijfsdak",
    position: "50% 50%",
  },
  repairDiagnostics: {
    src: "/images/generated/commercial-repair-diagnostics.webp",
    alt: "Servicemonteur stelt een storing vast aan een cassette-unit in een zakelijk kantoor",
    position: "52% 42%",
  },
  repairOutdoorUnit: {
    src: "/images/generated/commercial-repair-outdoor-unit.webp",
    alt: "Servicemonteur onderzoekt de elektronica van een zakelijke buitenunit",
    position: "48% 50%",
  },
  maintenanceContractPlanning: {
    src: "/images/generated/commercial-maintenance-contract-planning.webp",
    alt: "Facility manager en serviceadviseur plannen zakelijk airco-onderhoud",
    position: "52% 48%",
  },
  maintenanceContractInspection: {
    src: "/images/generated/commercial-maintenance-contract-inspection.webp",
    alt: "Servicemonteur registreert een geplande inspectie in een technische ruimte",
    position: "52% 50%",
  },
  projectsHero: {
    src: "/images/generated/projects-hero-background.webp",
    alt: "Monteurs ronden de inbedrijfstelling af van een zakelijke klimaatinstallatie in een modern kantoor",
    position: "58% 48%",
  },
  processSurvey: {
    src: "/images/generated/process-site-survey-hero.webp",
    alt: "Klimaatadviseur meet een zakelijke ruimte in terwijl de facility manager de plattegrond controleert",
    position: "55% 48%",
  },
  serverRoom: {
    src: "/images/generated/commercial-server-room-cooling.webp",
    alt: "Zakelijke serverruimte met een eigen klimaatinstallatie",
    position: "58% 50%",
  },
} satisfies Record<string, ImgRef>;

type VisualKey = keyof typeof visuals;
type ServicePathname = `/${ServiceKey}`;
type ServiceCardSection = "overview" | "benefits";

const serviceCardVisualMap = {
  "/zakelijke-airconditioning": {
    overview: ["officeComfort", "building", "retail", "showroom"],
    benefits: ["systemAdvice", "officeComfort", "maintenanceContractPlanning"],
  },
  "/airco-kantoor": {
    overview: ["officeComfort", "office", "building", "serverRoom"],
    benefits: ["officeComfort", "building", "systemAdvice"],
  },
  "/airco-bedrijfspand": {
    overview: ["office", "installationWork", "building", "ducted"],
    benefits: ["commercialMaintenanceIndoor", "ducted", "building"],
  },
  "/airco-winkel": {
    overview: ["retail", "showroom", "wall"],
    benefits: ["retail", "showroom", "officeComfort"],
  },
  "/airco-showroom": {
    overview: ["showroom", "building", "retail"],
    benefits: ["showroom", "cassetteDetail", "ducted"],
  },
  "/installatie": {
    overview: ["installationDelivery", "cassetteDetail", "ducted", "wall"],
    benefits: ["installation", "installationWork", "installationDelivery"],
  },
  "/zakelijke-airco-installatie": {
    overview: ["installationDelivery", "installation", "installationWork"],
    benefits: ["systemAdvice", "maintenanceContractInspection", "installationDelivery"],
  },
  "/cassette-airco-bedrijf": {
    overview: ["officeComfort", "retail", "building"],
    benefits: ["cassetteDetail", "installationWork", "office"],
  },
  "/kanaal-airco-bedrijf": {
    overview: ["ducted", "office", "showroom"],
    benefits: ["ducted", "officeComfort", "systemAdvice"],
  },
  "/wandmodel-airco-bedrijf": {
    overview: ["wall", "serverRoom", "office"],
    benefits: ["installationWork", "wall", "systemAdvice"],
  },
  "/onderhoud": {
    overview: ["service", "repairDiagnostics", "maintenanceContractPlanning"],
    benefits: ["maintenanceRooftop", "commercialMaintenanceIndoor", "service"],
  },
  "/airco-onderhoud-zakelijk": {
    overview: ["commercialMaintenanceIndoor", "retail", "serverRoom"],
    benefits: ["repairOutdoorUnit", "service", "commercialMaintenanceIndoor"],
  },
  "/airco-reparatie-zakelijk": {
    overview: ["repairDiagnostics", "service", "repairOutdoorUnit"],
    benefits: ["repairDiagnostics", "repairOutdoorUnit", "systemAdvice"],
  },
  "/airco-onderhoudscontract-zakelijk": {
    overview: [
      "maintenanceContractPlanning",
      "retail",
      "maintenanceContractInspection",
    ],
    benefits: [
      "maintenanceRooftop",
      "maintenanceContractPlanning",
      "maintenanceContractInspection",
    ],
  },
} satisfies Record<
  ServicePathname,
  Record<ServiceCardSection, VisualKey[]>
>;

const englishAlts: Record<string, string> = {
  "/images/generated/commercial-office-hero.webp":
    "Premium commercial office with integrated climate control",
  "/images/generated/business-air-conditioning-hero.webp":
    "Facilities manager and climate advisor walking through a modern commercial office with integrated air conditioning",
  "/images/generated/office-air-conditioning-hero.webp":
    "People working in a modern office with discreetly integrated climate control",
  "/images/generated/commercial-building.webp":
    "Modern commercial reception with ceiling air conditioning",
  "/images/generated/commercial-installation-assessment.webp":
    "Air conditioning engineer and facilities manager assessing a commercial installation",
  "/images/generated/commercial-installation-delivery-hero.webp":
    "Engineers installing commercial outdoor units on the roof of a modern office building",
  "/images/generated/commercial-installation-in-progress.webp":
    "Engineers installing a ceiling cassette unit in a commercial office",
  "/images/generated/retail-cassette.webp":
    "Considered retail space with a ceiling cassette unit",
  "/images/generated/showroom-cassette.webp":
    "Architectural showroom with multiple ceiling cassette units",
  "/images/generated/cassette-air-conditioning-hero.webp":
    "Ceiling cassette air conditioning integrated into a modern commercial interior",
  "/images/generated/ducted-detail.webp":
    "Architectural detail of a discreet ducted air conditioning grille",
  "/images/generated/wall-model-office.webp":
    "Commercial wall-mounted unit in a modern meeting room",
  "/images/generated/commercial-system-advice.webp":
    "Air conditioning engineer checking a commercial wall-mounted unit while a facilities manager reviews the plan",
  "/images/generated/maintenance-service.webp":
    "Technician servicing a commercial ceiling cassette unit",
  "/images/generated/commercial-maintenance-indoor-hero.webp":
    "Service engineer inspecting an air filter during scheduled commercial maintenance",
  "/images/generated/commercial-maintenance-rooftop.webp":
    "Service engineer inspecting a commercial outdoor unit on an office rooftop",
  "/images/generated/commercial-repair-diagnostics.webp":
    "Service engineer diagnosing a ceiling cassette fault in a commercial office",
  "/images/generated/commercial-repair-outdoor-unit.webp":
    "Service engineer inspecting the electronics of a commercial outdoor unit",
  "/images/generated/commercial-maintenance-contract-planning.webp":
    "Facilities manager and service advisor planning commercial air conditioning maintenance",
  "/images/generated/commercial-maintenance-contract-inspection.webp":
    "Service engineer recording a scheduled inspection in a commercial plant room",
  "/images/generated/projects-hero-background.webp":
    "Engineers completing the commissioning of a commercial climate installation in a modern office",
  "/images/generated/process-site-survey-hero.webp":
    "Climate advisor surveying a commercial space while the facilities manager reviews the floor plan",
  "/images/generated/commercial-server-room-cooling.webp":
    "Commercial server room with dedicated climate control",
};

function localizeImage(image: ImgRef, locale: Locale): ImgRef {
  return locale === "en" ? { ...image, alt: englishAlts[image.src] } : image;
}

function applyCardVisuals(
  cards: Card[],
  visualKeys: VisualKey[],
  locale: Locale,
  context: string,
): Card[] {
  if (cards.length !== visualKeys.length) {
    throw new Error(
      `Card visual count mismatch for ${context}: received ${cards.length} cards and ${visualKeys.length} visuals.`,
    );
  }

  return cards.map((card, index) => ({
    ...card,
    image: card.image ?? localizeImage(visuals[visualKeys[index]], locale),
  }));
}

export function serviceCardsWithVisuals(
  cards: Card[],
  pathname: AppPathname,
  locale: Locale,
  section: ServiceCardSection,
): Card[] {
  const pageVisuals =
    serviceCardVisualMap[pathname as ServicePathname]?.[section];

  if (!pageVisuals) {
    throw new Error(`Missing ${section} card visuals for ${pathname}.`);
  }

  return applyCardVisuals(
    cards,
    pageVisuals,
    locale,
    `${pathname} ${section}`,
  );
}

export function homeClimateCardsWithVisuals(
  cards: Card[],
  locale: Locale,
): Card[] {
  return applyCardVisuals(
    cards,
    ["officeComfort", "retail", "maintenanceContractInspection"],
    locale,
    "homepage climate benefits",
  );
}

export function aboutCardsWithVisuals(
  cards: Card[],
  locale: Locale,
): Card[] {
  return applyCardVisuals(
    cards,
    ["installationWork", "systemAdvice", "maintenanceContractPlanning"],
    locale,
    "about page USPs",
  );
}

export function servicePageVisual(
  pathname: AppPathname,
  locale: Locale,
): {
  image: ImgRef;
  variant: HeroVariant;
} {
  const result: { image: ImgRef; variant: HeroVariant } = (() => {
    if (pathname === "/airco-reparatie-zakelijk") {
      return { image: visuals.repairDiagnostics, variant: "urgent" };
    }
    if (pathname === "/onderhoud") {
      return { image: visuals.service, variant: "split" };
    }
    if (pathname === "/airco-onderhoud-zakelijk") {
      return { image: visuals.commercialMaintenanceIndoor, variant: "split" };
    }
    if (pathname === "/airco-onderhoudscontract-zakelijk") {
      return { image: visuals.maintenanceContractPlanning, variant: "split" };
    }
    if (pathname === "/installatie") {
      return { image: visuals.installation, variant: "split" };
    }
    if (pathname === "/zakelijke-airco-installatie") {
      return { image: visuals.installationDelivery, variant: "split" };
    }
    if (pathname === "/airco-kantoor") {
      return { image: visuals.officeComfort, variant: "split" };
    }
    if (pathname === "/airco-bedrijfspand")
      return { image: visuals.building, variant: "split" };
    if (pathname === "/airco-winkel")
      return { image: visuals.retail, variant: "split" };
    if (pathname === "/airco-showroom")
      return { image: visuals.showroom, variant: "split" };
    if (pathname === "/cassette-airco-bedrijf") {
      return { image: visuals.cassetteDetail, variant: "split" };
    }
    if (pathname === "/kanaal-airco-bedrijf")
      return { image: visuals.ducted, variant: "split" };
    if (pathname === "/wandmodel-airco-bedrijf")
      return { image: visuals.wall, variant: "split" };
    if (pathname === "/zakelijke-airconditioning") {
      return { image: visuals.businessOverview, variant: "image-led" };
    }
    return { image: visuals.building, variant: "image-led" };
  })();

  return { ...result, image: localizeImage(result.image, locale) };
}

export function serviceProofVisual(
  pathname: AppPathname,
  locale: Locale,
): ImgRef {
  const image = (() => {
    if (pathname === "/onderhoud" || pathname === "/airco-onderhoud-zakelijk") {
      return visuals.maintenanceRooftop;
    }
    if (pathname === "/airco-reparatie-zakelijk") {
      return visuals.repairOutdoorUnit;
    }
    if (pathname === "/airco-onderhoudscontract-zakelijk") {
      return visuals.maintenanceContractInspection;
    }
    if (
      pathname === "/installatie" ||
      pathname === "/zakelijke-airco-installatie" ||
      pathname === "/zakelijke-airconditioning"
    ) {
      return visuals.installationWork;
    }
    if (pathname === "/airco-kantoor") return visuals.building;
    if (pathname === "/airco-bedrijfspand") return visuals.ducted;
    if (pathname === "/airco-winkel") return visuals.showroom;
    if (pathname === "/airco-showroom") return visuals.building;
    if (pathname === "/cassette-airco-bedrijf") return visuals.retail;
    if (pathname === "/kanaal-airco-bedrijf") return visuals.office;
    if (pathname === "/wandmodel-airco-bedrijf") return visuals.systemAdvice;
    return visuals.installationWork;
  })();

  return localizeImage(image, locale);
}

export function brandsSystemsVisual(locale: Locale): ImgRef {
  return localizeImage(visuals.systemAdvice, locale);
}

export function projectsPageVisual(locale: Locale): ImgRef {
  return localizeImage(visuals.projectsHero, locale);
}

export function processPageVisual(locale: Locale): ImgRef {
  return localizeImage(visuals.processSurvey, locale);
}
