import Image from "next/image";
import { Check, Phone } from "lucide-react";
import type { ServicePageContent } from "@/content/types";
import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/layout/phone-link";
import { CtaLink } from "./cta-link";
import { Reveal } from "./reveal";

type Props = { hero: ServicePageContent["hero"] };

/** Dark hero band for all service pages — compact, one H1, CTA per page intent. */
export function PageHero({ hero }: Props) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden className="glow-azure absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1fr_minmax(0,440px)] lg:items-center lg:px-8 lg:pt-24 lg:pb-28">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3 text-azure-bright">
            <span aria-hidden className="h-px w-8 bg-azure-bright" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.06] text-balance sm:text-5xl lg:text-6xl">
            {hero.h1}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {hero.intro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaLink ctaKey={hero.cta} anchor={hero.ctaAnchor} variant="azure" arrow />
            {hero.urgent ? (
              <PhoneLink
                phone={siteConfig.phone}
                className="inline-flex items-center gap-2.5 border border-white/25 px-7 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:border-white/70 hover:bg-white/5 active:scale-[0.98]"
              >
                <Phone className="size-3.5" aria-hidden />
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
            <ul className="mt-11 flex flex-wrap gap-x-8 gap-y-3">
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
        </Reveal>
        {hero.image && (
          <Reveal delay={200} className="relative hidden lg:block">
            <div
              aria-hidden
              className="absolute -right-4 -bottom-4 h-full w-full border border-azure/25"
            />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="440px"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
