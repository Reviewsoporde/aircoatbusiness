import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { mainNav } from "./nav-data";
import { MobileNav } from "./mobile-nav";
import { LocaleSwitcher } from "./locale-switcher";
import { PhoneLink } from "./phone-link";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      {/* Utility bar */}
      <div className="border-b border-steel/60">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <PhoneLink
            className="font-mono text-xs tracking-wide text-mist transition-colors hover:text-white"
            phone={siteConfig.phone}
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.residentialSite}
              rel="noopener"
              className="hidden text-xs text-mist transition-colors hover:text-white sm:block"
            >
              {t("residential")}
            </a>
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-steel">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="Airco@Business — home">
            <Image
              src="/images/logo.png"
              alt="Airco@Business"
              width={168}
              height={53}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.labelKey} className="group relative">
                  {item.children ? (
                    <>
                      <Link
                        href={item.href!}
                        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-azure-bright focus-visible:text-azure-bright"
                      >
                        {t(item.labelKey)}
                        <ChevronDown
                          className="size-3.5 text-mist transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                          aria-hidden
                        />
                      </Link>
                      <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="min-w-64 border border-steel bg-carbon py-2 shadow-2xl shadow-black/50">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-ink hover:text-azure-bright focus-visible:bg-ink focus-visible:text-azure-bright"
                              >
                                {t(child.labelKey)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-azure-bright focus-visible:text-azure-bright"
                    >
                      {t(item.labelKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden bg-azure px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-azure-bright focus-visible:bg-azure-bright sm:block"
            >
              {t("requestQuote")}
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
