import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://todomvc.com/examples/backbone/dist/");
});

/**
 * Locators are used to represent a selector on a page and re-use them. They have
 * strictMode enabled by default. This option will throw an error if the selector
 * will resolve to multiple elements.
 * In this example we create a todo item, assert that it exists and then filter
 * by the completed items to ensure that the item is not visible anymore.
 * @see https://playwright.dev/docs/api/class-locator
 */
test("basic interaction @basic", async ({ page }, testInfo) => {
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Learn Playwright");
  await inputBox.press("Enter");
  await page.screenshot({ path: "./screenshots/s-1.png" });
  await page.screenshot({ path: "./screenshots/s-2.png" });
  testInfo.attach("screenshot-2", {
    path: "./screenshots/s-2.png",
  });
  await expect(todoList).toHaveText("Learn Playwright");
  await page.locator(".filters >> text=Completed").click();

  await expect(todoList).not.toHaveText("Learn Playwright");
});

/**
 * Playwright supports different selector engines which you can combine with '>>'.
 * @see https://playwright.dev/docs/selectors
 */
test("element selectors @basic", async ({ page }) => {
  // When no selector engine is specified, Playwright will use the css selector engine.
  await page.type(".header input", "Learn Playwright");
  // So the selector above is the same as the following:
  await page.press("css=.header input", "Enter");

  // select by text with the text selector engine:
  await page.click("text=All");

  // Combine css and text selectors (https://playwright.dev/docs/selectors/#text-selector)
  await page.click('.todo-list > li:has-text("Playwright")');
  await page.click(".todoapp .footer >> text=Completed");

  // Selecting based on layout, with css selector
  expect(await page.innerText('a:right-of(:text("Active"))')).toBe("Completed");

  // Only visible elements, with css selector
  await page.click("text=Completed >> visible=true");

  // XPath selector
  await page.click("xpath=//html/body/section/section/label");
});
