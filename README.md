# 🎭 Currents - Playwright - GitHub Actions

This repository showcases running [Playwright](https://playwright.dev/) tests on GitHub Actions in parallel, while using [Currents](https://currents.dev) as the reporting dashboard.

## Setup

The repo contains a few Playwright tests with one test that always fails (intentionally).

The example configuration files use [Matrix Execution Strategy](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) to run 3 containers for parallelization.

See the example GH Actions configuration:

- [test-basic-pwc.yml](.github/workflows/test-basic-pwc.yml)
- [test-basic-reporter.yml](.github/workflows/test-basic-reporter.yml)

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

### PR Comment and Git Commit Status

Currents will add inline information to GitHub Pull Request with a comment containing run results summary and also git commit status check. Example: https://github.com/currents-dev/playwright-gh-actions-demo/pull/17
