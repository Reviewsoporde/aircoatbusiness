import type { AppPathname } from "@/i18n/routing";

/** Key into messages common.* — CTA labels are fixed per page type (docs/page-templates.md §1) */
export type CtaKey =
  | "requestQuote"
  | "planConsultation"
  | "requestSystemAdvice"
  | "requestMaintenance"
  | "requestContractAdvice"
  | "requestRepair";

export type ServiceOption =
  | "businessAC"
  | "installation"
  | "maintenance"
  | "repairs"
  | "maintenanceContract"
  | "systemAdvice"
  | "projectConsultation"
  | "notSure";

export type PropertyOption =
  | "office"
  | "commercialBuilding"
  | "retail"
  | "showroom"
  | "other";

export type ImgRef = {
  src: string;
  alt: string;
  /** CSS object-position value, e.g. "62% 40%", for responsive art direction. */
  position?: string;
};

export type HeroVariant = "image-led" | "split" | "type-led" | "urgent";

export type Card = {
  /** short mono tag rendered above the title, e.g. "KANTOOR" or "STAP 2" */
  tag?: string;
  title: string;
  description: string;
  href?: AppPathname;
  linkLabel?: string;
  image?: ImgRef;
};

export type Step = { title: string; description: string };

export type FAQItem = { question: string; answer: string };

export type RelatedLink = {
  href: AppPathname;
  label: string;
  description: string;
};

export type SectionCards = {
  h2: string;
  intro?: string;
  cards: Card[];
};

export type Review = {
  author: string;
  company?: string;
  rating?: number;
  dateLabel?: string;
  text: string;
  serviceLabel: string;
  sourceUrl?: string;
};

export type ReviewSection = {
  h2: string;
  intro: string;
  platformLabel: string;
  reviewCountLabel: string;
  ratingValue: number;
  ratingLabel: string;
  reviewUrl: string;
  items: Review[];
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  system: string;
  summary: string;
  image?: ImgRef;
  filters: string[];
  serviceHref: AppPathname;
  /** Descriptive anchor for the service link (anchor-text rules §5) */
  serviceLinkLabel: string;
  status: "draft" | "published";
  gallery: ImgRef[];
  facts: { label: string; value: string }[];
};

/** Universal 7-section service page (docs/page-templates.md §3) */
export type ServicePageContent = {
  meta: { title: string; description: string };
  /** Short page name — breadcrumbs + Service JSON-LD */
  name: string;
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
    cta: CtaKey;
    /** Same-page anchor for the primary CTA (pages that host the lead form themselves) */
    ctaAnchor?: `#${string}`;
    secondary?: { label: string; href: AppPathname };
    trustPoints: string[];
    image?: ImgRef;
    variant?: HeroVariant;
    /** Repair page: renders phone CTA prominently in the hero */
    urgent?: boolean;
  };
  overview: SectionCards;
  benefits: SectionCards;
  /** Checklist section — parent pages omit this (child cards live in overview) */
  scope?: { h2: string; intro?: string; items: string[] };
  process: { h2: string; steps: Step[] };
  proof: {
    h2: string;
    indicators: string[];
    reviews?: Review[];
    image?: ImgRef;
  };
  related: RelatedLink[];
  faq: { h2: string; items: FAQItem[] };
  form: {
    h2: string;
    service: ServiceOption;
    propertyType?: PropertyOption;
  };
};

export type ProjectsPageContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  filterAllLabel: string;
  filters: { value: string; label: string }[];
  serviceLinks: RelatedLink[];
};

export type ProcessPageContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  steps: (Step & { details: [string, string, string, string] })[];
  faq: { h2: string; items: FAQItem[] };
};

export type ContactPageContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string; image: ImgRef };
  contactOptions: {
    h2: string;
    intro: string;
    phone: { title: string; body: string };
    email: { title: string; body: string };
    route: { title: string; body: string; label: string };
  };
  form: { eyebrow: string; h2: string; intro: string };
  serviceArea: {
    eyebrow: string;
    h2: string;
    body: string;
    mapTitle: string;
    detailsTitle: string;
    addressLabel: string;
    hoursLabel: string;
    registrationLabel: string;
    routeLabel: string;
  };
  faq: { h2: string; items: FAQItem[] };
};

export type AboutPageContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  story: { h2: string; paragraphs: string[] };
  usps: SectionCards;
  team: { h2: string; body: string; images: ImgRef[] };
};

export type FaqPageContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  groups: { title: string; items: FAQItem[] }[];
};

export type AreaPageContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
    image?: ImgRef;
    variant?: HeroVariant;
  };
  region: { h2: string; body: string };
  cities: { name: string; blurb: string }[];
  beyond: string;
};

export type BrandsPageContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  brands: { name: string; logo: string; description: string }[];
  systems: { h2: string; intro: string; links: RelatedLink[] };
};

export type LegalPageContent = {
  meta: { title: string; description: string };
  h1: string;
  updated: string;
  sections: { h2: string; paragraphs: string[] }[];
};

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
  };
  trustBar: string[];
  categories: SectionCards;
  propertyTypes: SectionCards;
  systems: SectionCards;
  whyClimate: SectionCards;
  maintenance: SectionCards;
  process: { h2: string; steps: Step[]; linkLabel: string };
  maintenanceOffer: { h2: string; body: string };
  projects: { h2: string; intro?: string };
  reviews: ReviewSection;
  serviceArea: { h2: string; body: string; cities: string[] };
  form: { h2: string };
  faq: { h2: string; items: FAQItem[] };
  residential: { text: string; linkLabel: string };
};
