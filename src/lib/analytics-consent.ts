export const ANALYTICS_CONSENT_KEY = "airco-analytics-consent";
export const ANALYTICS_CONSENT_EVENT = "airco-analytics-consent-change";

export type AnalyticsConsentValue = "accepted" | "rejected";

export function analyticsAllowed() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted";
}

export function saveAnalyticsConsent(value: AnalyticsConsentValue) {
  window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  window.dispatchEvent(
    new CustomEvent<AnalyticsConsentValue>(ANALYTICS_CONSENT_EVENT, {
      detail: value,
    }),
  );
}

export function clearAnalyticsConsent() {
  window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT));
}
