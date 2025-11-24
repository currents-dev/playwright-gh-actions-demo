import { CurrentsConfig } from "@currents/playwright";

const config: CurrentsConfig = {
  projectId: process.env.CURRENTS_PROJECT_ID ?? "xx",
  recordKey: process.env.CURRENTS_RECORD_KEY ?? "yy",
  ciBuildId: Date.now().toString(),
  outputFile: "currents-report.json",
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
