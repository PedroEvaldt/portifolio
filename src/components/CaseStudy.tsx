import React from "react";
import type { CaseStudy as CaseStudyData } from "@/types/portfolio";

type CaseStudyProps = {
  caseStudy: CaseStudyData;
};

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  const sectionId = `case-study-${caseStudy.projectSlug}`;
  const titleId = `${sectionId}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className="border-t border-surface-border py-16 lg:py-20"
      id={sectionId}
    >
      <h2 id={titleId} className="text-2xl font-semibold text-slate-50">
        {caseStudy.title}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {caseStudy.sections.map((section) => (
          <article
            className="rounded-lg border border-surface-border bg-surface-raised/90 p-5 shadow-lg shadow-slate-950/20"
            key={section.title}
          >
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-slate-50">
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              {section.items.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
