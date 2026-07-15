import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "./mobile-nav";
import { LocaleSwitcher } from "./locale-switcher";
import { PhoneLink } from "./phone-link";
import { HeaderScrollFx } from "./header-scroll-fx";
import { HeaderNavFx } from "./header-nav-fx";
import { DesktopNav } from "./desktop-nav";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header
      id="site-header"
      className="site-header-glass group fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow] duration-300"
    >
      <HeaderScrollFx targetId="site-header" />
      <HeaderNavFx targetId="site-header" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-300 group-data-[scrolled]:h-18 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Airco@Business home">
          <Image
            src="/images/logo.png"
            alt="Airco@Business"
            width={224}
            height={71}
            priority
            className="h-14 w-auto transition-[height] duration-300 group-data-[scrolled]:h-12 xl:h-16 xl:group-data-[scrolled]:h-14"
          />
        </Link>

        <DesktopNav />

        <div className="flex shrink-0 items-center gap-2">
          <PhoneLink
            className="hidden size-10 items-center justify-center rounded-full bg-white/8 text-white/80 transition-colors hover:bg-white/14 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70 2xl:inline-flex"
            phone={siteConfig.phone}
          >
            <Phone className="size-4" aria-hidden />
            <span className="sr-only">{siteConfig.phoneDisplay}</span>
          </PhoneLink>
          <a
            href={siteConfig.residentialSite}
            rel="noopener"
            aria-label={t("residential")}
            title={t("residential")}
            className="hidden rounded-full px-3 py-2 text-xs font-medium text-white/65 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70 xl:inline-flex"
          >
            Airco@home
          </a>
          <Link
            href="/contact"
            className="hidden min-h-11 whitespace-nowrap rounded-full bg-azure px-4 py-3 text-xs font-semibold text-ink shadow-[0_12px_30px_-14px_rgb(0_147_203/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-bright active:translate-y-0 active:scale-[0.98] group-data-[past-hero]:inline-flex sm:inline-flex sm:px-5 sm:text-sm"
          >
            {t("requestQuote")}
          </Link>
          <div className="ml-1 hidden items-center border-l border-white/12 pl-3 xl:flex">
            <LocaleSwitcher />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
