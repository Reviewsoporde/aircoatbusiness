import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { routing } from "@/i18n/routing";
import { getBundle } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/urls";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section-shell";
import { LeadForm } from "@/components/sections/lead-form";
import { ContactAside } from "@/components/sections/contact-aside";
import { FaqSection } from "@/components/sections/faq-section";
import { PhoneLink } from "@/components/layout/phone-link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(locale, "/contact", getBundle(locale).contactPage.meta);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const tFooter = await getTranslations("footer");
  const { contactPage } = getBundle(locale);
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsRouteUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  const contactCards = [
    {
      icon: Phone,
      title: contactPage.contactOptions.phone.title,
      body: contactPage.contactOptions.phone.body,
      label: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
      isPhone: true,
      className: "lg:col-span-5",
    },
    {
      icon: Mail,
      title: contactPage.contactOptions.email.title,
      body: contactPage.contactOptions.email.body,
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      isPhone: false,
      className: "lg:col-span-4",
    },
    {
      icon: MapPin,
      title: contactPage.contactOptions.route.title,
      body: contactPage.contactOptions.route.body,
      label: contactPage.contactOptions.route.label,
      href: mapsRouteUrl,
      isPhone: false,
      className: "lg:col-span-3",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
            { name: contactPage.hero.h1, url: absoluteUrl(locale, "/contact") },
          ]),
          faqSchema(contactPage.faq.items),
        ]}
      />
      <PageHero
        hero={{
          eyebrow: contactPage.hero.eyebrow,
          h1: contactPage.hero.h1,
          intro: contactPage.hero.intro,
          cta: "requestQuote",
          ctaAnchor: "#offerte",
          trustPoints: [],
          image: contactPage.hero.image,
          variant: "split",
          urgent: true,
        }}
      />

      <Section
        variant="light"
        h2={contactPage.contactOptions.h2}
        intro={contactPage.contactOptions.intro}
      >
        <div className="grid gap-5 lg:grid-cols-12">
          {contactCards.map((card) => {
            const cardContent = (
              <>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-ice text-azure-deep transition-colors duration-300 group-hover:bg-azure group-hover:text-ink">
                  <card.icon className="size-5" aria-hidden />
                </span>
                <span className="mt-8 block">
                  <span className="font-display block text-2xl font-semibold leading-tight text-ink">
                    {card.title}
                  </span>
                  <span className="mt-3 block max-w-md text-sm leading-relaxed text-slate-ink">
                    {card.body}
                  </span>
                </span>
                <span className="mt-8 flex items-center justify-between gap-4 border-t border-steel/12 pt-5 text-sm font-semibold text-ink">
                  <span className="break-all">{card.label}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-azure-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </>
            );

            const className = `group flex min-h-[300px] flex-col justify-between rounded-[28px] border border-steel/12 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-azure/45 hover:shadow-panel sm:p-8 ${card.className}`;

            return card.isPhone ? (
              <PhoneLink key={card.title} phone={siteConfig.phone} className={className}>
                {cardContent}
              </PhoneLink>
            ) : (
              <a
                key={card.title}
                href={card.href}
                target={card.icon === MapPin ? "_blank" : undefined}
                rel={card.icon === MapPin ? "noreferrer" : undefined}
                className={className}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </Section>

      <Section
        variant="paper"
        eyebrow={contactPage.form.eyebrow}
        h2={contactPage.form.h2}
        intro={contactPage.form.intro}
        id="offerte"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start">
          <div className="rounded-[32px] border border-steel/12 bg-card p-6 shadow-panel sm:p-12">
            <LeadForm />
          </div>
          <ContactAside />
        </div>
      </Section>

      <Section
        variant="dark"
        eyebrow={contactPage.serviceArea.eyebrow}
        h2={contactPage.serviceArea.h2}
        intro={contactPage.serviceArea.body}
        className="glow-azure"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.55fr)]">
          <div className="relative min-h-[440px] overflow-hidden rounded-[32px] border border-white/12 bg-carbon shadow-panel lg:min-h-[560px]">
            <iframe
              src={mapsEmbedUrl}
              title={contactPage.serviceArea.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[15%]"
            />
            <div className="pointer-events-none absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-[18px] border border-white/12 bg-ink/92 p-4 text-sm text-white shadow-panel backdrop-blur-md sm:right-auto sm:max-w-md">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-azure text-ink">
                <MapPin className="size-4" aria-hidden />
              </span>
              <span>{fullAddress}</span>
            </div>
          </div>

          <aside className="rounded-[32px] border border-white/12 bg-carbon p-7 text-white sm:p-9">
            <h3 className="font-display text-3xl font-semibold leading-tight">
              {contactPage.serviceArea.detailsTitle}
            </h3>
            <div className="mt-8 space-y-7">
              <div className="flex items-start gap-4">
                <Building2 className="mt-1 size-5 shrink-0 text-azure-bright" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contactPage.serviceArea.addressLabel}
                  </p>
                  <address className="mt-2 text-sm leading-relaxed text-mist not-italic">
                    {siteConfig.name}<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-azure-bright" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contactPage.serviceArea.hoursLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {tFooter("openingHours")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-md border border-azure-bright/50 text-[9px] font-bold text-azure-bright" aria-hidden>
                  ID
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contactPage.serviceArea.registrationLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {tFooter("kvk")} {siteConfig.kvk}<br />
                    {tFooter("btw")} {siteConfig.btw}
                  </p>
                </div>
              </div>
            </div>
            <a
              href={mapsRouteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-azure px-6 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-bright active:scale-[0.98]"
            >
              {contactPage.serviceArea.routeLabel}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </aside>
        </div>
      </Section>

      <Section variant="light" h2={contactPage.faq.h2}>
        <div className="max-w-3xl">
          <FaqSection items={contactPage.faq.items} />
        </div>
      </Section>
    </>
  );
}
