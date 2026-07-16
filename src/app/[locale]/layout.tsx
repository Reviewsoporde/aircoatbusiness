import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SiteSchema } from "@/components/seo/site-schema";
import { AnalyticsConsent } from "@/components/analytics-consent";
import "../globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aircoatbusiness.nl"),
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const tA11y = await getTranslations({ locale, namespace: "accessibility" });

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${fraunces.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>
          <a
            href="#main-content"
            className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-azure-bright px-5 py-3 text-sm font-semibold text-ink shadow-panel transition-transform focus:translate-y-0"
          >
            {tA11y("skipToContent")}
          </a>
          <div
            id="header-scroll-sentinel"
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-4"
          />
          <Header />
          <main id="main-content" tabIndex={-1} className="site-main flex-1">
            {children}
          </main>
          <Footer />
          <AnalyticsConsent gaId={gaId} />
        </NextIntlClientProvider>
        <SiteSchema />
      </body>
    </html>
  );
}
