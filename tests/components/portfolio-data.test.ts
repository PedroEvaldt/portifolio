import { describe, expect, it } from "vitest";
import { portfolio } from "@/data/portfolio";

const expectedProjectTitles = [
  "Recall",
  "Finance Tracker",
  "Git Simulator",
  "Bank App",
  "Webmail Organizer",
];

describe("portfolio data", () => {
  it("defines the core identity and navigation data", () => {
    expect(portfolio.person.name).toBe("Pedro Evaldt");
    expect(portfolio.hero.headline).toBe(
      "Software Developer focused on backend, systems and practical tools."
    );
    expect(portfolio.navigation.map((item) => item.label)).toEqual([
      "About",
      "Skills",
      "Projects",
      "Contact",
    ]);
  });

  it("defines all required projects with user-facing content and editable links", () => {
    expect(portfolio.projects.map((project) => project.title)).toEqual(
      expectedProjectTitles
    );

    for (const project of portfolio.projects) {
      expect(project.description.length).toBeGreaterThan(20);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.links.github.label).toBe("GitHub");
      expect(project.links.details.href).toMatch(/^#/);

      if (!project.links.github.isAvailable) {
        expect(project.links.github.href).toBeNull();
        expect(project.links.github.editNote).toContain("src/data/portfolio.ts");
      }
    }
  });

  it("keeps primary contact links explicit and editable", () => {
    expect(portfolio.contact.links.github.href).toBe(
      "https://github.com/PedroEvaldt"
    );
    expect(portfolio.contact.links.linkedin.href).toBe(
      "https://www.linkedin.com/in/pedro-evaldt-b1b504357/"
    );
    expect(portfolio.contact.links.email.href).toBe(
      "mailto:pedro.fossati@inf.ufrgs.br"
    );
  });

  it("uses real repository links where they are available", () => {
    expect(portfolio.projects[0].links.github.href).toBe(
      "https://github.com/PedroEvaldt/recall"
    );
    expect(portfolio.projects[1].links.github.href).toBe(
      "https://github.com/PedroEvaldt/Finance-tracker"
    );
    expect(portfolio.projects[2].links.github.href).toBe(
      "https://github.com/PedroEvaldt/Git-Simulator"
    );
  });

  it("does not contain generic filler text", () => {
    expect(JSON.stringify(portfolio).toLowerCase()).not.toContain("lorem ipsum");
  });
});
