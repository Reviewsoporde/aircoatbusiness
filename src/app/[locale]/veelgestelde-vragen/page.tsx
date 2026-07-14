import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
  return pageMetadata(
    locale,
    "/veelgestelde-vragen",
    getBundle(locale).faqPage.meta,
  );
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const { faqPage } = getBundle(locale);
  const allItems = faqPage.groups.flatMap((group) => group.items);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
            {
              name: faqPage.hero.h1,
              url: absoluteUrl(locale, "/veelgestelde-vragen"),
            },
          ]),
          faqSchema(allItems),
        ]}
      />
      <PageHero
        hero={{
          eyebrow: faqPage.hero.eyebrow,
          h1: faqPage.hero.h1,
          intro: faqPage.hero.intro,
          cta: "requestQuote",
          trustPoints: [],
        }}
      />
      <Section variant="paper">
        <div className="max-w-3xl space-y-14">
          {faqPage.groups.map((group) => (
            <div key={group.title}>
              <h2 className="eyebrow mb-5 flex items-center gap-3 text-azure-deep">
                <span aria-hidden className="h-px w-8 bg-azure-deep" />
                {group.title}
              </h2>
              <FaqSection items={group.items} />
            </div>
          ))}
        </div>
        <div className="mt-14">
          <CtaLink ctaKey="planConsultation" variant="ink" arrow />
        </div>
      </Section>
    </>
  );
}
