import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="airflow-lines bg-ink py-28 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-mono text-6xl font-medium text-azure-bright">404</p>
        <h1 className="font-display mt-6 text-3xl font-semibold">{t("title")}</h1>
        <p className="mt-4 text-mist">{t("description")}</p>
        <Link
          href="/"
          className="mt-10 inline-block bg-azure px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-azure-bright"
        >
          {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
