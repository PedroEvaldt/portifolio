import React from "react";
import type { EducationData } from "@/types/portfolio";

type EducationProps = {
  education: EducationData;
};

export function Education({ education }: EducationProps) {
  return (
    <section
      aria-labelledby="education-title"
      className="border-t border-surface-border py-16 lg:py-20"
      id="education"
    >
      <h2 id="education-title" className="text-2xl font-semibold text-slate-50">
        Education
      </h2>
      <p className="mt-4 text-lg text-slate-300">
        {education.program} - {education.institution}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
        {education.focusAreas.map((area) => (
          <li
            className="rounded-md border border-surface-border bg-surface-raised px-2.5 py-1"
            key={area}
          >
            {area}
          </li>
        ))}
      </ul>
    </section>
  );
}
