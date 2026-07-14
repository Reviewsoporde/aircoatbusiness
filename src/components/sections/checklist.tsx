import { Check } from "lucide-react";
import { Reveal } from "./reveal";

/** Scope / technical-fit checklist — 4–6 items per docs/page-templates.md §3.4 */
export function Checklist({ items }: { items: string[] }) {
  return (
    <Reveal group as="ul" className="grid gap-x-12 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 border-t border-ink/10 py-5"
        >
          <Check className="mt-0.5 size-4 shrink-0 text-azure-deep" aria-hidden />
          <span className="text-sm leading-relaxed text-ink sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </Reveal>
  );
}
