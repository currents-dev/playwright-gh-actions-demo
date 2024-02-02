import { expect, test } from "@playwright/test";

// test.beforeAll(async () => {});
// test.beforeEach(async ({}) => {});

// test.afterEach(async ({}) => {});

// test.afterAll(async () => {});

test.describe.configure({ timeout: 1000 * 60 * 60 * 24 * 7 });

async function testBody({ page }: { page: any }, { retry }: { retry: any }) {
  for (let step = 1; step <= 10; step++) {
    test.step(`Step ${step}: Performing action`, async () => {
      test.step(`Step ${step}: Performing action`, async () => {
        await page.goto("https://example.com");
      });
    });

    // Example action - you can replace this with any action you need.

    // Wait for one second after the action, irrespective of the page's load state.
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
}
test("test 01", async ({ page }, { retry }) => {
  await testBody({ page }, { retry });
  expect(1).toBe(2);
});

test("test 02 @tagB", async ({ page }, { retry }) => {
  await testBody({ page }, { retry });
  expect(1).toBe(2);
});

test("test 03", async ({ page }, { retry }) => {
  await testBody({ page }, { retry });
  expect(1).toBe(2);
});

test("test 04", async ({ page }, { retry }) => {
  await testBody({ page }, { retry });
  expect(1).toBe(2);
});

test("test 05", async ({ page }, { retry }) => {
  await testBody({ page }, { retry });
  expect(1).toBe(2);
});
