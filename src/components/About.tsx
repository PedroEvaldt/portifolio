import React from "react";
import type { AboutData } from "@/types/portfolio";

type AboutProps = {
  about: AboutData;
};

export function About({ about }: AboutProps) {
  return (
    <section
      aria-labelledby="about-title"
      className="border-t border-surface-border py-16 lg:py-20"
      id="about"
    >
      <h2 id="about-title" className="text-2xl font-semibold text-slate-50">
        {about.title}
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-300">
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
