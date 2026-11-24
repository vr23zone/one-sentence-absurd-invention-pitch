import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "A toothbrush that goes on strike every morning you skip flossing, picketing the sink with a tiny sign that reads 'WE DEMAND FLOSS'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf-8");
