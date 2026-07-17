import Image from "next/image";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { useTranslations } from "next-intl";
import type { HomeContent } from "@/content/types";
import { siteConfig } from "@/lib/site-config";
import { CtaLink } from "./cta-link";
import { GoogleReviewBadge } from "./google-reviews";
import { HeroLeadForm } from "./hero-lead-form";

type Props = {
  hero: HomeContent["hero"];
  reviews: HomeContent["reviews"];
};

/**
 * Homepage hero. The real installation image carries the visual weight while
 * the short content stack keeps both conversion actions inside the viewport.
 */
export function HomeHero({ hero, reviews }: Props) {
  const t = useTranslations("footer");

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/generated/commercial-office-hero.webp"
          alt="Moderne zakelijke kantoorruimte met geïntegreerde klimaatinstallatie"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[58%_center] opacity-[0.98]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_9_11/0.94)_0%,rgb(7_9_11/0.8)_36%,rgb(7_9_11/0.38)_68%,rgb(7_9_11/0.08)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/60 to-transparent"
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100dvh-var(--site-header-height))] w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:gap-12 lg:px-8 lg:py-12 xl:gap-16">
        <div className="max-w-3xl">
          <p className="rise eyebrow mb-6 text-azure-bright">
            {hero.eyebrow}
          </p>
          <h1 className="rise font-display max-w-[18ch] text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[0.98] text-balance [animation-delay:120ms]">
            {hero.h1}
          </h1>
          <p className="rise mt-7 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg [animation-delay:240ms]">
            {hero.intro}
          </p>
          <div className="rise mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center [animation-delay:360ms]">
            <CtaLink
              ctaKey="planConsultation"
              variant="outline-dark"
              className="w-full bg-ink/15 backdrop-blur-sm sm:w-auto"
            />
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 bg-ink/15 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 active:translate-y-0 active:scale-[0.98] sm:w-auto"
            >
              <SiWhatsapp
                size={16}
                className="text-azure-bright"
                aria-hidden
                focusable="false"
              />
              {t("whatsapp")}
            </a>
          </div>
          <div className="rise mt-6 [animation-delay:480ms]">
            <GoogleReviewBadge
              platformLabel={reviews.platformLabel}
              reviewCountLabel={reviews.reviewCountLabel}
              ratingValue={reviews.ratingValue}
              ratingLabel={reviews.ratingLabel}
              reviewUrl={reviews.reviewUrl}
              compact
              linked={false}
            />
          </div>
        </div>

        <div className="rise hero-lead-glass hero-lead-glass--prominent rounded-[32px] p-6 [animation-delay:420ms] sm:p-8 lg:relative lg:top-5 lg:p-7 xl:p-8">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
