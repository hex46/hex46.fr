import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4321/noop");
});

test.describe("404", () => {
  test.describe("meta", () => {
    test("title is correct", async ({ page }) => {
      await expect(page).toHaveTitle("Page introuvable");
    });
  });

  test.describe("content", () => {
    test("h1 is correct", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
          "Page introuvable",
      );
    });
  });

  test.describe("external links", () => {
    test("has target blank", async ({ page }) => {
      for (const link of await page.locator('a[href^="http"]').all()) {
        await expect(link).toHaveAttribute("target", "_blank");
      }
    });

    test("has noreferrer and external", async ({ page }) => {
      for (const link of await page.locator('a[href^="http"]').all()) {
        await expect(link).toHaveAttribute("rel", "noreferrer external");
      }
    });
  });
});
