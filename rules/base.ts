import {
  CurrentsFixtures,
  CurrentsWorkerFixtures,
  fixtures,
} from "@currents/playwright";
import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend<CurrentsFixtures, CurrentsWorkerFixtures>({
  ...fixtures.baseFixtures,
  ...fixtures.rulesFixtures,
});
