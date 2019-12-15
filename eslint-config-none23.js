// @flow strict

const plugins = [
  'babel',
  'import',
  'sonarjs',
  'unicorn',
  'jsx-a11y',
  'react',
  'react-hooks',
];

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
    'prettier/flowtype',
  ],

  plugins: [...plugins, 'flowtype'],
  settings: {
    'import/resolver': { 'babel-module': {} },
  },

  rules: {
    'no-else-return': 'off',
    camelcase: 'off', // babel
    'no-console': 'warn',
    'no-debugger': 'warn',
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
      'warn',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': 'error',

    'babel/camelcase': 'warn',

    'import/default': 'warn',
    'import/named': 'warn',
    'import/namespace': 'error',
    'import/extensions': ['warn', 'never'],

    'sonarjs/no-duplicate-string': ['error', 5],

    'unicorn/filename-case': 'off',
    'unicorn/catch-error-name': ['warn', { name: 'err' }],
    'unicorn/prevent-abbreviations': 'off',

    'flowtype/define-flow-type': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/use-flow-type': 'error',

    'jsx-a11y/anchor-is-valid': 'off', // next.js
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

    'react/jsx-indent': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/default-props-match-prop-types': 'off', // Flow
    'react/jsx-curly-brace-presence': 'off', // styled-jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.mjs', '.tsx'] }],
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off', // Flow
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilinis': 'off',
    'react/sort-comp': 'off',
    'react/jsx-props-no-spreading': 'off',// todo

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // 'emotion/jsx-import': 'error',
    // 'emotion/syntax-preference': ['error', 'object'],
    // 'graphql/template-strings': ['error', { env: 'apollo', validators: 'all' }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
      },
      plugins: [...plugins, '@typescript-eslint'],
      settings: { 'import/resolver': { typescript: {} } },
      rules: {
        'babel/no-unused-vars': 'off',
        'flowtype/require-valid-file-annotation': 'error',
      },
    },
  ],
};
