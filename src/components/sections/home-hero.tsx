import Image from "next/image";
import type { HomeContent } from "@/content/types";
import { CtaLink } from "./cta-link";
import { GoogleReviewBadge } from "./google-reviews";

type Props = {
  hero: HomeContent["hero"];
  reviews: HomeContent["reviews"];
};

/**
 * Homepage hero. The real installation image carries the visual weight while
 * the short content stack keeps both conversion actions inside the viewport.
 */
export function HomeHero({ hero, reviews }: Props) {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/generated/commercial-office-hero.webp"
          alt="Moderne zakelijke kantoorruimte met geïntegreerde klimaatinstallatie"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[58%_center] opacity-[0.86]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_9_11/0.98)_0%,rgb(7_9_11/0.9)_36%,rgb(7_9_11/0.5)_68%,rgb(7_9_11/0.12)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/80 to-transparent"
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100dvh-var(--site-header-height))] max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="max-w-4xl">
          <p className="rise eyebrow mb-6 text-azure-bright">
            {hero.eyebrow}
          </p>
          <h1 className="rise font-display max-w-[18ch] text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[0.98] text-balance [animation-delay:120ms]">
            {hero.h1}
          </h1>
          <p className="rise mt-7 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg [animation-delay:240ms]">
            {hero.intro}
          </p>
          <div className="rise mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 [animation-delay:360ms]">
            <CtaLink
              anchor="#offerte"
              ctaKey="requestQuote"
              variant="azure"
              arrow
              className="w-full sm:w-auto"
            />
            <CtaLink
              ctaKey="planConsultation"
              variant="outline-dark"
              className="w-full bg-ink/15 backdrop-blur-sm sm:w-auto"
            />
          </div>
          <div className="rise mt-6 [animation-delay:480ms]">
            <GoogleReviewBadge
              platformLabel={reviews.platformLabel}
              previewLabel={reviews.previewLabel}
              ratingLabel={reviews.ratingLabel}
              compact
            />
          </div>
        </div>
      </div>
    </section>
  );
}
