import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

test("basic test @basic", async ({ page }) => {
  await page.goto("https://example.com");
  await argosScreenshot(page, "homepage");
});
