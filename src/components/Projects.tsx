import React from "react";
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      aria-labelledby="projects-title"
      className="border-t border-surface-border py-16 lg:py-20"
      id="projects"
    >
      <h2 id="projects-title" className="text-2xl font-semibold text-slate-50">
        Projects
      </h2>
      <div className="mt-6 grid gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
