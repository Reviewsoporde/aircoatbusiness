import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getBundle } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { HomeTemplate } from "@/components/templates/home-template";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return pageMetadata(locale, "/", getBundle(locale).home.meta);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const bundle = getBundle(locale);

  return (
    <HomeTemplate
      content={bundle.home}
      featuredProjects={bundle.projects
        .filter((project) => project.status === "published")
        .slice(0, 3)}
      locale={locale}
    />
  );
}
