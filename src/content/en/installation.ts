import type { ServicePageContent } from "../types";
import { standardProcess, trustIndicators } from "./shared";

/** Parent: /installatie/ — installation & system-selection overview */
export const installatie: ServicePageContent = {
  meta: {
    title: "Air conditioning installation | Systems | Airco@Business",
    description:
      "Commercial air conditioning installation: from system selection and planning to tidy fitting by STEK-certified engineers. Cassette, ducted and wall-mounted systems in Zuid-Holland.",
  },
  name: "Installation",
  hero: {
    eyebrow: "Installation",
    h1: "Air conditioning installation for businesses: from system selection to handover",
    intro:
      "A good installation starts well before installation day. We take system selection, capacity calculation, planning and finishing off your hands — so your new climate system delivers what it promises from day one.",
    cta: "planConsultation",
    secondary: { label: "Request a business quote", href: "/contact" },
    trustPoints: ["Our own engineers", "STEK-certified", "Fixed schedule"],
    image: {
      src: "/images/commercial-installation.webp",
      alt: "Commercial air conditioning installation by Airco@Business engineers",
    },
  },
  overview: {
    h2: "Installation and systems",
    intro:
      "Go straight to the installation service or first explore the systems we install for business spaces.",
    cards: [
      {
        tag: "Service",
        title: "Commercial air conditioning installation",
        description:
          "The complete installation service: advice, planning, fitting and handover.",
        href: "/zakelijke-airco-installatie",
        linkLabel: "Commercial air conditioning installation",
      },
      {
        tag: "System",
        title: "Cassette air conditioning",
        description:
          "Ceiling-recessed with four-way air distribution — the standard for offices and shops.",
        href: "/cassette-airco-bedrijf",
        linkLabel: "Cassette air conditioning for business",
      },
      {
        tag: "System",
        title: "Ducted air conditioning",
        description:
          "A fully concealed system for larger spaces and multiple zones.",
        href: "/kanaal-airco-bedrijf",
        linkLabel: "Ducted air conditioning for business",
      },
      {
        tag: "System",
        title: "Wall-mounted air conditioning",
        description:
          "A compact solution for individual rooms and smaller offices.",
        href: "/wandmodel-airco-bedrijf",
        linkLabel: "Wall-mounted air conditioning for business",
      },
    ],
  },
  benefits: {
    h2: "Why professional installation makes the difference",
    cards: [
      {
        tag: "Capacity",
        title: "Calculated, not estimated",
        description:
          "An undersized system keeps running without results; an oversized system wastes energy. We calculate the capacity for each room.",
      },
      {
        tag: "Finishing",
        title: "Neat, well-considered fitting",
        description:
          "Pipework tidily concealed, outdoor units positioned intelligently and workstations screened off during the work.",
      },
      {
        tag: "Assurance",
        title: "Certified and insured",
        description:
          "STEK-certified engineers install in accordance with the applicable F-gas regulations, with a warranty on both system and workmanship.",
      },
    ],
  },
  process: {
    h2: "Our installation approach",
    steps: standardProcess,
  },
  proof: {
    h2: "Installations we are proud of",
    indicators: trustIndicators,
    image: {
      src: "/images/commercial-installation.webp",
      alt: "Completed commercial air conditioning installation",
    },
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Commercial air conditioning",
      description: "Solutions per type of business space, from office to showroom.",
    },
    {
      href: "/projecten",
      label: "Commercial air conditioning projects",
      description: "See how recent installations were carried out.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Keep your new installation in top condition.",
    },
    {
      href: "/contact",
      label: "Book a consultation",
      description: "Discuss your installation plans with an adviser.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about air conditioning installation",
    items: [
      {
        question: "How long does a commercial air conditioning installation take?",
        answer:
          "A single room is usually completed within one day. Larger projects with multiple zones are scheduled in phases, aligned with your operations.",
      },
      {
        question: "Which system suits my business space?",
        answer:
          "We determine that on site: ceiling type, floor area, zoning and appearance all play a part. Cassettes often suit offices and shops, ducted systems suit larger open spaces and wall-mounted units suit individual rooms.",
      },
      {
        question: "Do you also handle permits or coordination with the owners' association?",
        answer:
          "We actively advise on the positioning of outdoor units, noise requirements and any coordination with the building owner or owners' association, and supply the specifications needed for it.",
      },
      {
        question: "Do I get a warranty on the installation?",
        answer:
          "Yes, you receive the manufacturer's warranty on the system and a warranty on our workmanship. With a maintenance contract, the manufacturer's warranty also remains fully safeguarded.",
      },
    ],
  },
  form: {
    h2: "Plan your installation with a quote",
    service: "installation",
  },
};

/** /zakelijke-airco-installatie/ — primary keyword: commercial air conditioning installation */
export const zakelijkeInstallatie: ServicePageContent = {
  meta: {
    title: "Commercial air conditioning installation | Airco@Business",
    description:
      "Having commercial air conditioning installed? Capacity calculation, system advice and tidy fitting by STEK-certified engineers. Active across Zuid-Holland.",
  },
  name: "Commercial air conditioning installation",
  hero: {
    eyebrow: "Commercial air conditioning installation",
    h1: "Commercial air conditioning installation without surprises",
    intro:
      "From first inspection to a working installation: one team that advises, plans and fits. With a fixed schedule, neat finishing and a system sized for your space — not for an average.",
    cta: "planConsultation",
    secondary: { label: "View the systems", href: "/installatie" },
    trustPoints: ["Capacity calculated per room", "Fixed completion date", "Workstations remain usable"],
  },
  overview: {
    h2: "Who is this installation service for?",
    intro:
      "For business owners and facility managers who want one responsible party for the entire project — in new and existing buildings alike.",
    cards: [
      {
        tag: "New",
        title: "First installation",
        description:
          "Your building has no cooling yet and summers are not getting any cooler. Time for a system that fits the space.",
      },
      {
        tag: "Replacement",
        title: "Replacement of outdated systems",
        description:
          "Your current installation is due for replacement or no longer complies with the F-gas regulations.",
      },
      {
        tag: "Expansion",
        title: "Expansion of existing installations",
        description:
          "Connect extra zones or rooms to your existing system, without starting from scratch.",
      },
    ],
  },
  benefits: {
    h2: "Why professional installation pays off",
    cards: [
      {
        tag: "Return",
        title: "Right capacity, lower costs",
        description:
          "A correctly sized system consumes less, wears more slowly and keeps comfort constant.",
      },
      {
        tag: "Regulations",
        title: "Compliant with F-gas regulations",
        description:
          "Commercial installations must be fitted by certified engineers. Our STEK certification guarantees that.",
      },
      {
        tag: "Continuity",
        title: "Minimal disruption",
        description:
          "Clear phasing, tidy screening and handover per zone: your team notices as little of the work as possible.",
      },
    ],
  },
  scope: {
    h2: "What the installation includes",
    items: [
      "On-site inspection and capacity calculation per room",
      "System advice with clear trade-offs per option",
      "Complete fitting: indoor units, outdoor unit, pipework and wiring",
      "Neat finishing of trunking and wall penetrations",
      "Commissioning, testing and handover with user instructions",
      "Optional: a maintenance contract from day one",
    ],
  },
  process: {
    h2: "The installation process step by step",
    steps: standardProcess,
  },
  proof: {
    h2: "Recent installation projects",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette air conditioning for business",
      description: "Ceiling-recessed with even air distribution.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Ducted air conditioning for business",
      description: "An invisible system for larger spaces and zones.",
    },
    {
      href: "/wandmodel-airco-bedrijf",
      label: "Wall-mounted air conditioning for business",
      description: "A compact solution for individual rooms.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Protect your investment with periodic maintenance.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about commercial installation",
    items: [
      {
        question: "What does a commercial air conditioning installation cost?",
        answer:
          "That depends on the number of rooms, the system type and the structural situation. After the on-site inspection you receive a quote with fixed prices, with no surprises afterwards.",
      },
      {
        question: "Can you install outside office hours?",
        answer:
          "Yes. For shops, showrooms and busy offices we regularly schedule fitting in the evening, at the weekend or phased per zone.",
      },
      {
        question: "Where will the outdoor unit be placed?",
        answer:
          "On the roof, on the facade or at ground level — we recommend a position that works acoustically and aesthetically and complies with the regulations.",
      },
      {
        question: "How soon can the installation take place?",
        answer:
          "Once the quote is approved, we usually schedule within a few weeks. Spring is the busiest period; if you want cooling before summer, it pays to act early.",
      },
    ],
  },
  form: {
    h2: "Request an installation quote",
    service: "installation",
  },
};

/** /cassette-airco-bedrijf/ — primary keyword: cassette air conditioning for business */
export const cassetteAirco: ServicePageContent = {
  meta: {
    title: "Cassette air conditioning for business | Airco@Business",
    description:
      "Cassette air conditioning for offices, shops and business spaces: ceiling-integrated, four-way air distribution and quiet operation. Advice and installation in Zuid-Holland.",
  },
  name: "Cassette air conditioning",
  hero: {
    eyebrow: "Cassette air conditioning",
    h1: "Cassette air conditioning: discreet in the ceiling, even throughout the room",
    intro:
      "The cassette unit is the standard in offices and shops for good reason: it disappears into the suspended ceiling and distributes air in four directions — without draughts at the workstations below.",
    cta: "requestSystemAdvice",
    secondary: { label: "View all systems", href: "/installatie" },
    trustPoints: ["Four-way air distribution", "Fits suspended ceilings", "Cools and heats"],
  },
  overview: {
    h2: "Where cassette air conditioning works best",
    intro:
      "Cassettes are designed for spaces with a (suspended) ceiling and an open character. Typical applications:",
    cards: [
      {
        tag: "Office",
        title: "Open-plan and regular offices",
        description:
          "Even cooling across the entire floor, controllable per unit.",
      },
      {
        tag: "Retail",
        title: "Shops",
        description:
          "Climate control without visible equipment in the shop's presentation.",
      },
      {
        tag: "Hospitality & more",
        title: "Meeting and reception rooms",
        description:
          "Comfort in presentable spaces with varying occupancy.",
      },
    ],
  },
  benefits: {
    h2: "When the cassette is the right choice",
    cards: [
      {
        tag: "Comfort",
        title: "Cooling without draughts",
        description:
          "The four-way outlet distributes air along the ceiling, so nobody sits directly in the airflow.",
      },
      {
        tag: "Aesthetics",
        title: "Flush with the ceiling",
        description:
          "Only the grille remains visible, level with the ceiling tiles. Equipment and pipework stay out of sight.",
      },
      {
        tag: "Flexible",
        title: "Scalable per zone",
        description:
          "Multiple cassettes on one outdoor unit, each room individually controllable.",
      },
    ],
  },
  scope: {
    h2: "What we assess before recommending a cassette",
    items: [
      "Ceiling type and free installation height above the ceiling tiles",
      "Floor area and heat load of the room",
      "Number of units and positions for even distribution",
      "Noise requirements of the room",
      "Pipe route to the outdoor unit",
      "Coordination with lighting, sprinklers and ventilation in the ceiling",
    ],
  },
  process: {
    h2: "How we install a cassette system",
    steps: standardProcess,
  },
  proof: {
    h2: "Cassette installations in practice",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Installation",
      description: "Our complete installation approach and all systems.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Commercial air conditioning installation",
      description: "The full installation process, from advice to handover.",
    },
    {
      href: "/airco-kantoor",
      label: "Air conditioning for offices",
      description: "Climate solutions specifically for office environments.",
    },
    {
      href: "/airco-winkel",
      label: "Air conditioning for shops",
      description: "Comfort that suits your shop's presentation.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about cassette air conditioning",
    items: [
      {
        question: "Does a cassette fit in every ceiling?",
        answer:
          "Cassettes require a suspended or lowered ceiling with sufficient free height (indicatively 25–30 cm). During the inspection we measure whether your ceiling is suitable.",
      },
      {
        question: "How much space does one cassette cool?",
        answer:
          "Depending on capacity and heat load, one cassette serves roughly 25 to 80 m². The right numbers and positions follow from the on-site calculation.",
      },
      {
        question: "Is cassette air conditioning quiet enough for offices?",
        answer:
          "Yes. In practice, cassettes in office environments run at low fan speed and disappear into the normal background sound.",
      },
      {
        question: "Can a cassette also provide heating?",
        answer:
          "Yes, cassettes are fully fledged heat pumps and heat energy-efficiently in winter — often as a supplement to or replacement for traditional heating.",
      },
    ],
  },
  form: {
    h2: "Request system advice for cassette air conditioning",
    service: "systemAdvice",
  },
};

/** /kanaal-airco-bedrijf/ — primary keyword: ducted air conditioning for business */
export const kanaalAirco: ServicePageContent = {
  meta: {
    title: "Ducted air conditioning for business | Airco@Business",
    description:
      "Ducted air conditioning for business spaces: fully concealed above the ceiling, ideal for larger spaces and multiple zones. Advice and installation in Zuid-Holland.",
  },
  name: "Ducted air conditioning",
  hero: {
    eyebrow: "Ducted air conditioning",
    h1: "Ducted air conditioning: complete climate control, completely out of sight",
    intro:
      "With a ducted system, the equipment is fully concealed above the ceiling; only sleek grilles remain visible. One unit serves multiple rooms or one large space through air ducts — quietly and evenly.",
    cta: "requestSystemAdvice",
    secondary: { label: "View all systems", href: "/installatie" },
    trustPoints: ["Completely invisible", "Multiple rooms per unit", "Very quiet operation"],
  },
  overview: {
    h2: "Where a ducted system works best",
    intro:
      "Ducted air conditioning is the choice for those who want equipment out of sight or want to serve multiple rooms from a single unit:",
    cards: [
      {
        tag: "Open space",
        title: "Large open spaces",
        description:
          "Showrooms and larger office floors with even air distribution through multiple grilles.",
      },
      {
        tag: "Multi-room",
        title: "Multiple rooms on one unit",
        description:
          "Offices, meeting rooms and corridor zones served from a single concealed unit.",
      },
      {
        tag: "Design",
        title: "Spaces where aesthetics matter",
        description:
          "Hotels, practices and presentable spaces without visible units.",
      },
    ],
  },
  benefits: {
    h2: "When the ducted model is the right choice",
    cards: [
      {
        tag: "Aesthetics",
        title: "Only grilles in view",
        description:
          "The unit, pipework and ducts sit above the ceiling. The interior remains completely clean.",
      },
      {
        tag: "Comfort",
        title: "Whisper-quiet results",
        description:
          "Because the unit is positioned away from the room, a ducted system is virtually inaudible in the room itself.",
      },
      {
        tag: "Efficient",
        title: "One system, multiple zones",
        description:
          "Air ducts distribute the capacity intelligently across rooms — fewer units, fewer maintenance points.",
      },
    ],
  },
  scope: {
    h2: "What we assess before recommending a ducted system",
    items: [
      "Available space above the ceiling for the unit and ducts",
      "Duct routes and positions of intake and supply grilles",
      "Capacity and air volumes per room",
      "Noise requirements and attenuation in the ductwork",
      "Accessibility of the unit for maintenance",
      "Combination with existing ventilation",
    ],
  },
  process: {
    h2: "How we install a ducted system",
    steps: standardProcess,
  },
  proof: {
    h2: "Ducted projects in practice",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Installation",
      description: "Our complete installation approach and all systems.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Commercial air conditioning installation",
      description: "The full installation process, from advice to handover.",
    },
    {
      href: "/airco-bedrijfspand",
      label: "Air conditioning for commercial buildings",
      description: "Building-wide climate solutions with multiple zones.",
    },
    {
      href: "/airco-showroom",
      label: "Air conditioning for showrooms",
      description: "A presentable climate for presentation spaces.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about ducted air conditioning",
    items: [
      {
        question: "How much ceiling space does a ducted system require?",
        answer:
          "Indicatively 30–40 cm of free height for the unit and ducts, depending on the capacity. During the inspection we determine whether your situation is suitable.",
      },
      {
        question: "Can each room have its own temperature?",
        answer:
          "Within one ducted unit the air distribution is shared; for truly independent zones we combine multiple units or opt for a VRF solution. We advise on what suits your layout.",
      },
      {
        question: "Is ducted air conditioning suitable for existing buildings?",
        answer:
          "Often yes, provided there is a suspended ceiling or the option to build one. In existing buildings we look extra carefully at routes and accessibility.",
      },
      {
        question: "How is such a system maintained?",
        answer:
          "We access the unit and filters through inspection hatches. Periodic maintenance keeps air quality and efficiency up to standard — we offer contracts for that.",
      },
    ],
  },
  form: {
    h2: "Request system advice for ducted air conditioning",
    service: "systemAdvice",
  },
};

/** /wandmodel-airco-bedrijf/ — wall-mounted air conditioning for business */
export const wandmodelAirco: ServicePageContent = {
  meta: {
    title: "Wall-mounted air conditioning | Compact | Airco@Business",
    description:
      "Wall-mounted air conditioning for offices and business spaces: compact, quickly installed and controllable per room. Premium A-brands, installation in Zuid-Holland.",
  },
  name: "Wall-mounted air conditioning",
  hero: {
    eyebrow: "Wall-mounted air conditioning",
    h1: "Wall-mounted air conditioning: targeted comfort for individual rooms",
    intro:
      "Not every room calls for a ceiling system. For individual offices, meeting rooms, canteens and server rooms, a high-quality wall-mounted unit is often the fastest and most practical solution.",
    cta: "requestSystemAdvice",
    secondary: { label: "View all systems", href: "/installatie" },
    trustPoints: ["Quickly installed", "Controllable per room", "Premium A-brands"],
  },
  overview: {
    h2: "Where a wall-mounted unit works best",
    intro:
      "Wall-mounted units are compact, powerful and controllable per room. Typical business applications:",
    cards: [
      {
        tag: "Office",
        title: "Individual office rooms",
        description:
          "Executive, focus and meeting rooms with their own temperature control.",
      },
      {
        tag: "Technical",
        title: "Server and technical rooms",
        description:
          "Reliable, continuous cooling for equipment.",
      },
      {
        tag: "Facilities",
        title: "Canteens and break rooms",
        description:
          "Fast comfort in rooms with varying use.",
      },
    ],
  },
  benefits: {
    h2: "When the wall-mounted unit is the right choice",
    cards: [
      {
        tag: "Speed",
        title: "Installed within a day",
        description:
          "No ceiling work required: a wall-mounted unit is hung, connected and running — often within a single working day.",
      },
      {
        tag: "Budget",
        title: "A practical investment",
        description:
          "The lowest entry cost per room, without compromising on quality or energy efficiency.",
      },
      {
        tag: "Flexible",
        title: "Expandable room by room",
        description:
          "With multi-split systems you connect multiple wall units to one outdoor unit.",
      },
    ],
  },
  scope: {
    h2: "What we assess before recommending a wall-mounted unit",
    items: [
      "Available wall position and airflow into the room",
      "Capacity matched to floor area and heat load",
      "Noise level indoors and outdoors",
      "Pipe route and position of the outdoor unit",
      "Condensate drainage, neatly concealed",
      "Combination options with other rooms (multi-split)",
    ],
  },
  process: {
    h2: "How we install a wall-mounted unit",
    steps: standardProcess,
  },
  proof: {
    h2: "Wall-mounted installations in practice",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Installation",
      description: "Our complete installation approach and all systems.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Commercial air conditioning installation",
      description: "The full installation process, from advice to handover.",
    },
    {
      href: "/airco-kantoor",
      label: "Air conditioning for offices",
      description: "Climate solutions for office environments.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Wall-mounted units also perform best with maintenance.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about wall-mounted units",
    items: [
      {
        question: "Is a wall-mounted unit suitable for server rooms?",
        answer:
          "Yes, provided you choose a model designed for continuous operation. For critical equipment we also advise on redundancy and fault alerts.",
      },
      {
        question: "How many wall units can run on one outdoor unit?",
        answer:
          "With a multi-split system, typically two to five indoor units, depending on the capacities. This keeps the number of outdoor units limited.",
      },
      {
        question: "Aren't wall-mounted units noisy?",
        answer:
          "The A-brands we install run at whisper level on the lowest setting. In our advice we match the noise level to the function of the room.",
      },
      {
        question: "Can a wall-mounted unit also provide heating?",
        answer:
          "Yes, wall-mounted units are also fully fledged heat pumps — useful as primary or supplementary heating in the shoulder seasons.",
      },
    ],
  },
  form: {
    h2: "Request system advice for wall-mounted air conditioning",
    service: "systemAdvice",
  },
};
