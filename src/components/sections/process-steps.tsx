import type { Step } from "@/content/types";
import { cn } from "@/lib/utils";

type Props = { steps: Step[]; variant?: "light" | "dark" };

/**
 * Numbered process — numbering is semantic here: the client journey is a real
 * sequence (consultation → assessment → proposal → installation → aftercare).
 */
export function ProcessSteps({ steps, variant = "dark" }: Props) {
  const dark = variant === "dark";
  return (
    <ol className="grid gap-px overflow-hidden border border-steel bg-steel sm:grid-cols-2 lg:grid-cols-4 [&:has(>:nth-child(5))]:lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cn("p-6 lg:p-7", dark ? "bg-carbon" : "bg-white")}
        >
          <p
            className={cn(
              "font-mono text-xs tracking-[0.18em]",
              dark ? "text-azure-bright" : "text-azure-deep",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3
            className={cn(
              "mt-4 font-display text-base font-semibold",
              dark ? "text-white" : "text-ink",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-2.5 text-sm leading-relaxed",
              dark ? "text-mist" : "text-slate-ink",
            )}
          >
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
