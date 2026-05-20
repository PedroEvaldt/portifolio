import { expect, test } from "@playwright/test";

test("home page loads in desktop and mobile contexts", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /software developer focused on backend, systems and practical tools/i,
    })
  ).toBeVisible();
  await expect(page.getByRole("navigation", { name: /primary/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "View projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "GitHub" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" }).first()).toBeVisible();
});

test("navigation links move to the expected sections", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: /primary/i });

  await navigation.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(
    page.getByRole("heading", { name: "Projects" })
  ).toBeInViewport();

  await navigation.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole("heading", { name: "Contact" })).toBeInViewport();
});
