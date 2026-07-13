"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center gap-0.5 font-mono text-xs"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          aria-current={l === locale ? "true" : undefined}
          onClick={() => {
            if (l !== locale) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              router.replace(pathname as any, { locale: l as Locale });
            }
          }}
          className={cn(
            "px-1.5 py-0.5 uppercase tracking-wider transition-colors",
            l === locale
              ? "bg-steel text-white"
              : "text-mist hover:text-white",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
