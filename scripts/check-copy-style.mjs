import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const roots = ["src", "docs", "scripts", "public/llms.txt", "AGENTS.md", "README.md"];
const checkedExtensions = new Set([".css", ".json", ".md", ".mjs", ".ts", ".tsx", ".txt"]);
const forbiddenDash = /[\u2013\u2014]/g;
const violations = [];

async function collectFiles(entry) {
  const entryStat = await stat(entry);

  if (entryStat.isFile()) {
    return checkedExtensions.has(path.extname(entry)) ? [entry] : [];
  }

  const children = await readdir(entry, { withFileTypes: true });
  const nested = await Promise.all(
    children.map((child) => collectFiles(path.join(entry, child.name))),
  );

  return nested.flat();
}

for (const root of roots) {
  const files = await collectFiles(root);

  for (const file of files) {
    const lines = (await readFile(file, "utf8")).split(/\r?\n/);

    lines.forEach((line, index) => {
      forbiddenDash.lastIndex = 0;
      if (forbiddenDash.test(line)) {
        violations.push(`${file}:${index + 1}`);
      }
    });
  }
}

if (violations.length > 0) {
  console.error("Copy style check failed. Replace Unicode em/en dash characters in:");
  violations.forEach((violation) => console.error(`- ${violation}`));
  process.exitCode = 1;
} else {
  console.log("Copy style check passed: no Unicode em/en dash characters found.");
}
