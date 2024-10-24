import { expect, test } from "@playwright/test";

test("basic test @basic", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/backbone/dist/");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Learn Playwright");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn Playwright");
});
