import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getBundle } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/urls";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section-shell";
import { RelatedLinks } from "@/components/sections/related-links";
import { CtaLink } from "@/components/sections/cta-link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(
    locale,
    "/merken-en-systemen",
    getBundle(locale).merkenPage.meta,
  );
}

export default async function BrandsPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const { merkenPage } = getBundle(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
          {
            name: merkenPage.hero.h1,
            url: absoluteUrl(locale, "/merken-en-systemen"),
          },
        ])}
      />
      <PageHero
        hero={{
          eyebrow: merkenPage.hero.eyebrow,
          h1: merkenPage.hero.h1,
          intro: merkenPage.hero.intro,
          cta: "requestSystemAdvice",
          trustPoints: [],
        }}
      />
      <Section variant="dark">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {merkenPage.brands.map((brand) => (
            <li
              key={brand.name}
              className="border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-azure/50"
            >
              <div className="relative mb-7 h-10 w-36">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
              <h2 className="font-display text-xl font-medium text-white">
                {brand.name}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-mist">
                {brand.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section variant="paper" h2={merkenPage.systems.h2} intro={merkenPage.systems.intro}>
        <RelatedLinks links={merkenPage.systems.links} />
        <div className="mt-14">
          <CtaLink ctaKey="requestSystemAdvice" variant="ink" arrow />
        </div>
      </Section>
    </>
  );
}
