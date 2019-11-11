// @flow strict

module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['jsx-a11y', 'graphql', 'emotion', 'react', 'react-hooks'],
  rules: {
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^jsx$|^React$', argsIgnorePattern: '^_' },
    ],

    'emotion/jsx-import': 'error',
    'emotion/syntax-preference': ['error', 'object'],

    'graphql/template-strings': ['error', { env: 'apollo', validators: 'all' }],

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
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off', // Flow
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilinis': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
