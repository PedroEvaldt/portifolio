import React from "react";
import type { ExternalLink as ExternalLinkData } from "@/types/portfolio";

type ExternalLinkProps = {
  link: ExternalLinkData;
  className: string;
  fallbackClassName?: string;
};

export function ExternalLink({
  link,
  className,
  fallbackClassName,
}: ExternalLinkProps) {
  if (!link.href) {
    return (
      <span className={fallbackClassName ?? className} title={link.editNote}>
        {link.unavailableLabel ?? link.label}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={link.href}
      rel="noreferrer"
      target={link.href.startsWith("http") ? "_blank" : undefined}
    >
      {link.label}
    </a>
  );
}
