import type {
  AboutPageContent,
  AreaPageContent,
  BrandsPageContent,
  ContactPageContent,
  FaqPageContent,
  LegalPageContent,
  ProcessPageContent,
  ProjectsPageContent,
} from "../types";

export const projectenPage: ProjectsPageContent = {
  meta: {
    title: "Commercial air conditioning projects | Airco@Business",
    description:
      "View recent commercial air conditioning installations: offices, commercial buildings, shops and showrooms in Zuid-Holland. From cassette to ducted systems.",
  },
  hero: {
    eyebrow: "Projects",
    h1: "Commercial air conditioning projects",
    intro:
      "A climate system proves itself in practice. See how we have provided offices, commercial buildings, shops and showrooms across Zuid-Holland with a reliable indoor climate.",
  },
  filterAllLabel: "All projects",
  filters: [
    { value: "office", label: "Office" },
    { value: "commercialBuilding", label: "Commercial building" },
    { value: "retail", label: "Shop" },
    { value: "showroom", label: "Showroom" },
    { value: "cassette", label: "Cassette" },
    { value: "ducted", label: "Ducted" },
    { value: "wallMounted", label: "Wall-mounted" },
  ],
  serviceLinks: [
    {
      href: "/zakelijke-airconditioning",
      label: "Business air conditioning",
      description: "Solutions for every type of business premises.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Commercial air conditioning installation",
      description: "How we approach an installation project.",
    },
    {
      href: "/onderhoud",
      label: "Commercial air conditioning maintenance and service",
      description: "Reliability after handover.",
    },
    {
      href: "/contact",
      label: "Book a consultation",
      description: "Discuss your own project with an adviser.",
    },
  ],
};

export const werkwijzePage: ProcessPageContent = {
  meta: {
    title: "How we work | From advice to maintenance | Airco@Business",
    description:
      "How a commercial air conditioning project works at Airco@Business: consultation, on-site analysis, proposal and planning, installation and long-term aftercare.",
  },
  hero: {
    eyebrow: "How we work",
    h1: "How we work: clear from the first conversation to aftercare",
    intro:
      "You want to know where you stand. That is why Airco@Business works with a fixed, transparent process — with clear agreements on advice, planning, installation and everything that follows.",
  },
  steps: [
    {
      title: "Consultation",
      description:
        "We start with a conversation about your building, the current situation and your requirements.",
      details: [
        "Comfort issues and bottlenecks mapped out",
        "Use, occupancy and schedule discussed",
        "A first indication of possible solutions",
        "Preferred appearance and controls discussed",
      ],
    },
    {
      title: "On-site analysis and advice",
      description:
        "An adviser assesses the spaces and calculates what is actually needed.",
      details: [
        "Survey of rooms, ceilings and facades",
        "Capacity calculation per zone",
        "System advice with clear trade-offs",
        "Placement of indoor and outdoor units assessed",
      ],
    },
    {
      title: "Proposal and planning",
      description:
        "You receive a quote with fixed prices and a concrete schedule.",
      details: [
        "A transparent quote with no surprises",
        "Installation date and phasing by mutual agreement",
        "Coordination with the building owner or owners' association where needed",
        "System choice and work clearly specified",
      ],
    },
    {
      title: "Installation",
      description:
        "Our own engineers install expertly and leave the workplace tidy.",
      details: [
        "STEK-certified installation",
        "Workplaces screened off, disruption kept to a minimum",
        "Testing, commissioning and user instructions at handover",
        "Pipework and finishing completed neatly",
      ],
    },
    {
      title: "Maintenance and support",
      description:
        "After handover, we remain your point of contact for service and maintenance.",
      details: [
        "First maintenance visit scheduled after installation",
        "A maintenance contract with a fixed schedule is available",
        "Fast help in the event of breakdowns",
        "A dedicated point of contact for service questions",
      ],
    },
  ],
  faq: {
    h2: "Frequently asked questions about the process",
    items: [
      {
        question: "How quickly can a project start?",
        answer:
          "That depends on project scope, system availability and the current schedule. After the survey, we discuss a realistic installation period.",
      },
      {
        question: "What do you need from us?",
        answer:
          "Access to the spaces for the survey and one contact person for coordination. The rest — calculations, planning, execution — we take care of.",
      },
      {
        question: "Is the consultation free of obligation?",
        answer:
          "Yes. The consultation and the quote are free of charge and without obligation; you then decide for yourself whether we proceed.",
      },
    ],
  },
};

export const contactPage: ContactPageContent = {
  meta: {
    title: "Contact | Quote or consultation | Airco@Business",
    description:
      "Contact Airco@Business for a commercial quote, consultation, maintenance or a breakdown in Zuid-Holland.",
  },
  hero: {
    eyebrow: "Contact",
    h1: "Get in touch: quote, advice or service",
    intro:
      "Whether it concerns a new installation, maintenance or an urgent breakdown, a specialist will assess your enquiry. Prefer to speak to someone directly? Call us during office hours.",
    image: {
      src: "/images/generated/commercial-installation-assessment.webp",
      alt: "Air conditioning advisor and facilities manager discussing a commercial installation on site",
      position: "center 46%",
    },
  },
  contactOptions: {
    h2: "Choose the contact option that suits your enquiry",
    intro:
      "Discuss a quote, ask about maintenance or report a fault. Contact us directly or include the details of your location in the enquiry form.",
    phone: {
      title: "Prefer to discuss it directly?",
      body: "Call during office hours for an initial assessment of your commercial enquiry.",
    },
    email: {
      title: "Need to include documents or photos?",
      body: "Email your question, floor plan or photos of the existing installation.",
    },
    route: {
      title: "Visit our location",
      body: "Airco@Business is located on Dobbeweg in Voorschoten. Visits by appointment.",
      label: "Open route in Google Maps",
    },
  },
  form: {
    eyebrow: "Commercial enquiry",
    h2: "Request a business quote",
    intro:
      "Share your location, property type and required service. This helps a specialist assess your enquiry and agree the right next step with you.",
  },
  serviceArea: {
    eyebrow: "Location & service area",
    h2: "Based in Voorschoten, working across Zuid-Holland",
    body: "Airco@Business works from Voorschoten for businesses across the whole of Zuid-Holland, including Leiden, Den Haag, Rotterdam and Hoofddorp. Larger projects outside the region can be discussed.",
    mapTitle: "Google Maps location of Airco@Business in Voorschoten",
    detailsTitle: "Visitor and business details",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    registrationLabel: "Company details",
    routeLabel: "Plan your route",
  },
  faq: {
    h2: "Practical questions",
    items: [
      {
        question: "How quickly will I receive a response to my enquiry?",
        answer:
          "A specialist reviews your enquiry during office hours and contacts you using the details you provide.",
      },
      {
        question: "Can I schedule a consultation straight away?",
        answer:
          "Yes. Indicate in the form that you would like a consultation and we will arrange a date by phone — at your location.",
      },
      {
        question: "I have a breakdown — what is the fastest route?",
        answer:
          "Call the business number shown on this page. Faults reported by phone can be assessed fastest; contract customers receive priority.",
      },
    ],
  },
};

export const overOnsPage: AboutPageContent = {
  meta: {
    title: "About Airco@Business | Climate specialist in Zuid-Holland",
    description:
      "Airco@Business is Airco@home's commercial climate specialist: STEK-certified engineers, premium A-brands and one dedicated point of contact for businesses in Zuid-Holland.",
  },
  hero: {
    eyebrow: "About us",
    h1: "The commercial climate specialist of Zuid-Holland",
    intro:
      "Airco@Business is the commercial label of Airco@home: one team fully dedicated to climate solutions for offices, commercial buildings, shops and showrooms.",
  },
  story: {
    h2: "Why Airco@Business exists",
    paragraphs: [
      "Business premises make different demands than a living room: higher heat loads, multiple zones, noise and regulatory requirements, and an installation moment that must not disrupt business operations. That is why we brought our commercial expertise together under one name: Airco@Business.",
      "Our team advises on, installs and maintains climate systems for businesses across Zuid-Holland. No standard packages, but a system calculated for your space and use — installed by our own STEK-certified engineers who work neatly and keep their agreements.",
      "From the first consultation to the maintenance contract: you have one point of contact who knows your building and your installation.",
    ],
  },
  usps: {
    h2: "What you can count on",
    cards: [
      {
        tag: "Craftsmanship",
        title: "STEK-certified engineers",
        description:
          "Certified for refrigerant installations and demonstrably skilled.",
      },
      {
        tag: "Quality",
        title: "Premium A-brands",
        description:
          "We exclusively install established A-brands, including Daikin, Mitsubishi Electric, LG and Toshiba.",
      },
      {
        tag: "Service",
        title: "One dedicated point of contact",
        description:
          "From advice to maintenance: short lines and a team that knows your situation.",
      },
    ],
  },
  team: {
    h2: "The team",
    body: "The same engineers who install your system also come back for the maintenance. That way we know your building — and you know who is coming through the door.",
    images: [
      { src: "/images/team-1.webp", alt: "The team's service van on site at a client" },
      { src: "/images/team-2.webp", alt: "The full team of engineers and advisors" },
    ],
  },
};

export const faqPage: FaqPageContent = {
  meta: {
    title: "FAQ | Commercial air conditioning | Airco@Business",
    description:
      "Answers to frequently asked questions about commercial air conditioning: systems, installation, maintenance, costs and service area.",
  },
  hero: {
    eyebrow: "Frequently asked questions",
    h1: "Frequently asked questions about commercial air conditioning",
    intro:
      "The answers to the questions businesses ask us most often. Is your question not listed? Call us or ask your question via the contact form.",
  },
  groups: [
    {
      title: "Systems and advice",
      items: [
        {
          question: "Which air conditioning system suits my business premises?",
          answer:
            "That depends on the space, the ceiling, the number of zones and the desired appearance. Cassettes often suit offices and shops, ducted systems suit large open spaces and wall-mounted units suit separate rooms. We give definitive advice after an on-site inspection.",
        },
        {
          question: "Can an air conditioning system also heat?",
          answer:
            "Yes. All systems we install are heat pumps that both cool and heat energy-efficiently — often more economical than traditional heating.",
        },
        {
          question: "Which brands do you install?",
          answer:
            "Exclusively premium A-brands: Daikin, Mitsubishi Electric, Mitsubishi Heavy Industries, LG and Toshiba. Reliability and the availability of parts weigh heavily for business use.",
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          question: "How long does an installation take?",
          answer:
            "A single room is usually completed within a day; larger projects are phased by mutual agreement, often outside office or opening hours.",
        },
        {
          question: "Does my business have to close during the installation?",
          answer:
            "Almost never. We screen off workplaces, work zone by zone and can schedule evening or weekend work if desired.",
        },
        {
          question: "What does a commercial air conditioning system cost?",
          answer:
            "That differs per situation. After a free on-site inspection, you receive a quote with fixed prices, so you know exactly where you stand in advance.",
        },
      ],
    },
    {
      title: "Maintenance and service",
      items: [
        {
          question: "How often is maintenance needed?",
          answer:
            "At least once a year; twice a year for intensive use. With a maintenance contract, this is scheduled automatically.",
        },
        {
          question: "What do I do in the event of a breakdown?",
          answer:
            "Call 071 - 240 05 97 or report the fault via the contact form. We schedule breakdowns with priority; contract customers come first.",
        },
        {
          question: "Do you also maintain existing installations?",
          answer:
            "Yes, we maintain and repair all leading A-brands, including installations that were not fitted by us.",
        },
      ],
    },
    {
      title: "Service area and practical matters",
      items: [
        {
          question: "In which region does Airco@Business work?",
          answer:
            "Across the whole of Zuid-Holland, from Voorschoten: including Leiden, Den Haag, Rotterdam and Hoofddorp. Larger projects beyond the region can be discussed.",
        },
        {
          question: "Are you certified?",
          answer:
            "Yes, our engineers are STEK-certified and work in accordance with the F-gas regulation — a legal requirement for commercial installations.",
        },
        {
          question: "I am looking for air conditioning for my home — is that possible too?",
          answer:
            "For homes, we are happy to refer you to our consumer label Airco@home at airco-athome.nl.",
        },
      ],
    },
  ],
};

export const werkgebiedPage: AreaPageContent = {
  meta: {
    title: "Commercial air conditioning in Zuid-Holland | Airco@Business",
    description:
      "Airco@Business installs and maintains commercial air conditioning across Zuid-Holland: Voorschoten, Leiden, Den Haag, Rotterdam, Hoofddorp and surroundings.",
  },
  hero: {
    eyebrow: "Service area",
    h1: "Commercial air conditioning across Zuid-Holland",
    intro:
      "From our base in Voorschoten, we serve businesses throughout the region — with short travel times for installation, maintenance and breakdowns.",
  },
  region: {
    h2: "Voorschoten and the region",
    body: "Our team works daily in the Leiden – Den Haag – Rotterdam triangle and as far as Hoofddorp and Utrecht. That regional focus means fast service: short travel times in the event of breakdowns and flexible scheduling for installations.",
  },
  cities: [
    { name: "Voorschoten", blurb: "Our home base — premises and warehouse on the Dobbeweg." },
    { name: "Leiden", blurb: "Offices, practices and shops in and around the city centre." },
    { name: "Den Haag", blurb: "From office locations to retail in the centre." },
    { name: "Rotterdam", blurb: "Commercial buildings and offices across the metropolitan area." },
    { name: "Hoofddorp", blurb: "Office parks and business premises around Schiphol." },
    { name: "Utrecht", blurb: "Projects in and around the city, on request." },
    { name: "Delft", blurb: "Knowledge-driven businesses, practices and SMEs." },
    { name: "Zoetermeer", blurb: "Offices and industrial halls." },
    { name: "Wassenaar", blurb: "Offices and shops." },
    { name: "Oegstgeest", blurb: "Practices and office spaces." },
    { name: "Katwijk", blurb: "Business premises and shops." },
    { name: "Noordwijk", blurb: "Hospitality, hotels and retail." },
    { name: "Alphen aan den Rijn", blurb: "SMEs and commercial buildings." },
  ],
  beyond:
    "A larger project outside Zuid-Holland? For more substantial installations we also work nationwide — get in touch to discuss the possibilities.",
};

export const merkenPage: BrandsPageContent = {
  meta: {
    title: "Brands & systems | Daikin, Mitsubishi, LG, Toshiba | Airco@Business",
    description:
      "Airco@Business installs premium A-brands: Daikin, Mitsubishi Electric, Mitsubishi Heavy Industries, LG and Toshiba. View the brands and system types.",
  },
  hero: {
    eyebrow: "Brands and systems",
    h1: "Premium A-brands, deliberately chosen",
    intro:
      "For business use, what counts is reliability, efficiency and the availability of parts. That is why we exclusively install established A-brands with proven commercial product lines.",
  },
  brands: [
    {
      name: "Daikin",
      logo: "/images/brands/daikin.png",
      description:
        "Global market leader in climate technology with a broad commercial range, from cassettes to VRV systems.",
    },
    {
      name: "Mitsubishi Electric",
      logo: "/images/brands/mitsubishi-electric.png",
      description:
        "Japanese build quality with quiet, energy-efficient systems and strong control technology.",
    },
    {
      name: "Mitsubishi Heavy Industries",
      logo: "/images/brands/mitsubishi-heavy.png",
      description:
        "Robust systems with an excellent price-performance ratio for commercial applications.",
    },
    {
      name: "LG",
      logo: "/images/brands/lg.png",
      description:
        "Innovative climate solutions with smart controls and sleek design.",
    },
    {
      name: "Toshiba",
      logo: "/images/brands/toshiba.png",
      description:
        "A pioneer in inverter technology, with reliable systems for continuous commercial use.",
    },
  ],
  systems: {
    h2: "The systems we install",
    intro:
      "For each brand, we select the system type that suits your space:",
    links: [
      {
        href: "/cassette-airco-bedrijf",
        label: "Cassette air conditioning for business",
        description: "Ceiling-recessed with four-way air distribution.",
      },
      {
        href: "/kanaal-airco-bedrijf",
        label: "Ducted air conditioning for business",
        description: "Fully concealed, ideal for multiple zones.",
      },
      {
        href: "/wandmodel-airco-bedrijf",
        label: "Wall-mounted air conditioning for business",
        description: "Compact and quickly installed for separate rooms.",
      },
      {
        href: "/zakelijke-airco-installatie",
        label: "Commercial air conditioning installation",
        description: "From system selection to tidy installation.",
      },
    ],
  },
};

export const privacyPage: LegalPageContent = {
  meta: {
    title: "Privacy policy | Airco@Business",
    description:
      "The privacy policy of Airco@Business: which personal data we process, why, and what rights you have.",
  },
  h1: "Privacy policy",
  updated: "Last updated: July 2026",
  sections: [
    {
      h2: "Who we are",
      paragraphs: [
        "Airco@Business is a trade name of Airco@home B.V., registered at Dobbeweg 11 G, 2254 AG Voorschoten (Dutch Chamber of Commerce / KvK 50312006). We are the data controller for the personal data collected through this website.",
      ],
    },
    {
      h2: "Which data we process",
      paragraphs: [
        "When you request a quote or a consultation, we process the data you enter in the form: company name, contact person, phone number, email address, location, type of business premises, requested service and any comments you provide. We also record the page from which you submitted the request.",
        "For contact by phone or email, we process the data you provide in the course of that contact.",
      ],
    },
    {
      h2: "What we use your data for",
      paragraphs: [
        "We use your data solely to handle your request: to contact you, prepare a quote and — if you become a customer — perform the agreement. Requests are stored in our CRM system.",
        "We never sell your data to third parties and do not use it for unsolicited marketing.",
      ],
    },
    {
      h2: "Retention periods",
      paragraphs: [
        "We retain quote requests for a maximum of two years after the last contact. Customer data is retained for as long as the customer relationship lasts and thereafter in accordance with the statutory (tax) retention periods.",
      ],
    },
    {
      h2: "Your rights",
      paragraphs: [
        "You have the right to access, rectify and erase your personal data, and the right to object to its processing. Send your request to info@aircoatbusiness.nl; we will respond within four weeks.",
        "If you disagree with how we handle your data, you can lodge a complaint with the Autoriteit Persoonsgegevens (the Dutch Data Protection Authority).",
      ],
    },
  ],
};

export const cookiePage: LegalPageContent = {
  meta: {
    title: "Cookie policy | Airco@Business",
    description:
      "The cookie policy of Airco@Business: which cookies this website uses and for what purpose.",
  },
  h1: "Cookie policy",
  updated: "Last updated: July 2026",
  sections: [
    {
      h2: "What cookies are",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. This website uses cookies in a limited and deliberate way.",
      ],
    },
    {
      h2: "Functional cookies",
      paragraphs: [
        "Functional cookies are necessary for the website to work properly, such as remembering your language preference. No consent is required for these.",
      ],
    },
    {
      h2: "Analytics cookies",
      paragraphs: [
        "We use Google Analytics 4 to measure how the website is used (pages visited, form submissions, phone clicks). These statistics are configured so that we cannot trace them back to individuals.",
      ],
    },
    {
      h2: "Managing cookies",
      paragraphs: [
        "You can delete or block cookies at any time via your browser settings. Please note that the website may then not function as well.",
      ],
    },
  ],
};
