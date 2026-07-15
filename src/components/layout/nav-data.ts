import type { AppPathname } from "@/i18n/routing";

export type NavChild = { href: AppPathname; labelKey: string };
export type NavItem = {
  labelKey: string;
  href?: AppPathname;
  children?: NavChild[];
};

// Header navigation per docs/site-architecture.md §2 — exactly these items, nothing more.
export const mainNav: NavItem[] = [
  { labelKey: "home", href: "/" },
  {
    labelKey: "businessAC",
    href: "/zakelijke-airconditioning",
    children: [
      { href: "/airco-kantoor", labelKey: "office" },
      { href: "/airco-bedrijfspand", labelKey: "commercialBuilding" },
      { href: "/airco-winkel", labelKey: "retail" },
      { href: "/airco-showroom", labelKey: "showroom" },
    ],
  },
  {
    labelKey: "installation",
    href: "/installatie",
    children: [
      { href: "/zakelijke-airco-installatie", labelKey: "commercialInstallation" },
      { href: "/cassette-airco-bedrijf", labelKey: "cassette" },
      { href: "/kanaal-airco-bedrijf", labelKey: "ducted" },
      { href: "/wandmodel-airco-bedrijf", labelKey: "wallMounted" },
    ],
  },
  {
    labelKey: "maintenance",
    href: "/onderhoud",
    children: [
      { href: "/airco-onderhoud-zakelijk", labelKey: "maintenanceService" },
      { href: "/airco-reparatie-zakelijk", labelKey: "repairs" },
      { href: "/airco-onderhoudscontract-zakelijk", labelKey: "maintenanceContracts" },
    ],
  },
  { labelKey: "projects", href: "/projecten" },
  { labelKey: "process", href: "/werkwijze" },
];
