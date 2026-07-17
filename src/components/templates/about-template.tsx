import Image from "next/image";
import type { AboutPageContent, ReviewSection } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { aboutCardsWithVisuals } from "@/lib/page-visuals";
import { CtaLink } from "@/components/sections/cta-link";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { Reveal } from "@/components/sections/reveal";

type Props = {
  content: AboutPageContent;
  reviews: ReviewSection;
  locale: Locale;
};

export function AboutTemplate({ content, reviews, locale }: Props) {
  const [founderImage, teamImage, serviceImage] = content.team.images;
  const proofCards = aboutCardsWithVisuals(content.usps.cards, locale);

  return (
    <div className="bg-ink text-white">
      <section className="grain relative isolate overflow-hidden bg-ink">
        <Image
          src={content.hero.image.src}
          alt={content.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="hero-zoom -z-20 object-cover"
          style={{ objectPosition: content.hero.image.position }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(7_9_11/0.97)_0%,rgb(7_9_11/0.88)_42%,rgb(7_9_11/0.28)_78%,rgb(7_9_11/0.18)_100%)]"
        />
        <div className="mx-auto flex min-h-[32rem] max-w-7xl items-center px-4 py-12 sm:min-h-[34rem] sm:px-6 lg:min-h-[36rem] lg:px-8 lg:py-14">
          <div className="max-w-3xl">
            <p className="rise eyebrow text-azure-bright">{content.hero.eyebrow}</p>
            <h1 className="rise mt-5 max-w-3xl font-display text-4xl leading-[1.02] font-semibold text-balance sm:text-5xl lg:text-6xl [animation-delay:100ms]">
              {content.hero.h1}
            </h1>
            <p className="rise mt-6 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg [animation-delay:200ms]">
              {content.hero.intro}
            </p>
            <div className="rise mt-8 [animation-delay:300ms]">
              <CtaLink ctaKey="planConsultation" variant="azure" arrow />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.06] font-medium text-balance text-white sm:text-5xl">
              {content.story.h2}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-start lg:gap-12">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/12 bg-ink shadow-panel">
                <Image
                  src={founderImage.src}
                  alt={founderImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  style={{ objectPosition: founderImage.position ?? "58% 38%" }}
                />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:pt-4">
              <div className="max-w-2xl">
                {content.story.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className={
                      index === 0
                        ? "font-display text-2xl leading-[1.45] font-medium text-white text-pretty sm:text-3xl"
                        : "mt-6 border-t border-white/12 pt-6 text-base leading-[1.8] text-mist text-pretty sm:text-lg"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.06] font-medium text-balance text-white sm:text-5xl">
              {content.usps.h2}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-start lg:gap-12">
            <Reveal group className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4">
              {proofCards.map((card, index) =>
                card.image ? (
                  <div
                    key={card.title}
                    className={
                      index === 0
                        ? "relative col-span-2 aspect-[16/9] overflow-hidden rounded-[32px] border border-white/10 bg-carbon"
                        : "relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/10 bg-carbon"
                    }
                  >
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 1024px) 100vw, 58vw"
                          : "(max-width: 1024px) 50vw, 29vw"
                      }
                      className="object-cover"
                      style={{ objectPosition: card.image.position }}
                    />
                  </div>
                ) : null,
              )}
            </Reveal>

            <Reveal group className="lg:col-span-5 lg:pt-5">
              {proofCards.map((card) => (
                <article
                  key={card.title}
                  className="border-b border-white/12 py-6 first:pt-0 last:border-b-0 last:pb-0"
                >
                  {card.tag && (
                    <p className="eyebrow text-azure-bright">{card.tag}</p>
                  )}
                  <h3 className="mt-3 font-display text-2xl leading-tight font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-mist sm:text-base">
                    {card.description}
                  </p>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl leading-[1.06] font-medium text-balance text-white sm:text-5xl">
              {content.team.h2}
            </h2>
          </Reveal>

          <Reveal group className="mt-8 grid gap-4 md:grid-cols-12 lg:mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/12 bg-ink md:col-span-8 md:aspect-auto md:min-h-[30rem]">
              <Image
                src={teamImage.src}
                alt={teamImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
                style={{ objectPosition: teamImage.position ?? "50% 50%" }}
              />
            </div>
            <div className="grid gap-4 md:col-span-4 md:grid-rows-[minmax(0,1fr)_auto]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/12 bg-ink md:aspect-auto">
                <Image
                  src={serviceImage.src}
                  alt={serviceImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover"
                  style={{ objectPosition: serviceImage.position ?? "50% 50%" }}
                />
              </div>
              <div className="rounded-[28px] border border-white/12 bg-ink p-6 sm:p-7">
                <p className="font-display text-xl leading-[1.45] font-medium text-pretty text-white sm:text-2xl">
                  {content.team.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/8 bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <GoogleReviews reviews={reviews} />
        </div>
      </section>
    </div>
  );
}
