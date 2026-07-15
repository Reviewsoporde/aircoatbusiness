"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_CONSENT_EVENT,
  saveAnalyticsConsent,
  type AnalyticsConsentValue,
} from "@/lib/analytics-consent";

export function AnalyticsConsent({ gaId }: { gaId?: string }) {
  const t = useTranslations("consent");
  const choice = useSyncExternalStore<AnalyticsConsentValue | "unknown" | null>(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener(ANALYTICS_CONSENT_EVENT, onStoreChange);
      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener(ANALYTICS_CONSENT_EVENT, onStoreChange);
      };
    },
    () => {
      const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      return stored === "accepted" || stored === "rejected" ? stored : "unknown";
    },
    () => null,
  );

  if (!gaId) return null;

  function choose(value: AnalyticsConsentValue) {
    saveAnalyticsConsent(value);
  }

  return (
    <>
      {choice === "accepted" ? <GoogleAnalytics gaId={gaId} /> : null}
      {choice === "unknown" ? (
        <aside
          aria-label={t("title")}
          className="fixed right-3 bottom-3 left-3 z-[90] mx-auto max-w-3xl rounded-[24px] border border-white/12 bg-carbon/98 p-5 text-white shadow-panel sm:right-6 sm:bottom-6 sm:left-auto sm:p-6"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-base font-semibold">{t("title")}</h2>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-white/70">
                {t("body")} {" "}
                <Link
                  href="/cookiebeleid"
                  className="underline decoration-white/40 underline-offset-4 hover:decoration-azure-bright"
                >
                  {t("details")}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="min-h-11 rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/8"
              >
                {t("reject")}
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="min-h-11 rounded-full bg-azure px-5 text-sm font-semibold text-ink transition-colors hover:bg-azure-bright"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}
