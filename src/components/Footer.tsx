import React from "react";

type FooterProps = {
  name: string;
};

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-surface-border px-6 py-6 text-center font-mono text-xs uppercase tracking-wide text-slate-500">
      {name} / backend, systems and practical tools
    </footer>
  );
}
