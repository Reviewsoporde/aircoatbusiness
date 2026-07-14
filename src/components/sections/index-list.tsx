import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Card } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = { cards: Card[]; variant?: "light" | "dark" };

/**
 * Editorial index list — hairline rows with mono numeral, serif title and
 * description. An alternative rhythm to CardGrid for enumerable content.
 */
export function IndexList({ cards, variant = "light" }: Props) {
  const dark = variant === "dark";
  const hairline = dark ? "border-white/12" : "border-ink/10";

  return (
    <Reveal group as="ul" className={cn("border-t", hairline)}>
      {cards.map((card, index) => {
        const inner = (
          <>
            <span
              aria-hidden
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] sm:col-span-1",
                dark ? "text-white/35" : "text-ink/35",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "font-display text-2xl leading-snug font-medium transition-colors duration-300 sm:col-span-4",
                dark
                  ? "text-white group-hover:text-azure-bright"
                  : "text-ink group-hover:text-azure-deep",
              )}
            >
              {card.title}
            </span>
            <span
              className={cn(
                "text-sm leading-relaxed sm:col-span-6",
                dark ? "text-mist" : "text-slate-ink",
              )}
            >
              {card.description}
            </span>
            <span className="hidden sm:col-span-1 sm:flex sm:justify-end">
              {card.href && (
                <ArrowRight
                  className={cn(
                    "size-5 transition-transform duration-300 group-hover:translate-x-1.5",
                    dark ? "text-azure-bright" : "text-azure-deep",
                  )}
                  aria-hidden
                />
              )}
            </span>
          </>
        );

        const rowClasses = cn(
          "grid gap-x-8 gap-y-2 border-b py-7 sm:grid-cols-12 sm:items-baseline sm:py-8",
          hairline,
        );

        return (
          <li key={card.title}>
            {card.href ? (
              <Link href={card.href} className={cn(rowClasses, "group")}>
                {inner}
              </Link>
            ) : (
              <div className={rowClasses}>{inner}</div>
            )}
          </li>
        );
      })}
    </Reveal>
  );
}
