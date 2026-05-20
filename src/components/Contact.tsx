import React from "react";
import type { ContactData } from "@/types/portfolio";
import { ExternalLink } from "@/components/ExternalLink";

type ContactProps = {
  contact: ContactData;
};

const linkClassName =
  "rounded-md border border-surface-border px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-accent-blue";
const unavailableLinkClassName =
  "rounded-md border border-surface-border border-dashed px-4 py-2 text-sm text-slate-400";

export function Contact({ contact }: ContactProps) {
  return (
    <section
      aria-labelledby="contact-title"
      className="border-t border-surface-border py-16 lg:py-20"
      id="contact"
    >
      <h2 id="contact-title" className="text-2xl font-semibold text-slate-50">
        {contact.title}
      </h2>
      <p className="mt-4 max-w-2xl leading-8 text-slate-300">{contact.body}</p>
      <address className="mt-6 flex flex-wrap gap-3 not-italic">
        {Object.values(contact.links).map((link) => (
          <ExternalLink
            className={linkClassName}
            fallbackClassName={unavailableLinkClassName}
            key={link.label}
            link={link}
          />
        ))}
      </address>
    </section>
  );
}
