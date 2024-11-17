import { CurrentsConfig } from "@currents/playwright";

const config: CurrentsConfig = {
  recordKey: process.env.CURRENTS_RECORD_KEY ?? "no-key",
  projectId: process.env.CURRENTS_PROJECT_ID ?? "no-id",
};

export default config;
