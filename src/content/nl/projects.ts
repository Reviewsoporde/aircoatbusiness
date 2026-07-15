import type { Project } from "../types";

/**
 * DRAFT project entries based on the client brief (AVDT, Inventex, offices,
 * clothing store). Summaries and systems are placeholders pending client
 * materials — confirm details and add project photography before go-live.
 */
export const projects: Project[] = [
  {
    slug: "avdt",
    status: "draft",
    gallery: [],
    facts: [],
    title: "Kantoor AVDT",
    type: "Kantoor",
    location: "Zuid-Holland",
    system: "Cassette airco · multi-split",
    summary:
      "Kantooretage voorzien van cassette-units met per zone regelbare temperatuur, geïnstalleerd met minimale verstoring van de werkdag.",
    filters: ["office", "cassette"],
    serviceHref: "/airco-kantoor",
    serviceLinkLabel: "Airco voor kantoren",
  },
  {
    slug: "inventex",
    status: "draft",
    gallery: [],
    facts: [],
    title: "Bedrijfspand Inventex",
    type: "Bedrijfspand",
    location: "Zuid-Holland",
    system: "Kanaal airco · meerdere zones",
    summary:
      "Pandbrede klimaatoplossing met kanaalsysteem: kantoren, werkruimte en ontvangst bediend vanuit één installatie.",
    filters: ["commercialBuilding", "ducted"],
    serviceHref: "/airco-bedrijfspand",
    serviceLinkLabel: "Airco voor bedrijfspanden",
  },
  {
    slug: "modewinkel",
    status: "draft",
    gallery: [],
    facts: [],
    title: "Modewinkel",
    type: "Winkel",
    location: "Zuid-Holland",
    system: "Cassette airco",
    summary:
      "Winkelklimaat zonder zichtbare techniek: cassette-units in het systeemplafond, installatie volledig buiten openingstijden uitgevoerd.",
    filters: ["retail", "cassette"],
    serviceHref: "/airco-winkel",
    serviceLinkLabel: "Airco voor winkels",
  },
];
