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
import { projectsPageVisual } from "@/lib/page-visuals";
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
  const publishedProjects = projects.filter((project) => project.status === "published");
  const heroImage = projectsPageVisual(locale);

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
          image: heroImage,
          variant: "image-led",
        }}
      />
      <Section variant="paper">
        {publishedProjects.length > 0 ? (
          <ProjectsExplorer
            projects={publishedProjects}
            filters={projectenPage.filters}
            allLabel={projectenPage.filterAllLabel}
          />
        ) : (
          <div className="grid overflow-hidden rounded-[32px] border border-steel/12 bg-white lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 sm:p-12">
              <p className="eyebrow text-azure-deep">Airco@Business</p>
              <h2 className="font-display mt-5 max-w-xl text-3xl font-semibold text-ink sm:text-4xl">
                {t("projectsPendingTitle")}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-ink">
                {t("projectsPendingBody")}
              </p>
              <div className="mt-8">
                <CtaLink ctaKey="planConsultation" variant="ink" arrow />
              </div>
            </div>
            <div className="relative min-h-72 bg-ink">
              <Image
                src="/images/generated/commercial-installation-in-progress.webp"
                alt={
                  locale === "nl"
                    ? "Monteurs installeren een cassette-unit in een zakelijke kantoorruimte"
                    : "Engineers installing a ceiling cassette unit in a commercial office"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent"
              />
            </div>
          </div>
        )}
      </Section>
      <Section variant="light">
        <h2 className="eyebrow mb-8 text-azure-deep">
          {t("relatedPages")}
        </h2>
        <RelatedLinks links={projectenPage.serviceLinks} />
        <div className="mt-12">
          <CtaLink ctaKey="requestQuote" variant="ink" arrow />
        </div>
      </Section>
    </>
  );
}
