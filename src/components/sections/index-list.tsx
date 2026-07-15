import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Card } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = { cards: Card[]; variant?: "light" | "dark" };

/**
 * Editorial index list — hairline rows with soft serif title and description.
 * An alternative rhythm to CardGrid for enumerable content.
 */
export function IndexList({ cards, variant = "light" }: Props) {
  const dark = variant === "dark";
  const hairline = dark ? "border-white/12" : "border-ink/10";

  return (
    <Reveal group as="ul" className={cn("border-t", hairline)}>
      {cards.map((card) => {
        const inner = (
          <>
            {card.image && (
              <span className="relative aspect-[16/10] overflow-hidden rounded-[20px] sm:col-span-3 sm:aspect-[4/3]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  style={{ objectPosition: card.image.position }}
                />
              </span>
            )}
            <span
              className={cn(
                "font-display text-2xl leading-snug font-semibold transition-colors duration-300",
                card.image ? "sm:col-span-4" : "sm:col-span-5",
                dark
                  ? "text-white group-hover:text-azure-bright"
                  : "text-ink group-hover:text-azure-deep",
              )}
            >
              {card.title}
            </span>
            <span
              className={cn(
                "text-sm leading-relaxed",
                card.image ? "sm:col-span-4" : "sm:col-span-6",
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
          "grid gap-x-8 gap-y-5 border-b py-7 sm:grid-cols-12 sm:items-center sm:py-8",
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
