import { expect } from "@playwright/test";
import { test } from "./base.ts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
});

/**
 * All available test assertions are listed here:
 * @see https://playwright.dev/docs/test-assertions/
 */
test("should be able to use assertions", async ({ page }) => {
  await test.step("toHaveTitle/toHaveURL", async () => {
    await expect(page).toHaveTitle("React • TodoMVC");
    await expect(page).toHaveURL(/^https:\/\/demo.playwright.dev\/todomvc/);
  });

  await test.step("toBeEmpty/toHaveValue", async () => {
    const input = page.locator("input.new-todo");
    await expect(input).toBeEmpty();
    await input.fill("Buy milk");
    await expect(input).toHaveValue("Buy milk");
    await input.press("Enter");
  });

  await test.step("toHaveCount/toHaveText/toContainText", async () => {
    const items = page.locator(".todo-list li");
    await expect(items).toHaveCount(1);
    await expect(items.first()).toHaveText("Buy milk");
    await expect(items).toHaveText(["Buy milk"]);
    await expect(items.first()).toContainText("milk");
  });

  await test.step("toBeChecked", async () => {
    const firstItemCheckbox = page.locator(
      'input[type=checkbox]:left-of(:text("Buy milk"))'
    );
    await expect(firstItemCheckbox).not.toBeChecked();
    await page.check('div input[type="checkbox"]');
    await expect(firstItemCheckbox).toBeChecked();
  });

  await test.step("toBeVisible/toBeHidden", async () => {
    await expect(page.locator("text=Buy milk")).toBeVisible();
    await page.click("text=Active");
    await expect(page.locator("text=Buy milk")).toBeHidden();
  });

  await test.step("toHaveClass", async () => {
    await expect(
      page.locator('[placeholder="What needs to be done?"]')
    ).toHaveClass("new-todo");
  });
});
