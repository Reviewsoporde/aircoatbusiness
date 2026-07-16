"use client";

import { useState } from "react";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

type Props = {
  projects: Project[];
  filters: { value: string; label: string }[];
  allLabel: string;
};

/** Filterable project grid (docs/page-templates.md §6). */
export function ProjectsExplorer({ projects, filters, allLabel }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const published = projects.filter((project) => project.status === "published");

  const visible = active
    ? published.filter((p) => p.filters.includes(active))
    : published;

  // Only offer filters that match at least one project - no dead-end chips.
  const usable = filters.filter((f) =>
    published.some((p) => p.filters.includes(f.value)),
  );

  // Filters only earn their place once the portfolio is big enough to need them.
  if (published.length < 8) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {published.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div role="group" aria-label={allLabel} className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
            active === null
              ? "border-ink bg-ink text-white"
              : "border-ink/15 text-slate-ink hover:border-ink hover:text-ink",
          )}
        >
          {allLabel}
        </button>
        {usable.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              active === f.value
                ? "border-ink bg-ink text-white"
                : "border-ink/15 text-slate-ink hover:border-ink hover:text-ink",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
