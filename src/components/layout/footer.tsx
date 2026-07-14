import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "./phone-link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons";

type FooterLink = { href: AppPathname; labelKey: string; ns?: string };

const coreServices: FooterLink[] = [
  { href: "/zakelijke-airconditioning", labelKey: "businessAC", ns: "nav" },
  { href: "/installatie", labelKey: "installation", ns: "nav" },
  { href: "/onderhoud", labelKey: "maintenance", ns: "nav" },
  { href: "/projecten", labelKey: "projects", ns: "nav" },
  { href: "/werkwijze", labelKey: "process", ns: "nav" },
  { href: "/contact", labelKey: "contact", ns: "nav" },
];

const propertyTypes: FooterLink[] = [
  { href: "/airco-kantoor", labelKey: "office", ns: "nav" },
  { href: "/airco-bedrijfspand", labelKey: "commercialBuilding", ns: "nav" },
  { href: "/airco-winkel", labelKey: "retail", ns: "nav" },
  { href: "/airco-showroom", labelKey: "showroom", ns: "nav" },
];

const systemsMaintenance: FooterLink[] = [
  { href: "/zakelijke-airco-installatie", labelKey: "commercialInstallation", ns: "nav" },
  { href: "/cassette-airco-bedrijf", labelKey: "cassette", ns: "nav" },
  { href: "/kanaal-airco-bedrijf", labelKey: "ducted", ns: "nav" },
  { href: "/wandmodel-airco-bedrijf", labelKey: "wallMounted", ns: "nav" },
  { href: "/airco-onderhoud-zakelijk", labelKey: "maintenanceService", ns: "nav" },
  { href: "/airco-reparatie-zakelijk", labelKey: "repairs", ns: "nav" },
  { href: "/airco-onderhoudscontract-zakelijk", labelKey: "maintenanceContracts", ns: "nav" },
];

const supportPages: FooterLink[] = [
  { href: "/over-ons", labelKey: "about" },
  { href: "/veelgestelde-vragen", labelKey: "faq" },
  { href: "/werkgebied", labelKey: "serviceArea" },
  { href: "/merken-en-systemen", labelKey: "brandsSystems" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: AppPathname; label: string }[];
}) {
  return (
    <div>
      <h2 className="eyebrow mb-4 text-mist">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-azure-bright"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const label = (l: FooterLink) => (l.ns === "nav" ? tNav(l.labelKey) : t(l.labelKey));

  return (
    <footer className="airflow-lines grain isolate overflow-hidden border-t border-white/8 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Brand row */}
        <div className="mb-14 flex flex-col justify-between gap-10 border-b border-white/8 pb-14 lg:flex-row lg:items-center">
          <div className="max-w-lg">
            <Image
              src="/images/logo.png"
              alt="Airco@Business"
              width={200}
              height={63}
              className="mb-6 h-10 w-auto"
            />
            <p className="font-display text-xl leading-relaxed font-medium text-white/90 sm:text-2xl">
              {t("tagline")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.instagram}
              rel="noopener"
              aria-label="Instagram"
              className="border border-white/15 p-3 text-mist transition-colors duration-200 hover:border-azure hover:text-azure-bright"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              rel="noopener"
              aria-label="Facebook"
              className="border border-white/15 p-3 text-mist transition-colors duration-200 hover:border-azure hover:text-azure-bright"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              rel="noopener"
              aria-label="LinkedIn"
              className="border border-white/15 p-3 text-mist transition-colors duration-200 hover:border-azure hover:text-azure-bright"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          <FooterColumn
            title={t("coreServices")}
            links={coreServices.map((l) => ({ href: l.href, label: label(l) }))}
          />
          <FooterColumn
            title={t("propertyTypes")}
            links={propertyTypes.map((l) => ({ href: l.href, label: label(l) }))}
          />
          <FooterColumn
            title={t("systems")}
            links={systemsMaintenance.map((l) => ({ href: l.href, label: label(l) }))}
          />
          <FooterColumn
            title={t("support")}
            links={supportPages.map((l) => ({ href: l.href, label: label(l) }))}
          />
          <div>
            <h2 className="eyebrow mb-4 text-mist">{t("locations")}</h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              {["Voorschoten", "Leiden", "Den Haag", "Rotterdam", "Hoofddorp"].map(
                (city) => (
                  <li key={city}>
                    <Link
                      href="/werkgebied"
                      className="transition-colors hover:text-azure-bright"
                    >
                      {city}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link
                  href="/werkgebied"
                  className="font-medium text-azure-bright transition-colors hover:text-white"
                >
                  {t("allServiceAreas")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact + legal */}
        <div className="mt-16 border-t border-white/8 pt-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <address className="font-mono text-xs not-italic leading-loose text-mist">
              {siteConfig.name} · {siteConfig.address.street},{" "}
              {siteConfig.address.postalCode} {siteConfig.address.city}
              <br />
              <PhoneLink
                phone={siteConfig.phone}
                className="transition-colors hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </PhoneLink>{" "}
              ·{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>{" "}
              · {t("openingHours")}
              <br />
              {t("kvk")} {siteConfig.kvk} · {t("btw")} {siteConfig.btw}
            </address>
            <div className="flex flex-wrap items-start gap-x-6 gap-y-2 text-xs text-mist">
              <Link href="/privacybeleid" className="transition-colors hover:text-white">
                {t("privacy")}
              </Link>
              <Link href="/cookiebeleid" className="transition-colors hover:text-white">
                {t("cookies")}
              </Link>
              <a
                href={siteConfig.residentialSite}
                rel="noopener"
                className="transition-colors hover:text-white"
              >
                {t("residential")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
