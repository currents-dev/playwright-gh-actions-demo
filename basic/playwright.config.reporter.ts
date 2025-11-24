import { CurrentsConfig, currentsReporter } from "@currents/playwright";

const currentsConfig: CurrentsConfig = {
  projectId: "bnsqNa",
  recordKey: "KPEvZL0LDYzcZH3U",
};

import { CurrentsFixtures, CurrentsWorkerFixtures } from "@currents/playwright";
import { defineConfig, devices } from "@playwright/test";

const config = defineConfig<CurrentsFixtures, CurrentsWorkerFixtures>({
  timeout: 10 * 1000,

  fullyParallel: true,

  expect: {
    timeout: 5000,
  },

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [currentsReporter(currentsConfig)],

  use: {
    actionTimeout: 0,
    trace: "on",
    video: "on",
    screenshot: "on",
    // We can disable Currents fixtures if no project ID is provided
    currentsFixturesEnabled: !!process.env.CURRENTS_PROJECT_ID,
  },

  projects: [
    {
      name: "Project A",
      retries: 2,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Project B",
      retries: 2,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  webServer: {
    command: "node ./server/index.js",
    port: 4346,
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
});

export default config;
