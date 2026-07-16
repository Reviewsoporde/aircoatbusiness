import { Check } from "lucide-react";

/** Compact trust/value bar directly under the hero - short points only. */
export function TrustBar({ points }: { points: string[] }) {
  return (
    <div className="border-b border-ink/5 bg-paper">
      <ul className="mx-auto flex max-w-7xl flex-nowrap items-center justify-start gap-5 overflow-x-auto overscroll-x-contain px-4 py-5 [scrollbar-width:none] sm:px-6 lg:justify-between lg:px-8 [&::-webkit-scrollbar]:hidden">
        {points.map((point) => (
          <li
            key={point}
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-medium text-slate-ink"
          >
            <Check className="size-4 text-azure-deep" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
