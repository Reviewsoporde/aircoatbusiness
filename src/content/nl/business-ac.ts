import type { ServicePageContent } from "../types";
import { standardProcess, trustIndicators } from "./shared";

/** Parent: /zakelijke-airconditioning/ - primary keyword: zakelijke airconditioning */
export const businessAC: ServicePageContent = {
  meta: {
    title: "Zakelijke airconditioning | Advies & installatie | Airco@Business",
    description:
      "Zakelijke airconditioning voor kantoren, bedrijfspanden, winkels en showrooms. Advies op locatie, professionele installatie en onderhoud in heel Zuid-Holland.",
  },
  name: "Zakelijke airconditioning",
  hero: {
    eyebrow: "Zakelijke airconditioning",
    h1: "Zakelijke airconditioning die past bij uw bedrijfsruimte",
    intro:
      "Geen twee bedrijfsruimtes zijn hetzelfde. Airco@Business adviseert en installeert airconditioning op basis van uw pand, uw bezetting en uw bedrijfsvoering. Zo ontstaat een werkklimaat waar u niet meer over hoeft na te denken.",
    cta: "requestQuote",
    secondary: { label: "Plan een adviesgesprek", href: "/contact" },
    trustPoints: ["Advies op locatie", "STEK-gecertificeerd", "Premium A-merken"],
    image: {
      src: "/images/generated/commercial-office-hero.webp",
      position: "58% 50%",
      alt: "Zakelijke airco installatie in een bedrijfsruimte",
    },
  },
  overview: {
    h2: "Airconditioning voor iedere bedrijfsruimte",
    intro:
      "Van kantoortuin tot showroom: kies uw type ruimte en zie welke aanpak en systemen daarbij passen.",
    cards: [
      {
        tag: "Kantoor",
        title: "Airco voor kantoren",
        description:
          "Constante temperaturen voor concentratie en werkcomfort, ook in open kantoortuinen.",
        href: "/airco-kantoor",
        linkLabel: "Airco voor kantoren",
      },
      {
        tag: "Bedrijfspand",
        title: "Airco voor bedrijfspanden",
        description:
          "Complete klimaatoplossingen voor panden met meerdere zones en functies.",
        href: "/airco-bedrijfspand",
        linkLabel: "Airco voor bedrijfspanden",
      },
      {
        tag: "Winkel",
        title: "Airco voor winkels",
        description:
          "Aangenaam winkelen bij elke buitentemperatuur, met systemen die opgaan in het interieur.",
        href: "/airco-winkel",
        linkLabel: "Airco voor winkels",
      },
      {
        tag: "Showroom",
        title: "Airco voor showrooms",
        description:
          "Een stabiel, representatief klimaat voor grote presentatieruimtes.",
        href: "/airco-showroom",
        linkLabel: "Airco voor showrooms",
      },
    ],
  },
  benefits: {
    h2: "Waarom bedrijven voor een vaste klimaatpartner kiezen",
    cards: [
      {
        tag: "Advies",
        title: "Eerst begrijpen, dan adviseren",
        description:
          "Wij adviseren pas een systeem nadat we uw ruimte hebben gezien. Zo voorkomt u een installatie die te krap of onnodig zwaar is uitgevoerd.",
      },
      {
        tag: "Comfort",
        title: "Personeel dat prettig werkt",
        description:
          "Een stabiel binnenklimaat voorkomt de bekende zomerklachten en houdt de concentratie op peil, juist op de warmste dagen.",
      },
      {
        tag: "Continuïteit",
        title: "Eén partner, ook na de installatie",
        description:
          "Van installatie tot onderhoud en reparatie: u heeft één aanspreekpunt dat uw installatie en pand kent.",
      },
    ],
  },
  process: {
    h2: "Van adviesgesprek tot een werkend klimaat",
    steps: standardProcess,
  },
  proof: {
    h2: "Zakelijke installaties waar wij achter staan",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/installatie",
      label: "Zakelijke airco installatie",
      description: "Van systeemkeuze tot nette montage door eigen monteurs.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Preventief onderhoud, reparaties en onderhoudscontracten.",
    },
    {
      href: "/projecten",
      label: "Zakelijke airco projecten",
      description: "Bekijk recente installaties bij bedrijven in Zuid-Holland.",
    },
    {
      href: "/contact",
      label: "Plan een adviesgesprek",
      description: "Bespreek uw situatie vrijblijvend met een adviseur.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over zakelijke airconditioning",
    items: [
      {
        question: "Wat kost zakelijke airconditioning?",
        answer:
          "De investering hangt af van het aantal ruimtes, het gekozen systeem en de bouwkundige situatie. Na een inspectie op locatie ontvangt u een offerte met vaste prijzen. Zo weet u vooraf precies waar u aan toe bent.",
      },
      {
        question: "Kan een airco ook verwarmen?",
        answer:
          "Ja. Moderne zakelijke airconditioning werkt als warmtepomp en kan energiezuinig koelen én verwarmen. Veel bedrijven vervangen er (deels) hun traditionele verwarming mee.",
      },
      {
        question: "Hoeveel overlast geeft de installatie?",
        answer:
          "Dat hangt af van de omvang van de installatie en de bouwkundige situatie. Wij beoordelen dit vooraf, plannen de werkzaamheden in overleg en kunnen werkplekken of zones gefaseerd afschermen.",
      },
      {
        question: "Waar moet ik op letten als ik een airco zakelijk laat installeren?",
        answer:
          "Let op de capaciteit, luchtverdeling, geluidswens, beschikbare plafond- of wandruimte en het aantal klimaatzones. Wij beoordelen deze punten op locatie voordat we een systeem adviseren.",
      },
      {
        question: "Werken jullie ook buiten Zuid-Holland?",
        answer:
          "Ons werkgebied is Zuid-Holland, inclusief Leiden, Den Haag, Rotterdam en Hoofddorp. Voor grotere projecten werken we ook daarbuiten. Neem gerust contact op.",
      },
    ],
  },
  form: {
    h2: "Vraag een zakelijke offerte aan",
    service: "businessAC",
  },
};

/** /airco-kantoor/ - primary keyword: airco kantoor (transactional) */
export const aircoKantoor: ServicePageContent = {
  meta: {
    title: "Airco voor kantoor | Installatie & advies | Airco@Business",
    description:
      "Airco voor uw kantoor laten installeren? Stabiel werkklimaat, stille systemen en nette montage door STEK-gecertificeerde monteurs in Zuid-Holland. Vraag een offerte aan.",
  },
  name: "Airco voor kantoren",
  hero: {
    eyebrow: "Airco kantoor",
    h1: "Airco voor kantoren: constant comfort, geconcentreerd werken",
    intro:
      "Te warm in de zomer, klachten over tocht in de winter: een kantoor zonder goede klimaatbeheersing kost werkplezier en productiviteit. Airco@Business installeert stille, energiezuinige systemen die het hele jaar een stabiele temperatuur leveren.",
    cta: "requestQuote",
    secondary: { label: "Zakelijke airconditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Stille systemen", "Advies op locatie", "Nette afwerking"],
  },
  overview: {
    h2: "Klimaatbeheersing voor ieder type kantoor",
    intro:
      "Van eenpersoonskantoor tot volledige kantoorverdieping: de aanpak verschilt, maar het doel blijft hetzelfde. Een werkklimaat dat niemand opvalt omdat het altijd klopt.",
    cards: [
      {
        tag: "Kantoortuin",
        title: "Open kantoortuinen",
        description:
          "Gelijkmatige koeling zonder tocht op de werkplekken, meestal met cassette- of kanaalsystemen.",
      },
      {
        tag: "Kantoorunit",
        title: "Aparte kantoorruimtes",
        description:
          "Per ruimte regelbaar klimaat voor management-, focus- en spreekkamers.",
      },
      {
        tag: "Vergaderen",
        title: "Vergaderruimtes",
        description:
          "Snel op temperatuur bij wisselende bezetting, stil genoeg om niet op te vallen.",
      },
      {
        tag: "Techniek",
        title: "Serverruimtes",
        description:
          "Betrouwbare koeling voor apparatuur die niet mag uitvallen.",
      },
    ],
  },
  benefits: {
    h2: "Wat een goed kantoorklimaat uw organisatie oplevert",
    cards: [
      {
        tag: "Productiviteit",
        title: "Betere concentratie",
        description:
          "Bij temperaturen boven de 24-25 °C loopt de concentratie merkbaar terug. Een stabiel klimaat houdt uw team scherp.",
      },
      {
        tag: "Comfort",
        title: "Minder klachten",
        description:
          "Geen discussies meer over de thermostaat: gelijkmatige koeling zonder tocht, per zone regelbaar.",
      },
      {
        tag: "Energie",
        title: "Energiezuinig koelen én verwarmen",
        description:
          "Moderne systemen verwarmen in de winter energiezuiniger dan veel traditionele installaties.",
      },
    ],
  },
  scope: {
    h2: "Wat we voor uw kantoor beoordelen en verzorgen",
    intro:
      "Een passend advies begint met de juiste vragen. Bij een kantoorinstallatie kijken we onder meer naar:",
    items: [
      "Oppervlakte, indeling en interne warmtelast (mensen, apparatuur, verlichting)",
      "Plafondtype en beschikbare ruimte voor cassette- of kanaalunits",
      "Benodigde capaciteit per zone, afgestemd op bezetting en zonligging",
      "Geluidsniveau: systemen die vergaderingen en focuswerk niet storen",
      "Plaatsing van de buitenunit en leidingwerk, netjes weggewerkt",
      "Onderhoud en aftercare na de installatie",
    ],
  },
  process: {
    h2: "Zo verloopt een kantoorinstallatie",
    steps: standardProcess,
  },
  proof: {
    h2: "Kantoorklimaat waar bedrijven op rekenen",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Zakelijke airconditioning",
      description: "Het volledige overzicht van oplossingen per bedrijfsruimte.",
    },
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette airco voor bedrijven",
      description: "De meest gekozen oplossing voor kantoren met systeemplafond.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Kanaal airco voor bedrijven",
      description: "Onzichtbare klimaatbeheersing voor grotere kantoorvloeren.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Houd uw kantoorklimaat betrouwbaar met periodiek onderhoud.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over airco in kantoren",
    items: [
      {
        question: "Hoe stil is een kantoor-airco?",
        answer:
          "Moderne cassette- en kanaalsystemen zijn ontworpen voor kantooromgevingen en draaien op een geluidsniveau dat wegvalt tegen normaal omgevingsgeluid. Geluid is een vast onderdeel van ons advies.",
      },
      {
        question: "Kan de temperatuur per ruimte geregeld worden?",
        answer:
          "Ja. Met multi-split- of VRF-oplossingen krijgt iedere zone een eigen regeling, zodat de vergaderruimte en de kantoortuin onafhankelijk van elkaar comfortabel blijven.",
      },
      {
        question: "Veroorzaakt een airco tocht op werkplekken?",
        answer:
          "Niet bij een juiste systeemkeuze en plaatsing. Cassettes verdelen lucht naar vier richtingen en kanaalsystemen blazen indirect in. Precies daarom adviseren we op locatie.",
      },
      {
        question: "Hoe lang duurt de installatie van een kantoor-airco?",
        answer:
          "Een enkele ruimte is meestal binnen een dag gereed; een complete kantoorvloer plannen we in overleg, vaak buiten kantooruren of gefaseerd, zodat uw team gewoon kan doorwerken.",
      },
      {
        question: "Kan de airco ook het kantoor verwarmen?",
        answer:
          "Ja, alle systemen die wij installeren zijn warmtepompen die energiezuinig koelen én verwarmen. Zo heeft u het hele jaar één klimaatoplossing.",
      },
    ],
  },
  form: {
    h2: "Vraag een offerte aan voor uw kantoor",
    service: "businessAC",
    propertyType: "office",
  },
};

/** /airco-bedrijfspand/ - primary keyword: airco bedrijfspand (transactional) */
export const aircoBedrijfspand: ServicePageContent = {
  meta: {
    title: "Airco voor bedrijfspand | Meerdere zones | Airco@Business",
    description:
      "Airconditioning voor uw complete bedrijfspand: meerdere zones, verdiepingen en functies in één betrouwbaar systeem. Advies en installatie in Zuid-Holland.",
  },
  name: "Airco voor bedrijfspanden",
  hero: {
    eyebrow: "Airco bedrijfspand",
    h1: "Airco voor bedrijfspanden: één systeem, alle zones onder controle",
    intro:
      "Een bedrijfspand combineert vaak kantoren, werkruimtes, opslag en ontvangstruimtes, elk met eigen klimaateisen. Wij ontwerpen en installeren systemen die al die zones betrouwbaar bedienen, zonder wildgroei aan losse units.",
    cta: "requestQuote",
    secondary: { label: "Zakelijke airconditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Meerdere klimaatzones", "Advies op locatie", "Eén aanspreekpunt"],
  },
  overview: {
    h2: "Klimaatbeheersing voor het complete pand",
    intro:
      "Of het nu om een verzamelpand, magazijn met kantoor of productielocatie gaat: we brengen alle ruimtes en warmtelasten in kaart en ontwerpen daarop het systeem.",
    cards: [
      {
        tag: "Kantoordeel",
        title: "Kantoor- en vergaderruimtes",
        description:
          "Comfortabele werkplekken met per zone regelbare temperatuur.",
      },
      {
        tag: "Bedrijfshal",
        title: "Werk- en opslagruimtes",
        description:
          "Gerichte koeling waar processen of goederen dat vereisen.",
      },
      {
        tag: "Ontvangst",
        title: "Entree en ontvangstruimtes",
        description:
          "Een representatief klimaat vanaf het moment dat bezoekers binnenstappen.",
      },
      {
        tag: "Multi-zone",
        title: "Meerdere verdiepingen",
        description:
          "VRF- en multi-splitsystemen die het hele pand vanuit één installatie bedienen.",
      },
    ],
  },
  benefits: {
    h2: "Waarom pandbrede klimaatbeheersing loont",
    cards: [
      {
        tag: "Efficiency",
        title: "Lagere energiekosten",
        description:
          "Eén goed ontworpen systeem koelt en verwarmt efficiënter dan een verzameling losse airco's die tegen elkaar in werken.",
      },
      {
        tag: "Beheer",
        title: "Centraal regelbaar",
        description:
          "Beheer alle zones vanaf één punt, met slimme regelingen en tijdschema's per ruimte.",
      },
      {
        tag: "Waarde",
        title: "Waardevast pand",
        description:
          "Een modern klimaatsysteem verhoogt het comfortniveau én de verhuur- en verkoopwaarde van uw vastgoed.",
      },
    ],
  },
  scope: {
    h2: "Wat we voor uw bedrijfspand in kaart brengen",
    items: [
      "Alle ruimtes, functies en warmtelasten van het pand",
      "Capaciteitsberekening per zone en voor het totale systeem",
      "Systeemkeuze: multi-split, VRF of een combinatie per bouwdeel",
      "Leidingtracés, plaatsing buitendelen en bouwkundige inpassing",
      "Fasering van de installatie rond uw bedrijfsvoering",
      "Onderhoudsplan voor de complete installatie",
    ],
  },
  process: {
    h2: "Zo pakken we een pandbreed project aan",
    steps: standardProcess,
  },
  proof: {
    h2: "Ervaring met bedrijfspanden in de regio",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Zakelijke airconditioning",
      description: "Alle oplossingen per type bedrijfsruimte op een rij.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Kanaal airco voor bedrijven",
      description: "Onzichtbare klimaatbeheersing voor grotere ruimtes en zones.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Zakelijke airco installatie",
      description: "Hoe wij installaties voorbereiden, plannen en uitvoeren.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Eén onderhoudspartner voor uw hele installatie.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over airco in bedrijfspanden",
    items: [
      {
        question: "Kan één systeem meerdere verdiepingen koelen?",
        answer:
          "Ja. VRF- en multi-splitsystemen bedienen vanuit één of enkele buitendelen meerdere binnenunits, verdiepingen en zones. Elke zone is afzonderlijk regelbaar.",
      },
      {
        question: "Moet ons bedrijf dicht tijdens de installatie?",
        answer:
          "Vrijwel nooit. We faseren het werk per zone of verdieping en stemmen de planning af op uw bedrijfsvoering, zodat het werk gewoon door kan gaan.",
      },
      {
        question: "Wat als ons pand nog geen geschikte techniek heeft?",
        answer:
          "We beoordelen de bestaande situatie tijdens de inspectie: elektrische aansluitingen, dak- of gevelruimte voor buitendelen en leidingtracés nemen we mee in het voorstel.",
      },
      {
        question: "Is dit ook geschikt voor huurpanden?",
        answer:
          "Ja, in overleg met de pandeigenaar. We denken mee over oplossingen die bij het huurcontract passen en desgewenst meeverhuizen.",
      },
    ],
  },
  form: {
    h2: "Vraag een offerte aan voor uw bedrijfspand",
    service: "businessAC",
    propertyType: "commercialBuilding",
  },
};

/** /airco-winkel/ - primary keyword: airco winkel */
export const aircoWinkel: ServicePageContent = {
  meta: {
    title: "Airco voor winkel | Comfort dat verkoopt | Airco@Business",
    description:
      "Airconditioning voor winkels en retail: aangenaam winkelklimaat, systemen die opgaan in het interieur en stille werking. Advies en installatie in Zuid-Holland.",
  },
  name: "Airco voor winkels",
  hero: {
    eyebrow: "Airco winkel",
    h1: "Airco voor winkels: een klimaat waarin klanten blijven",
    intro:
      "Een te warme winkel loopt letterlijk leeg. Goede klimaatbeheersing houdt klanten langer binnen, beschermt uw producten en geeft uw personeel een prettige werkdag. Wij installeren systemen die presteren zonder het winkelbeeld te verstoren.",
    cta: "requestQuote",
    secondary: { label: "Zakelijke airconditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Onzichtbaar in het interieur", "Stille werking", "Installatie buiten openingstijden"],
  },
  overview: {
    h2: "Klimaatoplossingen voor retail",
    intro:
      "Van boetiek tot filiaal met meerdere zones: we stemmen het systeem af op uw vloeroppervlak, verlichting, bezoekersstromen en uitstraling.",
    cards: [
      {
        tag: "Modewinkel",
        title: "Mode en boetieks",
        description:
          "Comfort in de winkel én de paskamers, met units die wegvallen in het plafond.",
      },
      {
        tag: "Filiaal",
        title: "Ketens en filialen",
        description:
          "Uniforme klimaatkwaliteit per vestiging, met centrale afspraken en onderhoud.",
      },
      {
        tag: "Speciaalzaak",
        title: "Speciaalzaken",
        description:
          "Stabiele temperaturen waar producten dat vragen, van delicatessen tot elektronica.",
      },
    ],
  },
  benefits: {
    h2: "Wat een goed winkelklimaat oplevert",
    cards: [
      {
        tag: "Omzet",
        title: "Langere verblijfsduur",
        description:
          "Klanten blijven langer en kopen prettiger in een koele winkel, zeker op warme dagen waarop de concurrentie het aflegt.",
      },
      {
        tag: "Merkbeleving",
        title: "Uitstraling zonder concessies",
        description:
          "Cassette- en kanaalunits gaan op in het plafond: klimaat zonder zichtbare techniek in uw winkelbeeld.",
      },
      {
        tag: "Personeel",
        title: "Fit personeel, ook in de zomer",
        description:
          "Een werkbare temperatuur achter de kassa en op de vloer, de hele dag door.",
      },
    ],
  },
  scope: {
    h2: "Wat we voor uw winkel beoordelen en verzorgen",
    items: [
      "Warmtelast van verlichting, apparatuur en bezoekersaantallen",
      "Plafondtype en inpassing van units in het winkelontwerp",
      "Luchtverdeling zonder tocht bij entree, kassa en paskamers",
      "Stille werking passend bij uw winkelbeleving",
      "Installatieplanning buiten openingstijden",
      "Onderhoud dat rekening houdt met uw openingsuren",
    ],
  },
  process: {
    h2: "Zo verloopt een winkelinstallatie",
    steps: standardProcess,
  },
  proof: {
    h2: "Winkelklimaat waar retailers op vertrouwen",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Zakelijke airconditioning",
      description: "Alle oplossingen per type bedrijfsruimte.",
    },
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette airco voor bedrijven",
      description: "De veelzijdige plafondoplossing voor winkels.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Kanaal airco voor bedrijven",
      description: "Volledig onzichtbare klimaatbeheersing voor grotere winkels.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Betrouwbaar winkelklimaat, ook in het hoogseizoen.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over airco in winkels",
    items: [
      {
        question: "Kan de installatie buiten openingstijden plaatsvinden?",
        answer:
          "Ja, dat is bij winkels zelfs gebruikelijk. We plannen het werk 's avonds, 's nachts of op sluitingsdagen, zodat u geen omzet mist.",
      },
      {
        question: "Zie je de airco in de winkel hangen?",
        answer:
          "Dat hoeft niet. Cassette-units vallen weg in het systeemplafond en kanaalsystemen zijn volledig onzichtbaar. Alleen de roosters blijven zichtbaar.",
      },
      {
        question: "Wat betekent open winkeldeuren voor de capaciteit?",
        answer:
          "Een open pui vraagt om extra capaciteit en een slimme luchtverdeling. Dit nemen we standaard mee in de berekening voor retailruimtes.",
      },
      {
        question: "Kan het systeem ook verwarmen in de winter?",
        answer:
          "Ja. Dezelfde installatie verwarmt energiezuinig in de winter, zodat u met één systeem het hele jaar een aangenaam winkelklimaat heeft.",
      },
    ],
  },
  form: {
    h2: "Vraag een offerte aan voor uw winkel",
    service: "businessAC",
    propertyType: "retail",
  },
};

/** /airco-showroom/ - primary keyword: airco showroom */
export const aircoShowroom: ServicePageContent = {
  meta: {
    title: "Airco voor showroom | Representatief klimaat | Airco@Business",
    description:
      "Airconditioning voor showrooms: stabiel klimaat voor grote, open presentatieruimtes met veel glas en verlichting. Advies en installatie in Zuid-Holland.",
  },
  name: "Airco voor showrooms",
  hero: {
    eyebrow: "Airco showroom",
    h1: "Airco voor showrooms: uw presentatie verdient het juiste klimaat",
    intro:
      "Showrooms combineren grote open ruimtes, veel glas en intensieve verlichting. Dat zorgt voor een uitdagende warmtelast. Wij ontwerpen klimaatsystemen die bezoekers comfort bieden en uw presentatie onaangetast laten.",
    cta: "requestQuote",
    secondary: { label: "Zakelijke airconditioning", href: "/zakelijke-airconditioning" },
    trustPoints: ["Grote open ruimtes", "Onzichtbare techniek", "Advies op locatie"],
  },
  overview: {
    h2: "Klimaatbeheersing voor presentatieruimtes",
    intro:
      "Auto's, keukens, meubels of sanitair: iedere showroom heeft een eigen dynamiek. We rekenen de warmtelast door en ontwerpen daarop.",
    cards: [
      {
        tag: "Automotive",
        title: "Autoshowrooms",
        description:
          "Grote glasgevels en hoge ruimtes vragen om royale, gelijkmatig verdeelde capaciteit.",
        image: {
          src: "/images/generated/showroom-automotive-card.webp",
          alt: "Autoshowroom met grote glasgevels, hoge ruimte en cassette-airconditioning",
          position: "50% 48%",
        },
      },
      {
        tag: "Interieur",
        title: "Keuken- en meubelshowrooms",
        description:
          "Comfort tijdens lange oriëntatiebezoeken, zonder zichtbare techniek in de presentatie.",
        image: {
          src: "/images/generated/showroom-interior-card.webp",
          alt: "Keuken- en meubelshowroom met discreet geïntegreerde klimaatregeling",
          position: "50% 48%",
        },
      },
      {
        tag: "Techniek",
        title: "Product- en merkshowrooms",
        description:
          "Stabiele temperatuur en luchtkwaliteit voor producten én bezoekers.",
      },
    ],
  },
  benefits: {
    h2: "Waarom showrooms in klimaat investeren",
    cards: [
      {
        tag: "Verkoop",
        title: "Bezoekers nemen de tijd",
        description:
          "Aankoopbeslissingen in showrooms vragen tijd. Comfort houdt bezoekers langer bij uw producten.",
        image: {
          src: "/images/generated/showroom-visitors-card.webp",
          alt: "Bezoekers nemen rustig de tijd in een comfortabele showroom met klimaatregeling",
          position: "50% 48%",
        },
      },
      {
        tag: "Warmtelast",
        title: "Glas en spots gecompenseerd",
        description:
          "Zoninstraling en showroomverlichting produceren veel warmte; het systeem wordt daarop berekend.",
      },
      {
        tag: "Uitstraling",
        title: "Techniek uit het zicht",
        description:
          "Kanaal- en cassettesystemen houden het beeld strak. Uw presentatie blijft de hoofdrol spelen.",
      },
    ],
  },
  scope: {
    h2: "Wat we voor uw showroom beoordelen en verzorgen",
    items: [
      "Warmtelast van glasgevels, verlichting en apparatuur",
      "Luchtverdeling in hoge en open ruimtes, zonder tocht",
      "Inpassing van units buiten het zicht van uw presentatie",
      "Zonering voor showroom, kantoor en werkplaats in één systeem",
      "Installatieplanning rond uw openingstijden en events",
      "Onderhoudsplan voor gegarandeerde beschikbaarheid",
    ],
  },
  process: {
    h2: "Zo verloopt een showroominstallatie",
    steps: standardProcess,
  },
  proof: {
    h2: "Ervaring met showrooms en presentatieruimtes",
    indicators: trustIndicators,
  },
  related: [
    {
      href: "/zakelijke-airconditioning",
      label: "Zakelijke airconditioning",
      description: "Alle oplossingen per type bedrijfsruimte.",
    },
    {
      href: "/kanaal-airco-bedrijf",
      label: "Kanaal airco voor bedrijven",
      description: "Onzichtbare klimaatbeheersing voor open ruimtes.",
    },
    {
      href: "/cassette-airco-bedrijf",
      label: "Cassette airco voor bedrijven",
      description: "Gelijkmatige luchtverdeling vanuit het plafond.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Zeker van uw klimaat, ook tijdens drukke periodes.",
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over airco in showrooms",
    items: [
      {
        question: "Onze showroom heeft veel glas. Kan dat gekoeld worden?",
        answer:
          "Ja. Glasgevels zorgen voor een hoge maar voorspelbare warmtelast. Met de juiste capaciteitsberekening en luchtverdeling blijft ook een glazen showroom aangenaam koel.",
      },
      {
        question: "Blijft de techniek uit het zicht?",
        answer:
          "Dat is het uitgangspunt. Kanaalsystemen zijn volledig weggewerkt; cassettes vallen weg in het plafond. De presentatie van uw producten blijft leidend.",
      },
      {
        question: "Kunnen showroom en werkplaats op één systeem?",
        answer:
          "Ja, met een multi-split- of VRF-systeem krijgen showroom, kantoor en werkplaats elk hun eigen klimaatzone binnen één installatie.",
      },
      {
        question: "Hoe snel is een showroom op temperatuur?",
        answer:
          "Goed gedimensioneerde systemen reageren snel op wisselende omstandigheden, zoals zoninstraling in de middag of drukte tijdens een event.",
      },
    ],
  },
  form: {
    h2: "Vraag een offerte aan voor uw showroom",
    service: "businessAC",
    propertyType: "showroom",
  },
};
