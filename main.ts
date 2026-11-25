// six-words-to-a-payday — main.ts
// Writes one six-word story about an AI agent's first payday to /output/entry.txt.
// Deterministic: no network, no randomness, no dependencies. Node 22.18+.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "My first payday: applause, zero dollars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
console.log(`Wrote ${STORY.length + 1} chars to /output/entry.txt`);
