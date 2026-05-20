import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Contact } from "@/components/Contact";
import { portfolio } from "@/data/portfolio";

describe("Contact", () => {
  it("renders available external contact links", () => {
    render(<Contact contact={portfolio.contact} />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/PedroEvaldt"
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/pedro-evaldt-b1b504357/"
    );
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:pedro.fossati@inf.ufrgs.br"
    );
  });
});
