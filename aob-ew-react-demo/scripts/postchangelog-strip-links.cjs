#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const changelogArg = process.argv[2];
const changelogPath = changelogArg
  ? path.resolve(changelogArg)
  : path.resolve(process.cwd(), 'CHANGELOG.md');

if (!fs.existsSync(changelogPath)) {
  console.log(`[postchangelog] No changelog found at ${changelogPath}; skipping.`);
  process.exit(0);
}

const input = fs.readFileSync(changelogPath, 'utf8');

// Strip only wrapped issue references while keeping visible issue labels.
// Example: ([#7](https://.../issues/7)) -> #7
const output = input.replace(
  /\(\[\s*#(\d+)\s*\]\(https?:\/\/[^\s)]+\/issues\/\1\)\)/g,
  '#$1',
);

if (output !== input) {
  fs.writeFileSync(changelogPath, output, 'utf8');
  console.log(`[postchangelog] Removed markdown link wrappers in ${changelogPath}.`);
} else {
  console.log('[postchangelog] No markdown link wrappers found.');
}
