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
 * Rounded card grid. Cards with an href are fully clickable, lift on hover
 * and show an arrow; plain cards are informational. Tags render as soft
 * rounded chips.
 */
export function CardGrid({ cards, variant = "light", columns = 3 }: Props) {
  const dark = variant === "dark";
  const hasImageLedBento =
    columns === 3 && cards.length === 3 && cards.every((card) => card.image);

  return (
    <Reveal
      group
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-12",
      )}
    >
      {cards.map((card, index) => {
        const isFeaturedCard = hasImageLedBento && index === 0;
        const layoutClass =
          columns === 2
            ? "lg:col-span-6"
            : columns === 4
              ? "lg:col-span-6"
              : hasImageLedBento
                ? index === 0
                  ? "sm:col-span-2 lg:col-span-7 lg:row-span-2"
                  : "lg:col-span-5"
                : "lg:col-span-4";
        const inner = (
          <>
            {card.image && (
              <div
                className={cn(
                  "relative -mx-7 -mt-7 mb-7 aspect-[16/10] overflow-hidden sm:-mx-8 sm:-mt-8",
                  isFeaturedCard &&
                    "lg:mb-8 lg:min-h-[26rem] lg:flex-1 lg:aspect-auto",
                )}
              >
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes={
                    isFeaturedCard
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1440px) 58vw, 780px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 42vw, 560px"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: card.image.position }}
                />
              </div>
            )}
            {card.tag && (
              <p
                className={cn(
                  "eyebrow mb-5 self-start rounded-full px-3.5 py-1.5",
                  dark
                    ? "bg-white/10 text-azure-bright"
                    : "bg-accent text-azure-deep",
                )}
              >
                {card.tag}
              </p>
            )}
            <h3
              className={cn(
                "font-display text-2xl leading-tight font-semibold",
                dark ? "text-white" : "text-ink",
              )}
            >
              {card.title}
            </h3>
            <p
              className={cn(
                "mt-3 flex-1 text-sm leading-relaxed",
                isFeaturedCard && "lg:flex-none",
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
          "flex min-h-[18rem] flex-col overflow-hidden rounded-[24px] p-7 sm:p-8",
          layoutClass,
          dark
            ? "border border-white/10 bg-white/[0.06]"
            : "border border-steel/12 bg-card",
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
                : "hover:border-azure/35 hover:shadow-card-hover",
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
