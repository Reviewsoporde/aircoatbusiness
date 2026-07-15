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
import { CardGrid } from "@/components/sections/card-grid";
import { CtaLink } from "@/components/sections/cta-link";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { aboutCardsWithVisuals } from "@/lib/page-visuals";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(locale, "/over-ons", getBundle(locale).overOnsPage.meta);
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const { home, overOnsPage } = getBundle(locale);
  const teamImages = overOnsPage.team.images.slice(0, 2);
  const uspCards = aboutCardsWithVisuals(overOnsPage.usps.cards, locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
          { name: overOnsPage.hero.h1, url: absoluteUrl(locale, "/over-ons") },
        ])}
      />
      <PageHero
        hero={{
          eyebrow: overOnsPage.hero.eyebrow,
          h1: overOnsPage.hero.h1,
          intro: overOnsPage.hero.intro,
          cta: "planConsultation",
          trustPoints: [],
        }}
      />
      <Section variant="paper" h2={overOnsPage.story.h2}>
        <div className="max-w-3xl space-y-5">
          {overOnsPage.story.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-slate-ink sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>
      <Section variant="light" h2={overOnsPage.usps.h2}>
        <CardGrid cards={uspCards} />
      </Section>
      <Section
        variant="paper"
        h2={home.reviews.h2}
        intro={home.reviews.intro}
        className="border-t border-ink/8"
      >
        <GoogleReviews reviews={home.reviews} />
      </Section>
      <Section variant="dark" h2={overOnsPage.team.h2} intro={overOnsPage.team.body}>
        <div className="grid overflow-hidden rounded-[32px] border border-white/12 bg-carbon lg:grid-cols-12">
          <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="eyebrow text-azure-bright">Airco@Business</p>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {overOnsPage.usps.cards.slice(0, 3).map((item) => (
                <li key={item.title} className="grid gap-2 py-5 sm:grid-cols-[0.65fr_1fr] sm:gap-8">
                  <span className="font-display text-xl font-semibold text-white">{item.title}</span>
                  <span className="text-sm leading-relaxed text-mist">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid min-h-72 gap-px overflow-hidden border-t border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:border-t-0 lg:border-l">
            {teamImages.map((image) => (
              <div key={image.src} className="relative min-h-56 bg-ink">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                  className="object-cover"
                  style={{ objectPosition: image.position }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <CtaLink ctaKey="planConsultation" variant="azure" arrow />
        </div>
      </Section>
    </>
  );
}
