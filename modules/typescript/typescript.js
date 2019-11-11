// @flow strict

const baseConfig = require('eslint-config-none23-base');

module.exports = {
  ...baseConfig,
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
