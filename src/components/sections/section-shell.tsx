import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

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
 * Shared section wrapper: mono eyebrow + rule, serif display H2 on the left,
 * intro set apart in the right column (editorial asymmetry). Keeps heading
 * hierarchy and section rhythm identical across all pages.
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
        variant === "dark" && "grain isolate overflow-hidden bg-ink text-white",
        variant === "paper" && "bg-paper",
        variant === "light" && "bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {(eyebrow || h2) && (
          <Reveal className="mb-14 grid gap-x-12 gap-y-6 lg:mb-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              {eyebrow && (
                <p
                  className={cn(
                    "eyebrow mb-5 flex items-center gap-3",
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
                    "font-display text-4xl font-medium leading-[1.08] text-balance sm:text-5xl",
                    dark ? "text-white" : "text-ink",
                  )}
                >
                  {h2}
                </h2>
              )}
            </div>
            {intro && (
              <p
                className={cn(
                  "max-w-xl text-base leading-relaxed lg:col-span-4 lg:col-start-9 lg:mb-1.5",
                  dark ? "text-mist" : "text-slate-ink",
                )}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
