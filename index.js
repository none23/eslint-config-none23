const path = require('path');

const config = {
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
  env: {
    browser: true,
    jest: true,
    node: true,
  },

  extends: [
    'airbnb',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/unicorn',
    'prettier/flowtype',
    'plugin:flowtype/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.json'],
  },

  plugins: [
    'eslint-comments',
    'flowtype',
    'import',
    'graphql',
    'jsx-a11y',
    'react',
    'sonarjs',
    'unicorn',
  ],

  rules: {
    'no-console': 'err',
    'no-debugger': 'err',
    'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 0 }],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    'object-curly-newline': 'off',
    'padded-blocks': [
      'error',
      { blocks: 'never', switches: 'never', classes: 'never' },
    ],
    'prefer-const': 'error',

    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/extensions': ['error', 'never'],

    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/anchor-is-valid': 'off',

    // 'node/no-deprecated-api': 'error',
    // 'node/process-exit-as-throw': 'error',

    'react/require-default-props': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/default-props-match-prop-types': 'off', // Flow
    'react/jsx-curly-brace-presence': 'off', // styled-jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off', // Flow
    'react/prefer-stateless-function': 'off',

    'flowtype/define-flow-type': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/use-flow-type': 'error',
    'flowtype/array-style-complex-type': ['error', 'verbose'],
    'flowtype/array-style-simple-type': ['error', 'verbose'],

    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilinis': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
  },
};

module.exports = config;
