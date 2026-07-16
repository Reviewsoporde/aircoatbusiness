import type { ServicePageContent } from "../types";
import { repairProcess, standardProcess, trustIndicators } from "./shared";

/** Parent: /onderhoud/ - maintenance, repair & contract overview */
export const onderhoud: ServicePageContent = {
  meta: {
    title: "Air conditioning maintenance & service | Airco@Business",
    description:
      "Maintenance, repairs and contracts for commercial air conditioning. Fewer breakdowns, stable performance, longer service life. Active across Zuid-Holland.",
  },
  name: "Maintenance",
  hero: {
    eyebrow: "Maintenance",
    h1: "Maintenance for reliable commercial air conditioning",
    intro:
      "A climate system is business-critical on precisely the days it is hot outside. With periodic maintenance, prompt repairs and clear contracts, we keep your systems reliable, efficient and clean.",
    cta: "requestMaintenance",
    secondary: { label: "Request contract advice", href: "/airco-onderhoudscontract-zakelijk" },
    trustPoints: ["STEK-certified", "Fast response", "All A-brands"],
  },
  overview: {
    h2: "Maintenance, repairs and contracts",
    intro:
      "Three services that together safeguard the service life and performance of your installation:",
    cards: [
      {
        tag: "Preventive",
        title: "Air conditioning maintenance",
        description:
          "Periodic inspection and cleaning that stay ahead of breakdowns and keep efficiency on target.",
        href: "/airco-onderhoud-zakelijk",
        linkLabel: "Commercial air conditioning maintenance",
      },
      {
        tag: "Breakdown",
        title: "Air conditioning repairs",
        description:
          "A fault, a leak or reduced cooling? Fast diagnosis and expert repairs.",
        href: "/airco-reparatie-zakelijk",
        linkLabel: "Commercial air conditioning repairs",
      },
      {
        tag: "Contract",
        title: "Maintenance contracts",
        description:
          "A fixed schedule, priority in the event of breakdowns and predictable costs for your entire installation.",
        href: "/airco-onderhoudscontract-zakelijk",
        linkLabel: "Commercial maintenance contract",
      },
    ],
  },
  benefits: {
    h2: "What good maintenance delivers for your business",
    cards: [
      {
        tag: "Continuity",
        title: "Fewer unexpected breakdowns",
        description:
          "Most summer breakdowns can be traced back to overdue maintenance and can often be prevented with timely servicing.",
      },
      {
        tag: "Efficiency",
        title: "Lower energy consumption",
        description:
          "Clean filters and heat exchangers make an immediate difference to consumption and cooling performance.",
      },
      {
        tag: "Health",
        title: "Cleaner air",
        description:
          "Cleaned filters and condensate drains prevent odours and keep the air quality healthy.",
      },
    ],
  },
  process: {
    h2: "How our maintenance service works",
    steps: standardProcess,
  },
  proof: {
    h2: "Why businesses entrust their maintenance to us",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/airco-onderhoud-zakelijk",
      label: "Commercial air conditioning maintenance",
      description: "What is checked during a maintenance visit.",
    },
    {
      href: "/airco-reparatie-zakelijk",
      label: "Commercial air conditioning repairs",
      description: "Fast help with breakdowns and reduced performance.",
    },
    {
      href: "/airco-onderhoudscontract-zakelijk",
      label: "Commercial maintenance contract",
      description: "A fixed schedule and priority in the event of breakdowns.",
    },
    {
      href: "/contact",
      label: "Book a consultation",
      description: "Discuss the maintenance of your installation.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about maintenance and service",
    items: [
      {
        question: "How often does a commercial air conditioning system need maintenance?",
        answer:
          "For commercial installations we recommend at least one maintenance visit per year; two for intensive use or dusty environments. In a contract we set the right frequency.",
      },
      {
        question: "Do you also maintain installations purchased elsewhere?",
        answer:
          "Yes. We maintain and repair all leading A-brands, even if the installation was not originally fitted by us.",
      },
      {
        question: "What happens if a breakdown occurs anyway?",
        answer:
          "Then our service team is ready to help. Contract customers receive priority in the schedule. This is particularly important during the summer peak.",
      },
      {
        question: "Is maintenance mandatory?",
        answer:
          "Systems with a larger refrigerant charge are subject to statutory inspection requirements (the F-gas regulation). We make sure your installation demonstrably meets those requirements.",
      },
    ],
  },
  form: {
    h2: "Request maintenance",
    service: "maintenance",
  },
};

/** /airco-onderhoud-zakelijk/ - primary keyword: commercial air conditioning maintenance */
export const aircoOnderhoud: ServicePageContent = {
  meta: {
    title: "Commercial air conditioning maintenance | Airco@Business",
    description:
      "Commercial air conditioning maintenance: periodic inspection, cleaning and checks by STEK-certified engineers. Fewer breakdowns and lower energy use.",
  },
  name: "Commercial air conditioning maintenance",
  hero: {
    eyebrow: "Commercial air conditioning maintenance",
    h1: "Air conditioning maintenance that stays ahead of breakdowns",
    intro:
      "Cooling downtime on a tropical day costs more than a maintenance visit. Our engineers periodically inspect, clean and test your installation. This helps it keep performing when it matters most.",
    cta: "requestMaintenance",
    secondary: { label: "Commercial maintenance contract", href: "/airco-onderhoudscontract-zakelijk" },
    trustPoints: ["All A-brands", "STEK-certified", "Report after every visit"],
  },
  overview: {
    h2: "Who is periodic maintenance for?",
    intro:
      "For every business that needs to be able to rely on its climate system and for installations subject to statutory inspections.",
    cards: [
      {
        tag: "Office",
        title: "Offices and practices",
        description:
          "Comfort and air quality for staff and visitors, all year round.",
      },
      {
        tag: "Retail",
        title: "Shops and showrooms",
        description:
          "No downtime during opening hours or busy seasons.",
      },
      {
        tag: "Critical",
        title: "Server and technical rooms",
        description:
          "Cooling that must never fail, demonstrably maintained.",
      },
    ],
  },
  benefits: {
    h2: "The risks of postponing maintenance",
    intro:
      "You do not notice overdue maintenance straight away, at least not until something goes wrong. What happens without maintenance:",
    cards: [
      {
        tag: "Breakdown",
        title: "Failure during the summer peak",
        description:
          "Contaminated systems fail most often on the hottest days, precisely when repair capacity is scarce.",
      },
      {
        tag: "Costs",
        title: "Creeping rise in consumption",
        description:
          "Dirty filters and heat exchangers push energy consumption up step by step without anyone noticing.",
      },
      {
        tag: "Lifespan",
        title: "Faster wear",
        description:
          "A system that constantly runs overloaded wears out years earlier than a well-maintained installation.",
      },
    ],
  },
  scope: {
    h2: "What we check during a maintenance visit",
    items: [
      "Cleaning of filters, indoor units and heat exchangers",
      "Checking refrigerant pressure and leak tightness (F-gas)",
      "Checking and cleaning the condensate drain",
      "Testing electrical connections and controls",
      "Measuring operation and efficiency in cooling and heating mode",
      "A report with findings and advice",
    ],
  },
  process: {
    h2: "How a maintenance visit works",
    steps: [
      {
        title: "Scheduling",
        description:
          "We schedule the visit at a time that affects your business operations the least.",
      },
      {
        title: "Inspection and cleaning",
        description:
          "The engineer works through the complete checklist, from filters to refrigerant.",
      },
      {
        title: "Testing and measurement",
        description:
          "We test the system in operation and measure its performance.",
      },
      {
        title: "Report and advice",
        description:
          "You receive a concise report with findings and any recommendations.",
      },
    ],
  },
  proof: {
    h2: "Maintenance you can build on",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "The complete overview of our service offering.",
    },
    {
      href: "/airco-onderhoudscontract-zakelijk",
      label: "Commercial maintenance contract",
      description: "Maintenance structurally arranged, with priority in the event of breakdowns.",
    },
    {
      href: "/airco-reparatie-zakelijk",
      label: "Commercial air conditioning repairs",
      description: "A fault after all? This is how we resolve it.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about commercial maintenance",
    items: [
      {
        question: "How long does a maintenance visit take?",
        answer:
          "Allow 45-60 minutes for a single unit; for larger installations we plan based on the number of units. You receive a clear time indication in advance.",
      },
      {
        question: "Does the system have to be switched off during maintenance?",
        answer:
          "Briefly, per unit. We work room by room, so the rest of your building remains cooled as usual.",
      },
      {
        question: "Do I receive proof of the maintenance?",
        answer:
          "Yes, you receive a report after every visit. This also matters for warranty purposes and the statutory F-gas records.",
      },
      {
        question: "What does commercial air conditioning maintenance cost?",
        answer:
          "The costs depend on the number and type of units. Under a maintenance contract the costs are fixed and known in advance; request a tailored proposal.",
      },
    ],
  },
  form: {
    h2: "Request a maintenance visit",
    service: "maintenance",
  },
};

/** /airco-reparatie-zakelijk/ - urgent intent: contact CTA in hero */
export const aircoReparatie: ServicePageContent = {
  meta: {
    title: "Commercial air conditioning repairs | Airco@Business",
    description:
      "A fault in your commercial air conditioning? Fast diagnosis and expert repairs of all A-brands by STEK-certified engineers in Zuid-Holland. Report your fault.",
  },
  name: "Commercial air conditioning repairs",
  hero: {
    eyebrow: "Commercial air conditioning repairs",
    h1: "Air conditioning fault? We will be with you fast",
    intro:
      "No cooling, a leaking unit or an error code on the display: with a commercial breakdown, every day counts. Report the fault straight away. We schedule an engineer quickly and repair it expertly.",
    cta: "requestRepair",
    trustPoints: ["Fast response", "All A-brands", "Priority for contract customers"],
    urgent: true,
  },
  overview: {
    h2: "Common faults",
    intro:
      "Do you recognise one of these symptoms? Then an inspection at short notice is advisable:",
    cards: [
      {
        tag: "Cooling",
        title: "Not cooling, or not enough",
        description:
          "The cause is often a refrigerant, filter or sensor problem that is quick to diagnose.",
      },
      {
        tag: "Leakage",
        title: "Water from the indoor unit",
        description:
          "Usually a blocked condensate drain; have it resolved quickly to prevent damage.",
      },
      {
        tag: "Alert",
        title: "Error code or unusual noise",
        description:
          "Error codes and noises point to a specific defect that we can resolve in a targeted way.",
      },
    ],
  },
  benefits: {
    h2: "What we check in the event of a fault",
    cards: [
      {
        tag: "Diagnosis",
        title: "Complete system check",
        description:
          "We read out error codes, measure pressures and temperatures and inspect the entire installation. We look beyond the symptom itself.",
      },
      {
        tag: "Repair",
        title: "Immediate repair where possible",
        description:
          "We resolve common defects on the spot; where parts are needed, you receive a clear proposal right away.",
      },
      {
        tag: "Prevention",
        title: "Advice to prevent recurrence",
        description:
          "After the repair, we advise you on how to prevent the same fault in future.",
      },
    ],
  },
  process: {
    h2: "How we resolve your fault",
    steps: repairProcess,
  },
  proof: {
    h2: "Service that businesses count on",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/airco-onderhoud-zakelijk",
      label: "Commercial air conditioning maintenance",
      description: "Most faults can be prevented with maintenance.",
    },
    {
      href: "/airco-onderhoudscontract-zakelijk",
      label: "Commercial maintenance contract",
      description: "Priority in the event of breakdowns and a fixed maintenance schedule.",
    },
    {
      href: "/contact",
      label: "Direct contact",
      description: "Call or email our service team.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about repairs",
    items: [
      {
        question: "How quickly can an engineer come out?",
        answer:
          "We schedule breakdowns with priority; contract customers come first. Call us for the current response time. We can often attend within a few working days.",
      },
      {
        question: "Do you repair all brands?",
        answer:
          "We repair all leading A-brands, including Daikin, Mitsubishi Electric, LG and Toshiba, even when the installation was not fitted by us.",
      },
      {
        question: "What does a repair cost?",
        answer:
          "After the diagnosis, you always receive a clear proposal with the costs first. That way you decide before we carry out the repair.",
      },
      {
        question: "Can I work on the installation myself?",
        answer:
          "Only a certified company may work on the refrigerant circuit. You can clean the filters yourself; leave everything else to our engineers.",
      },
    ],
  },
  form: {
    h2: "Report your fault",
    service: "repairs",
  },
};

/** /airco-onderhoudscontract-zakelijk/ - maintenance contracts */
export const onderhoudscontract: ServicePageContent = {
  meta: {
    title: "Air conditioning maintenance contracts | Airco@Business",
    description:
      "A commercial air conditioning maintenance contract: a fixed maintenance schedule, priority in the event of breakdowns and predictable costs. Request advice.",
  },
  name: "Maintenance contracts",
  hero: {
    eyebrow: "Maintenance contract",
    h1: "A maintenance contract: your climate structurally taken care of",
    intro:
      "Never having to think about maintenance again. With a maintenance contract, we schedule the visits, you receive priority in the event of breakdowns and you know the annual cost per unit in advance.",
    cta: "requestContractAdvice",
    secondary: { label: "Commercial air conditioning maintenance", href: "/airco-onderhoud-zakelijk" },
    trustPoints: ["Fixed annual schedule", "Priority in the event of breakdowns", "Predictable costs"],
  },
  overview: {
    h2: "Who is a maintenance contract for?",
    intro:
      "For organisations that want certainty about their indoor climate without having to think about it:",
    cards: [
      {
        tag: "SME",
        title: "Offices and SMEs",
        description:
          "One fixed amount per year, with maintenance scheduled automatically.",
      },
      {
        tag: "Retail",
        title: "Shops and hospitality",
        description:
          "Maintenance outside opening hours and fast help during the season.",
      },
      {
        tag: "Management",
        title: "Property and facility management",
        description:
          "Multiple buildings or installations under one agreement, with reporting.",
      },
    ],
  },
  benefits: {
    h2: "What the contract delivers for your business",
    cards: [
      {
        tag: "Continuity",
        title: "Maximum availability",
        description:
          "Periodic maintenance plus priority in the event of breakdowns means a minimal risk of downtime, especially during the summer peak.",
      },
      {
        tag: "Financial",
        title: "Predictable costs",
        description:
          "A fixed contract price per year; no surprises on the service invoice.",
      },
      {
        tag: "Compliance",
        title: "Demonstrably compliant",
        description:
          "F-gas inspections and the logbook are maintained and reported automatically.",
      },
    ],
  },
  scope: {
    h2: "What the contract includes",
    items: [
      "Periodic maintenance visits according to a fixed annual schedule",
      "A complete inspection and cleaning checklist per visit",
      "Priority in the breakdown schedule",
      "Reporting and F-gas records per installation",
      "Fixed rates for work outside the contract",
      "One point of contact for all your locations",
    ],
  },
  process: {
    h2: "How we set up the contract",
    steps: [
      {
        title: "Survey",
        description:
          "We map out your installations, units and intensity of use.",
      },
      {
        title: "Tailored proposal",
        description:
          "You receive a contract proposal with frequency, coverage and a fixed price.",
      },
      {
        title: "Annual schedule",
        description:
          "Once agreed, we schedule all visits ahead of time, aligned with your calendar.",
      },
      {
        title: "Execution and reporting",
        description:
          "We carry out the work, report on it and flag anything that needs attention in good time.",
      },
    ],
  },
  proof: {
    h2: "Certainty for your organisation",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/airco-onderhoud-zakelijk",
      label: "Commercial air conditioning maintenance",
      description: "What a maintenance visit involves exactly.",
    },
    {
      href: "/airco-reparatie-zakelijk",
      label: "Commercial air conditioning repairs",
      description: "How our breakdown service works.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "The complete service overview.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about maintenance contracts",
    items: [
      {
        question: "What does a maintenance contract cost?",
        answer:
          "The contract price depends on the number of units, the type of installation and the desired frequency. After a short survey, you receive a fixed annual amount.",
      },
      {
        question: "Is a contract possible for installations of another brand?",
        answer:
          "Yes, we contract maintenance for all leading A-brands, including installations that were not originally fitted by us.",
      },
      {
        question: "What is the term of the contract?",
        answer:
          "Contracts typically run per year and can be cancelled annually. Multi-year agreements with fixed rates are possible.",
      },
      {
        question: "Are repairs included in the contract?",
        answer:
          "The standard contract covers preventive maintenance and provides priority plus fixed rates for repairs. All-in coverage can be discussed on request.",
      },
    ],
  },
  form: {
    h2: "Request contract advice",
    service: "maintenanceContract",
  },
};
