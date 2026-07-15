import { useTranslations } from "next-intl";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/layout/phone-link";

/** Compact NAP card beside the lead form — phone-first, response-speed promise. */
export function ContactAside() {
  const t = useTranslations("contactAside");

  return (
    <aside className="grain glow-azure relative isolate h-fit overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-9">
      <p className="eyebrow mb-6 flex items-center gap-3 text-azure-bright">
        <span aria-hidden className="size-1.5 rounded-full bg-azure-bright" />
        {t("title")}
      </p>
      <p className="text-sm leading-relaxed text-mist">{t("responsePromise")}</p>
      <ul className="mt-8 space-y-5 text-sm">
        <li>
          <PhoneLink
            phone={siteConfig.phone}
            className="flex items-center gap-3.5 font-semibold text-white transition-colors hover:text-azure-bright"
          >
            <Phone className="size-4 text-azure-bright" aria-hidden />
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </li>
        <li>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3.5 font-semibold text-white transition-colors hover:text-azure-bright"
          >
            <Mail className="size-4 text-azure-bright" aria-hidden />
            {siteConfig.email}
          </a>
        </li>
        <li className="flex items-center gap-3.5 text-mist">
          <MapPin className="size-4 text-azure-bright" aria-hidden />
          {siteConfig.address.street}, {siteConfig.address.city}
        </li>
        <li className="flex items-center gap-3.5 text-mist">
          <Clock className="size-4 text-azure-bright" aria-hidden />
          {t("hours")}
        </li>
      </ul>
    </aside>
  );
}
