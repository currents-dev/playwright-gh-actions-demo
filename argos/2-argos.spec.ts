import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

test("argos - 2", async ({ page }) => {
  await page.goto("https://example.com");

  await page.addStyleTag({
    content: "h1 { margin-top: 40px; }",
  });

  await argosScreenshot(page, "homepage");
});
