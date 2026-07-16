import type { Step } from "@/content/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = { steps: Step[]; variant?: "light" | "dark" };

/**
 * Numbered process - numbering is semantic here: the client journey is a real
 * sequence (consultation → assessment → proposal → installation → aftercare).
 * Open columns over hairline rules; friendly circular step markers.
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
          className={cn(
            "group relative border-t pt-6 transition-[transform,border-color] duration-300 ease-[var(--ease-out-quart)] before:absolute before:-top-px before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-azure before:transition-transform before:duration-500 before:ease-[var(--ease-out-quart)] hover:-translate-y-1.5 hover:border-transparent hover:before:scale-x-100",
            dark ? "border-white/15" : "border-ink/15",
          )}
        >
          <p
            className={cn(
              "flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-[transform,background-color,color,box-shadow] duration-300 ease-[var(--ease-out-quart)] group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-azure group-hover:text-ink group-hover:shadow-[0_12px_28px_-12px_rgb(0_147_203_/_0.8)]",
              dark
                ? "bg-white/10 text-azure-bright"
                : "bg-accent text-azure-deep",
            )}
          >
            {i + 1}
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
