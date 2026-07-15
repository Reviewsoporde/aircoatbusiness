import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import type { CtaKey } from "@/content/types";
import { cn } from "@/lib/utils";

type Variant = "azure" | "ink" | "outline-dark" | "outline-light";

const variantClasses: Record<Variant, string> = {
  azure:
    "bg-azure text-ink shadow-[0_12px_32px_-12px_rgb(0_147_203/0.55)] hover:bg-azure-bright hover:shadow-[0_16px_40px_-12px_rgb(47_177_227/0.6)]",
  ink: "bg-ink text-white hover:bg-steel",
  "outline-dark":
    "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
  "outline-light":
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
};

type Props = {
  href?: AppPathname;
  /** Same-page anchor (e.g. "#offerte") — takes precedence over href */
  anchor?: `#${string}`;
  ctaKey?: CtaKey;
  label?: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

/** Button-styled internal link. Label comes from a fixed CTA key or plain text. */
export function CtaLink({
  href = "/contact",
  anchor,
  ctaKey,
  label,
  variant = "azure",
  className,
  arrow = false,
}: Props) {
  const t = useTranslations("common");
  const classes = cn(
    "group/cta inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    variantClasses[variant],
    className,
  );
  const content = (
    <>
      {ctaKey ? t(ctaKey) : label}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (anchor) {
    return (
      <a href={anchor} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
