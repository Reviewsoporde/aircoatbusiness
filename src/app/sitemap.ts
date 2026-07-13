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

  return pathnames.map((href) => ({
    url: absoluteUrl("nl", href),
    lastModified,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href === "/contact" ? 0.9 : 0.8,
    alternates: {
      languages: {
        nl: absoluteUrl("nl", href),
        en: absoluteUrl("en", href),
      },
    },
  }));
}
