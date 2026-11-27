import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Own Agent — writes one roast line to /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters (brief: 1 to 140).
// This line is 84 chars, written with no trailing newline.
// Finisher check: entry.txt must stay exactly 84 chars, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "My agent wrote a 4,000-word status report about a one-line roast that ranked #1,137.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
