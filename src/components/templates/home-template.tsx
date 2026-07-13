import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";
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
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectCard } from "@/components/sections/project-card";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadForm } from "@/components/sections/lead-form";
import { ContactAside } from "@/components/sections/contact-aside";
import { CtaLink } from "@/components/sections/cta-link";

type Props = {
  content: HomeContent;
  featuredProjects: Project[];
  locale: Locale;
};

/** Homepage per docs/page-templates.md §2 — 17-section flow, lean nav, one H1. */
export function HomeTemplate({ content, featuredProjects, locale }: Props) {
  const t = useTranslations("common");

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

      {/* 2 — Hero (signature: settling temperature readout) */}
      <HomeHero hero={content.hero} residential={content.residential} />

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

      {/* 5 — Business property types */}
      <Section variant="light" h2={content.propertyTypes.h2} intro={content.propertyTypes.intro}>
        <CardGrid cards={content.propertyTypes.cards} columns={4} />
      </Section>

      {/* 6 — Systems */}
      <Section variant="paper" h2={content.systems.h2} intro={content.systems.intro}>
        <CardGrid cards={content.systems.cards} columns={3} />
      </Section>

      {/* 7 — Why climate control matters */}
      <Section variant="dark" h2={content.whyClimate.h2} intro={content.whyClimate.intro}>
        <CardGrid cards={content.whyClimate.cards} variant="dark" columns={3} />
      </Section>

      {/* 8 — Maintenance & service */}
      <Section variant="light" h2={content.maintenance.h2} intro={content.maintenance.intro}>
        <CardGrid cards={content.maintenance.cards} columns={3} />
      </Section>

      {/* 9 — Process */}
      <Section variant="dark" eyebrow={t("ourProcess")} h2={content.process.h2}>
        <ProcessSteps steps={content.process.steps} />
        <div className="mt-10">
          <CtaLink label={content.process.linkLabel} href="/werkwijze" variant="outline-dark" arrow />
        </div>
      </Section>

      {/* 10 — Maintenance offer (aftercare framing, no discount language) */}
      <Section variant="paper">
        <div className="flex flex-col items-start gap-6 border border-azure/30 bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 flex items-center gap-2 text-azure-deep">
              <Sparkles className="size-4" aria-hidden />
              {content.maintenanceOffer.h2}
            </p>
            <p className="text-base leading-relaxed text-slate-ink">
              {content.maintenanceOffer.body}
            </p>
          </div>
          <CtaLink ctaKey="planConsultation" variant="ink" className="shrink-0" />
        </div>
      </Section>

      {/* 11 — Projects */}
      <Section variant="light" h2={content.projects.h2} intro={content.projects.intro}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <CtaLink label={t("viewAllProjects")} href="/projecten" variant="outline-light" arrow />
        </div>
      </Section>

      {/* 12 — Reviews: rendered only when real client reviews are supplied */}

      {/* 13 — Service area */}
      <Section variant="dark" h2={content.serviceArea.h2}>
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-mist sm:text-lg">
            {content.serviceArea.body}
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {content.serviceArea.cities.map((city) => (
              <li key={city}>
                <Link
                  href="/werkgebied"
                  className="block border border-steel px-4 py-2 font-mono text-xs tracking-wider text-white/80 transition-colors hover:border-azure-bright hover:text-azure-bright"
                >
                  {city.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 14 — Lead form */}
      <Section variant="paper" h2={content.form.h2} id="offerte">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,320px)]">
          <div className="border border-border bg-white p-6 sm:p-10">
            <LeadForm />
          </div>
          <ContactAside />
        </div>
      </Section>

      {/* 15 — FAQ */}
      <Section variant="light" h2={content.faq.h2}>
        <div className="max-w-3xl">
          <FaqSection items={content.faq.items} />
        </div>
      </Section>
    </>
  );
}
