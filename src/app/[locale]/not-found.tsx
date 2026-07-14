import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="grain glow-azure relative isolate overflow-hidden bg-ink py-32 text-white lg:py-40">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-mono text-7xl tabular-nums text-azure-bright">404</p>
        <h1 className="font-display mt-8 text-3xl font-medium text-balance sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-5 leading-relaxed text-mist">{t("description")}</p>
        <Link
          href="/"
          className="mt-12 inline-block bg-azure px-7 py-4 font-mono text-xs font-semibold tracking-[0.14em] text-ink uppercase transition-all duration-300 hover:bg-azure-bright active:scale-[0.98]"
        >
          {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
