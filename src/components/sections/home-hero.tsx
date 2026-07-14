import Image from "next/image";
import type { HomeContent } from "@/content/types";
import { CtaLink } from "./cta-link";
import { Reveal } from "./reveal";
import { TempReadout } from "./temp-readout";

type Props = { hero: HomeContent["hero"]; residential: HomeContent["residential"] };

export function HomeHero({ hero, residential }: Props) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-white">
      {/* Commercial installation photo, graded dark so type stays AAA-readable */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/commercial-installation.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 saturate-[0.8]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent"
        />
        <div aria-hidden className="glow-azure absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-4 pt-24 pb-24 sm:px-6 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-center lg:px-8 lg:pt-36 lg:pb-36">
        <Reveal>
          <p className="eyebrow mb-7 flex items-center gap-3 text-azure-bright">
            <span aria-hidden className="h-px w-8 bg-azure-bright" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.04] text-balance sm:text-6xl lg:text-7xl">
            {hero.h1}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {hero.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaLink ctaKey="requestQuote" variant="azure" arrow />
            <CtaLink ctaKey="planConsultation" variant="outline-dark" />
          </div>
          <p className="mt-10 text-xs text-mist/80">
            {residential.text}{" "}
            <a
              href="https://airco-athome.nl/"
              rel="noopener"
              className="underline decoration-mist/40 underline-offset-4 transition-colors hover:text-white"
            >
              {residential.linkLabel}
            </a>
          </p>
        </Reveal>

        <Reveal delay={200} className="max-w-md lg:w-full lg:justify-self-end">
          <TempReadout label={hero.readoutLabel} caption={hero.readoutCaption} />
        </Reveal>
      </div>
    </section>
  );
}
