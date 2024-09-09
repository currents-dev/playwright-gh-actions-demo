import type { CurrentsConfig, OrchestrationStatus } from "@currents/playwright";

function assertEnvVariable(name: string) {
  if (!process.env[name]) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return process.env[name];
}

async function onFinish(status: OrchestrationStatus) {
  if (status.specs.completed === status.specs.overall) {
    console.log("All specs completed");
    return;
  }
}

const config: CurrentsConfig = {
  recordKey: assertEnvVariable("CURRENTS_RECORD_KEY"),
  projectId: assertEnvVariable("CURRENTS_PROJECT_ID"),
  ciBuildId: Date.now().toString(),
  orchestration: {
    skipReporterInjection: true,
    onFinish,
  },
};

export default config;
