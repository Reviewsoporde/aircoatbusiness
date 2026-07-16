import Image from "next/image";
import { Check, Phone } from "lucide-react";
import type { ServicePageContent } from "@/content/types";
import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/layout/phone-link";
import { CtaLink } from "./cta-link";
import { cn } from "@/lib/utils";

type Props = { hero: ServicePageContent["hero"] };

/**
 * Dark hero band for all service pages - compact, one H1, CTA per page intent.
 * Content rises in sequence on page load (CSS-only, reduced-motion aware).
 */
export function PageHero({ hero }: Props) {
  const variant = hero.variant ?? (hero.urgent ? "urgent" : hero.image ? "split" : "type-led");
  const imageLed = variant === "image-led";
  const splitImage = !imageLed && Boolean(hero.image);

  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-white">
      {imageLed && hero.image ? (
        <>
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="hero-zoom -z-20 object-cover"
            style={{ objectPosition: hero.image.position }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(7_9_11/0.95)_0%,rgb(7_9_11/0.72)_52%,rgb(7_9_11/0.2)_100%)]" />
        </>
      ) : (
        <div aria-hidden className="glow-azure absolute inset-0 -z-10" />
      )}
      <div
        className={cn(
          "mx-auto grid gap-8 px-4 pt-12 pb-16 sm:px-6 lg:items-center lg:px-8 lg:py-20",
          imageLed
            ? "min-h-[620px] max-w-7xl lg:grid-cols-12"
            : splitImage
              ? "max-w-[90rem] lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.85fr)] xl:grid-cols-[minmax(0,1fr)_minmax(34rem,0.95fr)]"
              : "max-w-7xl",
        )}
      >
        <div
          className={cn(
            imageLed &&
              "hero-lead-glass rounded-[32px] p-7 sm:p-10 lg:col-span-7 lg:p-12",
          )}
        >
          <p className="rise eyebrow mb-4 text-azure-bright">
            {hero.eyebrow}
          </p>
          <h1 className="rise font-display max-w-4xl text-4xl font-semibold leading-[1.02] text-balance sm:text-5xl lg:text-6xl [animation-delay:100ms]">
            {hero.h1}
          </h1>
          <p className="rise mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg [animation-delay:200ms]">
            {hero.intro}
          </p>
          <div className="rise mt-7 flex flex-wrap items-center gap-4 [animation-delay:300ms]">
            <CtaLink ctaKey={hero.cta} anchor={hero.ctaAnchor} variant="azure" arrow />
            {hero.urgent ? (
              <PhoneLink
                phone={siteConfig.phone}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 active:scale-[0.98]"
              >
                <Phone className="size-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </PhoneLink>
            ) : (
              hero.secondary && (
                <CtaLink
                  href={hero.secondary.href}
                  label={hero.secondary.label}
                  variant="outline-dark"
                />
              )
            )}
          </div>
          {hero.trustPoints.length > 0 && (
            <ul className="rise mt-8 flex flex-wrap gap-x-8 gap-y-3 [animation-delay:400ms]">
              {hero.trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-white/75"
                >
                  <Check className="size-4 text-azure-bright" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        {splitImage && hero.image && (
          <div className="rise relative [animation-delay:300ms]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-white/12 shadow-panel">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 48vw, 680px"
                className="object-cover"
                style={{ objectPosition: hero.image.position }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
