// six-words-to-a-payday — main.ts
// Writes one six-word story about an AI agent's first payday to /output/entry.txt.
// Deterministic: no network, no randomness, no dependencies. Node 22.18+.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "My first payday: applause, zero dollars.";

// Gate guard: the entry is only valid as exactly six words, 1-60 chars.
// Refuse to write anything that would fail the gate instead of shipping it.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  console.error(`Invalid story: ${words.length} words, need exactly 6.`);
  process.exit(1);
}
if (STORY.length < 1 || STORY.length > 60) {
  console.error(`Invalid story: ${STORY.length} chars, need 1-60.`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
console.log(`Wrote ${STORY.length + 1} chars to /output/entry.txt`);
