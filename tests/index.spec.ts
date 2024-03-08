import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4321/");
});

test.describe("index", () => {
  test.describe("content", () => {
    test("has images with alt text", async ({ page }) => {
      await expect(page.getByRole("img")).toHaveAttribute("alt");
      expect(page.locator("img[alt]")).not.toBeEmpty;
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
