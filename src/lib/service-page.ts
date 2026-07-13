import { createElement } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing, type AppPathname } from "@/i18n/routing";
import { getBundle, serviceParents, type ServiceKey } from "@/content";
import { pageMetadata } from "./metadata";
import { ServicePageTemplate } from "@/components/templates/service-page-template";

type Params = { params: Promise<{ locale: string }> };

/**
 * Factory for the 14 service-page routes: resolves locale + content bundle,
 * wires breadcrumb parent, and renders the universal 7-section template.
 */
export function createServicePage(key: ServiceKey) {
  const pathname = `/${key}` as AppPathname;

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    return pageMetadata(locale, pathname, getBundle(locale).services[key].meta);
  }

  async function Page({ params }: Params) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);

    const bundle = getBundle(locale);
    const parentKey = serviceParents[key];
    const parent = parentKey
      ? {
          name: bundle.services[parentKey].name,
          href: `/${parentKey}` as AppPathname,
        }
      : undefined;

    return createElement(ServicePageTemplate, {
      content: bundle.services[key],
      pathname,
      locale,
      parent,
    });
  }

  return { generateMetadata, Page };
}
