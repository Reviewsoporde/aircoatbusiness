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
    title: "Zakelijke airco projecten | Referenties | Airco@Business",
    description:
      "Bekijk recente zakelijke airco-installaties: kantoren, bedrijfspanden, winkels en showrooms in Zuid-Holland. Van cassette tot kanaalsysteem.",
  },
  hero: {
    eyebrow: "Projecten",
    h1: "Zakelijke airco projecten",
    intro:
      "Een klimaatsysteem bewijst zich in de praktijk. Bekijk hoe wij kantoren, bedrijfspanden, winkels en showrooms in Zuid-Holland hebben voorzien van een betrouwbaar binnenklimaat.",
  },
  filterAllLabel: "Alle projecten",
  filters: [
    { value: "office", label: "Kantoor" },
    { value: "commercialBuilding", label: "Bedrijfspand" },
    { value: "retail", label: "Winkel" },
    { value: "showroom", label: "Showroom" },
    { value: "cassette", label: "Cassette" },
    { value: "ducted", label: "Kanaal" },
    { value: "wallMounted", label: "Wandmodel" },
  ],
  serviceLinks: [
    {
      href: "/zakelijke-airconditioning",
      label: "Zakelijke airconditioning",
      description: "Oplossingen per type bedrijfsruimte.",
    },
    {
      href: "/zakelijke-airco-installatie",
      label: "Zakelijke airco installatie",
      description: "Zo pakken wij een installatietraject aan.",
    },
    {
      href: "/onderhoud",
      label: "Zakelijke airco onderhoud en service",
      description: "Betrouwbaarheid na de oplevering.",
    },
    {
      href: "/contact",
      label: "Plan een adviesgesprek",
      description: "Bespreek uw eigen project met een adviseur.",
    },
  ],
};

export const werkwijzePage: ProcessPageContent = {
  meta: {
    title: "Onze werkwijze | Van advies tot onderhoud | Airco@Business",
    description:
      "Zo werkt een zakelijk airco-traject bij Airco@Business: adviesgesprek, analyse op locatie, voorstel en planning, installatie en langdurige nazorg.",
  },
  hero: {
    eyebrow: "Werkwijze",
    h1: "Onze werkwijze: helder van eerste gesprek tot nazorg",
    intro:
      "U wilt weten waar u aan toe bent. Daarom werkt Airco@Business met een vast, transparant traject — met duidelijke afspraken over advies, planning, installatie en alles daarna.",
  },
  steps: [
    {
      title: "Adviesgesprek",
      description:
        "We starten met een gesprek over uw pand, de huidige situatie en uw wensen.",
      details: [
        "Comfortklachten en knelpunten in kaart",
        "Gebruik, bezetting en planning besproken",
        "Eerste indicatie van mogelijke oplossingen",
        "Gewenste uitstraling en bediening besproken",
      ],
    },
    {
      title: "Analyse op locatie en advies",
      description:
        "Een adviseur bekijkt de ruimtes en berekent wat er werkelijk nodig is.",
      details: [
        "Opname van ruimtes, plafonds en gevels",
        "Capaciteitsberekening per zone",
        "Systeemadvies met heldere afwegingen",
        "Plaatsing van binnen- en buitenunits beoordeeld",
      ],
    },
    {
      title: "Voorstel en planning",
      description:
        "U ontvangt een offerte met vaste prijzen en een concrete planning.",
      details: [
        "Transparante offerte zonder verrassingen",
        "Installatiedatum en fasering in overleg",
        "Afstemming met pandeigenaar of VvE indien nodig",
        "Systeemkeuze en werkzaamheden duidelijk gespecificeerd",
      ],
    },
    {
      title: "Installatie",
      description:
        "Onze eigen monteurs installeren vakkundig en laten de werkplek netjes achter.",
      details: [
        "STEK-gecertificeerde montage",
        "Werkplekken afgeschermd, overlast beperkt",
        "Test, inregeling en gebruiksinstructie bij oplevering",
        "Leidingwerk en afwerking netjes uitgevoerd",
      ],
    },
    {
      title: "Onderhoud en support",
      description:
        "Na de oplevering blijven we uw aanspreekpunt voor service en onderhoud.",
      details: [
        "Eerste onderhoudsbeurt na installatie ingepland",
        "Onderhoudscontract met vaste planning mogelijk",
        "Snelle hulp bij storingen",
        "Vast aanspreekpunt voor servicevragen",
      ],
    },
  ],
  faq: {
    h2: "Veelgestelde vragen over het traject",
    items: [
      {
        question: "Hoe snel kan een project starten?",
        answer:
          "Dat hangt af van de omvang van het project, beschikbaarheid van systemen en de actuele planning. Na de opname bespreken we een realistische uitvoeringsperiode.",
      },
      {
        question: "Wat heeft u van ons nodig?",
        answer:
          "Toegang tot de ruimtes voor de opname en één contactpersoon voor de afstemming. De rest — berekeningen, planning, uitvoering — nemen wij voor onze rekening.",
      },
      {
        question: "Is het adviesgesprek vrijblijvend?",
        answer:
          "Ja. Het adviesgesprek en de offerte zijn kosteloos en vrijblijvend; u beslist daarna zelf of we verdergaan.",
      },
    ],
  },
};

export const contactPage: ContactPageContent = {
  meta: {
    title: "Contact | Offerte of adviesgesprek | Airco@Business",
    description:
      "Neem contact op met Airco@Business voor een zakelijke offerte, adviesgesprek, onderhoud of storing in Zuid-Holland.",
  },
  hero: {
    eyebrow: "Contact",
    h1: "Neem contact op: offerte, advies of service",
    intro:
      "Of het nu gaat om een nieuwe installatie, onderhoud of een dringende storing: een specialist beoordeelt uw aanvraag. Liever direct iemand spreken? Bel ons tijdens kantooruren.",
    image: {
      src: "/images/generated/commercial-installation-assessment.webp",
      alt: "Aircoadviseur en facilitair verantwoordelijke bespreken een zakelijke installatie op locatie",
      position: "center 46%",
    },
  },
  contactOptions: {
    h2: "Kies de contactmogelijkheid die bij uw vraag past",
    intro:
      "Een offerte bespreken, een onderhoudsvraag stellen of een storing melden? Neem rechtstreeks contact op of stuur de gegevens van uw locatie mee via het formulier.",
    phone: {
      title: "Liever direct overleggen?",
      body: "Bel tijdens kantooruren voor een eerste beoordeling van uw zakelijke vraag.",
    },
    email: {
      title: "Documenten of foto’s meesturen?",
      body: "Mail uw vraag, plattegrond of foto’s van de bestaande installatie.",
    },
    route: {
      title: "Bezoek onze locatie",
      body: "U vindt Airco@Business aan de Dobbeweg in Voorschoten. Bezoek op afspraak.",
      label: "Open route in Google Maps",
    },
  },
  form: {
    eyebrow: "Zakelijke aanvraag",
    h2: "Vraag een zakelijke offerte aan",
    intro:
      "Deel uw locatie, type bedrijfsruimte en gewenste dienst. Zo kan een specialist uw aanvraag gericht beoordelen en het juiste vervolg met u afstemmen.",
  },
  serviceArea: {
    eyebrow: "Locatie & werkgebied",
    h2: "Gevestigd in Voorschoten, actief in Zuid-Holland",
    body: "Airco@Business werkt vanuit Voorschoten voor bedrijven in heel Zuid-Holland, waaronder Leiden, Den Haag, Rotterdam en Hoofddorp. Grotere projecten buiten de regio zijn bespreekbaar.",
    mapTitle: "Google Maps-kaart van Airco@Business in Voorschoten",
    detailsTitle: "Bezoek- en bedrijfsgegevens",
    addressLabel: "Adres",
    hoursLabel: "Openingstijden",
    registrationLabel: "Bedrijfsgegevens",
    routeLabel: "Plan uw route",
  },
  faq: {
    h2: "Praktische vragen",
    items: [
      {
        question: "Hoe snel krijg ik reactie op mijn aanvraag?",
        answer:
          "Een specialist beoordeelt uw aanvraag tijdens kantooruren en neemt contact op via de gegevens die u achterlaat.",
      },
      {
        question: "Kan ik direct een adviesgesprek inplannen?",
        answer:
          "Ja. Geef in het formulier aan dat u een adviesgesprek wilt, dan stemmen we telefonisch een datum af — bij u op locatie.",
      },
      {
        question: "Ik heb een storing — wat is de snelste route?",
        answer:
          "Bel ons via het zakelijke nummer op deze pagina. Telefonische storingsmeldingen kunnen we het snelst beoordelen; contractklanten hebben voorrang.",
      },
    ],
  },
};

export const overOnsPage: AboutPageContent = {
  meta: {
    title: "Over Airco@Business | Zakelijke klimaatspecialist | Zuid-Holland",
    description:
      "Airco@Business is de zakelijke klimaatspecialist van Airco@home: STEK-gecertificeerde monteurs, premium A-merken en één vast aanspreekpunt voor bedrijven in Zuid-Holland.",
  },
  hero: {
    eyebrow: "Over ons",
    h1: "De zakelijke klimaatspecialist van Zuid-Holland",
    intro:
      "Airco@Business is het zakelijke label van Airco@home: één team dat zich volledig richt op klimaatoplossingen voor kantoren, bedrijfspanden, winkels en showrooms.",
  },
  story: {
    h2: "Waarom Airco@Business bestaat",
    paragraphs: [
      "Een bedrijfsruimte stelt andere eisen dan een woonkamer: grotere warmtelasten, meerdere zones, geluids- en regelgeving, en een installatiemoment dat de bedrijfsvoering niet mag raken. Daarom bundelden wij onze zakelijke expertise onder één naam: Airco@Business.",
      "Ons team adviseert, installeert en onderhoudt klimaatinstallaties voor bedrijven in heel Zuid-Holland. Geen standaardpakketten, maar een systeem dat is berekend op uw ruimte en gebruik — geïnstalleerd door eigen, STEK-gecertificeerde monteurs die netjes werken en afspraken nakomen.",
      "Van het eerste adviesgesprek tot het onderhoudscontract: u heeft één aanspreekpunt dat uw pand en installatie kent.",
    ],
  },
  usps: {
    h2: "Waar u op kunt rekenen",
    cards: [
      {
        tag: "Vakmanschap",
        title: "STEK-gecertificeerde monteurs",
        description:
          "Gecertificeerd voor koudemiddelinstallaties en aantoonbaar vakbekwaam.",
      },
      {
        tag: "Kwaliteit",
        title: "Premium A-merken",
        description:
          "Wij installeren uitsluitend gevestigde A-merken, waaronder Daikin, Mitsubishi Electric, LG en Toshiba.",
      },
      {
        tag: "Service",
        title: "Eén vast aanspreekpunt",
        description:
          "Van advies tot onderhoud: korte lijnen en een team dat uw situatie kent.",
      },
    ],
  },
  team: {
    h2: "Het team",
    body: "Dezelfde monteurs die uw installatie plaatsen, komen ook voor het onderhoud. Zo kennen we uw pand — en u weet wie er over de vloer komt.",
    images: [
      { src: "/images/team-1.webp", alt: "Servicebus van het team op locatie bij een klant" },
      { src: "/images/team-2.webp", alt: "Het voltallige team van monteurs en adviseurs" },
    ],
  },
};

export const faqPage: FaqPageContent = {
  meta: {
    title: "Veelgestelde vragen | Zakelijke airconditioning | Airco@Business",
    description:
      "Antwoorden op veelgestelde vragen over zakelijke airconditioning: systemen, installatie, onderhoud, kosten en werkgebied.",
  },
  hero: {
    eyebrow: "Veelgestelde vragen",
    h1: "Veelgestelde vragen over zakelijke airconditioning",
    intro:
      "De antwoorden op de vragen die bedrijven ons het vaakst stellen. Staat uw vraag er niet bij? Bel ons of stel uw vraag via het contactformulier.",
  },
  groups: [
    {
      title: "Systemen en advies",
      items: [
        {
          question: "Welk airco systeem past bij mijn bedrijfsruimte?",
          answer:
            "Dat hangt af van de ruimte, het plafond, het aantal zones en de gewenste uitstraling. Cassettes passen vaak in kantoren en winkels, kanaalsystemen in grote open ruimtes en wandmodellen in aparte kamers. Wij adviseren definitief na een inspectie op locatie.",
        },
        {
          question: "Kan een airco ook verwarmen?",
          answer:
            "Ja. Alle systemen die wij installeren zijn warmtepompen die energiezuinig koelen én verwarmen — vaak zuiniger dan traditionele verwarming.",
        },
        {
          question: "Welke merken installeren jullie?",
          answer:
            "Uitsluitend premium A-merken: Daikin, Mitsubishi Electric, Mitsubishi Heavy Industries, LG en Toshiba. Betrouwbaarheid en beschikbaarheid van onderdelen wegen voor zakelijk gebruik zwaar.",
        },
      ],
    },
    {
      title: "Installatie",
      items: [
        {
          question: "Hoe lang duurt een installatie?",
          answer:
            "Een enkele ruimte is meestal binnen een dag gereed; grotere projecten faseren we in overleg, vaak buiten kantoor- of openingstijden.",
        },
        {
          question: "Moet mijn bedrijf dicht tijdens de installatie?",
          answer:
            "Vrijwel nooit. We schermen werkplekken af, werken per zone en plannen desgewenst avond- of weekendwerk.",
        },
        {
          question: "Wat kost een zakelijke airco?",
          answer:
            "Dat verschilt per situatie. Na een gratis inspectie op locatie ontvangt u een offerte met vaste prijzen, zodat u vooraf precies weet waar u aan toe bent.",
        },
      ],
    },
    {
      title: "Onderhoud en service",
      items: [
        {
          question: "Hoe vaak is onderhoud nodig?",
          answer:
            "Minimaal jaarlijks; bij intensief gebruik twee keer per jaar. Met een onderhoudscontract wordt dit automatisch ingepland.",
        },
        {
          question: "Wat doe ik bij een storing?",
          answer:
            "Bel 071 - 240 05 97 of meld de storing via het contactformulier. We plannen storingen met prioriteit in; contractklanten hebben voorrang.",
        },
        {
          question: "Onderhouden jullie ook bestaande installaties?",
          answer:
            "Ja, wij onderhouden en repareren alle gangbare A-merken, ook installaties die niet door ons zijn geplaatst.",
        },
      ],
    },
    {
      title: "Werkgebied en praktisch",
      items: [
        {
          question: "In welke regio werkt Airco@Business?",
          answer:
            "In heel Zuid-Holland, vanuit Voorschoten: onder meer Leiden, Den Haag, Rotterdam en Hoofddorp. Grotere projecten daarbuiten zijn bespreekbaar.",
        },
        {
          question: "Zijn jullie gecertificeerd?",
          answer:
            "Ja, onze monteurs zijn STEK-gecertificeerd en werken volgens de f-gassenverordening — een wettelijke eis voor zakelijke installaties.",
        },
        {
          question: "Ik zoek een airco voor thuis — kan dat ook?",
          answer:
            "Voor woningen verwijzen we u graag naar ons consumentenlabel Airco@home op airco-athome.nl.",
        },
      ],
    },
  ],
};

export const werkgebiedPage: AreaPageContent = {
  meta: {
    title: "Werkgebied | Zakelijke airco in Zuid-Holland | Airco@Business",
    description:
      "Airco@Business installeert en onderhoudt zakelijke airconditioning in heel Zuid-Holland: Voorschoten, Leiden, Den Haag, Rotterdam, Hoofddorp en omgeving.",
  },
  hero: {
    eyebrow: "Werkgebied",
    h1: "Zakelijke airconditioning in heel Zuid-Holland",
    image: {
      src: "/images/generated/werkgebied-zuid-holland-hero.webp",
      alt: "Bedrijventerrein in Zuid-Holland met zakelijke airco-installaties op het dak",
      position: "center center",
    },
    variant: "image-led",
    intro:
      "Vanuit onze vestiging in Voorschoten bedienen wij bedrijven in de hele regio — met korte aanrijtijden voor installatie, onderhoud en storingen.",
  },
  region: {
    h2: "Voorschoten en de regio",
    body: "Ons team werkt dagelijks in de driehoek Leiden – Den Haag – Rotterdam en tot aan Hoofddorp en Utrecht. Die regionale focus betekent snelle service: korte aanrijtijden bij storingen en flexibele planning bij installaties.",
  },
  cities: [
    { name: "Voorschoten", blurb: "Onze thuisbasis — vestiging en magazijn aan de Dobbeweg." },
    { name: "Leiden", blurb: "Kantoren, praktijken en winkels in en rond de binnenstad." },
    { name: "Den Haag", blurb: "Van kantoorlocaties tot retail in het centrum." },
    { name: "Rotterdam", blurb: "Bedrijfspanden en kantoren in de hele stadsregio." },
    { name: "Hoofddorp", blurb: "Kantoorparken en bedrijfsruimtes rond Schiphol." },
    { name: "Utrecht", blurb: "Projecten in en om de stad, op aanvraag." },
    { name: "Delft", blurb: "Kennisbedrijven, praktijken en mkb." },
    { name: "Zoetermeer", blurb: "Kantoren en bedrijfshallen." },
    { name: "Wassenaar", blurb: "Kantoren en winkels." },
    { name: "Oegstgeest", blurb: "Praktijken en kantoorruimtes." },
    { name: "Katwijk", blurb: "Bedrijfsruimtes en winkels." },
    { name: "Noordwijk", blurb: "Horeca, hotels en retail." },
    { name: "Alphen aan den Rijn", blurb: "Mkb en bedrijfspanden." },
  ],
  beyond:
    "Groter project buiten Zuid-Holland? Voor omvangrijkere installaties werken we ook landelijk — neem contact op om de mogelijkheden te bespreken.",
};

export const merkenPage: BrandsPageContent = {
  meta: {
    title: "Merken en systemen | Daikin, Mitsubishi, LG, Toshiba | Airco@Business",
    description:
      "Airco@Business installeert premium A-merken: Daikin, Mitsubishi Electric, Mitsubishi Heavy Industries, LG en Toshiba. Bekijk de merken en systeemtypes.",
  },
  hero: {
    eyebrow: "Merken en systemen",
    h1: "Premium A-merken, bewust gekozen",
    intro:
      "Voor zakelijk gebruik tellen betrouwbaarheid, rendement en de beschikbaarheid van onderdelen. Daarom installeren wij uitsluitend gevestigde A-merken met bewezen zakelijke productlijnen.",
  },
  brands: [
    {
      name: "Daikin",
      logo: "/images/brands/daikin.png",
      description:
        "Wereldmarktleider in klimaattechniek met een breed zakelijk gamma, van cassettes tot VRV-systemen.",
    },
    {
      name: "Mitsubishi Electric",
      logo: "/images/brands/mitsubishi-electric.png",
      description:
        "Japanse degelijkheid met stille, energiezuinige systemen en sterke regeltechniek.",
    },
    {
      name: "Mitsubishi Heavy Industries",
      logo: "/images/brands/mitsubishi-heavy.png",
      description:
        "Robuuste systemen met een uitstekende prijs-prestatieverhouding voor zakelijke toepassingen.",
    },
    {
      name: "LG",
      logo: "/images/brands/lg.png",
      description:
        "Innovatieve klimaatoplossingen met slimme bediening en strak design.",
    },
    {
      name: "Toshiba",
      logo: "/images/brands/toshiba.png",
      description:
        "Pionier in invertertechniek, met betrouwbare systemen voor continu zakelijk gebruik.",
    },
  ],
  systems: {
    h2: "De systemen die wij installeren",
    intro:
      "Per merk kiezen we het systeemtype dat bij uw ruimte past:",
    links: [
      {
        href: "/cassette-airco-bedrijf",
        label: "Cassette airco voor bedrijven",
        description: "Plafondinbouw met vierzijdige luchtverdeling.",
      },
      {
        href: "/kanaal-airco-bedrijf",
        label: "Kanaal airco voor bedrijven",
        description: "Volledig weggewerkt, ideaal voor meerdere zones.",
      },
      {
        href: "/wandmodel-airco-bedrijf",
        label: "Wandmodel airco voor bedrijven",
        description: "Compact en snel geïnstalleerd voor aparte ruimtes.",
      },
      {
        href: "/zakelijke-airco-installatie",
        label: "Zakelijke airco installatie",
        description: "Van systeemkeuze tot nette montage.",
      },
    ],
  },
};

export const privacyPage: LegalPageContent = {
  meta: {
    title: "Privacybeleid | Airco@Business",
    description:
      "Het privacybeleid van Airco@Business: welke persoonsgegevens wij verwerken, waarom, en welke rechten u heeft.",
  },
  h1: "Privacybeleid",
  updated: "Laatst bijgewerkt: juli 2026",
  sections: [
    {
      h2: "Wie wij zijn",
      paragraphs: [
        "Airco@Business is een handelsnaam van Airco@home B.V., gevestigd aan Dobbeweg 11 G, 2254 AG Voorschoten (KvK 50312006). Wij zijn verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website worden verzameld.",
      ],
    },
    {
      h2: "Welke gegevens wij verwerken",
      paragraphs: [
        "Wanneer u een offerte of adviesgesprek aanvraagt, verwerken wij de gegevens die u in het formulier invult: bedrijfsnaam, contactpersoon, telefoonnummer, e-mailadres, locatie, type bedrijfsruimte, gewenste dienst en uw eventuele toelichting. Daarnaast registreren wij vanaf welke pagina u de aanvraag deed.",
        "Bij telefonisch of e-mailcontact verwerken wij de gegevens die u daarbij verstrekt.",
      ],
    },
    {
      h2: "Waarvoor wij uw gegevens gebruiken",
      paragraphs: [
        "Wij gebruiken uw gegevens uitsluitend om uw aanvraag te behandelen: contact opnemen, een offerte opstellen en — als u klant wordt — de overeenkomst uitvoeren. Aanvragen worden opgeslagen in ons CRM-systeem.",
        "Wij verkopen uw gegevens nooit aan derden en gebruiken ze niet voor ongevraagde marketing.",
      ],
    },
    {
      h2: "Bewaartermijnen",
      paragraphs: [
        "Offerteaanvragen bewaren wij maximaal twee jaar na het laatste contact. Gegevens van klanten bewaren wij zolang de klantrelatie loopt en daarna conform de wettelijke (fiscale) bewaartermijnen.",
      ],
    },
    {
      h2: "Uw rechten",
      paragraphs: [
        "U heeft recht op inzage, rectificatie en verwijdering van uw persoonsgegevens, en het recht om bezwaar te maken tegen de verwerking. Stuur uw verzoek naar info@aircoatbusiness.nl; wij reageren binnen vier weken.",
        "Bent u het niet eens met hoe wij met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.",
      ],
    },
  ],
};

export const cookiePage: LegalPageContent = {
  meta: {
    title: "Cookiebeleid | Airco@Business",
    description:
      "Het cookiebeleid van Airco@Business: welke cookies deze website gebruikt en waarvoor.",
  },
  h1: "Cookiebeleid",
  updated: "Laatst bijgewerkt: juli 2026",
  sections: [
    {
      h2: "Wat zijn cookies",
      paragraphs: [
        "Cookies zijn kleine tekstbestanden die bij uw bezoek aan een website op uw apparaat worden geplaatst. Deze website gebruikt cookies beperkt en bewust.",
      ],
    },
    {
      h2: "Functionele cookies",
      paragraphs: [
        "Functionele cookies zijn noodzakelijk om de website goed te laten werken, zoals het onthouden van uw taalkeuze. Hiervoor is geen toestemming vereist.",
      ],
    },
    {
      h2: "Analytische cookies",
      paragraphs: [
        "Wij gebruiken Google Analytics 4 om het gebruik van de website te meten (bezochte pagina's, formulierinzendingen, telefoonkliks). Deze statistieken zijn voor ons niet tot personen herleidbaar ingesteld.",
      ],
    },
    {
      h2: "Cookies beheren",
      paragraphs: [
        "U kunt cookies op elk moment verwijderen of blokkeren via de instellingen van uw browser. Houd er rekening mee dat de website daardoor mogelijk minder goed functioneert.",
      ],
    },
  ],
};
