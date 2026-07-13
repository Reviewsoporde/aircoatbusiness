import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/content/types";

/**
 * Visible FAQ accordion. Pages that render this may also emit FAQPage JSON-LD —
 * schema is only allowed when the FAQ is visible (docs/seo-strategy.md §5).
 */
export function FaqSection({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-ink hover:text-azure-deep hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-ink sm:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
