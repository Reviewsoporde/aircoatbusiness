import type { Step } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = { steps: Step[]; variant?: "light" | "dark" };

/**
 * Numbered process — numbering is semantic here: the client journey is a real
 * sequence (consultation → assessment → proposal → installation → aftercare).
 * Open columns over hairline rules; no boxes.
 */
export function ProcessSteps({ steps, variant = "dark" }: Props) {
  const dark = variant === "dark";
  return (
    <Reveal
      group
      as="ol"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 [&:has(>:nth-child(5))]:lg:grid-cols-5"
    >
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cn("border-t pt-6", dark ? "border-white/15" : "border-ink/15")}
        >
          <p
            className={cn(
              "font-mono text-sm tracking-[0.18em]",
              dark ? "text-azure-bright" : "text-azure-deep",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3
            className={cn(
              "font-display mt-6 text-xl font-medium",
              dark ? "text-white" : "text-ink",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed",
              dark ? "text-mist" : "text-slate-ink",
            )}
          >
            {step.description}
          </p>
        </li>
      ))}
    </Reveal>
  );
}
