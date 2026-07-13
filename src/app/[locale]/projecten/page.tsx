import type { Metadata } from "next";
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
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { RelatedLinks } from "@/components/sections/related-links";
import { CtaLink } from "@/components/sections/cta-link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(locale, "/projecten", getBundle(locale).projectenPage.meta);
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const { projectenPage, projects } = getBundle(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
          { name: projectenPage.hero.h1, url: absoluteUrl(locale, "/projecten") },
        ])}
      />
      <PageHero
        hero={{
          eyebrow: projectenPage.hero.eyebrow,
          h1: projectenPage.hero.h1,
          intro: projectenPage.hero.intro,
          cta: "planConsultation",
          trustPoints: [],
        }}
      />
      <Section variant="paper">
        <ProjectsExplorer
          projects={projects}
          filters={projectenPage.filters}
          allLabel={projectenPage.filterAllLabel}
        />
      </Section>
      <Section variant="light">
        <h2 className="eyebrow mb-6 text-azure-deep">{t("relatedPages")}</h2>
        <RelatedLinks links={projectenPage.serviceLinks} />
        <div className="mt-12">
          <CtaLink ctaKey="requestQuote" variant="ink" arrow />
        </div>
      </Section>
    </>
  );
}
