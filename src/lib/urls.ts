import { getPathname } from "@/i18n/navigation";
import type { AppPathname, Locale } from "@/i18n/routing";
import { siteConfig } from "./site-config";

/** Absolute, trailing-slashed URL for a route in a given locale. */
export function absoluteUrl(locale: Locale, href: AppPathname): string {
  const path = getPathname({ locale, href });
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${siteConfig.domain}${withSlash}`;
}

/** Path (no domain) with trailing slash - for canonical/hreflang metadata. */
export function localePath(locale: Locale, href: AppPathname): string {
  const path = getPathname({ locale, href });
  return path.endsWith("/") ? path : `${path}/`;
}
