import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PhoneLink } from "@/components/layout/phone-link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  const t = useTranslations("notFound");
  const tNav = useTranslations("nav");

  return (
    <section className="grain glow-azure relative isolate overflow-hidden bg-ink py-20 text-white lg:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-display text-7xl font-medium text-azure-bright">404</p>
        <h1 className="font-display mt-8 text-3xl font-medium text-balance sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-5 leading-relaxed text-mist">{t("description")}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full bg-azure px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-bright"
          >
            {t("backHome")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/8"
          >
            {tNav("contact")}
          </Link>
          <PhoneLink
            phone={siteConfig.phone}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/8"
          >
            <Phone className="size-4 text-azure-bright" aria-hidden />
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>
        <nav aria-label={t("serviceLinks")} className="mt-12 border-t border-white/10 pt-8">
          <ul className="grid gap-2 sm:grid-cols-3">
            {[
              { href: "/zakelijke-airconditioning" as const, label: tNav("businessAC") },
              { href: "/installatie" as const, label: tNav("installation") },
              { href: "/onderhoud" as const, label: tNav("maintenance") },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-11 items-center justify-center rounded-xl text-sm text-mist hover:bg-white/8 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
