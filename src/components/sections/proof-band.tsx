import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import type { ImgRef, Review } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  indicators: string[];
  reviews?: Review[];
  image?: ImgRef;
  variant?: "light" | "dark";
};

/**
 * Proof section: factual trust indicators, plus review cards when real client
 * reviews are available. Never renders an empty testimonial block
 * (docs/page-templates.md §3.6).
 */
export function ProofBand({ indicators, reviews, image, variant = "dark" }: Props) {
  const dark = variant === "dark";
  const hasReviews = reviews && reviews.length > 0;
  return (
    <div className={cn("grid gap-14", image && "lg:grid-cols-2 lg:items-center")}>
      <Reveal className={image ? undefined : "max-w-2xl"}>
        <ul className="space-y-5">
          {indicators.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <BadgeCheck
                className={cn(
                  "mt-0.5 size-5 shrink-0",
                  dark ? "text-azure-bright" : "text-azure-deep",
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "text-sm leading-relaxed sm:text-base",
                  dark ? "text-white/85" : "text-slate-ink",
                )}
              >
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
                className={cn(
                  "rounded-2xl p-7",
                  dark
                    ? "border border-white/10 bg-white/[0.06]"
                    : "border border-ink/5 bg-card shadow-card",
                )}
              >
                {review.rating && (
                  <div
                    className="mb-4 flex gap-1"
                    aria-label={`${review.rating} / 5`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-3.5",
                          dark
                            ? "fill-azure-bright text-azure-bright"
                            : "fill-azure text-azure",
                        )}
                        aria-hidden
                      />
                    ))}
                  </div>
                )}
                <blockquote
                  className={cn(
                    "font-display text-lg leading-relaxed font-medium",
                    dark ? "text-white" : "text-ink",
                  )}
                >
                  “{review.text}”
                </blockquote>
                <figcaption
                  className={cn(
                    "mt-5 text-xs font-medium",
                    dark ? "text-mist" : "text-slate-ink",
                  )}
                >
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
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-3xl",
              dark ? "border border-white/10" : "border border-ink/5 shadow-panel",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: image.position }}
            />
          </div>
        </Reveal>
      )}
    </div>
  );
}
