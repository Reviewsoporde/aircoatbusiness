import type { ServicePageContent } from "../types";
import { standardProcess, trustIndicators } from "./shared";

/** Parent: /zakelijke-airconditioning/ - primary keyword: commercial air conditioning */
export const businessAC: ServicePageContent = {
  meta: {
    title: "Commercial air conditioning | Advice | Airco@Business",
    description:
      "Commercial air conditioning for offices, commercial buildings, shops and showrooms. On-site advice, professional installation and maintenance across Zuid-Holland.",
  },
  name: "Business air conditioning",
  hero: {
    eyebrow: "Commercial air conditioning",
    h1: "Commercial air conditioning that fits your business premises",
    intro:
      "No two business premises are the same. Airco@Business advises on and installs air conditioning based on your building, occupancy and operations. The result is a working climate you no longer have to think about.",
    cta: "requestQuote",
    secondary: { label: "Book a consultation", href: "/contact" },
    trustPoints: ["On-site advice", "STEK-certified", "Premium A-brands"],
    image: {
      src: "/images/generated/commercial-office-hero.webp",
      position: "58% 50%",
      alt: "Commercial air conditioning installation in a business space",
    },
  },
  overview: {
    h2: "Air conditioning for every type of business space",
    intro:
      "From open-plan office to showroom: select your type of space and see which approach and systems suit it.",
    cards: [
      {
        tag: "Office",
        title: "Air conditioning for offices",
        description:
          "Consistent temperatures for concentration and working comfort, including in open-plan offices.",
        href: "/airco-kantoor",
        linkLabel: "Air conditioning for offices",
      },
      {
        tag: "Commercial building",
        title: "Air conditioning for commercial buildings",
        description:
          "Complete climate solutions for buildings with multiple zones and functions.",
        href: "/airco-bedrijfspand",
        linkLabel: "Air conditioning for commercial buildings",
      },
      {
        tag: "Retail",
        title: "Air conditioning for shops",
        description:
          "Comfortable shopping at any outdoor temperature, with systems that blend into the interior.",
        href: "/airco-winkel",
        linkLabel: "Air conditioning for shops",
      },
      {
        tag: "Showroom",
        title: "Air conditioning for showrooms",
        description:
          "A stable, presentable climate for large presentation spaces.",
        href: "/airco-showroom",
        linkLabel: "Air conditioning for showrooms",
      },
    ],
  },
  benefits: {
    h2: "Why businesses choose a dedicated climate partner",
    cards: [
      {
        tag: "Advice",
        title: "Understand first, then advise",
        description:
          "We only recommend a system after we have seen your space. This prevents an installation that is undersized or unnecessarily heavy.",
      },
      {
        tag: "Comfort",
        title: "Staff who work comfortably",
        description:
          "A stable indoor climate prevents the familiar summer complaints and keeps concentration levels up, especially on the hottest days.",
      },
      {
        tag: "Continuity",
        title: "One partner, also after installation",
        description:
          "From installation to maintenance and repairs: you have a single point of contact that knows your system and your building.",
      },
    ],
  },
  process: {
    h2: "From consultation to a working climate",
    steps: standardProcess,
  },
  proof: {
    h2: "Commercial installations we stand behind",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Commercial air conditioning installation",
      description: "From system selection to tidy installation by our own engineers.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Preventive maintenance, repairs and maintenance contracts.",
    },
    {
      href: "/projecten",
      label: "Commercial air conditioning projects",
      description: "View recent installations at businesses across Zuid-Holland.",
    },
    {
      href: "/contact",
      label: "Book a consultation",
      description: "Discuss your situation with an adviser, free of obligation.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about commercial air conditioning",
    items: [
      {
        question: "What does commercial air conditioning cost?",
        answer:
          "The investment depends on the number of rooms, the chosen system and the structural situation. After an on-site inspection you receive a quote with fixed prices. That gives you clarity in advance.",
      },
      {
        question: "Can air conditioning also provide heating?",
        answer:
          "Yes. Modern commercial air conditioning works as a heat pump and can both cool and heat energy-efficiently. Many businesses use it to (partly) replace their traditional heating.",
      },
      {
        question: "How much disruption does the installation cause?",
        answer:
          "We schedule the installation in consultation with you, work tidily and screen off workstations. Most installations are completed within one to a few days, often without interrupting your operations.",
      },
      {
        question: "Which business spaces is this suitable for?",
        answer:
          "We install in offices, complete commercial buildings, shops and showrooms. For each type of space we recommend the appropriate system, from cassette to ducted models.",
      },
      {
        question: "Do you also work outside Zuid-Holland?",
        answer:
          "Our service area is Zuid-Holland, including Leiden, Den Haag, Rotterdam and Hoofddorp. For larger projects we also work beyond it. Feel free to get in touch.",
      },
    ],
  },
  form: {
    h2: "Request a business quote",
    service: "businessAC",
  },
};

/** /airco-kantoor/ - primary keyword: office air conditioning (transactional) */
export const aircoKantoor: ServicePageContent = {
  meta: {
    title: "Office air conditioning | Installation | Airco@Business",
    description:
      "Office air conditioning installed by STEK-certified engineers: a stable working climate, quiet systems and neat finishing across Zuid-Holland. Request a quote.",
  },
  name: "Office air conditioning",
  hero: {
    eyebrow: "Office air conditioning",
    h1: "Office air conditioning: constant comfort, focused work",
    intro:
      "Too warm in summer, complaints about draughts in winter: an office without proper climate control costs job satisfaction and productivity. Airco@Business installs quiet, energy-efficient systems that deliver a stable temperature all year round.",
    cta: "requestQuote",
    secondary: { label: "Commercial air conditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Quiet systems", "On-site advice", "Neat finishing"],
  },
  overview: {
    h2: "Climate control for every type of office",
    intro:
      "From a single-person office to a full office floor, the approach differs but the goal remains the same. A working climate nobody notices because it is always right.",
    cards: [
      {
        tag: "Open-plan",
        title: "Open-plan offices",
        description:
          "Even cooling without draughts at the workstations, usually with cassette or ducted systems.",
      },
      {
        tag: "Office unit",
        title: "Individual office rooms",
        description:
          "Room-by-room climate control for management, focus and meeting rooms.",
      },
      {
        tag: "Meetings",
        title: "Meeting rooms",
        description:
          "Quickly up to temperature with varying occupancy, quiet enough to go unnoticed.",
      },
      {
        tag: "Technical",
        title: "Server rooms",
        description:
          "Reliable cooling for equipment that cannot afford to fail.",
      },
    ],
  },
  benefits: {
    h2: "What a good office climate delivers for your organisation",
    cards: [
      {
        tag: "Productivity",
        title: "Better concentration",
        description:
          "At temperatures above 24-25 °C, concentration drops noticeably. A stable climate keeps your team sharp.",
      },
      {
        tag: "Comfort",
        title: "Fewer complaints",
        description:
          "No more thermostat debates: even cooling without draughts, adjustable per zone.",
      },
      {
        tag: "Energy",
        title: "Energy-efficient cooling and heating",
        description:
          "Modern systems heat in winter more efficiently than many traditional installations.",
      },
    ],
  },
  scope: {
    h2: "What we assess and take care of for your office",
    intro:
      "Sound advice starts with the right questions. For an office installation we look at, among other things:",
    items: [
      "Floor area, layout and internal heat load (people, equipment, lighting)",
      "Ceiling type and available space for cassette or ducted units",
      "Required capacity per zone, matched to occupancy and sun exposure",
      "Noise level: systems that do not disturb meetings or focused work",
      "Positioning of the outdoor unit and pipework, neatly concealed",
      "Maintenance and aftercare following the installation",
    ],
  },
  process: {
    h2: "How an office installation proceeds",
    steps: standardProcess,
  },
  proof: {
    h2: "An office climate businesses count on",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Commercial air conditioning",
      description: "The complete overview of solutions per type of business space.",
    },
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette air conditioning for business",
      description: "The most popular solution for offices with suspended ceilings.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Ducted air conditioning for business",
      description: "Invisible climate control for larger office floors.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Keep your office climate reliable with periodic maintenance.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about office air conditioning",
    items: [
      {
        question: "How quiet is office air conditioning?",
        answer:
          "Modern cassette and ducted systems are designed for office environments and run at a noise level that disappears into normal background sound. Noise is a standard part of our advice.",
      },
      {
        question: "Can the temperature be controlled per room?",
        answer:
          "Yes. With multi-split or VRF solutions, each zone gets its own controls, so the meeting room and the open-plan office stay comfortable independently of each other.",
      },
      {
        question: "Does air conditioning cause draughts at workstations?",
        answer:
          "Not with the right system choice and positioning. Cassettes distribute air in four directions and ducted systems supply air indirectly. That is exactly why we advise on site.",
      },
      {
        question: "How long does installing office air conditioning take?",
        answer:
          "A single room is usually completed within a day; a full office floor is scheduled in consultation, often outside office hours or in phases, so your team can keep working.",
      },
      {
        question: "Can the air conditioning also heat the office?",
        answer:
          "Yes, all systems we install are heat pumps that cool and heat energy-efficiently. That gives you a single climate solution all year round.",
      },
    ],
  },
  form: {
    h2: "Request a quote for your office",
    service: "businessAC",
    propertyType: "office",
  },
};

/** /airco-bedrijfspand/ - primary keyword: commercial building air conditioning (transactional) */
export const aircoBedrijfspand: ServicePageContent = {
  meta: {
    title: "Commercial building air conditioning | Airco@Business",
    description:
      "Air conditioning for your entire commercial building: multiple zones, floors and functions in one reliable system. Advice and installation in Zuid-Holland.",
  },
  name: "Commercial building air conditioning",
  hero: {
    eyebrow: "Commercial building air conditioning",
    h1: "Air conditioning for commercial buildings: one system, every zone under control",
    intro:
      "A commercial building often combines offices, work areas, storage and reception spaces, each with its own climate requirements. We design and install systems that serve all those zones reliably, without a sprawl of separate units.",
    cta: "requestQuote",
    secondary: { label: "Commercial air conditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Multiple climate zones", "On-site advice", "One point of contact"],
  },
  overview: {
    h2: "Climate control for the entire building",
    intro:
      "Whether it is a multi-tenant building, a warehouse with offices or a production site: we map out all rooms and heat loads and design the system accordingly.",
    cards: [
      {
        tag: "Office area",
        title: "Office and meeting rooms",
        description:
          "Comfortable workstations with temperature control per zone.",
      },
      {
        tag: "Industrial hall",
        title: "Work and storage areas",
        description:
          "Targeted cooling where processes or goods require it.",
      },
      {
        tag: "Reception",
        title: "Entrance and reception areas",
        description:
          "A presentable climate from the moment visitors step inside.",
      },
      {
        tag: "Multi-zone",
        title: "Multiple floors",
        description:
          "VRF and multi-split systems that serve the entire building from a single installation.",
      },
    ],
  },
  benefits: {
    h2: "Why building-wide climate control pays off",
    cards: [
      {
        tag: "Efficiency",
        title: "Lower energy costs",
        description:
          "One well-designed system cools and heats more efficiently than a collection of separate air conditioners working against each other.",
      },
      {
        tag: "Management",
        title: "Centrally controlled",
        description:
          "Manage all zones from a single point, with smart controls and schedules per room.",
      },
      {
        tag: "Value",
        title: "A building that holds its value",
        description:
          "A modern climate system raises comfort levels as well as the rental and sale value of your property.",
      },
    ],
  },
  scope: {
    h2: "What we map out for your commercial building",
    items: [
      "All rooms, functions and heat loads of the building",
      "Capacity calculation per zone and for the system as a whole",
      "System selection: multi-split, VRF or a combination per building section",
      "Pipe routes, positioning of outdoor units and structural integration",
      "Phasing of the installation around your operations",
      "Maintenance plan for the complete installation",
    ],
  },
  process: {
    h2: "How we approach a building-wide project",
    steps: standardProcess,
  },
  proof: {
    h2: "Experience with commercial buildings across the region",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Commercial air conditioning",
      description: "All solutions per type of business space at a glance.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Ducted air conditioning for business",
      description: "Invisible climate control for larger spaces and zones.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Commercial air conditioning installation",
      description: "How we prepare, plan and carry out installations.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "One maintenance partner for your entire installation.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about air conditioning in commercial buildings",
    items: [
      {
        question: "Can one system cool multiple floors?",
        answer:
          "Yes. VRF and multi-split systems can serve multiple indoor units, floors and zones from one or a few outdoor units. Each zone can be controlled individually.",
      },
      {
        question: "Does our business have to close during installation?",
        answer:
          "Almost never. We phase the work per zone or floor and align the schedule with your operations, so business can carry on as usual.",
      },
      {
        question: "What if our building lacks suitable technical provisions?",
        answer:
          "We assess the existing situation during the inspection: electrical connections, roof or facade space for outdoor units and pipe routes are all included in the proposal.",
      },
      {
        question: "Is this also suitable for leased premises?",
        answer:
          "Yes, in consultation with the building owner. We help find solutions that fit the lease agreement and, if desired, can move with you.",
      },
    ],
  },
  form: {
    h2: "Request a quote for your commercial building",
    service: "businessAC",
    propertyType: "commercialBuilding",
  },
};

/** /airco-winkel/ - primary keyword: retail air conditioning */
export const aircoWinkel: ServicePageContent = {
  meta: {
    title: "Retail air conditioning | Installation | Airco@Business",
    description:
      "Air conditioning for shops and retail: a pleasant shopping climate, systems that blend into the interior and quiet operation. Advice and installation in Zuid-Holland.",
  },
  name: "Retail air conditioning",
  hero: {
    eyebrow: "Retail air conditioning",
    h1: "Air conditioning for shops: a climate that keeps customers browsing",
    intro:
      "A shop that is too warm can literally empty out. Good climate control keeps customers inside longer, protects your products and gives your staff a pleasant working day. We install systems that perform without disturbing your shop's appearance.",
    cta: "requestQuote",
    secondary: { label: "Commercial air conditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Invisible in the interior", "Quiet operation", "Installation outside opening hours"],
  },
  overview: {
    h2: "Climate solutions for retail",
    intro:
      "From boutique to multi-zone branch: we tailor the system to your floor area, lighting, visitor flows and look and feel.",
    cards: [
      {
        tag: "Fashion",
        title: "Fashion and boutiques",
        description:
          "Comfort in the shop and the fitting rooms, with units that disappear into the ceiling.",
      },
      {
        tag: "Branch",
        title: "Chains and branches",
        description:
          "Uniform climate quality per location, with central agreements and maintenance.",
      },
      {
        tag: "Specialist",
        title: "Specialist shops",
        description:
          "Stable temperatures where products demand them, from delicacies to electronics.",
      },
    ],
  },
  benefits: {
    h2: "What a good shop climate delivers",
    cards: [
      {
        tag: "Revenue",
        title: "Longer dwell time",
        description:
          "Customers stay longer and shop more comfortably in a cool store, especially on warm days when the competition falls short.",
      },
      {
        tag: "Brand experience",
        title: "Appearance without compromise",
        description:
          "Cassette and ducted units blend into the ceiling: climate control without visible equipment in your shop's presentation.",
      },
      {
        tag: "Staff",
        title: "Staff who stay fresh, even in summer",
        description:
          "A workable temperature behind the till and on the shop floor, all day long.",
      },
    ],
  },
  scope: {
    h2: "What we assess and take care of for your shop",
    items: [
      "Heat load from lighting, equipment and visitor numbers",
      "Ceiling type and integration of units into the shop design",
      "Air distribution without draughts at the entrance, till and fitting rooms",
      "Quiet operation that suits your in-store experience",
      "Installation scheduled outside opening hours",
      "Maintenance that takes your opening hours into account",
    ],
  },
  process: {
    h2: "How a shop installation proceeds",
    steps: standardProcess,
  },
  proof: {
    h2: "A store climate retailers rely on",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Commercial air conditioning",
      description: "All solutions per type of business space.",
    },
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette air conditioning for business",
      description: "The versatile ceiling solution for shops.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Ducted air conditioning for business",
      description: "Fully invisible climate control for larger shops.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "A reliable shop climate, even in peak season.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about air conditioning in shops",
    items: [
      {
        question: "Can the installation take place outside opening hours?",
        answer:
          "Yes, for shops that is actually standard practice. We schedule the work in the evening, at night or on closing days, so you do not lose any revenue.",
      },
      {
        question: "Will the air conditioning be visible in the shop?",
        answer:
          "It does not have to be. Cassette units disappear into the suspended ceiling and ducted systems are completely concealed. Only the grilles remain in view.",
      },
      {
        question: "What do open shop doors mean for the capacity?",
        answer:
          "An open frontage requires extra capacity and smart air distribution. We include this as standard in the calculation for retail spaces.",
      },
      {
        question: "Can the system also heat in winter?",
        answer:
          "Yes. The same installation heats energy-efficiently in winter, so one system gives you a pleasant shop climate all year round.",
      },
    ],
  },
  form: {
    h2: "Request a quote for your shop",
    service: "businessAC",
    propertyType: "retail",
  },
};

/** /airco-showroom/ - primary keyword: showroom air conditioning */
export const aircoShowroom: ServicePageContent = {
  meta: {
    title: "Showroom air conditioning | Advice | Airco@Business",
    description:
      "Air conditioning for showrooms: a stable climate for large, open presentation spaces with extensive glazing and lighting. Advice and installation in Zuid-Holland.",
  },
  name: "Showroom air conditioning",
  hero: {
    eyebrow: "Showroom air conditioning",
    h1: "Air conditioning for showrooms: your presentation deserves the right climate",
    intro:
      "Showrooms combine large open spaces, extensive glazing and intensive lighting. This creates a demanding heat load. We design climate systems that offer visitors comfort while leaving your presentation untouched.",
    cta: "requestQuote",
    secondary: { label: "Commercial air conditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Large open spaces", "Invisible equipment", "On-site advice"],
  },
  overview: {
    h2: "Climate control for presentation spaces",
    intro:
      "Cars, kitchens, furniture or bathrooms: every showroom has its own dynamic. We calculate the heat load and design accordingly.",
    cards: [
      {
        tag: "Automotive",
        title: "Car showrooms",
        description:
          "Large glass facades and high spaces call for generous, evenly distributed capacity.",
        image: {
          src: "/images/generated/showroom-automotive-card.webp",
          alt: "Car showroom with large glass facades, a high space and ceiling cassette air conditioning",
          position: "50% 48%",
        },
      },
      {
        tag: "Interior",
        title: "Kitchen and furniture showrooms",
        description:
          "Comfort during long browsing visits, without visible equipment in the presentation.",
        image: {
          src: "/images/generated/showroom-interior-card.webp",
          alt: "Kitchen and furniture showroom with discreetly integrated climate control",
          position: "50% 48%",
        },
      },
      {
        tag: "Technology",
        title: "Product and brand showrooms",
        description:
          "Stable temperature and air quality for products and visitors alike.",
      },
    ],
  },
  benefits: {
    h2: "Why showrooms invest in climate control",
    cards: [
      {
        tag: "Sales",
        title: "Visitors take their time",
        description:
          "Purchase decisions in showrooms take time. Comfort keeps visitors with your products longer.",
        image: {
          src: "/images/generated/showroom-visitors-card.webp",
          alt: "Visitors take their time in a comfortable showroom with climate control",
          position: "50% 48%",
        },
      },
      {
        tag: "Heat load",
        title: "Glass and spotlights compensated",
        description:
          "Solar gain and showroom lighting generate a lot of heat; the system is sized accordingly.",
      },
      {
        tag: "Appearance",
        title: "Equipment out of sight",
        description:
          "Ducted and cassette systems keep the look clean. Your presentation remains the star of the show.",
      },
    ],
  },
  scope: {
    h2: "What we assess and take care of for your showroom",
    items: [
      "Heat load from glass facades, lighting and equipment",
      "Air distribution in high, open spaces, without draughts",
      "Integration of units out of sight of your presentation",
      "Zoning for showroom, office and workshop in a single system",
      "Installation scheduled around your opening hours and events",
      "Maintenance plan for guaranteed availability",
    ],
  },
  process: {
    h2: "How a showroom installation proceeds",
    steps: standardProcess,
  },
  proof: {
    h2: "Experience with showrooms and presentation spaces",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Commercial air conditioning",
      description: "All solutions per type of business space.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Ducted air conditioning for business",
      description: "Invisible climate control for open spaces.",
    },
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette air conditioning for business",
      description: "Even air distribution from the ceiling.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Certainty about your climate, even during busy periods.",
    },
  ],
  faq: {
    h2: "Frequently asked questions about air conditioning in showrooms",
    items: [
      {
        question: "Our showroom has a lot of glass. Can it be cooled?",
        answer:
          "Yes. Glass facades create a high but predictable heat load. With the right capacity calculation and air distribution, even a glazed showroom stays comfortably cool.",
      },
      {
        question: "Does the equipment stay out of sight?",
        answer:
          "That is the starting point. Ducted systems are fully concealed; cassettes disappear into the ceiling. The presentation of your products remains the priority.",
      },
      {
        question: "Can the showroom and workshop run on one system?",
        answer:
          "Yes, with a multi-split or VRF system the showroom, office and workshop each get their own climate zone within a single installation.",
      },
      {
        question: "How quickly does a showroom reach temperature?",
        answer:
          "Properly sized systems respond quickly to changing conditions, such as afternoon solar gain or crowds during an event.",
      },
    ],
  },
  form: {
    h2: "Request a quote for your showroom",
    service: "businessAC",
    propertyType: "showroom",
  },
};
