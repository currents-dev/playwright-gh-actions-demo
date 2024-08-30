import { currentsReporter } from "@currents/playwright";
import config from "./pw.config.shared";
import fs from 'node:fs';

let currentsArgosParallel = {};

// If CURRENTS_TEST_SUITE_FILE is populated, read the full test suite from there to determine the total parallel argos total
if (process.env.CURRENTS_TEST_SUITE_FILE) {
  // suite is an array of projects, each project has a tests key with all tests flattened
  const fullSuite = JSON.parse(fs.readFileSync(process.env.CURRENTS_TEST_SUITE_FILE, 'utf8')) as [{tests: {spec:string}[]}];
  
  // find the unique spec files per project
  const allSpecs = fullSuite.flatMap((a) => {
    return a.tests.map((b) => b.spec).filter((value, index, array) => array.indexOf(value) === index);
  });

  // Let argos know how many uploads to expect
  currentsArgosParallel = {
    parallel: {
      nonce: process.env.CURRENTS_CI_BUILD_ID,
      total: allSpecs.length
    }
  };
}

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
        ...currentsArgosParallel 
      },
    ],
  ],
};
