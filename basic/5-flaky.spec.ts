import { expect, test } from "@playwright/test";

/**
 * This test clicks on an element with the text 'Load user' and waits for a
 * specific HTTP response. This response contains a JSON body where we assert
 * some properties.
 */
test("flaky @tagC", async ({ page }, testInfo) => {
  await page.goto("/network.html");
  const [response] = await Promise.all([
    page.waitForResponse("/api/v1/users.json"),
    page.click("text=Load user"),
  ]);
  await expect(page.locator("#user-full-name")).toContainText("John Doe");
  const responseBody = await response.json();
  if (testInfo.retry === 0) {
    expect(responseBody.id).toBe(2);
  }
  expect(responseBody.id).toBe(1);
  expect(responseBody.fullName).toBe("John Doe");
});
