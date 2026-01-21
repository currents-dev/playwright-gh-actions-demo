import { expect } from "@playwright/test";
import { test } from "./base.ts";

test("basic test @basic", {
  annotation: {
    type: 'notify:slack', description: `user:U07RSHQKGUX`,
  },
}, async ({ page }) => {
  await page.goto("https://todomvc.com/examples/backbone/dist/");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Stop using Cypress");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn Playwright");
});
