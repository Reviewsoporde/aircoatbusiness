import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { RelatedLink } from "@/content/types";
import { Reveal } from "./reveal";

/**
 * Related services — 3–4 descriptive links per docs/site-architecture.md §4.
 * Anchor text mirrors the destination page (never "lees meer").
 */
export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <Reveal group as="ul" className="grid gap-x-12 sm:grid-cols-2">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="group flex h-full flex-col border-t border-ink/15 py-6"
          >
            <span className="font-display flex items-baseline justify-between gap-4 text-xl font-medium text-ink transition-colors duration-300 group-hover:text-azure-deep">
              {link.label}
              <ArrowRight
                className="size-4 shrink-0 self-center text-azure-deep transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden
              />
            </span>
            <span className="mt-2.5 text-sm leading-relaxed text-slate-ink">
              {link.description}
            </span>
          </Link>
        </li>
      ))}
    </Reveal>
  );
}
