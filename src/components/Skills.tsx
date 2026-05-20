import React from "react";
import type { SkillCategory } from "@/types/portfolio";

type SkillsProps = {
  skills: SkillCategory[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section
      aria-labelledby="skills-title"
      className="border-t border-surface-border py-16 lg:py-20"
      id="skills"
    >
      <h2 id="skills-title" className="text-2xl font-semibold text-slate-50">
        Skills
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skills.map((category) => (
          <article
            className="rounded-lg border border-surface-border bg-surface-raised/90 p-5 shadow-lg shadow-slate-950/20 transition-colors hover:border-slate-600"
            key={category.title}
          >
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-slate-50">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              {category.items.map((item) => (
                <li
                  className="rounded-md border border-surface-border bg-surface-base/60 px-2.5 py-1"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
