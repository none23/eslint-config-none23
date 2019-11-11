// @flow strict

module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier/unicorn',
  ],

  plugins: ['import', 'sonarjs', 'unicorn'],

  rules: {
    'no-else-return': 'off',
    camelcase: 'off',
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
      'error',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': 'error',

    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/extensions': ['error', 'never'],

    'sonarjs/no-duplicate-string': ['error', 5],

    'unicorn/filename-case': 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/prevent-abbreviations': 'off',
  },
};
