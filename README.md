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

## Examples

Examples of various variants of integrating Currents with Playwright on GitHub Actions:

- [test-basic-pwc.yml](.github/workflows/test-basic-pwc.yml) - parallel run using 3 shards and `pwc` command. Basic example of running playwright tests in parallel using 3 containers of GitHub Actions Matrix and `pwc` command.

- [test-basic-reporter.yml](.github/workflows/test-basic-reporter.yml) - parallel run using 3 shards and `playwright.config.ts`. Basic example of running playwright tests in parallel using 3 containers of GitHub Actions Matrix configuring Currents Reporter in `playwright.config.ts`.

- [test-or8n.yml](.github/workflows/test-or8n.yml) - parallel Playwright Tests using [Currents Orchestration for Playwright](https://docs.currents.dev/guides/parallelization-guide/pw-parallelization/playwright-orchestration) - and GitHub Actions Matrix. Currents Orchestration speeds up CI runs by up to 40% (compared to native sharding) by optimally balancing tests between the available machines.

- [argos-example.yml](.github/workflows/argos-example.yml) - parallel run using Argos CI and Currents orchestration.

### Reruns only the failed tests

- [rerun-shards-pwc.yml](.github/workflows/rerun-shards-pwc.yml) - rerun only the tests that failed in the previous run, uses `pwc` helper command.
- [reruns-or8n.yml](.github/workflows/reruns-or8n.yml) - rerun only the tests that failed in the previous orchestrated run

## Additional resources

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
