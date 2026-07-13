import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Card } from "@/content/types";
import { cn } from "@/lib/utils";

type Props = {
  cards: Card[];
  variant?: "light" | "dark";
  columns?: 2 | 3 | 4;
};

/**
 * Uniform card grid. Cards with an href are fully clickable and show an arrow;
 * plain cards are informational. Tags render in the system's mono voice.
 */
export function CardGrid({ cards, variant = "light", columns = 3 }: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={cn(
        "grid gap-5",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {cards.map((card) => {
        const inner = (
          <>
            {card.image && (
              <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            )}
            {card.tag && (
              <p
                className={cn(
                  "eyebrow mb-3",
                  dark ? "text-azure-bright" : "text-azure-deep",
                )}
              >
                {card.tag}
              </p>
            )}
            <h3
              className={cn(
                "font-display text-lg font-semibold leading-snug",
                dark ? "text-white" : "text-ink",
              )}
            >
              {card.title}
            </h3>
            <p
              className={cn(
                "mt-3 text-sm leading-relaxed",
                dark ? "text-mist" : "text-slate-ink",
              )}
            >
              {card.description}
            </p>
            {card.href && card.linkLabel && (
              <span
                className={cn(
                  "mt-5 inline-flex items-center gap-1.5 text-sm font-medium",
                  dark ? "text-azure-bright" : "text-azure-deep",
                )}
              >
                {card.linkLabel}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            )}
          </>
        );

        const cardClasses = cn(
          "flex flex-col overflow-hidden border p-6 transition-colors",
          dark
            ? "border-steel bg-carbon"
            : "border-border bg-white",
        );

        return card.href ? (
          <Link
            key={card.title}
            href={card.href}
            className={cn(
              cardClasses,
              "group",
              dark
                ? "hover:border-azure-bright/60"
                : "hover:border-azure-deep/60",
            )}
          >
            {inner}
          </Link>
        ) : (
          <div key={card.title} className={cardClasses}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
