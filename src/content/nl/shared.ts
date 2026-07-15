import type { Step } from "../types";

/** Factual trust indicators; verified Google reviews live in the homepage content. */
export const trustIndicators = [
  "STEK-gecertificeerde monteurs met jarenlange ervaring in zakelijke installaties",
  "Premium A-merken: Daikin, Mitsubishi Electric, LG en Toshiba",
  "Nette, verzorgde afwerking — onze monteurs werken met respect voor uw pand en planning",
  "Persoonlijk aanspreekpunt voor advies, installatie en onderhoud",
  "Actief in heel Zuid-Holland, van Leiden tot Rotterdam",
];

export const standardProcess: Step[] = [
  {
    title: "Adviesgesprek",
    description:
      "We bespreken uw situatie, comfortklachten, planning en wensen.",
  },
  {
    title: "Analyse en advies",
    description:
      "Inspectie op locatie: ruimte, capaciteit en het best passende systeem.",
  },
  {
    title: "Voorstel en planning",
    description:
      "Een heldere offerte met systeemkeuze, planning en vaste afspraken.",
  },
  {
    title: "Installatie",
    description:
      "Vakkundige montage met minimale verstoring van uw bedrijfsvoering.",
  },
  {
    title: "Nazorg en onderhoud",
    description:
      "Oplevering, instructie en desgewenst een onderhoudscontract.",
  },
];

export const repairProcess: Step[] = [
  {
    title: "Storing melden",
    description:
      "Bel of mail ons; we plannen zo snel mogelijk een monteur in.",
  },
  {
    title: "Inspectie van het systeem",
    description:
      "De monteur stelt op locatie een diagnose van de storing.",
  },
  {
    title: "Reparatie-advies",
    description:
      "U ontvangt een duidelijk voorstel: herstellen, vervangen of bijstellen.",
  },
  {
    title: "Reparatie en controle",
    description:
      "We voeren de reparatie uit en controleren de werking van het systeem.",
  },
];
