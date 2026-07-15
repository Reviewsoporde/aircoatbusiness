import type { Step } from "../types";

/** Factual trust indicators — no fabricated reviews; client reviews follow later. */
export const trustIndicators = [
  "STEK-certified installers with years of experience in commercial installations",
  "Premium A-brands: Daikin, Mitsubishi Electric, LG and Toshiba",
  "Clean, careful finishing — our installers work with respect for your premises and schedule",
  "A dedicated point of contact for advice, installation and maintenance",
  "Active throughout Zuid-Holland, from Leiden to Rotterdam",
];

export const standardProcess: Step[] = [
  {
    title: "Consultation",
    description:
      "We discuss your situation, comfort issues, schedule and requirements.",
  },
  {
    title: "Analysis and advice",
    description:
      "On-site inspection: the space, the capacity and the best-suited system.",
  },
  {
    title: "Proposal and planning",
    description:
      "A clear quotation with system choice, planning and firm agreements.",
  },
  {
    title: "Installation",
    description:
      "Professional installation with minimal disruption to your business operations.",
  },
  {
    title: "Aftercare and maintenance",
    description:
      "Handover, instruction and, if desired, a maintenance contract.",
  },
];

export const repairProcess: Step[] = [
  {
    title: "Report the fault",
    description:
      "Call or email us; we schedule an engineer as soon as possible.",
  },
  {
    title: "System inspection",
    description:
      "The engineer diagnoses the fault on site.",
  },
  {
    title: "Repair advice",
    description:
      "You receive a clear proposal: repair, replace or adjust.",
  },
  {
    title: "Repair and testing",
    description:
      "We carry out the repair and verify that the system works correctly.",
  },
];
