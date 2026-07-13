import Image from "next/image";
import { Check, Phone } from "lucide-react";
import type { ServicePageContent } from "@/content/types";
import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/layout/phone-link";
import { CtaLink } from "./cta-link";

type Props = { hero: ServicePageContent["hero"] };

/** Dark hero band for all service pages — compact, one H1, CTA per page intent. */
export function PageHero({ hero }: Props) {
  return (
    <section className="airflow-lines bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-3 text-azure-bright">
            <span aria-hidden className="h-px w-8 bg-azure-bright" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {hero.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaLink ctaKey={hero.cta} variant="azure" arrow />
            {hero.urgent ? (
              <PhoneLink
                phone={siteConfig.phone}
                className="inline-flex items-center gap-2 border border-steel px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-azure-bright hover:text-azure-bright"
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
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {hero.trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <Check className="size-4 text-azure-bright" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        {hero.image && (
          <div className="relative hidden aspect-[4/3] overflow-hidden border border-steel lg:block">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="420px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
