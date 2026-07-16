import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import type { HomeContent, Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/urls";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Section } from "@/components/sections/section-shell";
import { CardGrid } from "@/components/sections/card-grid";
import { IndexList } from "@/components/sections/index-list";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectCard } from "@/components/sections/project-card";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadForm } from "@/components/sections/lead-form";
import { ContactAside } from "@/components/sections/contact-aside";
import { CtaLink } from "@/components/sections/cta-link";
import { Reveal } from "@/components/sections/reveal";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { GoogleBusinessMap } from "@/components/sections/google-business-map";
import { siteConfig } from "@/lib/site-config";
import { homeClimateCardsWithVisuals } from "@/lib/page-visuals";

type Props = {
  content: HomeContent;
  featuredProjects: Project[];
  locale: Locale;
};

/** Homepage per docs/page-templates.md §2 - 17-section flow, lean nav, one H1. */
export function HomeTemplate({ content, featuredProjects, locale }: Props) {
  const t = useTranslations("common");
  const climateCards = homeClimateCardsWithVisuals(
    content.whyClimate.cards,
    locale,
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
          ]),
          faqSchema(content.faq.items),
        ]}
      />

      {/* 2 - Hero */}
      <HomeHero hero={content.hero} reviews={content.reviews} />

      {/* 3 - Trust / value bar */}
      <TrustBar points={content.trustBar} />

      {/* 4 - Main service categories */}
      <Section
        variant="paper"
        eyebrow="Airco@Business"
        h2={content.categories.h2}
        intro={content.categories.intro}
      >
        <CardGrid cards={content.categories.cards} columns={3} />
      </Section>

      {/* 5 - Business property types (editorial index list) */}
      <Section
        variant="paper"
        h2={content.propertyTypes.h2}
        intro={content.propertyTypes.intro}
        className="border-t border-ink/5"
      >
        <IndexList cards={content.propertyTypes.cards} />
      </Section>

      {/* 6 - Systems */}
      <Section variant="light" h2={content.systems.h2} intro={content.systems.intro}>
        <CardGrid cards={content.systems.cards} columns={3} />
      </Section>

      {/* 7 - Why climate control matters - opening of the dark act */}
      <Section
        variant="dark"
        h2={content.whyClimate.h2}
        intro={content.whyClimate.intro}
        className="glow-azure"
      >
        <CardGrid cards={climateCards} variant="dark" columns={3} />
      </Section>

      {/* 8 - Maintenance & service */}
      <Section
        variant="dark"
        h2={content.maintenance.h2}
        intro={content.maintenance.intro}
        className="border-t border-white/10"
      >
        <CardGrid cards={content.maintenance.cards} variant="dark" columns={3} />
      </Section>

      {/* 9 - Process */}
      <Section
        variant="paper"
        eyebrow={t("ourProcess")}
        h2={content.process.h2}
      >
        <ProcessSteps steps={content.process.steps} variant="light" />
        <Reveal delay={120} className="mt-10">
          <CtaLink label={content.process.linkLabel} href="/werkwijze" variant="outline-light" arrow />
        </Reveal>
      </Section>

      {/* 10 - Maintenance offer (aftercare framing, no discount language) */}
      <Section variant="dark" className="border-t border-white/10">
        <Reveal className="relative isolate flex flex-col items-start gap-8 overflow-hidden rounded-[32px] border border-white/12 bg-carbon p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 text-azure-bright">
              {content.maintenanceOffer.h2}
            </p>
            <p className="font-editorial text-xl leading-relaxed font-medium text-white sm:text-2xl">
              {content.maintenanceOffer.body}
            </p>
          </div>
          <CtaLink ctaKey="planConsultation" variant="azure" className="shrink-0" />
        </Reveal>
      </Section>

      {/* 11 - Projects */}
      {featuredProjects.length > 0 && (
        <Section variant="light" h2={content.projects.h2} intro={content.projects.intro}>
          <Reveal group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <CtaLink label={t("viewAllProjects")} href="/projecten" variant="outline-light" arrow />
          </Reveal>
        </Section>
      )}

      {/* 12 - Verified Google reviews from the Airco@home team. */}
      <Section
        variant="dark"
        h2={content.reviews.h2}
        intro={content.reviews.intro}
        className="glow-azure-low border-t border-white/10"
      >
        <GoogleReviews reviews={content.reviews} />
      </Section>

      {/* 13 - Service area */}
      <Section variant="paper" h2={content.serviceArea.h2}>
        <Reveal className="overflow-hidden rounded-[32px] border border-ink/10 bg-ink shadow-panel">
          <div className="grid lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.28fr)]">
            <div className="flex flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
              <div>
                <p className="max-w-lg text-base leading-relaxed text-mist sm:text-lg">
                  {content.serviceArea.body}
                </p>

                <div className="mt-8 border-t border-white/12 pt-7">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="size-4 text-azure-bright" aria-hidden />
                    <h3 className="text-sm font-semibold text-white">
                      {content.serviceArea.coverageLabel}
                    </h3>
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-mist">
                    {content.serviceArea.cities.map((city) => (
                      <li key={city} className="border-l border-azure/55 pl-3">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-9 lg:mt-12">
                <CtaLink
                  label={content.serviceArea.linkLabel}
                  href="/werkgebied"
                  variant="azure"
                  arrow
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            <GoogleBusinessMap
              title={content.serviceArea.mapTitle}
              profileLabel={content.serviceArea.profileLabel}
              profileLinkLabel={content.serviceArea.profileLinkLabel}
              compactProfileLink
              className="min-h-[360px] rounded-none border-0 shadow-none sm:min-h-[430px] lg:h-full lg:min-h-[520px]"
            />
          </div>
        </Reveal>
      </Section>

      {/* 14 - Lead form */}
      <Section
        variant="paper"
        h2={content.form.h2}
        id="offerte"
        className="border-t border-ink/5"
      >
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_minmax(0,340px)]">
          <div className="rounded-[32px] border border-steel/12 bg-card p-6 shadow-panel sm:p-12">
            <LeadForm />
          </div>
          <ContactAside />
        </Reveal>
      </Section>

      {/* 15 - FAQ */}
      <Section variant="light" h2={content.faq.h2}>
        <Reveal className="max-w-3xl">
          <FaqSection items={content.faq.items} />
        </Reveal>
        <Reveal className="mt-12 border-t border-ink/10 pt-8 text-sm text-slate-ink">
          {content.residential.text}{" "}
          <a
            href={siteConfig.residentialSite}
            rel="noopener"
            className="font-semibold text-azure-deep underline decoration-azure/30 underline-offset-4 hover:decoration-azure-deep"
          >
            {content.residential.linkLabel}
          </a>
        </Reveal>
      </Section>
    </>
  );
}
