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

  const visible = active
    ? projects.filter((p) => p.filters.includes(active))
    : projects;

  // Only offer filters that match at least one project — no dead-end chips.
  const usable = filters.filter((f) =>
    projects.some((p) => p.filters.includes(f.value)),
  );

  return (
    <div>
      <div role="group" aria-label={allLabel} className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={cn(
            "border px-4 py-2 font-mono text-xs tracking-wider transition-colors",
            active === null
              ? "border-ink bg-ink text-white"
              : "border-input text-slate-ink hover:border-ink hover:text-ink",
          )}
        >
          {allLabel.toUpperCase()}
        </button>
        {usable.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={cn(
              "border px-4 py-2 font-mono text-xs tracking-wider transition-colors",
              active === f.value
                ? "border-ink bg-ink text-white"
                : "border-input text-slate-ink hover:border-ink hover:text-ink",
            )}
          >
            {f.label.toUpperCase()}
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
