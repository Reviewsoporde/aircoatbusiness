import type { Project } from "../types";

/** Published commercial air conditioning projects with client-supplied photography. */
export const projects: Project[] = [
  {
    slug: "office-zoetermeer",
    status: "published",
    gallery: [],
    facts: [],
    title: "Office in Zoetermeer",
    type: "Office",
    location: "Zoetermeer",
    system: "Cassette air conditioning",
    summary:
      "A ceiling cassette was neatly integrated into the suspended ceiling to support a comfortable office climate without taking up usable wall space.",
    image: {
      src: "/images/projects/kantoor-zoetermeer-enhanced.webp",
      alt: "Ceiling cassette in an office in Zoetermeer",
      position: "50% 50%",
    },
    filters: ["office", "cassette"],
    serviceHref: "/airco-kantoor",
    serviceLinkLabel: "Air conditioning for offices",
  },
  {
    slug: "frommesshop-voorschoten",
    status: "published",
    gallery: [],
    facts: [],
    title: "Frommesshop",
    type: "Shop",
    location: "Voorschoten",
    system: "Cassette air conditioning",
    summary:
      "A cassette unit was carefully integrated into the shop ceiling to complement the interior without taking up valuable wall display space.",
    image: {
      src: "/images/projects/frommesshop-voorschoten-enhanced.webp",
      alt: "Ceiling cassette in Frommesshop clothing shop in Voorschoten",
      position: "50% 50%",
    },
    filters: ["retail", "cassette"],
    serviceHref: "/airco-winkel",
    serviceLinkLabel: "Air conditioning for shops",
  },
  {
    slug: "adhoc-accountancy-office-leiden",
    status: "published",
    gallery: [],
    facts: [],
    title: "Adhoc accountancy office",
    type: "Office",
    location: "Leiden",
    system: "Cassette air conditioning",
    summary:
      "A ceiling cassette was positioned centrally in the office for a comfortable working climate, with the equipment compactly housed in the suspended ceiling.",
    image: {
      src: "/images/projects/boekhoudkantoor-adhoc-leiden-enhanced.webp",
      alt: "Ceiling cassette in the Adhoc accountancy office in Leiden",
      position: "50% 50%",
    },
    filters: ["office", "cassette"],
    serviceHref: "/airco-kantoor",
    serviceLinkLabel: "Air conditioning for offices",
  },
];
