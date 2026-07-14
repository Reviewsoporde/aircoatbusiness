import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { routing } from "@/i18n/routing";
import { getBundle } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/urls";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section-shell";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaLink } from "@/components/sections/cta-link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(locale, "/werkwijze", getBundle(locale).werkwijzePage.meta);
}

export default async function ProcessPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const { werkwijzePage } = getBundle(locale);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
            { name: werkwijzePage.hero.h1, url: absoluteUrl(locale, "/werkwijze") },
          ]),
          faqSchema(werkwijzePage.faq.items),
        ]}
      />
      <PageHero
        hero={{
          eyebrow: werkwijzePage.hero.eyebrow,
          h1: werkwijzePage.hero.h1,
          intro: werkwijzePage.hero.intro,
          cta: "planConsultation",
          trustPoints: [],
        }}
      />
      <Section variant="paper">
        <ol className="space-y-6">
          {werkwijzePage.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-6 border border-ink/5 bg-white p-7 shadow-card sm:grid-cols-[96px_1fr] sm:p-10"
            >
              <p className="font-mono text-3xl text-azure-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-ink sm:text-base">
                  {step.description}
                </p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-slate-ink"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-azure-deep" aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section variant="light" h2={werkwijzePage.faq.h2}>
        <div className="max-w-3xl">
          <FaqSection items={werkwijzePage.faq.items} />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <CtaLink ctaKey="planConsultation" variant="ink" arrow />
          <CtaLink ctaKey="requestQuote" variant="outline-light" />
        </div>
      </Section>
    </>
  );
}
