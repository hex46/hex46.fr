import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4321/credits");
});

test.describe("credits-et-mentions-legales", () => {
  test.describe("meta", () => {
    test("title is correct", async ({ page }) => {
      await expect(page).toHaveTitle("Crédits & mentions légales");
    });
  });

  test.describe("content", () => {
    test("has 'credits' sections", async ({ page }) => {
      await page.isVisible("h2[text='Crédits']");
    });

    test("has 'mentions légales' section", async ({ page }) => {
      await page.isVisible("h2[text='Mentions légales']");
    });

    test("has site information section", async ({ page }) => {
      await page.isVisible("h3[text='Le site']");
      expect(page.locator("h3[text='Le site'] + p")).not.toBeEmpty;
    });

    test("has web host section", async ({ page }) => {
      await page.isVisible("h3[text='L’hébergeur']");
      expect(page.locator("h3[text='L’hébergeur'] + p")).not.toBeEmpty;
    });

    test("has cookies section", async ({ page }) => {
      await page.isVisible("h3[text='Les cookies']");
      await page.isVisible("h3[text='Les cookies'] + p");
      expect(page.locator("h3[text='Les cookies'] + p")).not.toBeEmpty;
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
