# 🎭 Currents - Playwright - GitHub Actions

This repository showcases running [Playwright](https://playwright.dev/) tests on GitHub Actions in parallel, while using [Currents](https://currents.dev) as the reporting dashboard.

<p align="center">
  <img width="830" src="https://static.currents.dev/currents-playwright-banner-gh.png" />
</p>

## Documentation

The repo contains a few Playwright tests with one test that always fails (intentionally). The example configuration files use [Matrix Execution Strategy](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) to run 3 containers for parallelization.

To reproduce the setup:

- Create an organization, get your **Record Key** and **Project Id** at https://app.currents.dev
- Set [GitHub secret variable](https://docs.github.com/en/actions/reference/encrypted-secrets) `CURRENTS_RECORD_KEY`.

See the example GH Actions configuration:

- [test-basic-pwc.yml](.github/workflows/test-basic-pwc.yml)
- [test-basic-reporter.yml](.github/workflows/test-basic-reporter.yml)

Additional resources:

- Playwright Features on Currents: https://currents.dev/playwright
- Integration Documentation: https://currents.dev/readme/integration-with-playwright/currents-playwright
- CI Build ID Guide: https://currents.dev/readme/guides/cypress-ci-build-id

## Results

The results are being reported to Currents for more efficient troubleshooting, and monitoring test suite flakiness and performance.

Currents will collect the following information:

- console output
- screenshots
- videos
- trace files
- timing
- outcomes
- flaky tests
- error details
- tags for more convenient management of the tests

### Currents Dashboard Results

Here's how the results are being displayed in Currents dashboard (recorded on November 2023).

https://github.com/currents-dev/playwright-gh-actions-demo/assets/1637928/3a95c8d5-a4c1-44a6-be59-24fefb79b354

### PR Comment and Git Commit Status

Currents will add inline information to GitHub Pull Request. Example: https://github.com/currents-dev/playwright-gh-actions-demo/pull/17.

- a comment containing run results summary
  ![gh-actions-comment](https://github.com/currents-dev/playwright-gh-actions-demo/assets/1637928/6e9c11d3-8f92-4e2c-a70d-391bc04d2d52)

- git commit status check for each detected project
  ![gh-actions-status](https://github.com/currents-dev/playwright-gh-actions-demo/assets/1637928/d2a54c2d-befa-42d6-ac0a-96cbd387fc53)
