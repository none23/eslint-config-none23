// @flow strict

const presets = [
  'airbnb',
  'airbnb/hooks',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:react/recommended',
  'plugin:sonarjs/recommended',
  'plugin:unicorn/recommended',
  'prettier',
  'prettier/react',
  'prettier/unicorn',
];
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
  extends: [...presets, 'plugin:flowtype/recommended', 'prettier/flowtype'],
  plugins: [...plugins, 'flowtype'],
  settings: {
    'import/extensions': ['.js', '.mjs', '.ts', '.jsx', '.tsx'],
  },

  rules: {
    'no-else-return': 'off',
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

    camelcase: 'off',
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

    'react/jsx-indent': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/default-props-match-prop-types': 'off', // flow/ts
    'react/jsx-curly-brace-presence': 'off', // styled-jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.mjs', '.tsx'] }],
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off', // flow/ts
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilinis': 'off',
    'react/sort-comp': 'off',
    'react/jsx-props-no-spreading': 'off', // todo

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // 'emotion/jsx-import': 'error',
    // 'emotion/syntax-preference': ['error', 'object'],
    // 'graphql/template-strings': ['error', { env: 'apollo', validators: 'all' }],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
      env: { jest: true },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [...presets, 'plugin:import/typescript'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
      },
      plugins: [...plugins, '@typescript-eslint'],
      rules: {
        'no-restricted-globals': [
          // (see https://github.com/microsoft/TypeScript/issues/14306)
          'error',
          'postMessage',
          'blur',
          'focus',
          'close',
          'frames',
          'self',
          'parent',
          'opener',
          'top',
          'length',
          'closed',
          'location',
          'origin',
          'name',
          'locationbar',
          'menubar',
          'personalbar',
          'scrollbars',
          'statusbar',
          'toolbar',
          'status',
          'frameElement',
          'navigator',
          'customElements',
          'external',
          'screen',
          'innerWidth',
          'innerHeight',
          'scrollX',
          'pageXOffset',
          'scrollY',
          'pageYOffset',
          'screenX',
          'screenY',
          'outerWidth',
          'outerHeight',
          'devicePixelRatio',
          'clientInformation',
          'screenLeft',
          'screenTop',
          'defaultStatus',
          'defaultstatus',
          'styleMedia',
          'onanimationend',
          'onanimationiteration',
          'onanimationstart',
          'onsearch',
          'ontransitionend',
          'onwebkitanimationend',
          'onwebkitanimationiteration',
          'onwebkitanimationstart',
          'onwebkittransitionend',
          'isSecureContext',
          'onabort',
          'onblur',
          'oncancel',
          'oncanplay',
          'oncanplaythrough',
          'onchange',
          'onclick',
          'onclose',
          'oncontextmenu',
          'oncuechange',
          'ondblclick',
          'ondrag',
          'ondragend',
          'ondragenter',
          'ondragleave',
          'ondragover',
          'ondragstart',
          'ondrop',
          'ondurationchange',
          'onemptied',
          'onended',
          'onerror',
          'onfocus',
          'oninput',
          'oninvalid',
          'onkeydown',
          'onkeypress',
          'onkeyup',
          'onload',
          'onloadeddata',
          'onloadedmetadata',
          'onloadstart',
          'onmousedown',
          'onmouseenter',
          'onmouseleave',
          'onmousemove',
          'onmouseout',
          'onmouseover',
          'onmouseup',
          'onmousewheel',
          'onpause',
          'onplay',
          'onplaying',
          'onprogress',
          'onratechange',
          'onreset',
          'onresize',
          'onscroll',
          'onseeked',
          'onseeking',
          'onselect',
          'onstalled',
          'onsubmit',
          'onsuspend',
          'ontimeupdate',
          'ontoggle',
          'onvolumechange',
          'onwaiting',
          'onwheel',
          'onauxclick',
          'ongotpointercapture',
          'onlostpointercapture',
          'onpointerdown',
          'onpointermove',
          'onpointerup',
          'onpointercancel',
          'onpointerover',
          'onpointerout',
          'onpointerenter',
          'onpointerleave',
          'onafterprint',
          'onbeforeprint',
          'onbeforeunload',
          'onhashchange',
          'onlanguagechange',
          'onmessage',
          'onmessageerror',
          'onoffline',
          'ononline',
          'onpagehide',
          'onpageshow',
          'onpopstate',
          'onrejectionhandled',
          'onstorage',
          'onunhandledrejection',
          'onunload',
          'performance',
          'stop',
          'open',
          'print',
          'captureEvents',
          'releaseEvents',
          'getComputedStyle',
          'matchMedia',
          'moveTo',
          'moveBy',
          'resizeTo',
          'resizeBy',
          'getSelection',
          'find',
          'createImageBitmap',
          'scroll',
          'scrollTo',
          'scrollBy',
          'onappinstalled',
          'onbeforeinstallprompt',
          'crypto',
          'ondevicemotion',
          'ondeviceorientation',
          'ondeviceorientationabsolute',
          'indexedDB',
          'webkitStorageInfo',
          'chrome',
          'visualViewport',
          'speechSynthesis',
          'webkitRequestFileSystem',
          'webkitResolveLocalFileSystemURL',
          'openDatabase',
        ],
        'no-unused-vars': 'off',
        'babel/no-unused-vars': 'off',
        'flowtype/define-flow-type': 'off',
        'flowtype/require-valid-file-annotation': 'off',
        'flowtype/use-flow-type': 'off',
      },
    },
  ],
};
