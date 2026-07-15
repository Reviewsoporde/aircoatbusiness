import type { Metadata } from "next";
import type { AppPathname, Locale } from "@/i18n/routing";
import { localePath } from "./urls";

/**
 * Uniform per-page metadata: unique title/description, canonical and
 * hreflang alternates (nl / en / x-default → nl). Resolves against
 * metadataBase set in the locale layout.
 */
export function pageMetadata(
  locale: Locale,
  href: AppPathname,
  meta: { title: string; description: string },
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(locale, href),
      languages: {
        nl: localePath("nl", href),
        en: localePath("en", href),
        "x-default": localePath("nl", href),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(locale, href),
      siteName: "Airco@Business",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/generated/airco-business-social.webp",
          width: 1200,
          height: 630,
          alt: "Airco@Business commercial climate solutions",
        },
      ],
    },
  };
}
