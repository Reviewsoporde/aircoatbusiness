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
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-label={faqPage.hero.h1} className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 rounded-[20px] border border-steel/12 bg-white p-3">
              {faqPage.groups.map((group, index) => (
                <a
                  key={group.title}
                  href={`#faq-group-${index + 1}`}
                  className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-slate-ink transition-colors hover:bg-paper hover:text-ink"
                >
                  {group.title}
                </a>
              ))}
            </div>
          </nav>
          <div className="max-w-3xl space-y-14 lg:col-span-8 lg:col-start-5">
            {faqPage.groups.map((group, index) => (
              <div key={group.title} id={`faq-group-${index + 1}`} className="scroll-mt-28">
                <h2 className="eyebrow mb-5 text-azure-deep">{group.title}</h2>
                <FaqSection items={group.items} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <CtaLink ctaKey="planConsultation" variant="ink" arrow />
        </div>
      </Section>
    </>
  );
}
