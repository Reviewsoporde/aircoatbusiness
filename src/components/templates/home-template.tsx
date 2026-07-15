import { useTranslations } from "next-intl";
import type { HomeContent, Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
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
import { siteConfig } from "@/lib/site-config";
import { homeClimateCardsWithVisuals } from "@/lib/page-visuals";

type Props = {
  content: HomeContent;
  featuredProjects: Project[];
  locale: Locale;
};

/** Homepage per docs/page-templates.md §2 — 17-section flow, lean nav, one H1. */
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

      {/* 2 — Hero */}
      <HomeHero hero={content.hero} reviews={content.reviews} />

      {/* 3 — Trust / value bar */}
      <TrustBar points={content.trustBar} />

      {/* 4 — Main service categories */}
      <Section
        variant="paper"
        eyebrow="Airco@Business"
        h2={content.categories.h2}
        intro={content.categories.intro}
      >
        <CardGrid cards={content.categories.cards} columns={3} />
      </Section>

      {/* 5 — Business property types (editorial index list) */}
      <Section
        variant="paper"
        h2={content.propertyTypes.h2}
        intro={content.propertyTypes.intro}
        className="border-t border-ink/5"
      >
        <IndexList cards={content.propertyTypes.cards} />
      </Section>

      {/* 6 — Systems */}
      <Section variant="light" h2={content.systems.h2} intro={content.systems.intro}>
        <CardGrid cards={content.systems.cards} columns={3} />
      </Section>

      {/* 7 — Why climate control matters — opening of the dark act */}
      <Section
        variant="dark"
        h2={content.whyClimate.h2}
        intro={content.whyClimate.intro}
        className="glow-azure"
      >
        <CardGrid cards={climateCards} variant="dark" columns={3} />
      </Section>

      {/* 8 — Maintenance & service */}
      <Section
        variant="dark"
        h2={content.maintenance.h2}
        intro={content.maintenance.intro}
        className="border-t border-white/10"
      >
        <CardGrid cards={content.maintenance.cards} variant="dark" columns={3} />
      </Section>

      {/* 9 — Process */}
      <Section
        variant="paper"
        eyebrow={t("ourProcess")}
        h2={content.process.h2}
      >
        <ProcessSteps steps={content.process.steps} variant="light" />
        <Reveal delay={120} className="mt-14">
          <CtaLink label={content.process.linkLabel} href="/werkwijze" variant="outline-light" arrow />
        </Reveal>
      </Section>

      {/* 10 — Maintenance offer (aftercare framing, no discount language) */}
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

      {/* 11 — Projects */}
      {featuredProjects.length > 0 && (
        <Section variant="light" h2={content.projects.h2} intro={content.projects.intro}>
          <Reveal group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={index === 0 ? "sm:col-span-2 lg:col-span-7" : "lg:col-span-5"}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <CtaLink label={t("viewAllProjects")} href="/projecten" variant="outline-light" arrow />
          </Reveal>
        </Section>
      )}

      {/* 12 — Verified Google reviews from the Airco@home team. */}
      <Section
        variant="dark"
        h2={content.reviews.h2}
        intro={content.reviews.intro}
        className="glow-azure-low border-t border-white/10"
      >
        <GoogleReviews reviews={content.reviews} />
      </Section>

      {/* 13 — Service area */}
      <Section variant="paper" h2={content.serviceArea.h2}>
        <Reveal className="max-w-3xl">
          <p className="text-base leading-relaxed text-slate-ink sm:text-lg">
            {content.serviceArea.body}
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {content.serviceArea.cities.map((city) => (
              <li key={city}>
                <Link
                  href="/werkgebied"
                  className="block rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-slate-ink transition-colors duration-200 hover:border-azure-deep hover:text-azure-deep"
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 14 — Lead form */}
      <Section
        variant="paper"
        h2={content.form.h2}
        id="offerte"
        className="border-t border-ink/5"
      >
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_minmax(0,340px)]">
          <div className="rounded-[32px] border border-steel/12 bg-card p-6 shadow-panel sm:p-12">
            <LeadForm />
          </div>
          <ContactAside />
        </Reveal>
      </Section>

      {/* 15 — FAQ */}
      <Section variant="light" h2={content.faq.h2}>
        <Reveal className="max-w-3xl">
          <FaqSection items={content.faq.items} />
        </Reveal>
        <Reveal className="mt-16 border-t border-ink/10 pt-8 text-sm text-slate-ink">
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
