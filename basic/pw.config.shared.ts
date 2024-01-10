import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 10 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 5 : undefined,

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
      name: "chromium-00",
      retries: 2,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // {
    //   name: "chromium-01",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-02",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-03",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-04",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-05",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-06",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-07",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-08",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-09",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-10",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-11",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
    // {
    //   name: "chromium-12",
    //   retries: 2,
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
};

export default config;
