import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { mainNav } from "./nav-data";
import { MobileNav } from "./mobile-nav";
import { LocaleSwitcher } from "./locale-switcher";
import { PhoneLink } from "./phone-link";

const navLinkClasses =
  "relative block px-3 py-2 text-[13px] font-medium tracking-wide text-white/80 transition-colors duration-200 hover:text-white focus-visible:text-white after:absolute after:inset-x-3 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-azure-bright after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-ink/90 text-white backdrop-blur-xl">
      {/* Utility bar */}
      <div className="border-b border-white/8">
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
      <div className="border-b border-white/8">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="Airco@Business — home">
            <Image
              src="/images/logo.png"
              alt="Airco@Business"
              width={168}
              height={53}
              priority
              className="h-12 w-auto"
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
                        className={`${navLinkClasses} flex items-center gap-1.5`}
                      >
                        {t(item.labelKey)}
                        <ChevronDown
                          className="size-3.5 text-mist transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                          aria-hidden
                        />
                      </Link>
                      <div className="invisible absolute left-0 top-full translate-y-1 pt-1.5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <ul className="min-w-68 border border-white/10 bg-carbon/95 py-2.5 shadow-panel backdrop-blur-xl">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-5 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white"
                              >
                                {t(child.labelKey)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href!} className={navLinkClasses}>
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
              className="hidden bg-azure px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-ink uppercase transition-all duration-300 hover:bg-azure-bright active:scale-[0.98] sm:block"
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
