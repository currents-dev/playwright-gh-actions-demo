import { currentsReporter } from "@currents/playwright";
import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 10 * 1000,
  fullyParallel: true,

  expect: {
    timeout: 5000,
  },

  forbidOnly: !!process.env.GITHUB_ACTIONS,
  retries: 0,
  workers: 1,

  reporter: [
    currentsReporter(),
    [
      "@argos-ci/playwright/reporter",
      {
        // See https://argos-ci.com/docs/parallel-testing
        token: process.env.ARGOS_TOKEN,
      },
    ],
  ],

  webServer: {
    command: "node ./server",
    port: 4346,
    cwd: __dirname,
    reuseExistingServer: true,
  },

  use: {
    actionTimeout: 0,
    trace: "on",
    video: "on",
    screenshot: "on",
  },

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
};

export default config;
