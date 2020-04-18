// @flow strict
const fs = require('fs');
const path = require('path');

const FILENAME = 'eslint-config-none23.js';

const jsFilename = path.resolve(__dirname, FILENAME);
const tsFilename = jsFilename.replace(/\.js$/, '.ts');

const jsCode = fs.readFileSync(jsFilename, 'utf8');
const flowPragma = new RegExp(/^\/[*/]\s+@flow.*$/);
const tsCode = jsCode
  .split('\n')
  .filter((line) => !flowPragma.test(line))
  .filter(Boolean)
  .map((line, i, lines) =>
    i === lines.length - 1 ? line.replace(/;$/, ' as const;') : line,
  ).join('\n');

fs.writeFileSync(tsFilename, tsCode);
