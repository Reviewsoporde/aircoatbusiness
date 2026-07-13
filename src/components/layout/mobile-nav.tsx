"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mainNav } from "./nav-data";

export function MobileNav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="p-2 text-white lg:hidden"
        aria-label={t("openMenu")}
      >
        <Menu className="size-6" aria-hidden />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm border-steel bg-ink text-white [&>button]:text-white"
      >
        <SheetHeader className="border-b border-steel">
          <SheetTitle className="text-left font-mono text-xs uppercase tracking-[0.18em] text-mist">
            {t("menu")}
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="overflow-y-auto px-4 pb-8">
          <Accordion type="single" collapsible className="border-0">
            {mainNav.map((item) =>
              item.children ? (
                <AccordionItem
                  key={item.labelKey}
                  value={item.labelKey}
                  className="border-steel"
                >
                  <AccordionTrigger className="py-4 text-base font-medium text-white hover:text-azure-bright hover:no-underline [&_svg]:text-mist">
                    {t(item.labelKey)}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    <ul className="space-y-1 border-l border-steel pl-4">
                      <li>
                        <Link
                          href={item.href!}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm font-medium text-azure-bright"
                        >
                          {t(item.labelKey)} →
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-white/80 hover:text-azure-bright"
                          >
                            {t(child.labelKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.labelKey} className="border-b border-steel">
                  <Link
                    href={item.href!}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base font-medium text-white hover:text-azure-bright"
                  >
                    {t(item.labelKey)}
                  </Link>
                </div>
              ),
            )}
          </Accordion>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-azure px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            {t("requestQuote")}
          </Link>
          <a
            href={siteConfig.residentialSite}
            rel="noopener"
            className="mt-4 block text-center text-xs text-mist hover:text-white"
          >
            {t("residential")}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
