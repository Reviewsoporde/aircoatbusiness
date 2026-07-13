import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { RelatedLink } from "@/content/types";

/**
 * Related services — 3–4 descriptive links per docs/site-architecture.md §4.
 * Anchor text mirrors the destination page (never "lees meer").
 */
export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="group flex h-full flex-col border border-border bg-white p-5 transition-colors hover:border-azure-deep/60"
          >
            <span className="flex items-center justify-between gap-3 font-display text-base font-semibold text-ink group-hover:text-azure-deep">
              {link.label}
              <ArrowRight
                className="size-4 shrink-0 text-azure-deep transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </span>
            <span className="mt-2 text-sm leading-relaxed text-slate-ink">
              {link.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
