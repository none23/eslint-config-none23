module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/unicorn',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'sonarjs',
    'unicorn',
  ],

  rules: {
    'no-else-return': 'off',
    camelcase: 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
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
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': 'error',

    // 'eslint-comments/no-unused-disable': 'error',
    // 'eslint-comments/no-unused-enable': 'error',

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


    'react/jsx-indent': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/default-props-match-prop-types': 'off', // Flow
    'react/jsx-curly-brace-presence': 'off', // styled-jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.js'] }],
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off', // Flow
    'react/prefer-stateless-function': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilinis': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'sonarjs/no-duplicate-string': ['error', 5],

    'unicorn/filename-case': 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/prevent-abbreviations': 'off',
  },
};