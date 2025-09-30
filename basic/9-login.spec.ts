import { test } from "./base.ts";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
test.only("simple login fo", async ({ page, context }) => {
  await page.goto("https://app-staging.currents.dev/login");
  await page.fill('input[type="email"]', "besttest@gmail.com");
  await page.click('button[type="submit"]');
  await page.fill('input[type="password"]', "YohayPassword123!@#");
  await page.click('button[type="submit"]');
  
  await page.waitForLoadState("networkidle");
  await sleep(5000);
  
});
