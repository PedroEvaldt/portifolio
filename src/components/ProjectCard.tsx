import React from "react";
import type { Project } from "@/types/portfolio";
import { ExternalLink } from "@/components/ExternalLink";

type ProjectCardProps = {
  project: Project;
};

const linkClassName =
  "rounded-md border border-surface-border px-3 py-1.5 text-sm font-medium text-slate-100 transition-colors hover:border-accent-blue";
const unavailableLinkClassName =
  "rounded-md border border-surface-border border-dashed px-3 py-1.5 text-sm text-slate-400";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-surface-border bg-surface-raised/90 p-5 shadow-lg shadow-slate-950/20 transition-colors hover:border-slate-600">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-50">
            {project.title}
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            {project.description}
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-wide text-accent-green">
          {project.slug}
        </span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
        {project.technologies.map((technology) => (
          <li
            className="rounded-md border border-surface-border bg-surface-base/60 px-2.5 py-1"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
        {project.highlights.map((highlight) => (
          <li className="flex gap-2" key={highlight}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <ExternalLink
          className={linkClassName}
          fallbackClassName={unavailableLinkClassName}
          link={project.links.github}
        />
        {project.links.details.href !== "#projects" && (
          <a className={linkClassName} href={project.links.details.href}>
            {project.links.details.label}
          </a>
        )}
      </div>
    </article>
  );
}
