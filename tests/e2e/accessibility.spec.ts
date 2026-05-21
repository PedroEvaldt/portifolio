import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("home page has no critical accessibility violations", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /software developer focused on backend/i,
    })
  ).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});
