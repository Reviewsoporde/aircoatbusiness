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
 * Shared section wrapper: friendly eyebrow + azure dot, soft serif H2 on the
 * left, intro set apart in the right column (editorial asymmetry). Keeps
 * heading hierarchy and section rhythm identical across all pages.
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
        variant === "dark" && "isolate overflow-hidden bg-ink text-white",
        variant === "paper" && "bg-paper",
        variant === "light" && "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        {(eyebrow || h2) && (
          <Reveal className="mb-14 max-w-4xl lg:mb-20">
            <div>
              {eyebrow && (
                <p
                  className={cn(
                    "eyebrow mb-5",
                    dark ? "text-azure-bright" : "text-azure-deep",
                  )}
                >
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
                  "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
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
