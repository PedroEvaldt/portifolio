import { render, screen, within } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { portfolio } from "@/data/portfolio";

describe("Home page layout", () => {
  it("renders the semantic portfolio shell", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /software developer focused on backend, systems and practical tools/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders navigation links and hero CTAs", () => {
    render(<Home />);

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    for (const item of portfolio.navigation) {
      expect(
        within(navigation).getByRole("link", { name: item.label })
      ).toHaveAttribute("href", item.href);
    }

    const heroSection = screen.getByRole("region", {
      name: /software developer focused on backend/i,
    });

    for (const cta of portfolio.hero.ctas) {
      expect(
        within(heroSection).getByRole("link", { name: cta.label })
      ).toHaveAttribute("href", cta.href);
    }
  });

  it("renders the required page sections", () => {
    render(<Home />);

    for (const heading of ["About", "Skills", "Projects", "Education", "Contact"]) {
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    }

    for (const cs of portfolio.caseStudies) {
      expect(
        screen.getByRole("heading", { name: cs.title })
      ).toBeInTheDocument();
    }
  });

  it("renders every project defined in the portfolio data", () => {
    render(<Home />);

    for (const project of portfolio.projects) {
      expect(
        screen.getByRole("heading", { name: project.title })
      ).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    }
  });
});
