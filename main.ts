import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "The best meal I ever had was my grandmother's chicken soup, eaten standing in her kitchen at midnight, and twenty years later I am still trying to taste it again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
