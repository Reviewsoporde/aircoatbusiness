import { useTranslations } from "next-intl";
import type { ServicePageContent } from "@/content/types";
import type { AppPathname, Locale } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/urls";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section-shell";
import { CardGrid } from "@/components/sections/card-grid";
import { Checklist } from "@/components/sections/checklist";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProofBand } from "@/components/sections/proof-band";
import { RelatedLinks } from "@/components/sections/related-links";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadForm } from "@/components/sections/lead-form";
import { CtaLink } from "@/components/sections/cta-link";
import { ContactAside } from "@/components/sections/contact-aside";

type Props = {
  content: ServicePageContent;
  pathname: AppPathname;
  locale: Locale;
  /** Parent cluster page for the breadcrumb trail (child pages only) */
  parent?: { name: string; href: AppPathname };
};

/**
 * Universal 7-section service page (docs/page-templates.md §3):
 * hero → overview → benefits → scope → process → proof → conversion.
 * Section depth varies by page type via the content object; design stays constant.
 */
export function ServicePageTemplate({ content, pathname, locale, parent }: Props) {
  const t = useTranslations("common");
  const url = absoluteUrl(locale, pathname);

  const crumbs = [
    { name: t("breadcrumbHome"), url: absoluteUrl(locale, "/") },
    ...(parent ? [{ name: parent.name, url: absoluteUrl(locale, parent.href) }] : []),
    { name: content.name, url },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: content.name,
            description: content.meta.description,
            url,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(content.faq.items),
        ]}
      />

      {/* 1 — Hero */}
      <PageHero hero={content.hero} />

      {/* 2 — Service overview & audience */}
      <Section
        variant="paper"
        eyebrow={content.name}
        h2={content.overview.h2}
        intro={content.overview.intro}
      >
        <CardGrid
          cards={content.overview.cards}
          columns={content.overview.cards.length === 4 ? 4 : 3}
        />
      </Section>

      {/* 3 — Business need & benefits */}
      <Section variant="light" h2={content.benefits.h2} intro={content.benefits.intro}>
        <CardGrid cards={content.benefits.cards} />
      </Section>

      {/* 4 — Solution scope & technical fit (child pages only) */}
      {content.scope && (
        <Section variant="paper" h2={content.scope.h2} intro={content.scope.intro}>
          <Checklist items={content.scope.items} />
        </Section>
      )}

      {/* 5 — Process */}
      <Section variant="dark" eyebrow={t("ourProcess")} h2={content.process.h2}>
        <ProcessSteps steps={content.process.steps} />
        <div className="mt-10">
          <CtaLink ctaKey={content.hero.cta} variant="azure" arrow />
        </div>
      </Section>

      {/* 6 — Projects, reviews & trust */}
      <Section variant="dark" h2={content.proof.h2} className="border-t border-steel">
        <ProofBand
          indicators={content.proof.indicators}
          reviews={content.proof.reviews}
          image={content.proof.image}
        />
      </Section>

      {/* 7 — Conversion: lead form (dominant) + related + FAQ */}
      <Section variant="paper" h2={content.form.h2} id="offerte">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,320px)]">
          <div className="border border-border bg-white p-6 sm:p-10">
            <LeadForm
              defaultService={content.form.service}
              defaultPropertyType={content.form.propertyType}
            />
          </div>
          <ContactAside />
        </div>

        <div className="mt-16">
          <h3 className="eyebrow mb-6 text-azure-deep">{t("relatedPages")}</h3>
          <RelatedLinks links={content.related} />
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="font-display text-2xl font-semibold text-ink">
            {content.faq.h2}
          </h3>
          <div className="mt-6">
            <FaqSection items={content.faq.items} />
          </div>
        </div>
      </Section>
    </>
  );
}
