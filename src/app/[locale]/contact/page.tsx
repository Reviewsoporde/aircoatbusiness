import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Building2, Clock, Mail, Phone } from "lucide-react";
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
  const tAside = await getTranslations("contactAside");
  const tFooter = await getTranslations("footer");
  const { contactPage } = getBundle(locale);

  const contactCards = [
    {
      icon: Phone,
      label: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
      isPhone: true,
    },
    {
      icon: Mail,
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      isPhone: false,
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
          urgent: true,
        }}
      />

      <Section variant="paper" h2={contactPage.form.h2} id="offerte">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,340px)]">
          <div className="border border-ink/5 bg-white p-6 shadow-panel sm:p-12">
            <LeadForm />
          </div>
          <div className="space-y-5">
            {contactCards.map((card) =>
              card.isPhone ? (
                <PhoneLink
                  key={card.label}
                  phone={siteConfig.phone}
                  className="flex items-center gap-4 border border-ink/5 bg-white p-5 font-mono text-sm text-ink shadow-card transition-colors duration-200 hover:border-azure-deep"
                >
                  <card.icon className="size-5 text-azure-deep" aria-hidden />
                  {card.label}
                </PhoneLink>
              ) : (
                <a
                  key={card.label}
                  href={card.href}
                  className="flex items-center gap-4 border border-ink/5 bg-white p-5 font-mono text-sm text-ink shadow-card transition-colors duration-200 hover:border-azure-deep"
                >
                  <card.icon className="size-5 text-azure-deep" aria-hidden />
                  {card.label}
                </a>
              ),
            )}
            <div className="grain glow-azure relative isolate overflow-hidden bg-ink p-7 text-white">
              <p className="eyebrow mb-5 text-azure-bright">{tAside("title")}</p>
              <ul className="space-y-4 text-sm text-mist">
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 size-4 shrink-0 text-azure-bright" aria-hidden />
                  <span>
                    {siteConfig.name}
                    <br />
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="size-4 shrink-0 text-azure-bright" aria-hidden />
                  {tAside("hours")}
                </li>
              </ul>
              <p className="mt-5 border-t border-white/10 pt-5 font-mono text-xs leading-relaxed text-mist">
                {tFooter("kvk")} {siteConfig.kvk}
                <br />
                {tFooter("btw")} {siteConfig.btw}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="dark" h2={contactPage.serviceArea.h2}>
        <p className="max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
          {contactPage.serviceArea.body}
        </p>
      </Section>

      <Section variant="light" h2={contactPage.faq.h2}>
        <div className="max-w-3xl">
          <FaqSection items={contactPage.faq.items} />
        </div>
      </Section>
    </>
  );
}
