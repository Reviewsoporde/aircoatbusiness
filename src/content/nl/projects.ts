import type { Project } from "../types";

/** Gepubliceerde zakelijke aircoprojecten met door de klant aangeleverde fotografie. */
export const projects: Project[] = [
  {
    slug: "kantoor-zoetermeer",
    status: "published",
    gallery: [],
    facts: [],
    title: "Kantoor in Zoetermeer",
    type: "Kantoor",
    location: "Zoetermeer",
    system: "Cassette airco",
    summary:
      "Een plafondcassette is netjes in het systeemplafond geïntegreerd voor een comfortabel binnenklimaat, zonder bruikbare wandruimte in te nemen.",
    image: {
      src: "/images/projects/kantoor-zoetermeer-enhanced.webp",
      alt: "Plafondcassette in een kantoorruimte in Zoetermeer",
      position: "50% 50%",
    },
    filters: ["office", "cassette"],
    serviceHref: "/airco-kantoor",
    serviceLinkLabel: "Airco voor kantoren",
  },
  {
    slug: "frommesshop-voorschoten",
    status: "published",
    gallery: [],
    facts: [],
    title: "Frommesshop",
    type: "Winkel",
    location: "Voorschoten",
    system: "Cassette airco",
    summary:
      "Een cassette-unit is zorgvuldig in het winkelplafond opgenomen, passend bij het interieur en zonder presentatieruimte aan de wand in te nemen.",
    image: {
      src: "/images/projects/frommesshop-voorschoten-enhanced.webp",
      alt: "Plafondcassette in kledingwinkel Frommesshop in Voorschoten",
      position: "50% 50%",
    },
    filters: ["retail", "cassette"],
    serviceHref: "/airco-winkel",
    serviceLinkLabel: "Airco voor winkels",
  },
  {
    slug: "boekhoudkantoor-adhoc-leiden",
    status: "published",
    gallery: [],
    facts: [],
    title: "Boekhoudkantoor Adhoc",
    type: "Kantoor",
    location: "Leiden",
    system: "Cassette airco",
    summary:
      "Een plafondcassette is centraal in de kantoorruimte geplaatst voor een prettig werkklimaat, met de techniek compact in het systeemplafond.",
    image: {
      src: "/images/projects/boekhoudkantoor-adhoc-leiden-enhanced.webp",
      alt: "Plafondcassette in boekhoudkantoor Adhoc in Leiden",
      position: "50% 50%",
    },
    filters: ["office", "cassette"],
    serviceHref: "/airco-kantoor",
    serviceLinkLabel: "Airco voor kantoren",
  },
];
