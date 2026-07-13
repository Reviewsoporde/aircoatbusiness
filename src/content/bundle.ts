import type {
  AboutPageContent,
  AreaPageContent,
  BrandsPageContent,
  ContactPageContent,
  FaqPageContent,
  HomeContent,
  LegalPageContent,
  ProcessPageContent,
  Project,
  ProjectsPageContent,
  ServicePageContent,
} from "./types";

/** Internal route slugs of the 14 service pages (= app dir folder names). */
export type ServiceKey =
  | "zakelijke-airconditioning"
  | "airco-kantoor"
  | "airco-bedrijfspand"
  | "airco-winkel"
  | "airco-showroom"
  | "installatie"
  | "zakelijke-airco-installatie"
  | "cassette-airco-bedrijf"
  | "kanaal-airco-bedrijf"
  | "wandmodel-airco-bedrijf"
  | "onderhoud"
  | "airco-onderhoud-zakelijk"
  | "airco-reparatie-zakelijk"
  | "airco-onderhoudscontract-zakelijk";

/** Breadcrumb parents per docs/site-architecture.md §1. */
export const serviceParents: Partial<Record<ServiceKey, ServiceKey>> = {
  "airco-kantoor": "zakelijke-airconditioning",
  "airco-bedrijfspand": "zakelijke-airconditioning",
  "airco-winkel": "zakelijke-airconditioning",
  "airco-showroom": "zakelijke-airconditioning",
  "zakelijke-airco-installatie": "installatie",
  "cassette-airco-bedrijf": "installatie",
  "kanaal-airco-bedrijf": "installatie",
  "wandmodel-airco-bedrijf": "installatie",
  "airco-onderhoud-zakelijk": "onderhoud",
  "airco-reparatie-zakelijk": "onderhoud",
  "airco-onderhoudscontract-zakelijk": "onderhoud",
};

export type Bundle = {
  home: HomeContent;
  projects: Project[];
  services: Record<ServiceKey, ServicePageContent>;
  projectenPage: ProjectsPageContent;
  werkwijzePage: ProcessPageContent;
  contactPage: ContactPageContent;
  overOnsPage: AboutPageContent;
  faqPage: FaqPageContent;
  werkgebiedPage: AreaPageContent;
  merkenPage: BrandsPageContent;
  privacyPage: LegalPageContent;
  cookiePage: LegalPageContent;
};
