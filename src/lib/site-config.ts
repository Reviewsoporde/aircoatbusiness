export const siteConfig = {
  name: "Airco@Business",
  legalName: "Airco@home B.V.",
  domain: "https://aircoatbusiness.nl",
  phone: "+31712400597",
  phoneDisplay: "071 - 240 05 97",
  whatsapp: "31712400597",
  email: "info@aircoatbusiness.nl",
  address: {
    street: "Dobbeweg 11 G",
    postalCode: "2254 AG",
    city: "Voorschoten",
    region: "Zuid-Holland",
    country: "NL",
  },
  kvk: "50312006",
  btw: "NL001978666B18",
  openingHours: "Mo-Fr 08:00-17:00",
  geo: { latitude: 52.1304021, longitude: 4.4324313 },
  /**
   * Google Business Profile of Airco@home B.V. - the legal entity behind
   * Airco@Business, and the source of the Google reviews shown on the site.
   * `cid` is the stable numeric listing id; profile/embed URLs are derived
   * from it where used. `placeId` encodes the same listing for review URLs.
   */
  googleBusiness: {
    cid: "7067066085160588046",
    placeId: "ChIJud2sWF3HxUcRDhM1WilDE2I",
  },
  socials: {
    instagram: "https://www.instagram.com/aircoatbusiness/",
    facebook: "https://www.facebook.com/aircoatbusiness",
    linkedin: "https://www.linkedin.com/in/stephan-duyndam/",
  },
  residentialSite: "https://airco-athome.nl/",
  brands: [
    { name: "Daikin", logo: "/images/brands/daikin.png" },
    { name: "Mitsubishi Electric", logo: "/images/brands/mitsubishi-electric.png" },
    { name: "Mitsubishi Heavy Industries", logo: "/images/brands/mitsubishi-heavy.png" },
    { name: "LG", logo: "/images/brands/lg.png" },
    { name: "Toshiba", logo: "/images/brands/toshiba.png" },
  ],
  serviceArea: {
    primary: "Voorschoten",
    region: "Zuid-Holland",
    cities: [
      "Leiden",
      "Den Haag",
      "Rotterdam",
      "Hoofddorp",
      "Utrecht",
      "Delft",
      "Wassenaar",
      "Oegstgeest",
      "Katwijk",
      "Noordwijk",
      "Zoetermeer",
      "Alphen aan den Rijn",
    ],
  },
} as const;
