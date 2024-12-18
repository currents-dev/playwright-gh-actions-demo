import { CurrentsConfig, currentsReporter } from "@currents/playwright";
import config from "./pw.config.shared";

const currentsConfig: CurrentsConfig = {
  recordKey: process.env.CURRENTS_RECORD_KEY ?? "",
  projectId: process.env.CURRENTS_PROJECT_ID ?? "",
  outputFile: ".currents-report.json",
};

export default { ...config, reporter: [currentsReporter(currentsConfig)] };
