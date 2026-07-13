import Image from "next/image";
import { useTranslations } from "next-intl";
import type { HomeContent } from "@/content/types";
import { CtaLink } from "./cta-link";
import { TempReadout } from "./temp-readout";

type Props = { hero: HomeContent["hero"]; residential: HomeContent["residential"] };

export function HomeHero({ hero, residential }: Props) {
  const t = useTranslations("common");

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Commercial installation photo, darkened to keep type AAA-readable */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/commercial-installation.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
        />
      </div>

      <div className="airflow-lines mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <p className="eyebrow mb-6 flex items-center gap-3 text-azure-bright">
            <span aria-hidden className="h-px w-8 bg-azure-bright" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display max-w-2xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {hero.h1}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {hero.intro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaLink ctaKey="requestQuote" variant="azure" arrow />
            <CtaLink ctaKey="planConsultation" variant="outline-dark" />
          </div>
          <p className="mt-9 text-xs text-mist/80">
            {residential.text}{" "}
            <a
              href="https://airco-athome.nl/"
              rel="noopener"
              className="underline decoration-mist/40 underline-offset-4 transition-colors hover:text-white"
            >
              {residential.linkLabel}
            </a>
          </p>
        </div>

        <div className="max-w-md lg:justify-self-end lg:w-full">
          <TempReadout label={hero.readoutLabel} caption={hero.readoutCaption} />
          <p className="sr-only">{t("requestQuote")}</p>
        </div>
      </div>
    </section>
  );
}
