import type { Bundle } from "../bundle";
import { home } from "./home";
import { projects } from "./projects";
import {
  aircoBedrijfspand,
  aircoKantoor,
  aircoShowroom,
  aircoWinkel,
  businessAC,
} from "./business-ac";
import {
  cassetteAirco,
  installatie,
  kanaalAirco,
  wandmodelAirco,
  zakelijkeInstallatie,
} from "./installation";
import {
  aircoOnderhoud,
  aircoReparatie,
  onderhoud,
  onderhoudscontract,
} from "./maintenance";
import {
  contactPage,
  cookiePage,
  faqPage,
  merkenPage,
  overOnsPage,
  privacyPage,
  projectenPage,
  werkgebiedPage,
  werkwijzePage,
} from "./pages";

export const nlBundle: Bundle = {
  home,
  projects,
  services: {
    "zakelijke-airconditioning": businessAC,
    "airco-kantoor": aircoKantoor,
    "airco-bedrijfspand": aircoBedrijfspand,
    "airco-winkel": aircoWinkel,
    "airco-showroom": aircoShowroom,
    installatie,
    "zakelijke-airco-installatie": zakelijkeInstallatie,
    "cassette-airco-bedrijf": cassetteAirco,
    "kanaal-airco-bedrijf": kanaalAirco,
    "wandmodel-airco-bedrijf": wandmodelAirco,
    onderhoud,
    "airco-onderhoud-zakelijk": aircoOnderhoud,
    "airco-reparatie-zakelijk": aircoReparatie,
    "airco-onderhoudscontract-zakelijk": onderhoudscontract,
  },
  projectenPage,
  werkwijzePage,
  contactPage,
  overOnsPage,
  faqPage,
  werkgebiedPage,
  merkenPage,
  privacyPage,
  cookiePage,
};
