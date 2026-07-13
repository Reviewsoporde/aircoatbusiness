import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import type { CtaKey } from "@/content/types";
import { cn } from "@/lib/utils";

type Variant = "azure" | "ink" | "outline-dark" | "outline-light";

const variantClasses: Record<Variant, string> = {
  azure: "bg-azure text-ink hover:bg-azure-bright",
  ink: "bg-ink text-white hover:bg-carbon",
  "outline-dark":
    "border border-steel text-white hover:border-azure-bright hover:text-azure-bright",
  "outline-light":
    "border border-input text-ink hover:border-azure-deep hover:text-azure-deep",
};

type Props = {
  href?: AppPathname;
  ctaKey?: CtaKey;
  label?: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

/** Button-styled internal link. Label comes from a fixed CTA key or plain text. */
export function CtaLink({
  href = "/contact",
  ctaKey,
  label,
  variant = "azure",
  className,
  arrow = false,
}: Props) {
  const t = useTranslations("common");
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {ctaKey ? t(ctaKey) : label}
      {arrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
