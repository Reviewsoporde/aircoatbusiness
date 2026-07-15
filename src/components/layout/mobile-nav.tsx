"use client";

import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
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
import { LocaleSwitcher } from "./locale-switcher";
import { PhoneLink } from "./phone-link";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="rounded-full bg-white/8 p-2.5 text-white transition-colors hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70 xl:hidden"
        aria-label={t("openMenu")}
      >
        <Menu className="size-6" aria-hidden />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm rounded-l-3xl border-0 bg-ink/96 text-white shadow-[-28px_0_80px_-36px_rgb(0_20_30/0.9)] backdrop-blur-2xl [&>button]:rounded-full [&>button]:p-2 [&>button]:text-white"
      >
        <SheetHeader className="flex-row items-center justify-between px-6 pt-6 pr-16 pb-2">
          <SheetTitle className="eyebrow text-left text-mist">
            {t("menu")}
          </SheetTitle>
          <LocaleSwitcher />
        </SheetHeader>
        <nav aria-label="Mobile" className="overflow-y-auto px-4 pb-6">
          <Accordion type="single" collapsible className="space-y-1 border-0">
            {mainNav.map((item) =>
              item.children ? (
                <AccordionItem
                  key={item.labelKey}
                  value={item.labelKey}
                  className="border-0"
                >
                  <AccordionTrigger className="rounded-xl px-4 py-3.5 text-base font-medium text-white hover:bg-white/8 hover:text-white hover:no-underline focus-visible:ring-2 focus-visible:ring-azure-bright/70 [&_svg]:text-mist">
                    {t(item.labelKey)}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <ul className="space-y-1 rounded-2xl bg-white/[0.05] p-2">
                      <li>
                        <Link
                          href={item.href!}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className={cn(
                            "block min-h-11 rounded-xl px-3 py-2.5 text-sm font-medium text-azure-bright hover:bg-white/8",
                            pathname === item.href && "bg-white/8",
                          )}
                        >
                          {t(item.labelKey)} →
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block min-h-11 rounded-xl px-3 py-2.5 text-sm text-white/75 hover:bg-white/8 hover:text-white",
                              pathname === child.href && "bg-white/8 text-white",
                            )}
                          >
                            {t(child.labelKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.labelKey}>
                  <Link
                    href={item.href!}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "block min-h-11 rounded-xl px-4 py-3.5 text-base font-medium text-white hover:bg-white/8",
                      pathname === item.href && "bg-white/8",
                    )}
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
            className="mt-5 block rounded-full bg-azure px-5 py-3.5 text-center text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-azure-bright active:translate-y-0 active:scale-[0.98]"
          >
            {t("requestQuote")}
          </Link>
          <PhoneLink
            phone={siteConfig.phone}
            className="mt-3 flex items-center justify-center gap-2.5 rounded-full bg-white/8 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/14"
          >
            <Phone className="size-4 text-azure-bright" aria-hidden />
            {siteConfig.phoneDisplay}
          </PhoneLink>
          <a
            href={siteConfig.residentialSite}
            rel="noopener"
            className="mt-4 block rounded-full px-4 py-2 text-center text-xs text-mist hover:bg-white/8 hover:text-white"
          >
            {t("residential")}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
