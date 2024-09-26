import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; // 1

test.describe("homepage", () => {
  // 2
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("https://currents.dev/"); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});

test("navigation menu should not have automatically detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("https://currents.dev/");

  await page.getByRole("button", { name: "Navigation Menu" }).click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  await page.locator("#navigation-menu-flyout").waitFor();

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include("#navigation-menu-flyout")
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});


test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto("https://currents.dev/");

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});