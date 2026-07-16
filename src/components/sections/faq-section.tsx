import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/content/types";

/**
 * Visible FAQ accordion. Pages that render this may also emit FAQPage JSON-LD -
 * schema is only allowed when the FAQ is visible (docs/seo-strategy.md §5).
 */
export function FaqSection({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-ink/10">
      {items.map((item) => (
        <AccordionItem
          key={item.question}
          value={item.question}
          className="border-ink/10"
        >
          <AccordionTrigger className="font-display py-6 text-left text-lg leading-snug font-medium text-ink transition-colors hover:text-azure-deep hover:no-underline sm:text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-7 text-sm leading-relaxed text-slate-ink sm:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
