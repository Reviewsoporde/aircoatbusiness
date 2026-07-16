import type { ServicePageContent } from "../types";
import { standardProcess, trustIndicators } from "./shared";

/** Parent: /installatie/ - installation & system-selection overview */
export const installatie: ServicePageContent = {
  meta: {
    title: "Airco installatie voor bedrijven | Systemen & aanpak | Airco@Business",
    description:
      "Zakelijke airco installatie: van systeemkeuze en planning tot nette montage door STEK-gecertificeerde monteurs. Cassette, kanaal en wandmodellen in Zuid-Holland.",
  },
  name: "Installatie",
  hero: {
    eyebrow: "Installatie",
    h1: "Airco installatie voor bedrijven: van systeemkeuze tot oplevering",
    intro:
      "Een goede installatie begint ruim vóór de montagedag. Wij nemen systeemkeuze, capaciteitsberekening, planning en afwerking uit handen. Zo doet uw nieuwe klimaatsysteem vanaf dag één wat het belooft.",
    cta: "planConsultation",
    secondary: { label: "Vraag een zakelijke offerte aan", href: "/contact" },
    trustPoints: ["Eigen monteurs", "STEK-gecertificeerd", "Vaste planning"],
    image: {
      src: "/images/generated/commercial-building.webp",
      alt: "Zakelijke airco installatie door monteurs van Airco@Business",
    },
  },
  overview: {
    h2: "Installatie en systemen",
    intro:
      "Kies direct de installatiedienst of verdiep u eerst in de systemen die wij voor bedrijfsruimtes installeren.",
    cards: [
      {
        tag: "Dienst",
        title: "Zakelijke airco installatie",
        description:
          "De complete installatiedienst: advies, planning, montage en oplevering.",
        href: "/zakelijke-airco-installatie",
        linkLabel: "Zakelijke airco installatie",
      },
      {
        tag: "Systeem",
        title: "Cassette airco",
        description:
          "Plafondinbouw met vierzijdige luchtverdeling, een veelgekozen oplossing voor kantoren en winkels.",
        href: "/cassette-airco-bedrijf",
        linkLabel: "Cassette airco voor bedrijven",
      },
      {
        tag: "Systeem",
        title: "Kanaal airco",
        description:
          "Volledig weggewerkt systeem voor grotere ruimtes en meerdere zones.",
        href: "/kanaal-airco-bedrijf",
        linkLabel: "Kanaal airco voor bedrijven",
      },
      {
        tag: "Systeem",
        title: "Wandmodel airco",
        description:
          "Compacte oplossing voor aparte ruimtes en kleinere kantoren.",
        href: "/wandmodel-airco-bedrijf",
        linkLabel: "Wandmodel airco voor bedrijven",
      },
    ],
  },
  benefits: {
    h2: "Waarom professionele installatie het verschil maakt",
    cards: [
      {
        tag: "Capaciteit",
        title: "Berekend, niet geschat",
        description:
          "Een te licht systeem blijft draaien zonder resultaat; een te zwaar systeem verspilt energie. Wij berekenen de capaciteit per ruimte.",
      },
      {
        tag: "Afwerking",
        title: "Nette, doordachte montage",
        description:
          "Leidingwerk strak weggewerkt, buitendelen slim geplaatst en werkplekken afgeschermd tijdens het werk.",
      },
      {
        tag: "Zekerheid",
        title: "Gecertificeerd en verzekerd",
        description:
          "STEK-gecertificeerde monteurs installeren volgens de geldende f-gassen­regelgeving, met garantie op systeem én montage.",
      },
    ],
  },
  process: {
    h2: "Onze installatie-aanpak",
    steps: standardProcess,
  },
  proof: {
    h2: "Installaties waar wij trots op zijn",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Zakelijke airconditioning",
      description: "Oplossingen per type bedrijfsruimte, van kantoor tot showroom.",
    },
    {
      href: "/projecten",
      label: "Zakelijke airco projecten",
      description: "Bekijk hoe recente installaties zijn uitgevoerd.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Houd uw nieuwe installatie in topconditie.",
    },
    {
      href: "/contact",
      label: "Plan een adviesgesprek",
      description: "Bespreek uw installatieplannen met een adviseur.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over airco installatie",
    items: [
      {
        question: "Hoe lang duurt een zakelijke airco installatie?",
        answer:
          "Een enkele ruimte is doorgaans binnen één dag gereed. Grotere projecten met meerdere zones plannen we gefaseerd, afgestemd op uw bedrijfsvoering.",
      },
      {
        question: "Welk systeem past bij mijn bedrijfsruimte?",
        answer:
          "Dat bepalen we op locatie: plafondtype, oppervlakte, zonering en uitstraling wegen allemaal mee. Cassettes passen vaak in kantoren en winkels, kanaalsystemen in grotere open ruimtes en wandmodellen in aparte kamers.",
      },
      {
        question: "Verzorgen jullie ook de vergunning of VvE-afstemming?",
        answer:
          "We denken actief mee over plaatsing van buitendelen, geluidseisen en eventuele afstemming met pandeigenaar of VvE, en leveren daarvoor de benodigde specificaties aan.",
      },
      {
        question: "Krijg ik garantie op de installatie?",
        answer:
          "Ja, u krijgt fabrieksgarantie op het systeem en garantie op onze montage. Met een onderhoudscontract blijft de fabrieksgarantie bovendien optimaal geborgd.",
      },
    ],
  },
  form: {
    h2: "Plan uw installatie met een offerte",
    service: "installation",
  },
};

/** /zakelijke-airco-installatie/ - primary keyword: zakelijke airco installatie */
export const zakelijkeInstallatie: ServicePageContent = {
  meta: {
    title: "Zakelijke airco installatie | Advies & montage | Airco@Business",
    description:
      "Zakelijke airco laten installeren? Capaciteitsberekening, systeemadvies en nette montage door STEK-gecertificeerde monteurs. Actief in heel Zuid-Holland.",
  },
  name: "Zakelijke airco installatie",
  hero: {
    eyebrow: "Zakelijke airco installatie",
    h1: "Zakelijke airco installatie zonder verrassingen",
    intro:
      "Van eerste inspectie tot werkende installatie: één team dat adviseert, plant en monteert. Met een vaste planning, nette afwerking en een systeem dat is berekend op uw ruimte, niet op een gemiddelde.",
    cta: "planConsultation",
    secondary: { label: "Bekijk de systemen", href: "/installatie" },
    trustPoints: ["Capaciteit berekend per ruimte", "Vaste opleverdatum", "Werkplekken blijven bruikbaar"],
  },
  overview: {
    h2: "Voor wie is deze installatiedienst?",
    intro:
      "Voor ondernemers en facility managers die één verantwoordelijke partij willen voor het complete traject, zowel in nieuwe als bestaande panden.",
    cards: [
      {
        tag: "Nieuw",
        title: "Eerste installatie",
        description:
          "Uw pand heeft nog geen koeling en de zomers worden niet koeler. Tijd voor een systeem dat bij de ruimte past.",
      },
      {
        tag: "Vervanging",
        title: "Vervanging van verouderde systemen",
        description:
          "Uw huidige installatie is toe aan vervanging of voldoet niet meer aan de f-gassenregels.",
      },
      {
        tag: "Uitbreiding",
        title: "Uitbreiding van bestaande installaties",
        description:
          "Extra zones of ruimtes aansluiten op uw bestaande systeem, zonder alles opnieuw te doen.",
      },
    ],
  },
  benefits: {
    h2: "Waarom professionele installatie loont",
    cards: [
      {
        tag: "Rendement",
        title: "Juiste capaciteit, lagere kosten",
        description:
          "Een correct gedimensioneerd systeem verbruikt minder, slijt langzamer en houdt het comfort constant.",
      },
      {
        tag: "Regelgeving",
        title: "Volgens de f-gassenregelgeving",
        description:
          "Zakelijke installaties moeten door gecertificeerde monteurs worden aangelegd. Onze STEK-certificering waarborgt dat.",
      },
      {
        tag: "Continuïteit",
        title: "Minimale verstoring",
        description:
          "Duidelijke fasering, nette afscherming en oplevering per zone: uw team merkt zo min mogelijk van het werk.",
      },
    ],
  },
  scope: {
    h2: "Wat bij de installatie is inbegrepen",
    items: [
      "Inspectie op locatie en capaciteitsberekening per ruimte",
      "Systemadvies met heldere afwegingen per optie",
      "Complete montage: binnenunits, buitendeel, leidingwerk en bekabeling",
      "Nette afwerking van leidinggoten en doorvoeren",
      "Inregeling, test en oplevering met gebruiksinstructie",
      "Optioneel: onderhoudscontract vanaf dag één",
    ],
  },
  process: {
    h2: "Het installatietraject stap voor stap",
    steps: standardProcess,
  },
  proof: {
    h2: "Installatiewerk waarop u kunt bouwen",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette airco voor bedrijven",
      description: "Plafondinbouw met gelijkmatige luchtverdeling.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Kanaal airco voor bedrijven",
      description: "Onzichtbaar systeem voor grotere ruimtes en zones.",
    },
    {
      href: "/wandmodel-airco-bedrijf",
      label: "Wandmodel airco voor bedrijven",
      description: "Compacte oplossing voor aparte ruimtes.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Bescherm uw investering met periodiek onderhoud.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over zakelijke installatie",
    items: [
      {
        question: "Wat kost een zakelijke airco installatie?",
        answer:
          "Dat hangt af van het aantal ruimtes, het systeemtype en de bouwkundige situatie. Na de inspectie op locatie ontvangt u een offerte met vaste prijzen, zonder verrassingen achteraf.",
      },
      {
        question: "Kunnen jullie buiten kantooruren installeren?",
        answer:
          "Ja. Voor winkels, showrooms en drukbezette kantoren plannen we montage regelmatig in de avond, het weekend of gefaseerd per zone.",
      },
      {
        question: "Waar komt het buitendeel te staan?",
        answer:
          "Op het dak, aan de gevel of op maaiveld. We adviseren een plek die geluidstechnisch en esthetisch klopt en voldoet aan de regelgeving.",
      },
      {
        question: "Hoe snel kan de installatie plaatsvinden?",
        answer:
          "Na akkoord op de offerte plannen we doorgaans binnen enkele weken in. Het voorjaar is de drukste periode; wie vóór de zomer koeling wil, doet er goed aan tijdig te schakelen.",
      },
    ],
  },
  form: {
    h2: "Vraag een installatie-offerte aan",
    service: "installation",
  },
};

/** /cassette-airco-bedrijf/ - primary keyword: cassette airco bedrijf */
export const cassetteAirco: ServicePageContent = {
  meta: {
    title: "Cassette airco bedrijf | Plafondinbouw | Airco@Business",
    description:
      "Cassette airco voor kantoor, winkel of bedrijfsruimte: in het plafond geïntegreerd, vierzijdige luchtverdeling en stille werking. Advies en installatie in Zuid-Holland.",
  },
  name: "Cassette airco voor bedrijven",
  hero: {
    eyebrow: "Cassette airco bedrijf",
    h1: "Cassette airco voor bedrijven: onopvallend in het plafond",
    intro:
      "Een cassette-unit kan vrijwel volledig in een systeemplafond worden opgenomen en lucht naar vier richtingen verdelen. Bij het advies letten we op capaciteit en positionering om tocht op werkplekken te beperken.",
    cta: "requestSystemAdvice",
    secondary: { label: "Alle systemen bekijken", href: "/installatie" },
    trustPoints: ["Vierzijdige luchtverdeling", "Past in systeemplafond", "Koelt én verwarmt"],
  },
  overview: {
    h2: "Waar een cassette airco het best tot zijn recht komt",
    intro:
      "Cassettes zijn ontworpen voor ruimtes met een (systeem)plafond en een open karakter. Typische toepassingen:",
    cards: [
      {
        tag: "Kantoor",
        title: "Kantoortuinen en kantoren",
        description:
          "Gelijkmatige koeling over de hele vloer, per unit regelbaar.",
      },
      {
        tag: "Retail",
        title: "Winkels",
        description:
          "Klimaat zonder zichtbare techniek in het winkelbeeld.",
      },
      {
        tag: "Horeca & meer",
        title: "Vergader- en ontvangstruimtes",
        description:
          "Comfort in representatieve ruimtes met wisselende bezetting.",
      },
    ],
  },
  benefits: {
    h2: "Wanneer de cassette de juiste keuze is",
    cards: [
      {
        tag: "Comfort",
        title: "Geen tocht, wel koeling",
        description:
          "De vierzijdige uitblaas verdeelt lucht langs het plafond, zodat niemand rechtstreeks in de luchtstroom zit.",
      },
      {
        tag: "Esthetiek",
        title: "Vlak in het plafond",
        description:
          "Alleen het rooster blijft zichtbaar, gelijk met de plafondplaten. Techniek en leidingen zitten uit het zicht.",
      },
      {
        tag: "Flexibel",
        title: "Schaalbaar per zone",
        description:
          "Meerdere cassettes op één buitendeel, per ruimte afzonderlijk regelbaar.",
      },
    ],
  },
  scope: {
    h2: "Wat we beoordelen vóór we een cassette adviseren",
    items: [
      "Plafondtype en vrije inbouwhoogte boven de plafondplaten",
      "Oppervlakte en warmtelast van de ruimte",
      "Aantal units en posities voor gelijkmatige verdeling",
      "Geluidseisen van de ruimte",
      "Leidingtracé naar het buitendeel",
      "Afstemming met verlichting, sprinklers en ventilatie in het plafond",
    ],
  },
  process: {
    h2: "Zo installeren we een cassettesysteem",
    steps: standardProcess,
  },
  proof: {
    h2: "Cassette-installaties in de praktijk",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Installatie",
      description: "Onze complete installatie-aanpak en alle systemen.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Zakelijke airco installatie",
      description: "Het volledige installatietraject, van advies tot oplevering.",
    },
    {
      href: "/airco-kantoor",
      label: "Airco voor kantoren",
      description: "Klimaatoplossingen specifiek voor kantooromgevingen.",
    },
    {
      href: "/airco-winkel",
      label: "Airco voor winkels",
      description: "Comfort dat past bij uw winkelbeeld.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over cassette airco's",
    items: [
      {
        question: "Past een cassette in elk plafond?",
        answer:
          "Cassettes vragen een systeemplafond of verlaagd plafond met voldoende vrije hoogte (indicatief 25-30 cm). Tijdens de inspectie meten we of uw plafond geschikt is.",
      },
      {
        question: "Hoeveel ruimte koelt één cassette?",
        answer:
          "Afhankelijk van capaciteit en warmtelast bedient één cassette globaal 25 tot 80 m². De juiste aantallen en posities volgen uit de berekening op locatie.",
      },
      {
        question: "Is een cassette airco stil genoeg voor kantoren?",
        answer:
          "Ja. In de praktijk draaien cassettes in kantooromgevingen op een laag toerental en vallen ze weg tegen het normale omgevingsgeluid.",
      },
      {
        question: "Kan een cassette ook verwarmen?",
        answer:
          "Ja, cassettes zijn volwaardige warmtepompen en verwarmen in de winter energiezuinig, vaak als aanvulling op of vervanging van traditionele verwarming.",
      },
    ],
  },
  form: {
    h2: "Vraag systeemadvies aan voor cassette airco",
    service: "systemAdvice",
  },
};

/** /kanaal-airco-bedrijf/ - primary keyword: kanaal airco bedrijf */
export const kanaalAirco: ServicePageContent = {
  meta: {
    title: "Kanaal airco bedrijf | Onzichtbaar systeem | Airco@Business",
    description:
      "Kanaal airco voor bedrijfsruimtes: volledig weggewerkt boven het plafond, ideaal voor grotere ruimtes en meerdere zones. Advies en installatie in Zuid-Holland.",
  },
  name: "Kanaal airco voor bedrijven",
  hero: {
    eyebrow: "Kanaal airco bedrijf",
    h1: "Kanaal airco voor bedrijven: klimaatbeheersing uit het zicht",
    intro:
      "Bij een kanaalsysteem kan de techniek boven het plafond worden weggewerkt, zodat vooral de roosters zichtbaar blijven. Via luchtkanalen kan één unit meerdere ruimtes of één grote ruimte bedienen, afhankelijk van de technische beoordeling.",
    cta: "requestSystemAdvice",
    secondary: { label: "Alle systemen bekijken", href: "/installatie" },
    trustPoints: ["Volledig onzichtbaar", "Meerdere ruimtes per unit", "Zeer stille werking"],
  },
  overview: {
    h2: "Waar een kanaalsysteem het best tot zijn recht komt",
    intro:
      "Kanaal airco's zijn de keuze voor wie techniek uit het zicht wil of meerdere ruimtes vanuit één unit wil bedienen:",
    cards: [
      {
        tag: "Open ruimte",
        title: "Grote open ruimtes",
        description:
          "Showrooms en grotere kantoorvloeren met gelijkmatige luchtverdeling via meerdere roosters.",
      },
      {
        tag: "Multi-ruimte",
        title: "Meerdere ruimtes op één unit",
        description:
          "Kantoren, spreekkamers en gangzones bediend vanuit één weggewerkte unit.",
      },
      {
        tag: "Design",
        title: "Ruimtes waar esthetiek telt",
        description:
          "Hotels, praktijken en representatieve ruimtes zonder zichtbare units.",
      },
    ],
  },
  benefits: {
    h2: "Wanneer het kanaalmodel de juiste keuze is",
    cards: [
      {
        tag: "Esthetiek",
        title: "Alleen roosters in beeld",
        description:
          "De unit, leidingen en kanalen zitten boven het plafond. Het interieur blijft volledig strak.",
      },
      {
        tag: "Comfort",
        title: "Fluisterstil resultaat",
        description:
          "Doordat de unit op afstand van de ruimte hangt, is een kanaalsysteem in de ruimte zelf nagenoeg onhoorbaar.",
      },
      {
        tag: "Efficiënt",
        title: "Eén systeem, meerdere zones",
        description:
          "Luchtkanalen verdelen de capaciteit slim over ruimtes. Dat betekent minder units en minder onderhoudspunten.",
      },
    ],
  },
  scope: {
    h2: "Wat we beoordelen vóór we een kanaalsysteem adviseren",
    items: [
      "Beschikbare ruimte boven het plafond voor unit en kanalen",
      "Kanaaltracés en posities van aanzuig- en uitblaasroosters",
      "Capaciteit en luchthoeveelheden per ruimte",
      "Geluidseisen en demping in het kanaalwerk",
      "Bereikbaarheid van de unit voor onderhoud",
      "Combinatie met bestaande ventilatie",
    ],
  },
  process: {
    h2: "Zo installeren we een kanaalsysteem",
    steps: standardProcess,
  },
  proof: {
    h2: "Kanaalsystemen in de praktijk",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Installatie",
      description: "Onze complete installatie-aanpak en alle systemen.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Zakelijke airco installatie",
      description: "Het volledige installatietraject, van advies tot oplevering.",
    },
    {
      href: "/airco-bedrijfspand",
      label: "Airco voor bedrijfspanden",
      description: "Pandbrede klimaatoplossingen met meerdere zones.",
    },
    {
      href: "/airco-showroom",
      label: "Airco voor showrooms",
      description: "Representatief klimaat voor presentatieruimtes.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over kanaal airco's",
    items: [
      {
        question: "Hoeveel plafondruimte vraagt een kanaalsysteem?",
        answer:
          "Indicatief 30-40 cm vrije hoogte voor unit en kanalen, afhankelijk van de capaciteit. Tijdens de inspectie bepalen we of uw situatie geschikt is.",
      },
      {
        question: "Kan elke ruimte een eigen temperatuur krijgen?",
        answer:
          "Binnen één kanaalunit deelt u de luchtverdeling; voor echt onafhankelijke zones combineren we meerdere units of kiezen we een VRF-oplossing. We adviseren wat bij uw indeling past.",
      },
      {
        question: "Is een kanaal airco geschikt voor bestaande panden?",
        answer:
          "Vaak wel, mits er een verlaagd plafond of opbouwmogelijkheid is. In bestaande panden kijken we extra zorgvuldig naar tracés en bereikbaarheid.",
      },
      {
        question: "Hoe wordt zo'n systeem onderhouden?",
        answer:
          "Via inspectieluiken bereiken we unit en filters. Met periodiek onderhoud blijven luchtkwaliteit en rendement op peil. Daarvoor bieden we contracten aan.",
      },
    ],
  },
  form: {
    h2: "Vraag systeemadvies aan voor kanaal airco",
    service: "systemAdvice",
  },
};

/** /wandmodel-airco-bedrijf/ - wandmodel airco bedrijf */
export const wandmodelAirco: ServicePageContent = {
  meta: {
    title: "Wandmodel airco bedrijf | Compact systeem | Airco@Business",
    description:
      "Wandmodel airco voor kantoren en bedrijfsruimtes: compact, snel geïnstalleerd en per ruimte regelbaar. Premium A-merken, installatie in Zuid-Holland.",
  },
  name: "Wandmodel airco voor bedrijven",
  hero: {
    eyebrow: "Wandmodel airco bedrijf",
    h1: "Wandmodel airco voor bedrijven: gericht comfort per ruimte",
    intro:
      "Niet elke ruimte vraagt een plafondsysteem. Voor aparte kantoren, spreekkamers, kantines en serverruimtes is een hoogwaardig wandmodel vaak de snelste en meest doelmatige oplossing.",
    cta: "requestSystemAdvice",
    secondary: { label: "Alle systemen bekijken", href: "/installatie" },
    trustPoints: ["Compact systeem", "Per ruimte regelbaar", "Premium A-merken"],
  },
  overview: {
    h2: "Waar een wandmodel het best tot zijn recht komt",
    intro:
      "Wandmodellen zijn compact, krachtig en per ruimte te regelen. Typische zakelijke toepassingen:",
    cards: [
      {
        tag: "Kantoor",
        title: "Aparte kantoorruimtes",
        description:
          "Directie-, focus- en spreekkamers met eigen temperatuurregeling.",
      },
      {
        tag: "Techniek",
        title: "Server- en technische ruimtes",
        description:
          "Betrouwbare, continue koeling voor apparatuur.",
      },
      {
        tag: "Voorziening",
        title: "Kantines en pauzeruimtes",
        description:
          "Snel comfort in ruimtes met wisselend gebruik.",
      },
    ],
  },
  benefits: {
    h2: "Wanneer het wandmodel de juiste keuze is",
    cards: [
      {
        tag: "Snelheid",
        title: "Binnen een dag geïnstalleerd",
        description:
          "Geen plafondwerk nodig: een wandmodel hangt, is aangesloten en werkt vaak binnen één werkdag.",
      },
      {
        tag: "Budget",
        title: "Doelmatige investering",
        description:
          "De laagste instapkosten per ruimte, zonder in te leveren op kwaliteit of energiezuinigheid.",
      },
      {
        tag: "Flexibel",
        title: "Ruimte voor ruimte uitbreidbaar",
        description:
          "Met multi-splitsystemen sluit u meerdere wandunits aan op één buitendeel.",
      },
    ],
  },
  scope: {
    h2: "Wat we beoordelen vóór we een wandmodel adviseren",
    items: [
      "Beschikbare wandpositie en luchtworp de ruimte in",
      "Capaciteit passend bij oppervlakte en warmtelast",
      "Geluidsniveau binnen en buiten",
      "Leidingtracé en positie van het buitendeel",
      "Condensafvoer, netjes weggewerkt",
      "Combinatiemogelijkheden met andere ruimtes (multi-split)",
    ],
  },
  process: {
    h2: "Zo installeren we een wandmodel",
    steps: standardProcess,
  },
  proof: {
    h2: "Wandmodel-installaties in de praktijk",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Installatie",
      description: "Onze complete installatie-aanpak en alle systemen.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Zakelijke airco installatie",
      description: "Het volledige installatietraject, van advies tot oplevering.",
    },
    {
      href: "/airco-kantoor",
      label: "Airco voor kantoren",
      description: "Klimaatoplossingen voor kantooromgevingen.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Ook wandmodellen blijven het best presteren met onderhoud.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over wandmodellen",
    items: [
      {
        question: "Is een wandmodel geschikt voor serverruimtes?",
        answer:
          "Ja, mits gekozen voor een model dat op continu bedrijf is berekend. Voor kritieke apparatuur adviseren we ook over redundantie en storingsmelding.",
      },
      {
        question: "Hoeveel wandunits kunnen op één buitendeel?",
        answer:
          "Met een multi-splitsysteem doorgaans twee tot vijf binnenunits, afhankelijk van de capaciteiten. Zo blijft het aantal buitendelen beperkt.",
      },
      {
        question: "Zijn wandmodellen niet lawaaiig?",
        answer:
          "De A-merken die wij installeren draaien in de laagste stand rond fluisterniveau. In ons advies matchen we het geluidsniveau met de functie van de ruimte.",
      },
      {
        question: "Kan een wandmodel ook verwarmen?",
        answer:
          "Ja, ook wandmodellen zijn volwaardige warmtepompen en kunnen handig zijn als hoofd- of bijverwarming in tussenseizoenen.",
      },
    ],
  },
  form: {
    h2: "Vraag systeemadvies aan voor wandmodel airco",
    service: "systemAdvice",
  },
};
