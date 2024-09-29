import type { CurrentsConfig, OrchestrationStatus } from "@currents/playwright";
import { $ } from "execa";

function assertEnvVariable(name: string) {
  if (!process.env[name]) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return process.env[name];
}

async function onFinish(status: OrchestrationStatus) {
  if (status.specs.completed === status.specs.overall) {
    try {
      const finalize = await $`npx argos finalize`;
      console.log(finalize.stderr);
    } catch (e) {
      console.error(e);
    }
    return;
  }
}

const config: CurrentsConfig = {
  recordKey: assertEnvVariable("CURRENTS_RECORD_KEY"),
  projectId: assertEnvVariable("CURRENTS_PROJECT_ID"),
  ciBuildId: `${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`,
  orchestration: {
    skipReporterInjection: true,
    onFinish,
  },
};

export default config;
