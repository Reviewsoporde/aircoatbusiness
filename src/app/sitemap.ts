import type { MetadataRoute } from "next";
import { routing, type AppPathname } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/urls";

// Legal pages are noindex and stay out of the sitemap.
const EXCLUDED: AppPathname[] = ["/privacybeleid", "/cookiebeleid"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pathnames = (
    Object.keys(routing.pathnames) as AppPathname[]
  ).filter((p) => !EXCLUDED.includes(p));

  const lastModified = new Date();

  return pathnames.flatMap((href) => {
    const languages = {
      nl: absoluteUrl("nl", href),
      en: absoluteUrl("en", href),
      "x-default": absoluteUrl("nl", href),
    };

    return routing.locales.map((locale) => ({
      url: absoluteUrl(locale, href),
      lastModified,
      changeFrequency: href === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: href === "/" ? 1 : href === "/contact" ? 0.9 : 0.8,
      alternates: { languages },
    }));
  });
}
