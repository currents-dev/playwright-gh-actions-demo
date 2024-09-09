import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

test("argos - 0", async ({ page }) => {
  await page.goto("https://example.com");
  await argosScreenshot(page, "homepage");
});
