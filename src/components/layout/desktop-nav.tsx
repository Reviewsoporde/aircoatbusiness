"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { mainNav, type NavItem } from "./nav-data";

const navLinkClasses =
  "relative block rounded-full px-3.5 py-2.5 text-[13px] font-medium tracking-wide text-white/76 transition-[background-color,color] duration-200 hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-bright/70 2xl:px-4";

function itemIsActive(pathname: string, item: NavItem) {
  return (
    pathname === item.href || item.children?.some((child) => child.href === pathname)
  );
}

export function DesktopNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav aria-label={t("menu")} className="hidden xl:block">
      <ul className="flex items-center gap-1 2xl:gap-2">
        {mainNav.map((item) => {
          const active = itemIsActive(pathname, item);
          return (
            <li key={item.labelKey} className="group/navitem relative">
              {item.children ? (
                <>
                  <Link
                    href={item.href!}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      navLinkClasses,
                      "flex items-center gap-1.5",
                      active && "bg-white/10 text-white",
                    )}
                  >
                    {t(item.labelKey)}
                    <ChevronDown
                      className="size-3.5 text-mist transition-transform duration-200 group-hover/navitem:rotate-180 group-focus-within/navitem:rotate-180"
                      aria-hidden
                    />
                  </Link>
                  <div
                    data-nav-dropdown
                    className="invisible absolute left-0 top-full translate-y-2 pt-2 opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover/navitem:visible group-hover/navitem:translate-y-0 group-hover/navitem:opacity-100 group-focus-within/navitem:visible group-focus-within/navitem:translate-y-0 group-focus-within/navitem:opacity-100"
                  >
                    <ul className="nav-dropdown-glass min-w-80 rounded-[24px] p-3">
                      <li className="mb-1 border-b border-white/10 pb-2">
                        <Link
                          href={item.href!}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-azure-bright transition-colors hover:bg-white/10 focus-visible:bg-white/10"
                        >
                          {t(item.labelKey)}
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block min-h-11 rounded-xl px-3.5 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white",
                              pathname === child.href && "bg-white/10 text-white",
                            )}
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
                  aria-current={active ? "page" : undefined}
                  className={cn(navLinkClasses, active && "bg-white/10 text-white")}
                >
                  {t(item.labelKey)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
