import React from "react";
import type { HeroData } from "@/types/portfolio";

type HeroProps = {
  hero: HeroData;
};

const ctaClassNames = {
  primary:
    "border-accent-green bg-accent-green px-4 py-2 text-surface-base shadow-lg shadow-emerald-950/30 hover:border-emerald-300 hover:bg-emerald-300",
  secondary:
    "border-surface-border bg-surface-raised px-4 py-2 text-slate-100 hover:border-accent-blue hover:text-white",
  ghost:
    "border-transparent px-4 py-2 text-slate-300 hover:border-surface-border hover:bg-surface-raised hover:text-white",
};

function getExternalLinkProps(isExternal?: boolean) {
  if (!isExternal) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}

export function Hero({ hero }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid gap-10 pb-16 pt-10 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:min-h-[620px] lg:py-20"
    >
      <div className="space-y-6">
        <p className="font-mono text-sm font-medium uppercase tracking-wide text-accent-green">
          {hero.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-50 md:text-6xl"
        >
          {hero.headline}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          {hero.subheadline}
        </p>
        <div className="flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <a
              className={`rounded-md border text-sm font-semibold transition-colors ${ctaClassNames[cta.variant]}`}
              href={cta.href}
              key={cta.label}
              {...getExternalLinkProps(cta.isExternal)}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <aside
        aria-label="Terminal preview"
        className="overflow-hidden rounded-lg border border-surface-border bg-surface-raised/95 font-mono text-sm text-slate-300 shadow-2xl shadow-slate-950/50"
      >
        <div
          className="flex items-center justify-between border-b border-surface-border bg-surface-elevated px-4 py-3"
          aria-hidden="true"
        >
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-accent-green" />
          </div>
          <span className="text-xs text-slate-400">~/portfolio</span>
        </div>
        <pre className="whitespace-pre-wrap p-5 leading-7">
          {hero.terminalLines.join("\n")}
        </pre>
      </aside>
    </section>
  );
}
