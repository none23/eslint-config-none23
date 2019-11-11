// @flow strict

const babelConfig = require('eslint-config-none23babel');

module.exports = {
  ...babelConfig,
  extends: [...babelConfig.extends, 'prettier/flowtype', 'plugin:flowtype/recommended'],
  plugins: [...babelConfig.plugins, 'flowtype'],
  rules: {
    ...babelConfig.rules,
    'flowtype/define-flow-type': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/use-flow-type': 'error',
    'flowtype/array-style-complex-type': ['error', 'verbose'],
    'flowtype/array-style-simple-type': ['error', 'verbose'],
  },
};
