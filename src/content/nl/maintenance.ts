import type { ServicePageContent } from "../types";
import { repairProcess, standardProcess, trustIndicators } from "./shared";

/** Parent: /onderhoud/ — maintenance, repair & contract overview */
export const onderhoud: ServicePageContent = {
  meta: {
    title: "Airco onderhoud & service voor bedrijven | Airco@Business",
    description:
      "Onderhoud, reparatie en onderhoudscontracten voor zakelijke airconditioning. Minder storingen, stabiele prestaties en langere levensduur. Actief in Zuid-Holland.",
  },
  name: "Onderhoud",
  hero: {
    eyebrow: "Onderhoud",
    h1: "Onderhoud voor betrouwbare zakelijke airconditioning",
    intro:
      "Een klimaatinstallatie is bedrijfskritisch op precies de dagen dat het buiten heet is. Met periodiek onderhoud, snelle reparaties en heldere contracten houden wij uw systemen betrouwbaar, efficiënt en schoon.",
    cta: "requestMaintenance",
    secondary: { label: "Vraag contractadvies aan", href: "/airco-onderhoudscontract-zakelijk" },
    trustPoints: ["STEK-gecertificeerd", "Snelle respons", "Alle A-merken"],
  },
  overview: {
    h2: "Onderhoud, reparatie en contracten",
    intro:
      "Drie diensten die samen de levensduur en prestaties van uw installatie borgen:",
    cards: [
      {
        tag: "Preventief",
        title: "Airco onderhoud",
        description:
          "Periodieke inspectie en reiniging die storingen vóór zijn en het rendement op peil houden.",
        href: "/airco-onderhoud-zakelijk",
        linkLabel: "Airco onderhoud zakelijk",
      },
      {
        tag: "Storing",
        title: "Airco reparatie",
        description:
          "Storing, lekkage of verminderde koeling? Snelle diagnose en vakkundig herstel.",
        href: "/airco-reparatie-zakelijk",
        linkLabel: "Zakelijke airco reparatie",
      },
      {
        tag: "Contract",
        title: "Onderhoudscontracten",
        description:
          "Vaste planning, voorrang bij storingen en voorspelbare kosten voor uw hele installatie.",
        href: "/airco-onderhoudscontract-zakelijk",
        linkLabel: "Zakelijk onderhoudscontract",
      },
    ],
  },
  benefits: {
    h2: "Wat goed onderhoud uw bedrijf oplevert",
    cards: [
      {
        tag: "Continuïteit",
        title: "Minder onverwachte storingen",
        description:
          "De meeste zomerstoringen zijn terug te voeren op achterstallig onderhoud — en dus te voorkomen.",
      },
      {
        tag: "Rendement",
        title: "Lager energieverbruik",
        description:
          "Schone filters en warmtewisselaars schelen direct in het verbruik en de koelprestatie.",
      },
      {
        tag: "Gezondheid",
        title: "Schonere lucht",
        description:
          "Gereinigde filters en condensafvoer voorkomen geurtjes en houden de luchtkwaliteit gezond.",
      },
    ],
  },
  process: {
    h2: "Zo werkt onze onderhoudsservice",
    steps: standardProcess,
  },
  proof: {
    h2: "Waarom bedrijven hun onderhoud aan ons toevertrouwen",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/airco-onderhoud-zakelijk",
      label: "Airco onderhoud zakelijk",
      description: "Wat er bij een onderhoudsbeurt wordt gecontroleerd.",
    },
    {
      href: "/airco-reparatie-zakelijk",
      label: "Zakelijke airco reparatie",
      description: "Snel hulp bij storingen en verminderde prestaties.",
    },
    {
      href: "/airco-onderhoudscontract-zakelijk",
      label: "Zakelijk onderhoudscontract",
      description: "Vaste planning en voorrang bij storingen.",
    },
    {
      href: "/contact",
      label: "Plan een adviesgesprek",
      description: "Bespreek het onderhoud van uw installatie.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over onderhoud en service",
    items: [
      {
        question: "Hoe vaak heeft een zakelijke airco onderhoud nodig?",
        answer:
          "Voor zakelijke installaties adviseren we minimaal één onderhoudsbeurt per jaar; bij intensief gebruik of stoffige omgevingen twee. In een contract leggen we de juiste frequentie vast.",
      },
      {
        question: "Onderhouden jullie ook installaties die elders zijn gekocht?",
        answer:
          "Ja. Wij onderhouden en repareren alle gangbare A-merken, ook als de installatie destijds niet door ons is geplaatst.",
      },
      {
        question: "Wat gebeurt er als er tóch een storing optreedt?",
        answer:
          "Dan staat ons serviceteam klaar. Contractklanten krijgen voorrang in de planning — juist belangrijk in de zomerpiek.",
      },
      {
        question: "Is onderhoud verplicht?",
        answer:
          "Voor systemen met een grotere koudemiddelinhoud gelden wettelijke controleverplichtingen (f-gassenverordening). Wij zorgen dat uw installatie aantoonbaar aan die eisen voldoet.",
      },
    ],
  },
  form: {
    h2: "Vraag onderhoud aan",
    service: "maintenance",
  },
};

/** /airco-onderhoud-zakelijk/ — primary keyword: airco onderhoud zakelijk */
export const aircoOnderhoud: ServicePageContent = {
  meta: {
    title: "Airco onderhoud zakelijk | Preventief & gecertificeerd | Airco@Business",
    description:
      "Zakelijk airco onderhoud: periodieke inspectie, reiniging en controle door STEK-gecertificeerde monteurs. Minder storingen en lager verbruik. Vraag onderhoud aan.",
  },
  name: "Airco onderhoud zakelijk",
  hero: {
    eyebrow: "Airco onderhoud zakelijk",
    h1: "Airco onderhoud dat storingen vóór is",
    intro:
      "Stilstand van de koeling op een tropische dag kost meer dan een onderhoudsbeurt. Onze monteurs inspecteren, reinigen en testen uw installatie periodiek — zodat die blijft presteren wanneer het erop aankomt.",
    cta: "requestMaintenance",
    secondary: { label: "Zakelijk onderhoudscontract", href: "/airco-onderhoudscontract-zakelijk" },
    trustPoints: ["Alle A-merken", "STEK-gecertificeerd", "Rapportage per beurt"],
  },
  overview: {
    h2: "Voor wie is periodiek onderhoud?",
    intro:
      "Voor ieder bedrijf dat op zijn klimaatinstallatie moet kunnen rekenen — en voor installaties waarvoor wettelijke controles gelden.",
    cards: [
      {
        tag: "Kantoor",
        title: "Kantoren en praktijken",
        description:
          "Comfort en luchtkwaliteit voor personeel en bezoekers, het hele jaar door.",
      },
      {
        tag: "Retail",
        title: "Winkels en showrooms",
        description:
          "Geen uitval tijdens openingsuren of drukke seizoenen.",
      },
      {
        tag: "Kritisch",
        title: "Server- en technische ruimtes",
        description:
          "Koeling die nooit mag wegvallen, aantoonbaar onderhouden.",
      },
    ],
  },
  benefits: {
    h2: "De risico's van uitgesteld onderhoud",
    intro:
      "Achterstallig onderhoud merkt u niet meteen — totdat het misgaat. Wat er zonder onderhoud gebeurt:",
    cards: [
      {
        tag: "Storing",
        title: "Uitval in de zomerpiek",
        description:
          "Vervuilde systemen vallen het vaakst uit op de warmste dagen, precies wanneer reparatiecapaciteit schaars is.",
      },
      {
        tag: "Kosten",
        title: "Sluipend hoger verbruik",
        description:
          "Vervuilde filters en warmtewisselaars laten het verbruik stapsgewijs oplopen zonder dat iemand het merkt.",
      },
      {
        tag: "Levensduur",
        title: "Snellere slijtage",
        description:
          "Een systeem dat continu overbelast draait, slijt jaren eerder dan een onderhouden installatie.",
      },
    ],
  },
  scope: {
    h2: "Wat we bij een onderhoudsbeurt controleren",
    items: [
      "Reiniging van filters, binnenunits en warmtewisselaars",
      "Controle van koudemiddeldruk en lekdichtheid (f-gassen)",
      "Controle en reiniging van de condensafvoer",
      "Elektrische aansluitingen en regelingen testen",
      "Werking en rendement meten in koel- en verwarmingsbedrijf",
      "Rapportage met bevindingen en advies",
    ],
  },
  process: {
    h2: "Zo verloopt een onderhoudsbeurt",
    steps: [
      {
        title: "Inplannen",
        description:
          "We plannen de beurt op een moment dat uw bedrijfsvoering het minst raakt.",
      },
      {
        title: "Inspectie en reiniging",
        description:
          "De monteur werkt de volledige checklist af, van filters tot koudemiddel.",
      },
      {
        title: "Test en meting",
        description:
          "We testen het systeem in bedrijf en meten de prestaties.",
      },
      {
        title: "Rapportage en advies",
        description:
          "U ontvangt een korte rapportage met bevindingen en eventueel advies.",
      },
    ],
  },
  proof: {
    h2: "Onderhoud waarop u kunt bouwen",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/onderhoud",
      label: "Onderhoud en service",
      description: "Het complete overzicht van onze servicediensten.",
    },
    {
      href: "/airco-onderhoudscontract-zakelijk",
      label: "Zakelijk onderhoudscontract",
      description: "Onderhoud structureel geregeld, met voorrang bij storingen.",
    },
    {
      href: "/airco-reparatie-zakelijk",
      label: "Zakelijke airco reparatie",
      description: "Toch een storing? Zo lossen we die op.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over zakelijk onderhoud",
    items: [
      {
        question: "Hoe lang duurt een onderhoudsbeurt?",
        answer:
          "Voor een enkele unit rekent u op 45–60 minuten; voor grotere installaties plannen we op basis van het aantal units. U ontvangt vooraf een duidelijke tijdsindicatie.",
      },
      {
        question: "Moet het systeem tijdens onderhoud uit?",
        answer:
          "Kort, per unit. We werken ruimte voor ruimte, zodat de rest van uw pand gewoon gekoeld blijft.",
      },
      {
        question: "Krijg ik bewijs van het onderhoud?",
        answer:
          "Ja, u ontvangt na iedere beurt een rapportage — ook van belang voor garantie en wettelijke f-gassenregistratie.",
      },
      {
        question: "Wat kost zakelijk airco onderhoud?",
        answer:
          "De kosten hangen af van het aantal en type units. In een onderhoudscontract zijn de kosten vast en vooraf bekend; vraag een voorstel op maat aan.",
      },
    ],
  },
  form: {
    h2: "Vraag een onderhoudsbeurt aan",
    service: "maintenance",
  },
};

/** /airco-reparatie-zakelijk/ — urgent intent: contact CTA in hero */
export const aircoReparatie: ServicePageContent = {
  meta: {
    title: "Airco reparatie zakelijk | Snelle storingsdienst | Airco@Business",
    description:
      "Storing aan uw zakelijke airco? Snelle diagnose en vakkundige reparatie van alle A-merken door STEK-gecertificeerde monteurs in Zuid-Holland. Meld uw storing direct.",
  },
  name: "Airco reparatie zakelijk",
  hero: {
    eyebrow: "Airco reparatie zakelijk",
    h1: "Airco storing? We staan snel bij u op de stoep",
    intro:
      "Geen koeling, een lekkende unit of een foutcode op het display: bij een zakelijke storing telt elke dag. Meld de storing direct — wij plannen snel een monteur in en herstellen vakkundig.",
    cta: "requestRepair",
    trustPoints: ["Snelle respons", "Alle A-merken", "Contractklanten voorrang"],
    urgent: true,
  },
  overview: {
    h2: "Veelvoorkomende storingen",
    intro:
      "Herkent u één van deze klachten? Dan is een inspectie op korte termijn verstandig:",
    cards: [
      {
        tag: "Koeling",
        title: "Koelt niet of onvoldoende",
        description:
          "Vaak een koudemiddel-, filter- of sensorprobleem — snel te diagnosticeren.",
      },
      {
        tag: "Lekkage",
        title: "Water uit de binnenunit",
        description:
          "Meestal een verstopte condensafvoer; laat dit snel verhelpen om schade te voorkomen.",
      },
      {
        tag: "Melding",
        title: "Foutcode of vreemd geluid",
        description:
          "Foutcodes en geluiden wijzen op een concreet defect dat we gericht kunnen oplossen.",
      },
    ],
  },
  benefits: {
    h2: "Wat wij bij een storing controleren",
    cards: [
      {
        tag: "Diagnose",
        title: "Volledige systeemcheck",
        description:
          "We lezen foutcodes uit, meten druk en temperaturen en inspecteren de gehele installatie — niet alleen het symptoom.",
      },
      {
        tag: "Herstel",
        title: "Direct herstel waar mogelijk",
        description:
          "Veelvoorkomende defecten verhelpen we meteen; voor onderdelen ontvangt u direct een helder voorstel.",
      },
      {
        tag: "Preventie",
        title: "Advies om herhaling te voorkomen",
        description:
          "Na de reparatie adviseren we hoe u dezelfde storing in de toekomst voorkomt.",
      },
    ],
  },
  process: {
    h2: "Zo lossen we uw storing op",
    steps: repairProcess,
  },
  proof: {
    h2: "Service waar bedrijven op rekenen",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/airco-onderhoud-zakelijk",
      label: "Airco onderhoud zakelijk",
      description: "De meeste storingen zijn met onderhoud te voorkomen.",
    },
    {
      href: "/airco-onderhoudscontract-zakelijk",
      label: "Zakelijk onderhoudscontract",
      description: "Voorrang bij storingen en vaste onderhoudsplanning.",
    },
    {
      href: "/contact",
      label: "Direct contact",
      description: "Bel of mail ons serviceteam.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over reparaties",
    items: [
      {
        question: "Hoe snel kan een monteur langskomen?",
        answer:
          "We plannen storingen met prioriteit in; contractklanten krijgen voorrang. Bel ons voor de actuele responstijd — vaak kunnen we binnen enkele werkdagen terecht.",
      },
      {
        question: "Repareren jullie alle merken?",
        answer:
          "We repareren alle gangbare A-merken, waaronder Daikin, Mitsubishi Electric, LG en Toshiba — ook installaties die niet door ons zijn geplaatst.",
      },
      {
        question: "Wat kost een reparatie?",
        answer:
          "Na de diagnose ontvangt u altijd eerst een helder voorstel met de kosten. Zo beslist u zelf voordat we herstellen.",
      },
      {
        question: "Mag ik zelf aan de installatie sleutelen?",
        answer:
          "Aan het koudemiddelcircuit mag alleen een gecertificeerd bedrijf werken. Filters reinigen kunt u zelf; laat al het overige aan onze monteurs over.",
      },
    ],
  },
  form: {
    h2: "Meld uw storing",
    service: "repairs",
  },
};

/** /airco-onderhoudscontract-zakelijk/ — maintenance contracts */
export const onderhoudscontract: ServicePageContent = {
  meta: {
    title: "Onderhoudscontract zakelijke airco | Vaste planning | Airco@Business",
    description:
      "Een zakelijk airco onderhoudscontract: vaste onderhoudsplanning, voorrang bij storingen en voorspelbare kosten. Vraag contractadvies aan voor uw installatie.",
  },
  name: "Onderhoudscontracten",
  hero: {
    eyebrow: "Onderhoudscontract",
    h1: "Onderhoudscontract: uw klimaat structureel geregeld",
    intro:
      "Nooit meer zelf aan onderhoud hoeven denken. Met een onderhoudscontract plannen wij de beurten, krijgt u voorrang bij storingen en weet u vooraf precies wat het kost — per unit, per jaar.",
    cta: "requestContractAdvice",
    secondary: { label: "Airco onderhoud zakelijk", href: "/airco-onderhoud-zakelijk" },
    trustPoints: ["Vaste jaarplanning", "Voorrang bij storingen", "Voorspelbare kosten"],
  },
  overview: {
    h2: "Voor wie is een onderhoudscontract?",
    intro:
      "Voor organisaties die zekerheid willen over hun binnenklimaat zonder er omkijken naar te hebben:",
    cards: [
      {
        tag: "MKB",
        title: "Kantoren en MKB",
        description:
          "Eén vast bedrag per jaar, onderhoud automatisch ingepland.",
      },
      {
        tag: "Retail",
        title: "Winkels en horeca",
        description:
          "Onderhoud buiten openingstijden en snelle hulp in het seizoen.",
      },
      {
        tag: "Beheer",
        title: "Vastgoed- en facility management",
        description:
          "Meerdere panden of installaties onder één overeenkomst met rapportage.",
      },
    ],
  },
  benefits: {
    h2: "Wat het contract uw bedrijf oplevert",
    cards: [
      {
        tag: "Continuïteit",
        title: "Maximale beschikbaarheid",
        description:
          "Periodiek onderhoud plus voorrang bij storingen betekent minimale kans op uitval — juist in de zomerpiek.",
      },
      {
        tag: "Financieel",
        title: "Voorspelbare kosten",
        description:
          "Vaste contractprijs per jaar; geen verrassingen op de servicefactuur.",
      },
      {
        tag: "Compliance",
        title: "Wettelijk aantoonbaar in orde",
        description:
          "F-gassencontroles en logboek worden automatisch bijgehouden en gerapporteerd.",
      },
    ],
  },
  scope: {
    h2: "Wat er in het contract zit",
    items: [
      "Periodieke onderhoudsbeurten volgens vaste jaarplanning",
      "Volledige inspectie- en reinigingschecklist per beurt",
      "Voorrang in de storingsplanning",
      "Rapportage en f-gassenregistratie per installatie",
      "Vaste tarieven voor werkzaamheden buiten het contract",
      "Eén aanspreekpunt voor al uw locaties",
    ],
  },
  process: {
    h2: "Zo sluiten we het contract af",
    steps: [
      {
        title: "Inventarisatie",
        description:
          "We brengen uw installaties, units en gebruiksintensiteit in kaart.",
      },
      {
        title: "Voorstel op maat",
        description:
          "U ontvangt een contractvoorstel met frequentie, dekking en vaste prijs.",
      },
      {
        title: "Jaarplanning",
        description:
          "Na akkoord plannen we alle beurten vooruit, afgestemd op uw agenda.",
      },
      {
        title: "Uitvoering en rapportage",
        description:
          "Wij voeren uit, rapporteren en signaleren tijdig wat aandacht vraagt.",
      },
    ],
  },
  proof: {
    h2: "Zekerheid voor uw organisatie",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/airco-onderhoud-zakelijk",
      label: "Airco onderhoud zakelijk",
      description: "Wat een onderhoudsbeurt precies inhoudt.",
    },
    {
      href: "/airco-reparatie-zakelijk",
      label: "Zakelijke airco reparatie",
      description: "Zo werkt onze storingsdienst.",
    },
    {
      href: "/onderhoud",
      label: "Onderhoud en service",
      description: "Het volledige service-overzicht.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over onderhoudscontracten",
    items: [
      {
        question: "Wat kost een onderhoudscontract?",
        answer:
          "De contractprijs hangt af van het aantal units, het type installatie en de gewenste frequentie. Na een korte inventarisatie ontvangt u een vast jaarbedrag.",
      },
      {
        question: "Kan een contract voor installaties van een ander merk?",
        answer:
          "Ja, we contracteren onderhoud voor alle gangbare A-merken — ook voor installaties die destijds niet door ons zijn geplaatst.",
      },
      {
        question: "Wat is de looptijd van het contract?",
        answer:
          "Contracten lopen doorgaans per jaar en zijn jaarlijks opzegbaar. Meerjarige afspraken met vaste tarieven zijn mogelijk.",
      },
      {
        question: "Zit reparatie ook in het contract?",
        answer:
          "Het standaardcontract dekt preventief onderhoud en geeft voorrang plus vaste tarieven bij reparaties. All-in dekking is op aanvraag bespreekbaar.",
      },
    ],
  },
  form: {
    h2: "Vraag contractadvies aan",
    service: "maintenanceContract",
  },
};
