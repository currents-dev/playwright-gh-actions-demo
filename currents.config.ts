import { CurrentsConfig } from "@currents/playwright";

const config: CurrentsConfig = {
  projectId: "mdXsz8",
  recordKey: "KPEvZL0LDYzcZH3U",
  ciBuildId: Date.now().toString(),
  orchestration: {
    skipReporterInjection: true,
    onFinish: async () => {
      try {
        const execa = await import("execa");
        const resultUpload = await execa("npx", [
          "argos",
          "upload",
          "./screenshots",
        ]);
        console.log(resultUpload);
        const resultFinalize = await execa("npx", ["argos", "finalize"]);
        console.log(resultFinalize);
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default config;
