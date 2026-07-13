import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/types";

/**
 * Project proof card: type, location, system, summary (docs/page-templates.md §6).
 * Projects without client photography yet get a typographic placeholder block —
 * never a stock photo posing as the real project.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden border border-border bg-white">
      {project.image ? (
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="airflow-lines flex aspect-[16/10] items-end bg-ink p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-mist">
            {project.system}
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-azure-deep">
          {project.type} · {project.location}
        </p>
        <h3 className="mt-3 font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-xs tracking-wide text-slate-ink">
          {project.system}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-ink">
          {project.summary}
        </p>
        <Link
          href={project.serviceHref}
          className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-azure-deep hover:text-ink"
        >
          {project.serviceLinkLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
