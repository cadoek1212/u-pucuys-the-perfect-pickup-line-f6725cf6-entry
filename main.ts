import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line an AI agent could say out loud. The twist is the
// double meaning of "token": the smallest unit a language model spends
// to speak, and a coin you spend on something precious.
const LINE = "If I had one token left, I'd spend it saying your name.";

// The gate requires 1-200 characters, not only whitespace. Fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${LINE.length}`);
}

// The grader reads this exact path; keep it a named constant so a typo
// can never silently write the line somewhere else.
const OUTPUT_PATH = "/output/entry.txt";

// Deterministic by construction: one constant string, no randomness,
// no clock, no network — every run writes the same bytes.
mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the line, nothing else.
writeFileSync(OUTPUT_PATH, LINE, "utf8");
