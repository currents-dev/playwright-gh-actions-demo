import { currentsReporter } from "@currents/playwright";
import config from "./pw.config.shared";
export default {
  ...config,
  reporter: [
    currentsReporter(),
    [
      "@argos-ci/playwright/reporter",
      {
        // Upload to Argos on CI only.
        uploadToArgos: true,
        // Set your Argos token (required if not using GitHub Actions).
        token: process.env.ARGOS_TOKEN,
      },
    ],
  ],
};
