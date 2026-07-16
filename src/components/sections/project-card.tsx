import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/types";

/**
 * Project proof card: type, location, system, summary (docs/page-templates.md §6).
 * Projects without client photography yet get a typographic placeholder block -
 * never a stock photo posing as the real project.
 */
export function ProjectCard({ project }: { project: Project }) {
  if (project.status !== "published") return null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-steel/12 bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-azure/35 hover:shadow-card-hover">
      {project.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-ink sm:aspect-[4/3]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: project.image.position }}
          />
        </div>
      ) : (
        <div className="grain glow-azure-low relative isolate flex aspect-[16/10] items-end bg-ink p-6 sm:aspect-[4/3]">
          <p className="eyebrow text-mist">{project.system}</p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow text-azure-deep">
          {project.type} · {project.location}
        </p>
        <h3 className="font-display mt-4 text-xl leading-snug font-medium text-ink">
          {project.title}
        </h3>
        <p className="mt-2.5 text-xs font-medium text-slate-ink">
          {project.system}
        </p>
        <p className="mt-3.5 flex-1 text-sm leading-relaxed text-slate-ink">
          {project.summary}
        </p>
        <Link
          href={project.serviceHref}
          className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-azure-deep transition-colors hover:text-ink"
        >
          {project.serviceLinkLabel}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
