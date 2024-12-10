import { expect } from "@playwright/test";
import { test } from "./base.ts";

/**
 * All tests in this file are matched with a Currents Quarantine Rule based on filename.
 * See the `rules` fixture in `base.ts` to see how the rules fixtures were configured,
 * and the docs for more information on how to configure rules: https://docs.currents.dev/guides/automation-rules
 */

/**
 * This is a failing test that will be quarantined by the file based rule
 */
test("rules quarantine test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Learn JavaScript");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn Playwright");
});

/**
 * This tests will be completely skipped by a rule that matches fileName + test name
 */
test("rules skip test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Learn JavaScript");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn Playwright");
});