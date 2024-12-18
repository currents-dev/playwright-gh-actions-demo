import { CurrentsConfig, currentsReporter } from "@currents/playwright";
import config from "./pw.config.shared";

const currentsConfig: CurrentsConfig = {
  projectId: process.env.CURRENTS_PROJECT_ID ?? "xx",
  recordKey: process.env.CURRENTS_RECORD_KEY ?? "yy",
  outputFile: "currents-report.json",
};

export default { ...config, reporter: [currentsReporter(currentsConfig)] };
