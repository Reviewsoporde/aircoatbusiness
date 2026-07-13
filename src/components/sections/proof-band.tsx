import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import type { Review } from "@/content/types";

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
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <ul className="space-y-4">
          {indicators.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-azure-bright" aria-hidden />
              <span className="text-sm leading-relaxed text-white/85 sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
        {hasReviews && (
          <div className="mt-10 grid gap-4">
            {reviews.map((review) => (
              <figure
                key={`${review.author}-${review.serviceLabel}`}
                className="border border-steel bg-carbon p-6"
              >
                {review.rating && (
                  <div
                    className="mb-3 flex gap-0.5"
                    aria-label={`${review.rating} / 5`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-azure-bright text-azure-bright"
                        aria-hidden
                      />
                    ))}
                  </div>
                )}
                <blockquote className="text-sm leading-relaxed text-white/85">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs tracking-wider text-mist">
                  {review.author}
                  {review.company ? ` — ${review.company}` : ""} ·{" "}
                  {review.serviceLabel}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden border border-steel">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
