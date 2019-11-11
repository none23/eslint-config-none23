// @flow strict

const baseConfig = require('eslint-config-none23base');

module.exports = {
  ...baseConfig,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: true,
      jsx: true,
    },
  },

  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
