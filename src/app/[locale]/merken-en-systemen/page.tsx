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
import { brandsSystemsVisual } from "@/lib/page-visuals";
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
  const heroImage = brandsSystemsVisual(locale);

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
          image: heroImage,
          variant: "split",
        }}
      />
      <Section variant="paper">
        <ul className="grid gap-5 sm:grid-cols-2">
          {merkenPage.brands.map((brand) => (
            <li
              key={brand.name}
              className="rounded-[24px] border border-steel/12 bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-azure/35 hover:shadow-card-hover sm:p-8"
            >
              <div className="mb-7 flex h-24 items-center justify-center rounded-[18px] border border-steel/10 bg-paper px-8">
                <div className="relative h-12 w-full max-w-44">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="font-display text-xl font-semibold text-ink">
                {brand.name}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-ink">
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
