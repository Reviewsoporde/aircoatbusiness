import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  h2?: string;
  intro?: string;
  variant?: "light" | "paper" | "dark";
  id?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Shared section wrapper: mono eyebrow + rule, display H2, optional intro.
 * Keeps heading hierarchy and section rhythm identical across all pages.
 */
export function Section({
  eyebrow,
  h2,
  intro,
  variant = "light",
  id,
  children,
  className,
}: Props) {
  const dark = variant === "dark";
  return (
    <section
      id={id}
      className={cn(
        variant === "dark" && "airflow-lines bg-ink text-white",
        variant === "paper" && "bg-paper",
        variant === "light" && "bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {(eyebrow || h2) && (
          <div className="mb-12 max-w-3xl lg:mb-16">
            {eyebrow && (
              <p
                className={cn(
                  "eyebrow mb-4 flex items-center gap-3",
                  dark ? "text-azure-bright" : "text-azure-deep",
                )}
              >
                <span
                  aria-hidden
                  className={cn("h-px w-8", dark ? "bg-azure-bright" : "bg-azure-deep")}
                />
                {eyebrow}
              </p>
            )}
            {h2 && (
              <h2
                className={cn(
                  "font-display text-3xl font-semibold leading-tight sm:text-4xl",
                  dark ? "text-white" : "text-ink",
                )}
              >
                {h2}
              </h2>
            )}
            {intro && (
              <p
                className={cn(
                  "mt-5 text-base leading-relaxed sm:text-lg",
                  dark ? "text-mist" : "text-slate-ink",
                )}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
