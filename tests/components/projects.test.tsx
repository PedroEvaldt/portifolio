import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Projects } from "@/components/Projects";
import { portfolio } from "@/data/portfolio";

describe("Projects", () => {
  it("renders all project cards with description, technologies, highlights and links", () => {
    render(<Projects projects={portfolio.projects} />);

    for (const project of portfolio.projects) {
      expect(
        screen.getByRole("heading", { name: project.title })
      ).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();

      for (const technology of project.technologies) {
        expect(screen.getAllByText(technology).length).toBeGreaterThan(0);
      }

      for (const highlight of project.highlights) {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      }
    }

    expect(screen.getAllByRole("link", { name: "GitHub" })).toHaveLength(3);
    expect(screen.getAllByText("Repository not public")).toHaveLength(2);

    // Details links are only shown for projects that have a real destination
    // (i.e. not pointing back to #projects itself)
    const projectsWithDetails = portfolio.projects.filter(
      (p) => p.links.details.href !== "#projects"
    );
    expect(screen.getAllByRole("link", { name: "Details" })).toHaveLength(
      projectsWithDetails.length
    );
  });
});
