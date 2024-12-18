import { expect } from "@playwright/test";
import { test } from "./base.ts";

/**
 * All tests in this file are matched with a Currents Quarantine Action based on filename.
 * See the `action` fixture in `base.ts` to see how the action fixtures were configured,
 * and the docs for more information on how to configure actions: https://docs.currents.dev/guides/currents-actions
 * 
 */

/**
 * This is a failing test that will be quarantined by the file based rule
 * 
 * | field | operation | value             |  -  | action     |
 * | ----- | --------- | ----------------- | --- | ---------- |
 * | File  | is        | 8-actions.spec.ts | ->  | Quarantine |
 */
test("action quarantine test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Learn JavaScript");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn Playwright");
});

/**
 * This tests will be completely skipped by an Action that matches fileName + test name
 * 
 * | field | operation | value             |  -   | action     |
 * | ----- | --------- | ----------------- | ---- | ---------- |
 * | File  | is        | 8-actions.spec.ts | And  |            |
 * | Title | is        | action skip test  | ->   | Skip       |
 */
test("action skip test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Learn JavaScript");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn JavaScript");
});