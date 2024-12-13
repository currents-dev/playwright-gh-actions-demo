import {
  CurrentsFixtures,
  CurrentsWorkerFixtures,
  fixtures,
} from "@currents/playwright";
import { test as base } from "@playwright/test";

export const test = base.extend<CurrentsFixtures, CurrentsWorkerFixtures>({
  ...fixtures.baseFixtures,
  ...fixtures.actionFixtures,
});