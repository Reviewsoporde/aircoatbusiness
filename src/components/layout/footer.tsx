import Image from "next/image";
import { useTranslations } from "next-intl";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import {
  BadgeCheck,
  Building2,
  ChevronRight,
  Clock3,
  FileText,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { GoogleMark } from "@/components/ui/google-mark";
import { ConsentSettingsButton } from "./consent-settings-button";
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
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <div aria-hidden className="mt-2.5 h-0.5 w-6 rounded-full bg-azure" />
      <ul className="mt-2.5">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="group inline-flex min-h-6 items-center gap-1.5 py-0.5 text-[13px] leading-snug text-white/66 transition-colors duration-200 hover:text-white"
            >
              <span>{link.label}</span>
              <ChevronRight
                aria-hidden
                className="size-3.5 shrink-0 text-white/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-azure-bright"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterMobileGroup({
  title,
  links,
}: {
  title: string;
  links: { href: AppPathname; label: string }[];
}) {
  return (
    <details className="group border-b border-white/10 py-1">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
        {title}
        <span
          aria-hidden
          className="grid size-7 place-items-center rounded-full border border-white/12 text-base font-light text-azure-bright transition-all duration-200 group-open:rotate-45 group-open:border-azure/50 group-open:bg-azure/10"
        >
          +
        </span>
      </summary>
      <ul className="space-y-1 pb-4">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="flex min-h-10 items-center justify-between rounded-xl px-3 text-sm text-white/68 transition-colors hover:bg-white/7 hover:text-white"
            >
              {link.label}
              <ChevronRight aria-hidden className="size-3.5 text-white/35" />
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function SocialLinks({ label }: { label: string }) {
  const links = [
    { href: siteConfig.socials.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: siteConfig.socials.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs text-white/62">{label}</span>
      {links.map(({ href, label: socialLabel, Icon }) => (
        <a
          key={socialLabel}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLabel}
          className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/68 transition-all duration-200 hover:-translate-y-0.5 hover:border-azure/70 hover:bg-azure/10 hover:text-azure-bright active:translate-y-0 active:scale-[0.97]"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const label = (link: FooterLink) =>
    link.ns === "nav" ? tNav(link.labelKey) : t(link.labelKey);
  const locationLinks = ["Voorschoten", "Leiden", "Den Haag", "Rotterdam", "Hoofddorp"].map(
    (city) => ({ href: "/werkgebied" as AppPathname, label: city }),
  );
  const mobileGroups = [
    { title: t("coreServices"), links: coreServices.map((link) => ({ href: link.href, label: label(link) })) },
    { title: t("propertyTypes"), links: propertyTypes.map((link) => ({ href: link.href, label: label(link) })) },
    { title: t("systems"), links: systemsMaintenance.map((link) => ({ href: link.href, label: label(link) })) },
    { title: t("support"), links: supportPages.map((link) => ({ href: link.href, label: label(link) })) },
    { title: t("locations"), links: [...locationLinks, { href: "/werkgebied" as AppPathname, label: t("allServiceAreas") }] },
  ];
  const proofItems = [
    {
      Icon: GoogleMark,
      title: t("googleRating"),
      detail: t("googleReviews"),
      href: `https://search.google.com/local/reviews?placeid=${siteConfig.googleBusiness.placeId}`,
    },
    { Icon: Building2, title: t("regionalSpecialist"), detail: t("regionalSpecialistDetail") },
    { Icon: BadgeCheck, title: t("stekCertified"), detail: t("stekCertifiedDetail") },
    { Icon: Wrench, title: t("completeService"), detail: t("completeServiceDetail") },
  ];

  return (
    <footer className="border-t border-white/8 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid gap-6 py-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(34rem,1.15fr)] lg:items-end lg:gap-10">
          <div className="max-w-2xl">
            <Image
              src="/images/logo.png"
              alt="Airco@Business"
              width={224}
              height={71}
              className="h-10 w-auto sm:h-12"
            />
            <h2 className="mt-3 max-w-xl font-display text-2xl leading-[1.06] font-semibold text-balance sm:text-3xl">
              {t("ctaTitleStart")} <span className="text-azure-bright">{t("ctaTitleAccent")}</span>
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-azure px-3 py-2 text-[13px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-bright active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <SiWhatsapp size={18} aria-hidden focusable="false" />
                {t("whatsapp")}
              </a>
              <PhoneLink
                phone={siteConfig.phone}
                className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-3 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/8 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70"
              >
                <Phone className="size-[18px] text-azure-bright" aria-hidden />
                {t("call")}
              </PhoneLink>
              <Link
                href="/contact"
                className="col-span-2 inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-3 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-azure/70 hover:bg-azure/10 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70 sm:col-span-1"
              >
                <FileText className="size-[18px] text-azure-bright" aria-hidden />
                {tNav("requestQuote")}
              </Link>
            </div>

            <div className="mt-3 flex justify-end border-t border-white/10 pt-3">
              <SocialLinks label={t("followProjects")} />
            </div>
          </div>
        </section>

        <div className="border-y border-white/10 py-6">
          <div className="lg:hidden">
            {mobileGroups.map((group) => (
              <FooterMobileGroup key={group.title} {...group} />
            ))}
          </div>

          <div className="hidden gap-x-8 gap-y-10 lg:grid lg:grid-cols-[1fr_1.08fr_1.2fr_0.9fr_0.9fr]">
            <FooterColumn
              title={t("coreServices")}
              links={coreServices.map((link) => ({ href: link.href, label: label(link) }))}
            />
            <FooterColumn
              title={t("propertyTypes")}
              links={propertyTypes.map((link) => ({ href: link.href, label: label(link) }))}
            />
            <FooterColumn
              title={t("systems")}
              links={systemsMaintenance.map((link) => ({ href: link.href, label: label(link) }))}
            />
            <FooterColumn
              title={t("support")}
              links={supportPages.map((link) => ({ href: link.href, label: label(link) }))}
            />
            <FooterColumn
              title={t("locations")}
              links={[
                ...locationLinks,
                { href: "/werkgebied" as AppPathname, label: t("allServiceAreas") },
              ]}
            />
          </div>
        </div>

        <section aria-label={t("trustLabel")} className="py-4">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] xl:grid-cols-4">
            {proofItems.map(({ Icon, title, detail, href }, index) => {
              const content = (
                <>
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-azure/10 text-azure-bright">
                    <Icon aria-hidden className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-white sm:text-sm">{title}</span>
                    <span className="mt-0.5 hidden text-xs leading-snug text-white/58 sm:block">{detail}</span>
                  </span>
                </>
              );
              const className = `flex min-h-20 items-center gap-2 p-3 sm:min-h-0 sm:gap-3 ${index % 2 === 1 ? "border-l" : ""} ${index > 1 ? "border-t xl:border-t-0" : ""} ${index > 0 ? "xl:border-l" : ""} border-white/10`;

              return href ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${className} transition-colors hover:bg-white/[0.035]`}
                >
                  {content}
                </a>
              ) : (
                <div key={title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <div className="border-t border-white/10 py-4">
          <div className="grid gap-3 xl:grid-cols-[1.2fr_1fr_auto] xl:items-center">
            <address className="grid gap-2 text-xs not-italic text-white/58 sm:grid-cols-2">
              <span className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-azure-bright" />
                <span>{siteConfig.address.street}<br />{siteConfig.address.postalCode} {siteConfig.address.city}</span>
              </span>
              <PhoneLink phone={siteConfig.phone} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Phone aria-hidden className="size-4 shrink-0 text-azure-bright" />
                {siteConfig.phoneDisplay}
              </PhoneLink>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Mail aria-hidden className="size-4 shrink-0 text-azure-bright" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-2.5">
                <Clock3 aria-hidden className="size-4 shrink-0 text-azure-bright" />
                {t("openingHours")}
              </span>
            </address>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/52 xl:justify-center">
              <span>{t("kvk")} {siteConfig.kvk}</span>
              <span>{t("btw")} {siteConfig.btw}</span>
              <Link href="/privacybeleid" className="transition-colors hover:text-white">{t("privacy")}</Link>
              <Link href="/cookiebeleid" className="transition-colors hover:text-white">{t("cookies")}</Link>
              <ConsentSettingsButton />
            </div>

            <a
              href={siteConfig.residentialSite}
              rel="noopener"
              className="group inline-flex items-center gap-2 text-xs text-white/58 transition-colors hover:text-white xl:justify-self-end"
            >
              {t("residential")}
              <ChevronRight aria-hidden className="size-4 text-azure-bright transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-3 text-xs text-white/38">
            © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
