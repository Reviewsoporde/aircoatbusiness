"use client";

import { useTranslations } from "next-intl";
import { clearAnalyticsConsent } from "@/lib/analytics-consent";

export function ConsentSettingsButton() {
  const t = useTranslations("consent");

  if (!process.env.NEXT_PUBLIC_GA_ID) return null;

  return (
    <button
      type="button"
      onClick={clearAnalyticsConsent}
      className="min-h-11 text-left text-xs text-mist transition-colors hover:text-white"
    >
      {t("settings")}
    </button>
  );
}
