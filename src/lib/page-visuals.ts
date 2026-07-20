import type { ServiceKey } from "@/content/bundle";
import type { Card, HeroVariant, ImgRef } from "@/content/types";
import type { AppPathname, Locale } from "@/i18n/routing";

const visuals = {
  office: {
    src: "/images/generated/commercial-office-hero.webp",
    alt: "Premium zakelijke kantoorruimte met geïntegreerde klimaatinstallatie",
    position: "58% 50%",
  },
  ductedProofNoCassette: {
    src: "/images/generated/ducted-proof-no-cassette.webp",
    alt: "Moderne kantoorruimte met lineaire kanaalroosters in het plafond",
    position: "58% 50%",
  },
  officePrivateRoom: {
    src: "/images/generated/small-office-room-card.webp",
    alt: "Compacte zakelijke kantoorruimte met een discreet wandmodel airco",
    position: "50% 50%",
  },
  officeMeetingRoom: {
    src: "/images/generated/commercial-office-boardroom-card.webp",
    alt: "Moderne vergaderruimte met geïntegreerde cassette-airconditioning",
    position: "54% 48%",
  },
  officeHappyComfort: {
    src: "/images/generated/office-comfort-happy-people.webp",
    alt: "Tevreden collega's werken comfortabel onder zakelijke airconditioning",
    position: "50% 48%",
  },
  businessOverview: {
    src: "/images/generated/business-air-conditioning-small-office-hero.png",
    alt: "Compact zakelijk kantoor met cassette-airconditioning in het plafond",
    position: "54% 50%",
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
  entranceReception: {
    src: "/images/generated/commercial-entrance-reception.webp",
    alt: "Representatieve entree en ontvangstruimte met discreet geïntegreerde klimaatregeling",
    position: "50% 48%",
  },
  installation: {
    src: "/images/generated/commercial-installation-assessment.webp",
    alt: "Aircomonteur en facility manager beoordelen een zakelijke installatie",
    position: "50% 45%",
  },
  installationDelivery: {
    src: "/images/generated/commercial-installation-delivery-hero-small-aircon.webp",
    alt: "Monteurs installeren zakelijke buitenunits op het dak van een modern kantoorgebouw",
    position: "54% 50%",
  },
  installationSmallBuilding: {
    src: "/images/generated/commercial-installation-small-building-card-v2.webp",
    alt: "Monteurs installeren een compacte zakelijke buitenunit bij een ouder klein bedrijfspand",
    position: "50% 50%",
  },
  installationWork: {
    src: "/images/generated/commercial-installation-in-progress.webp",
    alt: "Monteurs installeren een cassette-unit in een zakelijke kantoorruimte",
    position: "50% 45%",
  },
  installationCertifiedInsured: {
    src: "/images/generated/commercial-installation-certified-insured-card.png",
    alt: "Gecertificeerde aircomonteurs bespreken de oplevering van een zakelijke installatie",
    position: "50% 48%",
  },
  installationMinimalDisruption: {
    src: "/images/generated/commercial-installation-minimal-disruption-card.webp",
    alt: "Monteur werkt in een afgeschermde zone terwijl medewerkers in het kantoor doorwerken",
    position: "48% 50%",
  },
  warehouseWorkStorage: {
    src: "/images/generated/commercial-warehouse-work-storage.webp",
    alt: "Werk- en opslagruimte in een bedrijfshal met zichtbare klimaatinstallatie",
    position: "52% 45%",
  },
  retail: {
    src: "/images/generated/retail-cassette.webp",
    alt: "Verzorgde winkelruimte met cassette-airconditioning in het plafond",
    position: "50% 48%",
  },
  retailPeople: {
    src: "/images/generated/retail-cassette-people.webp",
    alt: "Klanten krijgen advies in een modewinkel met cassette-airconditioning",
    position: "50% 48%",
  },
  specialistRetail: {
    src: "/images/generated/specialist-retail-climate.webp",
    alt: "Speciaalzaak met koelvitrine, elektronica en zichtbare klimaatinstallatie",
    position: "50% 48%",
  },
  customerSatisfaction: {
    src: "/images/generated/homepage-customer-satisfaction.webp",
    alt: "Tevreden winkeleigenaar spreekt met een aircomonteur onder een cassette-airco",
    position: "50% 50%",
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
  cassetteAirflowComfort: {
    src: "/images/generated/cassette-airflow-comfort-card.webp",
    alt: "Cassette-airco verdeelt lucht langs het plafond in een moderne kantoorruimte",
    position: "50% 38%",
  },
  ducted: {
    src: "/images/generated/ducted-detail.webp",
    alt: "Architectuurdetail van een discreet kanaalrooster",
    position: "50% 50%",
  },
  multiZoneFloors: {
    src: "/images/generated/commercial-multizone-floors.webp",
    alt: "Meerdere verdiepingen in een bedrijfspand met klimaatregeling per zone",
    position: "50% 48%",
  },
  wall: {
    src: "/images/generated/wall-model-office.webp",
    alt: "Zakelijk wandmodel in een moderne vergaderruimte",
    position: "50% 45%",
  },
  wallCanteen: {
    src: "/images/generated/wall-model-canteen-card.webp",
    alt: "Zakelijke kantine met een wandmodel airco hoog aan de muur",
    position: "54% 38%",
  },
  wallInstallation: {
    src: "/images/generated/wall-model-installation-card.webp",
    alt: "Monteurs installeren een wandmodel airco in een zakelijke kantoorruimte",
    position: "55% 38%",
  },
  wallBudget: {
    src: "/images/generated/wall-model-budget-card.webp",
    alt: "Strak zwart wandmodel airco in een verzorgd directiekantoor met stenen bureau",
    position: "50% 42%",
  },
  systemAdvice: {
    src: "/images/generated/commercial-system-advice.webp",
    alt: "Aircomonteur controleert een zakelijk wandmodel terwijl een facility manager het plan bekijkt",
    position: "56% 45%",
  },
  centralClimateControl: {
    src: "/images/generated/commercial-central-climate-control.webp",
    alt: "Facility manager beheert klimaatzones centraal via een slim bedieningspaneel",
    position: "45% 48%",
  },
  propertyValue: {
    src: "/images/generated/commercial-property-value.webp",
    alt: "Modern zakelijk pand met een hoogwaardige klimaatinstallatie",
    position: "50% 50%",
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
  commercialMaintenanceCleanAir: {
    src: "/images/generated/commercial-maintenance-clean-air-card.webp",
    alt: "Servicemonteur plaatst een schoon luchtfilter terug in een zakelijke cassette-unit",
    position: "54% 42%",
  },
  commercialMaintenanceSmallWallUnit: {
    src: "/images/generated/commercial-maintenance-small-wall-unit-hero.webp",
    alt: "Servicemonteur onderhoudt een compact wandmodel airco in een zakelijk kantoor",
    position: "53% 48%",
  },
  maintenanceRooftop: {
    src: "/images/generated/commercial-maintenance-rooftop.webp",
    alt: "Servicemonteur controleert een zakelijke buitenunit op een bedrijfsdak",
    position: "50% 50%",
  },
  maintenanceContractServiceVan: {
    src: "/images/generated/commercial-maintenance-contract-service-van.png",
    alt: "Servicebus arriveert bij een zakelijk pand voor onderhoud aan airconditioning",
    position: "50% 52%",
  },
  maintenanceContractOfficeMkb: {
    src: "/images/generated/commercial-maintenance-contract-office-mkb-scheduled.png",
    alt: "Servicemonteur markeert gepland airco-onderhoud in een MKB-kantoor",
    position: "50% 48%",
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
  repairOutdoorUnitSummerPolo: {
    src: "/images/generated/commercial-repair-outdoor-unit-summer-polo.webp",
    alt: "Servicemonteur in polo onderzoekt een zakelijke buitenunit op een zomers bedrijfsdak",
    position: "48% 50%",
  },
  repairOfficeLeakage: {
    src: "/images/generated/commercial-repair-office-leakage.webp",
    alt: "Servicemonteur herstelt lekkage aan een zakelijke cassette-unit in een kantoor",
    position: "52% 42%",
  },
  maintenanceContractPlanning: {
    src: "/images/generated/commercial-maintenance-contract-planning.webp",
    alt: "Facility manager en serviceadviseur plannen zakelijk airco-onderhoud",
    position: "52% 48%",
  },
  maintenanceContractFacilityManagement: {
    src: "/images/generated/commercial-maintenance-contract-facility-management.png",
    alt: "Facility manager en serviceadviseur bekijken rapportage voor meerdere zakelijke panden",
    position: "50% 48%",
  },
  maintenanceContractSigning: {
    src: "/images/generated/homepage-maintenance-contract-signing.webp",
    alt: "Adviseur en klant tekenen een zakelijk onderhoudscontract aan een kantoorbureau",
    position: "50% 52%",
  },
  maintenanceContractInspection: {
    src: "/images/generated/commercial-maintenance-contract-inspection.webp",
    alt: "Servicemonteur registreert een geplande inspectie in een technische ruimte",
    position: "52% 50%",
  },
  maintenanceContractComplianceLogbook: {
    src: "/images/generated/commercial-maintenance-contract-compliance-logbook.png",
    alt: "Servicemonteur verwerkt F-gassencontrole in een digitaal logboek",
    position: "50% 52%",
  },
  maintenanceContractCertaintyProof: {
    src: "/images/generated/commercial-maintenance-contract-certainty-proof-logo-uniforms.png",
    alt: "Gecertificeerde monteurs met Airco@Business-logo bespreken een nette zakelijke airco-oplevering",
    position: "54% 50%",
  },
  homepageReliability: {
    src: "/images/generated/homepage-reliability-maintenance.webp",
    alt: "Servicemonteur inspecteert de installatie in een zakelijke technische ruimte",
    position: "53% 46%",
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
    benefits: ["systemAdvice", "officeComfort", "service"],
  },
  "/airco-kantoor": {
    overview: [
      "officeComfort",
      "officePrivateRoom",
      "officeMeetingRoom",
      "serverRoom",
    ],
    benefits: ["officeComfort", "officeHappyComfort", "systemAdvice"],
  },
  "/airco-bedrijfspand": {
    overview: ["office", "warehouseWorkStorage", "entranceReception", "multiZoneFloors"],
    benefits: ["commercialMaintenanceIndoor", "centralClimateControl", "propertyValue"],
  },
  "/airco-winkel": {
    overview: ["retailPeople", "showroom", "specialistRetail"],
    benefits: ["retail", "showroom", "officeComfort"],
  },
  "/airco-showroom": {
    overview: ["showroom", "building", "retail"],
    benefits: ["showroom", "cassetteDetail", "ducted"],
  },
  "/installatie": {
    overview: ["installationDelivery", "cassetteDetail", "ducted", "wall"],
    benefits: ["installation", "installationWork", "installationCertifiedInsured"],
  },
  "/zakelijke-airco-installatie": {
    overview: ["installationSmallBuilding", "installation", "installationWork"],
    benefits: ["systemAdvice", "maintenanceContractInspection", "installationMinimalDisruption"],
  },
  "/cassette-airco-bedrijf": {
    overview: ["officeComfort", "retail", "building"],
    benefits: ["cassetteAirflowComfort", "installationWork", "office"],
  },
  "/kanaal-airco-bedrijf": {
    overview: ["ducted", "office", "showroom"],
    benefits: ["ducted", "officeComfort", "multiZoneFloors"],
  },
  "/wandmodel-airco-bedrijf": {
    overview: ["wall", "serverRoom", "wallCanteen"],
    benefits: ["wallInstallation", "wallBudget", "systemAdvice"],
  },
  "/onderhoud": {
    overview: ["service", "repairDiagnostics", "maintenanceContractSigning"],
    benefits: [
      "maintenanceRooftop",
      "commercialMaintenanceIndoor",
      "commercialMaintenanceCleanAir",
    ],
  },
  "/airco-onderhoud-zakelijk": {
    overview: ["commercialMaintenanceSmallWallUnit", "retail", "serverRoom"],
    benefits: [
      "repairOutdoorUnitSummerPolo",
      "service",
      "commercialMaintenanceIndoor",
    ],
  },
  "/airco-reparatie-zakelijk": {
    overview: ["repairDiagnostics", "service", "repairOutdoorUnit"],
    benefits: ["repairDiagnostics", "repairOfficeLeakage", "systemAdvice"],
  },
  "/airco-onderhoudscontract-zakelijk": {
    overview: [
      "maintenanceContractOfficeMkb",
      "retail",
      "maintenanceContractFacilityManagement",
    ],
    benefits: [
      "maintenanceContractServiceVan",
      "maintenanceContractSigning",
      "maintenanceContractComplianceLogbook",
    ],
  },
} satisfies Record<
  ServicePathname,
  Record<ServiceCardSection, VisualKey[]>
>;

const englishAlts: Record<string, string> = {
  "/images/generated/commercial-office-hero.webp":
    "Premium commercial office with integrated climate control",
  "/images/generated/ducted-proof-no-cassette.webp":
    "Modern office space with linear duct grilles in the ceiling",
  "/images/generated/small-office-room-card.webp":
    "Compact commercial office room with discreet wall-mounted air conditioning",
  "/images/generated/commercial-office-boardroom-card.webp":
    "Modern meeting room with integrated cassette air conditioning",
  "/images/generated/office-comfort-happy-people.webp":
    "Satisfied colleagues working comfortably beneath commercial air conditioning",
  "/images/generated/business-air-conditioning-hero.webp":
    "Facilities manager and climate advisor walking through a modern commercial office with integrated air conditioning",
  "/images/generated/business-air-conditioning-small-office-hero.png":
    "Compact commercial office with ceiling cassette air conditioning",
  "/images/generated/office-air-conditioning-hero.webp":
    "People working in a modern office with discreetly integrated climate control",
  "/images/generated/commercial-building.webp":
    "Modern commercial reception with ceiling air conditioning",
  "/images/generated/commercial-entrance-reception.webp":
    "Representative commercial entrance and reception area with discreet climate control",
  "/images/generated/commercial-installation-assessment.webp":
    "Air conditioning engineer and facilities manager assessing a commercial installation",
  "/images/generated/commercial-installation-delivery-hero.webp":
    "Engineers installing commercial outdoor units on the roof of a modern office building",
  "/images/generated/commercial-installation-delivery-hero-small-aircon.webp":
    "Engineers installing smaller commercial outdoor units on the roof of a modern office building",
  "/images/generated/commercial-installation-small-building-card-v2.webp":
    "Engineers installing a compact commercial outdoor unit at an older small commercial building",
  "/images/generated/commercial-installation-in-progress.webp":
    "Engineers installing a ceiling cassette unit in a commercial office",
  "/images/generated/commercial-installation-certified-insured-card.png":
    "Certified air conditioning engineers reviewing the handover of a commercial installation",
  "/images/generated/commercial-installation-minimal-disruption-card.webp":
    "Engineer working in a screened-off zone while employees continue working in the office",
  "/images/generated/commercial-warehouse-work-storage.webp":
    "Work and storage space in a commercial hall with visible climate control",
  "/images/generated/retail-cassette.webp":
    "Considered retail space with a ceiling cassette unit",
  "/images/generated/retail-cassette-people.webp":
    "Customers receiving advice in a fashion boutique with ceiling cassette air conditioning",
  "/images/generated/specialist-retail-climate.webp":
    "Specialist retail shop with refrigerated display, electronics and visible climate control",
  "/images/generated/homepage-customer-satisfaction.webp":
    "Satisfied shop owner speaking with an air conditioning engineer beneath a ceiling cassette unit",
  "/images/generated/showroom-cassette.webp":
    "Architectural showroom with multiple ceiling cassette units",
  "/images/generated/cassette-air-conditioning-hero.webp":
    "Ceiling cassette air conditioning integrated into a modern commercial interior",
  "/images/generated/cassette-airflow-comfort-card.webp":
    "Ceiling cassette air conditioning distributing air along the ceiling in a modern office",
  "/images/generated/ducted-detail.webp":
    "Architectural detail of a discreet ducted air conditioning grille",
  "/images/generated/commercial-multizone-floors.webp":
    "Multiple floors in a commercial building with zone-based climate control",
  "/images/generated/wall-model-office.webp":
    "Commercial wall-mounted unit in a modern meeting room",
  "/images/generated/wall-model-canteen-card.webp":
    "Commercial canteen with a wall-mounted air conditioning unit high on the wall",
  "/images/generated/wall-model-installation-card.webp":
    "Engineers installing a wall-mounted air conditioning unit in a commercial office",
  "/images/generated/wall-model-budget-card.webp":
    "Sleek black wall-mounted air conditioning unit in a refined executive office with a stone desk",
  "/images/generated/commercial-system-advice.webp":
    "Air conditioning engineer checking a commercial wall-mounted unit while a facilities manager reviews the plan",
  "/images/generated/commercial-central-climate-control.webp":
    "Facilities manager centrally controls climate zones from a smart control panel",
  "/images/generated/commercial-property-value.webp":
    "Modern commercial property with a high-quality climate installation",
  "/images/generated/maintenance-service.webp":
    "Technician servicing a commercial ceiling cassette unit",
  "/images/generated/commercial-maintenance-indoor-hero.webp":
    "Service engineer inspecting an air filter during scheduled commercial maintenance",
  "/images/generated/commercial-maintenance-clean-air-card.webp":
    "Service engineer reinstalling a clean air filter in a commercial ceiling cassette unit",
  "/images/generated/commercial-maintenance-small-wall-unit-hero.webp":
    "Service engineer maintaining a compact wall-mounted air conditioning unit in a commercial office",
  "/images/generated/commercial-maintenance-rooftop.webp":
    "Service engineer inspecting a commercial outdoor unit on an office rooftop",
  "/images/generated/commercial-maintenance-contract-service-van.png":
    "Service van arriving at a commercial property for air conditioning maintenance",
  "/images/generated/commercial-maintenance-contract-office-mkb-scheduled.png":
    "Service engineer marks scheduled air conditioning maintenance in an SME office",
  "/images/generated/commercial-repair-diagnostics.webp":
    "Service engineer diagnosing a ceiling cassette fault in a commercial office",
  "/images/generated/commercial-repair-outdoor-unit.webp":
    "Service engineer inspecting the electronics of a commercial outdoor unit",
  "/images/generated/commercial-repair-outdoor-unit-summer-polo.webp":
    "Service engineer in a polo shirt inspecting a commercial outdoor unit on a summer office rooftop",
  "/images/generated/commercial-repair-office-leakage.webp":
    "Service engineer repairing a leaking commercial ceiling cassette unit in an office",
  "/images/generated/commercial-maintenance-contract-planning.webp":
    "Facilities manager and service advisor planning commercial air conditioning maintenance",
  "/images/generated/commercial-maintenance-contract-facility-management.png":
    "Facilities manager and service advisor reviewing reporting for multiple commercial properties",
  "/images/generated/homepage-maintenance-contract-signing.webp":
    "Advisor and client signing a commercial maintenance contract at an office desk",
  "/images/generated/commercial-maintenance-contract-inspection.webp":
    "Service engineer recording a scheduled inspection in a commercial plant room",
  "/images/generated/commercial-maintenance-contract-compliance-logbook.png":
    "Service engineer processing an F-gas inspection in a digital logbook",
  "/images/generated/commercial-maintenance-contract-certainty-proof-logo-uniforms.png":
    "Certified installers wearing the Airco@Business logo discuss a neat commercial air conditioning handover",
  "/images/generated/homepage-reliability-maintenance.webp":
    "Service engineer inspecting equipment in a commercial plant room",
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
    ["officeComfort", "customerSatisfaction", "homepageReliability"],
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
      return {
        image: visuals.commercialMaintenanceSmallWallUnit,
        variant: "split",
      };
    }
    if (pathname === "/airco-onderhoudscontract-zakelijk") {
      return { image: visuals.maintenanceContractSigning, variant: "split" };
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
      return visuals.maintenanceContractCertaintyProof;
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
    if (pathname === "/kanaal-airco-bedrijf")
      return visuals.ductedProofNoCassette;
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
