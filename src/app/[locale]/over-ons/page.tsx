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
  const { overOnsPage } = getBundle(locale);

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
        <CardGrid cards={overOnsPage.usps.cards} />
      </Section>
      <Section variant="dark" h2={overOnsPage.team.h2} intro={overOnsPage.team.body}>
        <div className="grid gap-5 sm:grid-cols-2">
          {overOnsPage.team.images.map((image) => (
            <div key={image.src} className="relative aspect-[4/3] overflow-hidden border border-steel">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CtaLink ctaKey="planConsultation" variant="azure" arrow />
        </div>
      </Section>
    </>
  );
}
