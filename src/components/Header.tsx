import React from "react";
import type { ContactData, NavigationItem } from "@/types/portfolio";

type HeaderProps = {
  name: string;
  navigation: NavigationItem[];
  contact: ContactData;
};

export function Header({ name, navigation, contact }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-surface-border bg-surface-base/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <a
          className="rounded-sm font-mono text-sm font-semibold uppercase tracking-wide text-slate-50"
          href="#home"
        >
          {name}
        </a>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-300 sm:justify-end">
          {navigation.map((item) => (
            <a
              className="rounded-sm transition-colors hover:text-slate-50 focus-visible:text-slate-50"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="rounded-sm font-medium text-accent-green transition-colors hover:text-slate-50 focus-visible:text-slate-50"
            href={contact.links.github.href ?? "#contact"}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
