import { Star } from "lucide-react";
import type { ReviewSection } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const GOOGLE_MARK_URL =
  "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png";

type BadgeProps = Pick<
  ReviewSection,
  "platformLabel" | "previewLabel" | "ratingLabel"
> & {
  className?: string;
  compact?: boolean;
};

function GoogleMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("block shrink-0 bg-contain bg-center bg-no-repeat", className)}
      style={{ backgroundImage: `url(${GOOGLE_MARK_URL})` }}
    />
  );
}

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="size-3.5 fill-[#fbbc04] text-[#fbbc04]"
          strokeWidth={1.75}
        />
      ))}
    </span>
  );
}

function reviewerInitials(author: string) {
  return author
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toLocaleUpperCase();
}

export function GoogleReviewBadge({
  platformLabel,
  previewLabel,
  ratingLabel,
  className,
  compact = false,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-white/14 bg-ink/72 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-md",
        compact ? "gap-2.5 px-4 py-2.5" : "gap-3 px-5 py-3",
        className,
      )}
      aria-label={`${ratingLabel} ${platformLabel}. ${previewLabel}`}
    >
      <GoogleMark className={compact ? "size-4" : "size-5"} />
      <Stars />
      <span className="font-display text-sm font-semibold tabular-nums">
        {ratingLabel}
      </span>
      <span aria-hidden className="h-4 w-px bg-white/20" />
      <span className="hidden text-xs font-medium text-white/72 min-[380px]:inline">
        {platformLabel}
      </span>
      <span className="rounded-full bg-white/9 px-2 py-1 text-[0.625rem] font-semibold text-white/62">
        {previewLabel}
      </span>
    </div>
  );
}

export function GoogleReviews({ reviews }: { reviews: ReviewSection }) {
  return (
    <div>
      <Reveal>
        <GoogleReviewBadge
          platformLabel={reviews.platformLabel}
          previewLabel={reviews.previewLabel}
          ratingLabel={reviews.ratingLabel}
        />
      </Reveal>

      <Reveal group className="mt-10 grid gap-5 lg:grid-cols-12">
        {reviews.items.map((review, index) => (
          <article
            key={`${review.author}-${review.serviceLabel}`}
            className={cn(
              "flex min-h-64 flex-col rounded-[28px] border border-white/10 p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] sm:p-9",
              index === 0
                ? "bg-card text-ink lg:col-span-7"
                : index === 1
                  ? "bg-[#17232a] text-white lg:col-span-5"
                  : "bg-[#111a20] text-white lg:col-span-12 lg:min-h-0 lg:p-10",
            )}
          >
            <div
              className={cn(
                "flex h-full flex-col",
                index === 2 &&
                  "lg:grid lg:grid-cols-[minmax(260px,0.7fr)_minmax(0,1.45fr)] lg:items-center lg:gap-14",
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-5">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span
                      aria-hidden
                      className="grid size-12 shrink-0 place-items-center rounded-full bg-azure text-sm font-bold text-ink sm:size-14 sm:text-base"
                    >
                      {reviewerInitials(review.author)}
                    </span>
                    <span className="min-w-0 text-sm">
                      <span
                        className={cn(
                          "block font-semibold",
                          index === 0 ? "text-ink" : "text-white",
                        )}
                      >
                        {review.author}
                      </span>
                      {review.company && (
                        <span
                          className={cn(
                            "mt-1 block",
                            index === 0 ? "text-slate-ink" : "text-white/62",
                          )}
                        >
                          {review.company}
                        </span>
                      )}
                    </span>
                  </div>
                  <GoogleMark className="size-5" />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Stars />
                  {review.dateLabel && (
                    <span
                      className={cn(
                        "text-xs font-medium",
                        index === 0 ? "text-slate-ink" : "text-white/62",
                      )}
                    >
                      {review.dateLabel}
                    </span>
                  )}
                  {review.dateLabel && (
                    <span
                      aria-hidden
                      className={cn(
                        "h-3 w-px",
                        index === 0 ? "bg-ink/15" : "bg-white/18",
                      )}
                    />
                  )}
                  <span
                    className={cn(
                      "text-xs font-medium",
                      index === 0 ? "text-slate-ink" : "text-white/62",
                    )}
                  >
                    {review.serviceLabel}
                  </span>
                </div>
              </div>
              <blockquote
                className={cn(
                  "font-display mt-6 text-lg leading-relaxed font-medium sm:text-xl",
                  index === 0 ? "text-ink" : "text-white",
                  index === 2 &&
                    "lg:mt-0 lg:border-l lg:border-white/10 lg:py-2 lg:pl-14 lg:pr-8 lg:text-[1.35rem] lg:leading-[1.55]",
                )}
              >
                “{review.text}”
              </blockquote>
            </div>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
