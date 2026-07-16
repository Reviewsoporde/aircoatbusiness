import type { Project } from "../types";

/**
 * DRAFT project entries based on the client brief (AVDT, Inventex, offices,
 * clothing store). Summaries and systems are placeholders pending client
 * materials - confirm details and add project photography before go-live.
 */
export const projects: Project[] = [
  {
    slug: "avdt",
    status: "draft",
    gallery: [],
    facts: [],
    title: "AVDT office",
    type: "Office",
    location: "Zuid-Holland",
    system: "Cassette air conditioning · multi-split",
    summary:
      "Office floor fitted with cassette units offering per-zone temperature control, installed with minimal disruption to the working day.",
    filters: ["office", "cassette"],
    serviceHref: "/airco-kantoor",
    serviceLinkLabel: "Air conditioning for offices",
  },
  {
    slug: "inventex",
    status: "draft",
    gallery: [],
    facts: [],
    title: "Inventex commercial building",
    type: "Commercial building",
    location: "Zuid-Holland",
    system: "Ducted air conditioning · multiple zones",
    summary:
      "Building-wide climate solution with a ducted system: offices, workspace and reception served from a single installation.",
    filters: ["commercialBuilding", "ducted"],
    serviceHref: "/airco-bedrijfspand",
    serviceLinkLabel: "Air conditioning for commercial buildings",
  },
  {
    slug: "modewinkel",
    status: "draft",
    gallery: [],
    facts: [],
    title: "Fashion boutique",
    type: "Shop",
    location: "Zuid-Holland",
    system: "Cassette air conditioning",
    summary:
      "A retail climate without visible equipment: cassette units in the suspended ceiling, with the installation carried out entirely outside opening hours.",
    filters: ["retail", "cassette"],
    serviceHref: "/airco-winkel",
    serviceLinkLabel: "Air conditioning for shops",
  },
];
