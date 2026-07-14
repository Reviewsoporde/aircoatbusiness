import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import type { Review } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  indicators: string[];
  reviews?: Review[];
  image?: { src: string; alt: string };
};

/**
 * Proof section: factual trust indicators, plus review cards when real client
 * reviews are available. Never renders an empty testimonial block
 * (docs/page-templates.md §3.6).
 */
export function ProofBand({ indicators, reviews, image }: Props) {
  const hasReviews = reviews && reviews.length > 0;
  return (
    <div className={cn("grid gap-14", image && "lg:grid-cols-2 lg:items-center")}>
      <Reveal className={image ? undefined : "max-w-2xl"}>
        <ul className="space-y-5">
          {indicators.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <BadgeCheck
                className="mt-0.5 size-5 shrink-0 text-azure-bright"
                aria-hidden
              />
              <span className="text-sm leading-relaxed text-white/85 sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
        {hasReviews && (
          <div className="mt-12 grid gap-5">
            {reviews.map((review) => (
              <figure
                key={`${review.author}-${review.serviceLabel}`}
                className="border-l border-azure/60 bg-white/[0.04] p-7"
              >
                {review.rating && (
                  <div
                    className="mb-4 flex gap-1"
                    aria-label={`${review.rating} / 5`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-azure-bright text-azure-bright"
                        aria-hidden
                      />
                    ))}
                  </div>
                )}
                <blockquote className="font-display text-lg leading-relaxed font-medium text-white">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-5 font-mono text-xs tracking-wider text-mist">
                  {review.author}
                  {review.company ? ` — ${review.company}` : ""} ·{" "}
                  {review.serviceLabel}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </Reveal>
      {image && (
        <Reveal delay={150} className="relative">
          <div
            aria-hidden
            className="absolute -right-4 -bottom-4 h-full w-full border border-azure/25"
          />
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      )}
    </div>
  );
}
