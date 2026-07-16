import type { Metadata } from "next";
import type { AppPathname, Locale } from "@/i18n/routing";
import { localePath } from "./urls";

const SOCIAL_IMAGE = "/images/generated/airco-business-social.webp";

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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
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
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt:
            locale === "nl"
              ? "Airco@Business zakelijke klimaatoplossingen"
              : "Airco@Business commercial climate solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [SOCIAL_IMAGE],
    },
  };
}
