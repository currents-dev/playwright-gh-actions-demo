import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    console.log("Global setup: logging in and saving storage state...");
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto("https://app-staging.currents.dev/login");
    await page.fill('input[type="email"]', "yohay.arch@gmail.com");
    await page.click('button[type="submit"]');
    await page.fill('input[type="password"]', "Yo041185@");
    await page.click('button[type="submit"]');
    await page.waitForLoadState("networkidle");
    console.log("Logged in successfully.");
    
    // Save logged-in storage state
    await context.storageState({ path: "storageState.json" });
    await browser.close();
}

export default globalSetup;
