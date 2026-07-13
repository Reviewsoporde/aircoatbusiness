import type { Locale } from "@/i18n/routing";
import type { Bundle } from "./bundle";
import { nlBundle } from "./nl";
import { enBundle } from "./en";

const bundles: Record<Locale, Bundle> = {
  nl: nlBundle,
  en: enBundle,
};

export function getBundle(locale: Locale): Bundle {
  return bundles[locale];
}

export { serviceParents, type ServiceKey } from "./bundle";
