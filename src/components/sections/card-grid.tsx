import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Card } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  cards: Card[];
  variant?: "light" | "dark";
  columns?: 2 | 3 | 4;
};

/**
 * Numbered card grid. Cards with an href are fully clickable, lift on hover
 * and show an arrow; plain cards are informational. Index numerals and tags
 * render in the system's mono voice.
 */
export function CardGrid({ cards, variant = "light", columns = 3 }: Props) {
  const dark = variant === "dark";
  return (
    <Reveal
      group
      className={cn(
        "grid gap-5",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {cards.map((card, index) => {
        const inner = (
          <>
            {card.image && (
              <div className="relative -mx-7 -mt-7 mb-7 aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            )}
            <div className="flex items-baseline justify-between gap-4">
              <span
                aria-hidden
                className={cn(
                  "font-mono text-[11px] tracking-[0.18em]",
                  dark ? "text-white/35" : "text-ink/35",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {card.tag && (
                <p
                  className={cn(
                    "eyebrow",
                    dark ? "text-azure-bright" : "text-azure-deep",
                  )}
                >
                  {card.tag}
                </p>
              )}
            </div>
            <h3
              className={cn(
                "font-display mt-6 text-xl leading-snug font-medium",
                dark ? "text-white" : "text-ink",
              )}
            >
              {card.title}
            </h3>
            <p
              className={cn(
                "mt-3 flex-1 text-sm leading-relaxed",
                dark ? "text-mist" : "text-slate-ink",
              )}
            >
              {card.description}
            </p>
            {card.href && card.linkLabel && (
              <span
                className={cn(
                  "mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
                  dark ? "text-azure-bright" : "text-azure-deep",
                )}
              >
                {card.linkLabel}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            )}
          </>
        );

        const cardClasses = cn(
          "flex flex-col overflow-hidden p-7",
          dark
            ? "border border-white/10 bg-white/[0.04]"
            : "border border-ink/5 bg-white shadow-card",
        );

        return card.href ? (
          <Link
            key={card.title}
            href={card.href}
            className={cn(
              cardClasses,
              "group transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1",
              dark
                ? "hover:border-azure/50 hover:bg-white/[0.06]"
                : "hover:border-ink/10 hover:shadow-card-hover",
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
    </Reveal>
  );
}
