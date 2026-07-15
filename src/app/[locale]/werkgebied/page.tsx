import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin } from "lucide-react";
import { routing } from "@/i18n/routing";
import { getBundle } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/urls";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section-shell";
import { CtaLink } from "@/components/sections/cta-link";
import { CoverageDiagram } from "@/components/sections/coverage-diagram";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(locale, "/werkgebied", getBundle(locale).werkgebiedPage.meta);
}

export default async function ServiceAreaPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const { werkgebiedPage } = getBundle(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
          { name: werkgebiedPage.hero.h1, url: absoluteUrl(locale, "/werkgebied") },
        ])}
      />
      <PageHero
        hero={{
          eyebrow: werkgebiedPage.hero.eyebrow,
          h1: werkgebiedPage.hero.h1,
          intro: werkgebiedPage.hero.intro,
          cta: "requestQuote",
          trustPoints: [],
          image: werkgebiedPage.hero.image,
          variant: werkgebiedPage.hero.variant,
        }}
      />
      <Section variant="paper" h2={werkgebiedPage.region.h2} intro={werkgebiedPage.region.body}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <CoverageDiagram title={werkgebiedPage.region.h2} cities={werkgebiedPage.cities} />
          </div>
          <ul className="border-t border-ink/10 lg:col-span-7">
            {werkgebiedPage.cities.map((city) => (
              <li key={city.name} className="grid gap-3 border-b border-ink/10 py-6 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-ink">
                  <MapPin className="size-4 shrink-0 text-azure-deep" aria-hidden />
                  {city.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-ink">{city.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section variant="dark">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {werkgebiedPage.beyond}
          </p>
          <CtaLink ctaKey="planConsultation" variant="azure" arrow className="shrink-0" />
        </div>
      </Section>
    </>
  );
}
