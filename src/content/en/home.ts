import type { HomeContent } from "../types";

export const home: HomeContent = {
  meta: {
    title: "Business Air Conditioning in Zuid-Holland | Airco@Business",
    description:
      "Business air conditioning for offices, shops and showrooms in Zuid-Holland. Advice, installation and maintenance by STEK-certified installers. Request a quote.",
  },
  hero: {
    eyebrow: "Commercial air conditioning in Zuid-Holland",
    h1: "Air conditioning for businesses in Zuid-Holland",
    intro:
      "Advice, installation and maintenance for offices, commercial buildings, shops and showrooms. Based in Voorschoten, serving businesses throughout Zuid-Holland.",
  },
  trustBar: [
    "Tailored advice",
    "Professional installation",
    "STEK-certified",
    "Premium systems",
    "Active across Zuid-Holland",
  ],
  categories: {
    h2: "Commercial air conditioning solutions for every business",
    intro:
      "Three clear routes to a better indoor climate: a solution for your type of business premises, a professional installation or structured maintenance.",
    cards: [
      {
        tag: "Solutions",
        title: "Business air conditioning",
        description:
          "Air conditioning tailored to your type of business premises, from office to showroom. Always based on on-site advice.",
        href: "/zakelijke-airconditioning",
        linkLabel: "Business air conditioning",
        image: {
          src: "/images/generated/commercial-office-hero.webp",
          alt: "Modern commercial office with integrated climate control",
          position: "58% 50%",
        },
      },
      {
        tag: "Installation",
        title: "Installation",
        description:
          "Advice, system selection, planning and a clean installation by our own experienced installers, with minimal disruption to your business operations.",
        href: "/installatie",
        linkLabel: "Commercial air conditioning installation",
        image: {
          src: "/images/generated/commercial-building.webp",
          alt: "Commercial reception with integrated air conditioning",
        },
      },
      {
        tag: "Maintenance",
        title: "Maintenance",
        description:
          "Preventive maintenance, prompt repairs and maintenance contracts that keep your systems reliable and efficient.",
        href: "/onderhoud",
        linkLabel: "Commercial air conditioning maintenance and service",
        image: {
          src: "/images/generated/maintenance-service.webp",
          alt: "Maintenance on a commercial cassette unit",
          position: "58% 45%",
        },
      },
    ],
  },
  propertyTypes: {
    h2: "Air conditioning for different business premises",
    intro:
      "Every business space places different demands on climate control. Select your situation to see which approach fits.",
    cards: [
      {
        tag: "Office",
        title: "Air conditioning for offices",
        description:
          "A constant temperature for focused work, including in open-plan offices and meeting rooms.",
        href: "/airco-kantoor",
        linkLabel: "Office air conditioning",
        image: {
          src: "/images/generated/commercial-office-hero.webp",
          alt: "Office space with a considered indoor climate",
          position: "58% 50%",
        },
      },
      {
        tag: "Commercial building",
        title: "Air conditioning for commercial buildings",
        description:
          "Climate control for entire buildings with multiple zones, floors and functions.",
        href: "/airco-bedrijfspand",
        linkLabel: "Air conditioning for commercial buildings",
        image: {
          src: "/images/generated/commercial-building.webp",
          alt: "Modern reception in a commercial building",
        },
      },
      {
        tag: "Retail",
        title: "Air conditioning for shops",
        description:
          "Comfort that keeps customers in your shop longer, with systems that blend invisibly into the retail interior.",
        href: "/airco-winkel",
        linkLabel: "Air conditioning for shops",
        image: {
          src: "/images/generated/retail-cassette.webp",
          alt: "Retail space with cassette air conditioning",
        },
      },
      {
        tag: "Showroom",
        title: "Air conditioning for showrooms",
        description:
          "A stable climate for large, open presentation spaces where appearance matters.",
        href: "/airco-showroom",
        linkLabel: "Air conditioning for showrooms",
        image: {
          src: "/images/generated/showroom-cassette.webp",
          alt: "Showroom with ceiling air conditioning",
        },
      },
    ],
  },
  systems: {
    h2: "Which air conditioning system suits your business premises?",
    intro:
      "The right system depends on the space, the ceiling, the number of zones and the desired appearance. We only give definitive advice after an on-site inspection.",
    cards: [
      {
        tag: "Ceiling",
        title: "Cassette air conditioning",
        description:
          "Integrated into the suspended ceiling, with even air distribution in four directions. The standard for offices and shops.",
        href: "/cassette-airco-bedrijf",
        linkLabel: "Cassette air conditioning for businesses",
        image: {
          src: "/images/generated/showroom-cassette.webp",
          alt: "Cassette units in a commercial showroom",
        },
      },
      {
        tag: "Concealed",
        title: "Ducted air conditioning",
        description:
          "Fully concealed above the ceiling, ideal for larger spaces and multiple zones served by one quiet system.",
        href: "/kanaal-airco-bedrijf",
        linkLabel: "Ducted air conditioning for businesses",
        image: {
          src: "/images/generated/ducted-detail.webp",
          alt: "Discreet duct grille in a commercial interior",
        },
      },
      {
        tag: "Compact",
        title: "Wall-mounted air conditioning",
        description:
          "A practical solution for smaller spaces, individual offices and server rooms. Quick to install.",
        href: "/wandmodel-airco-bedrijf",
        linkLabel: "Wall-mounted air conditioning for businesses",
        image: {
          src: "/images/generated/wall-model-office.webp",
          alt: "Commercial wall unit in a meeting room",
        },
      },
    ],
  },
  whyClimate: {
    h2: "Why a good indoor climate matters for your business",
    intro:
      "A good working climate is not a luxury but a business asset: it affects concentration, customer experience and the continuity of your organisation.",
    cards: [
      {
        tag: "Staff",
        title: "Comfort and productivity",
        description:
          "A stable, comfortable temperature supports concentration and job satisfaction. Excessive heat or cold distracts from the work.",
      },
      {
        tag: "Customers",
        title: "Customer experience",
        description:
          "In shops and showrooms, the climate helps determine how long customers stay and how they experience your brand.",
      },
      {
        tag: "Continuity",
        title: "Business reliability",
        description:
          "A well-maintained, energy-efficient system prevents breakdowns on the hottest days, precisely when you need to be able to rely on it.",
      },
    ],
  },
  maintenance: {
    h2: "Maintenance for reliable commercial air conditioning",
    intro:
      "Good maintenance means fewer breakdowns, stable performance, cleaner air and a longer service life for your installation.",
    cards: [
      {
        tag: "Preventive",
        title: "Air conditioning maintenance",
        description:
          "Periodic inspection and cleaning keep your system efficient and prevent surprises.",
        href: "/airco-onderhoud-zakelijk",
        linkLabel: "Commercial air conditioning maintenance",
        image: {
          src: "/images/generated/maintenance-service.webp",
          alt: "Preventive maintenance on commercial air conditioning",
          position: "58% 45%",
        },
      },
      {
        tag: "Breakdown",
        title: "Air conditioning repair",
        description:
          "A fault or reduced cooling? Our engineers diagnose the problem quickly and repair it professionally.",
        href: "/airco-reparatie-zakelijk",
        linkLabel: "Commercial air conditioning repair",
        image: {
          src: "/images/generated/commercial-repair-diagnostics.webp",
          alt: "Engineer diagnosing a commercial air conditioning unit during a repair",
          position: "55% 42%",
        },
      },
      {
        tag: "Contract",
        title: "Maintenance contracts",
        description:
          "A fixed maintenance schedule, priority in the event of breakdowns and predictable costs for your entire installation.",
        href: "/airco-onderhoudscontract-zakelijk",
        linkLabel: "Commercial maintenance contract",
        image: {
          src: "/images/generated/commercial-maintenance-contract-planning.webp",
          alt: "Engineer and facilities manager reviewing a commercial maintenance contract",
          position: "50% 48%",
        },
      },
    ],
  },
  process: {
    h2: "How we work together",
    linkLabel: "Our approach",
    steps: [
      {
        title: "Consultation",
        description:
          "We discuss your premises, the current situation, comfort issues and your schedule.",
      },
      {
        title: "On-site analysis",
        description:
          "We assess the space and recommend a suitable system with the right capacity.",
      },
      {
        title: "Proposal and installation",
        description:
          "You receive a clear quotation; our installers then carry out the work neatly and on schedule.",
      },
      {
        title: "Maintenance and support",
        description:
          "We keep your installation in top condition with maintenance, service or a contract.",
      },
    ],
  },
  maintenanceOffer: {
    h2: "First maintenance visit after installation",
    body: "For every installation by Airco@Business, we schedule a first maintenance visit between six months and one year after handover. That way you can be certain your system keeps performing as it did on day one.",
  },
  projects: {
    h2: "Commercial air conditioning projects",
    intro:
      "From offices to shops: a selection of recent commercial installations in Zuid-Holland.",
  },
  reviews: {
    h2: "What customers say about our team",
    intro:
      "English translations of verified Google reviews for Airco@home, the team behind Airco@Business. View every review directly on Google.",
    platformLabel: "Google Reviews",
    reviewCountLabel: "68 reviews",
    ratingValue: 4.6,
    ratingLabel: "4.6",
    reviewUrl:
      "https://search.google.com/local/reviews?placeid=ChIJud2sWF3HxUcRDhM1WilDE2I",
    items: [
      {
        author: "Eric Geurts",
        rating: 5,
        dateLabel: "May 2025",
        text: "Making appointments went smoothly, and the work was done neatly!",
        serviceLabel: "Airco@home",
        sourceUrl:
          "https://www.google.com/maps/contrib/101313410115495761366/reviews",
      },
      {
        author: "Mimoun Hibout",
        rating: 5,
        dateLabel: "May 2025",
        text: "Top company",
        serviceLabel: "Airco@home",
        sourceUrl:
          "https://www.google.com/maps/contrib/112247818309208765124/reviews",
      },
      {
        author: "Esther Rijken",
        rating: 5,
        dateLabel: "May 2025",
        text: "Airco@home may indeed be more expensive than its competitors, but the service is first-rate: whatever question I have, the lady on the phone gives me an answer. If she does not know, she looks it up or asks a colleague and calls me back. The engineers who installed the system were neat and polite, and the annual maintenance is carried out conscientiously. I would rather pay a little more for good equipment, service and warranty.",
        serviceLabel: "Airco@home",
        sourceUrl:
          "https://www.google.com/maps/contrib/110290578635290244139/reviews",
      },
    ],
  },
  serviceArea: {
    h2: "Commercial air conditioning in Voorschoten and Zuid-Holland",
    body: "Airco@Business works from Voorschoten for businesses throughout Zuid-Holland, from Leiden and Den Haag to Rotterdam and Hoofddorp. For larger projects we also work beyond the region.",
    cities: ["Voorschoten", "Leiden", "Den Haag", "Rotterdam", "Hoofddorp"],
  },
  form: {
    h2: "Request a business quote",
  },
  faq: {
    h2: "Frequently asked questions about business air conditioning",
    items: [
      {
        question: "Which air conditioning system is right for my business?",
        answer:
          "That depends on the space, the ceiling, the number of zones and your requirements. For offices and shops, a cassette system is often a good fit; for larger or open spaces, a ducted system. We give definitive advice after an on-site inspection.",
      },
      {
        question: "Which systems does Airco@Business install?",
        answer:
          "We install cassette, ducted and wall-mounted systems from premium A-brands such as Daikin, Mitsubishi Electric, LG and Toshiba. We match the system choice to your business premises.",
      },
      {
        question:
          "Does Airco@Business also work for commercial buildings, shops and showrooms?",
        answer:
          "Yes. In addition to offices, we install air conditioning in complete commercial buildings, shops and showrooms, including solutions with multiple climate zones.",
      },
      {
        question: "Does Airco@Business provide maintenance and repairs?",
        answer:
          "Yes. We provide preventive maintenance, resolve breakdowns and offer maintenance contracts with a fixed schedule and priority in the event of faults.",
      },
      {
        question: "Can I take out a commercial maintenance contract?",
        answer:
          "Certainly. With a maintenance contract, your installation is periodically inspected and cleaned, you receive priority in the event of breakdowns and you know your costs in advance.",
      },
      {
        question: "Which region does Airco@Business serve?",
        answer:
          "We work from Voorschoten across the whole of Zuid-Holland, including Leiden, Den Haag, Rotterdam and Hoofddorp. For larger projects, locations beyond the region can also be discussed.",
      },
      {
        question: "How does a commercial air conditioning project start?",
        answer:
          "You request a quote or a consultation. We then schedule an on-site visit, assess the space and provide a clear proposal with system advice and planning.",
      },
    ],
  },
  residential: {
    text: "Need air conditioning for your home?",
    linkLabel: "Go to Airco@home",
  },
};
