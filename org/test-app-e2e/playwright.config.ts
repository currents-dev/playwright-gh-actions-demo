import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';

import { workspaceRoot } from '@nx/devkit';
import { CurrentsConfig, currentsReporter } from '@currents/playwright';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4300';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const currentsConfig: CurrentsConfig = {
  recordKey: 'AcceNBS8GCEFdr4C',
  projectId: 'ghc2jY',
  ciBuildId: '100101'
};

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  reporter: [currentsReporter(currentsConfig)],
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npx nx run test-app:preview',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
