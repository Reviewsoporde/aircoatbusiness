import { Star } from "lucide-react";
import type { ReviewSection } from "@/content/types";
import { cn } from "@/lib/utils";
import { GoogleMark } from "@/components/ui/google-mark";
import { Reveal } from "./reveal";

type BadgeProps = Pick<
  ReviewSection,
  | "platformLabel"
  | "reviewCountLabel"
  | "ratingValue"
  | "ratingLabel"
  | "reviewUrl"
> & {
  className?: string;
  compact?: boolean;
  linked?: boolean;
};

function Stars({
  rating = 5,
  className,
}: {
  rating?: number;
  className?: string;
}) {
  const safeRating = Math.max(0, Math.min(5, rating));

  return (
    <span
      className={cn("relative inline-flex shrink-0", className)}
      role="img"
      aria-label={`${safeRating} / 5`}
    >
      <span aria-hidden className="flex items-center gap-0.5 text-white/28">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-3.5" strokeWidth={1.75} />
        ))}
      </span>
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${(safeRating / 5) * 100}%` }}
      >
        <span className="flex w-max items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="size-3.5 fill-[#fbbc04] text-[#fbbc04]"
              strokeWidth={1.75}
            />
          ))}
        </span>
      </span>
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
  reviewCountLabel,
  ratingValue,
  ratingLabel,
  reviewUrl,
  className,
  compact = false,
  linked = true,
}: BadgeProps) {
  const badgeClassName = cn(
    "inline-flex w-fit items-center text-white",
    linked
      ? "rounded-full border border-white/14 bg-ink/72 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-azure/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure"
      : "gap-2.5",
    linked && (compact ? "gap-2.5 px-4 py-2.5" : "gap-3 px-5 py-3"),
    className,
  );
  const label = `${ratingLabel} ${platformLabel}. ${reviewCountLabel}`;
  const content = (
    <>
      <GoogleMark className={compact ? "size-4" : "size-5"} />
      <Stars rating={ratingValue} />
      <span className="font-display text-sm font-semibold tabular-nums">
        {ratingLabel}
      </span>
      <span aria-hidden className="h-4 w-px bg-white/20" />
      <span className="hidden text-xs font-medium text-white/72 min-[380px]:inline">
        {platformLabel}
      </span>
      <span
        className={cn(
          "text-[0.625rem] font-semibold text-white/62",
          linked && "rounded-full bg-white/9 px-2 py-1",
        )}
      >
        {reviewCountLabel}
      </span>
    </>
  );

  if (!linked) {
    return (
      <div className={badgeClassName} aria-label={label}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noreferrer noopener nofollow"
      className={badgeClassName}
      aria-label={label}
    >
      {content}
    </a>
  );
}

export function GoogleReviews({ reviews }: { reviews: ReviewSection }) {
  return (
    <div>
      <Reveal className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        <div>
          <h2 className="font-display max-w-3xl text-4xl font-medium leading-[1.08] text-balance text-white sm:text-5xl">
            {reviews.h2}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {reviews.intro}
          </p>
        </div>
        <GoogleReviewBadge
          platformLabel={reviews.platformLabel}
          reviewCountLabel={reviews.reviewCountLabel}
          ratingValue={reviews.ratingValue}
          ratingLabel={reviews.ratingLabel}
          reviewUrl={reviews.reviewUrl}
          linked={false}
          className="lg:mb-1 lg:justify-self-end"
        />
      </Reveal>

      <Reveal group className="mt-8 grid gap-4 lg:grid-cols-2">
        {reviews.items.map((review, index) => (
          <article
            key={`${review.author}-${review.serviceLabel}`}
            className={cn(
              "flex flex-col rounded-[28px] border border-white/10 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] sm:p-7",
              index === 0
                ? "bg-card text-ink lg:col-start-1 lg:row-start-2"
                : index === 1
                  ? "bg-[#17232a] text-white lg:col-start-2 lg:row-start-2"
                  : "bg-[#111a20] text-white lg:col-span-2 lg:row-start-1 lg:p-9",
            )}
          >
            <div
              className={cn(
                "flex h-full flex-col",
                index === 2 &&
                  "lg:grid lg:grid-cols-[minmax(240px,0.65fr)_minmax(0,1.35fr)] lg:items-center lg:gap-12",
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
                  <span aria-hidden>
                    <GoogleMark className="size-5" />
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Stars rating={review.rating} />
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
                    "lg:mt-0 lg:border-l lg:border-white/10 lg:py-2 lg:pl-12 lg:text-[1.25rem] lg:leading-[1.5]",
                )}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>
            </div>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
