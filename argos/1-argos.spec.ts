import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

test("argos - 1", async ({ page }) => {
  await page.goto("https://example.com");
  await page.addStyleTag({
    content: "h1 { margin-top: 10px; }",
  });
  await argosScreenshot(page, "homepage");
});
