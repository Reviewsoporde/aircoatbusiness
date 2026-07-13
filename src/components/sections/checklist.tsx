import { Check } from "lucide-react";

/** Scope / technical-fit checklist — 4–6 items per docs/page-templates.md §3.4 */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 border border-border bg-white p-5"
        >
          <span
            aria-hidden
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-azure/10"
          >
            <Check className="size-3.5 text-azure-deep" />
          </span>
          <span className="text-sm leading-relaxed text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}
