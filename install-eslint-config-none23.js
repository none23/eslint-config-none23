// #!/usr/bin/env node
// @flow strict

const fs = require('fs');
const { join } = require('path');
const packageJson = require('./package.json');

const { log } = console;
/*::

type Deps = { [string]: string };
type PackageJSON = {
  name: string,
  dependencies?: Deps,
  devDependencies?: Deps,
  peerDependencies?: Deps,
  ...
};

type Config = {|
  env?: { [key: string]: boolean, ... },
  parser?: string,
  parserOptions?: { [key: string]: mixed,... },
  extends?: string[],
  plugins?: string[],
  rules?: { [rule: string]: string | mixed[], ... },
  settings?: { [option: string]: mixed, ... },
  overrides?: Array<{ files: Array<string>,  ...Config, ... }>,
|};
*/

const PACKAGE_NAME = 'eslint-config-none23';
const NODE_MODULES = 'node_modules';
const CONFIG_FILE_NAME = '.eslintrc.json';

// const projectRoot /* string */ = fileURLToPath(import.meta.url).replace(/\/node_modules\/.*/, '');

function generateConfig(installed /* : { +[string]: boolean } */) /* : Config */ {
  const presets = [
    'airbnb',
    installed.react ? 'airbnb/hooks' : null,
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    installed.react ? 'plugin:react/recommended' : null,
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    installed.react ? 'prettier/react' : null,
    installed.relay ? 'plugin:relay/recommended' : null,
    'prettier/unicorn',
    installed.nextJs ? 'plugin:@next/next/recommended' : null,
  ].filter(Boolean);

  const plugins = [
    'eslint-comments',
    installed.graphql ? 'graphql' : null,
    'import',
    installed.react ? 'jsx-a11y' : null,
    'promise',
    installed.react ? 'react' : null,
    installed.react ? 'react-hooks' : null,
    'sonarjs',
    'unicorn',
    installed.nextJs ? '@next/next' : null,
    installed.emotion ? '@emotion' : null,
  ].filter(Boolean);

  const reactRules = {
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
    'jsx-a11y/label-has-associated-control': 'off',

    'react/jsx-indent': 'off',
    'react/prop-types': 'off', // flow/ts
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
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  };

  const emotionRules = {
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/syntax-preference': ['warn', 'object'],
  };

  const baseRules = {
    camelcase: 'off',
    'no-else-return': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 0 }],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'warn',
      { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
    ],
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': [
      'warn',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    'no-void': 'off',
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': 'warn',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/', '::'],
      },
    ],

    // 'graphql/template-strings': ['error', { env: 'apollo', validators: 'all' }],
    // 'graphql/template-strings': ['error', { env: 'relay', validators: 'all' }],

    'import/default': 'warn',
    'import/named': 'warn',
    'import/namespace': 'error',
    'import/extensions': 'off', // relay type imports trigger false-positives

    'sonarjs/no-duplicate-string': ['error', 5],

    'unicorn/filename-case': 'off',
    'unicorn/catch-error-name': ['warn', { name: 'err' }],
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-spread': 'off',
  };

  const rules = [baseRules, reactRules, emotionRules]
    .filter(Boolean)
    .reduce((res, obj) => Object.assign(res, obj), {});

  const flowOverride = {
    files: ['**/*.js', '**/*.jsx'],
    extends: [...presets, 'plugin:flowtype/recommended'],
    plugins: [...plugins, 'flowtype'],

    rules: {
      ...rules,
      'no-unused-vars': 'warn',
      'flowtype/define-flow-type': 'error',
      'flowtype/require-valid-file-annotation': 'error',
      'flowtype/use-flow-type': 'error',
    },
  };

  const tsOverride = {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...presets,
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:import/typescript',
    ],
    plugins: [...plugins, '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      project: (__dirname, 'tsconfig.json'),
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      warnOnUnsupportedTypeScriptVersion: false,
      tsconfigRootDir: __dirname,
    },

    rules: {
      ...rules,

      // Disable `no-undef` rule within TypeScript files because it incorrectly errors when exporting default interfaces
      // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/50
      // This will be caught by TypeScript compiler if `strictNullChecks` (or `strict`) is enabled
      'no-undef': 'off',
      'no-unused-vars': 'off',

      /* Using TypeScript makes it safe enough to disable the checks below */
      // Disable ESLint-based module resolution check for improved monorepo support
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
      'import/no-unresolved': 'off',

      '@typescript-eslint/no-unused-vars': 'off', // doesn't play well with emotion
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        { 'ts-expect-error': 'allow-with-description', minimumDescriptionLength: 3 },
      ],

      // (see https://github.com/microsoft/TypeScript/issues/14306)
      // prettier-ignore
      'no-restricted-globals': [ 'error', 'postMessage', 'blur', 'focus', 'close', 'frames', 'self', 'parent', 'opener', 'top', 'length', 'closed', 'location', 'origin', 'name', 'locationbar', 'menubar', 'personalbar', 'scrollbars', 'statusbar', 'toolbar', 'status', 'frameElement', 'navigator', 'customElements', 'external', 'screen', 'innerWidth', 'innerHeight', 'scrollX', 'pageXOffset', 'scrollY', 'pageYOffset', 'screenX', 'screenY', 'outerWidth', 'outerHeight', 'devicePixelRatio', 'clientInformation', 'screenLeft', 'screenTop', 'defaultStatus', 'defaultstatus', 'styleMedia', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onsearch', 'ontransitionend', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkittransitionend', 'isSecureContext', 'onabort', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onseeked', 'onseeking', 'onselect', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwheel', 'onauxclick', 'ongotpointercapture', 'onlostpointercapture', 'onpointerdown', 'onpointermove', 'onpointerup', 'onpointercancel', 'onpointerover', 'onpointerout', 'onpointerenter', 'onpointerleave', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onhashchange', 'onlanguagechange', 'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onstorage', 'onunhandledrejection', 'onunload', 'performance', 'stop', 'open', 'print', 'captureEvents', 'releaseEvents', 'getComputedStyle', 'matchMedia', 'moveTo', 'moveBy', 'resizeTo', 'resizeBy', 'getSelection', 'find', 'createImageBitmap', 'scroll', 'scrollTo', 'scrollBy', 'onappinstalled', 'onbeforeinstallprompt', 'crypto', 'ondevicemotion', 'ondeviceorientation', 'ondeviceorientationabsolute', 'indexedDB', 'webkitStorageInfo', 'chrome', 'visualViewport', 'speechSynthesis', 'webkitRequestFileSystem', 'webkitResolveLocalFileSystemURL', 'openDatabase']
    },
  };
  const jestOverride = {
    files: [
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.js',
      '**/*.spec.ts',
      '**/*.spec.tsx',
    ],
    env: { jest: true },
    extends: [
      ...presets,
      'plugin:jest/recommended',
      'plugin:jest/style',
      'plugin:testing-library/react',
    ],

    plugins: [...plugins, 'jest', 'testing-library'],
  };

  return {
    extends: presets,
    plugins,
    rules,
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.ts', '.jsx', '.tsx', '.json'],
        },
      },
      'import/extensions': ['.js', '.mjs', '.ts', '.jsx', '.tsx'],
    },
    overrides: [
      jestOverride,
      installed.flow ? flowOverride : null,
      installed.ts ? tsOverride : null,
    ].filter(Boolean),
  };
}

function createConfigFiles(projectRoot /* : string */) {
  const projectPackageJsonPath = `${projectRoot}/package.json`;
  const configFilePath = `${projectRoot}/${CONFIG_FILE_NAME}`;

  return fs.promises
    .readFile(projectPackageJsonPath, 'utf8')
    .then((string) => JSON.parse(string))
    .then((projectPackageJson /* : PackageJSON */) => {
      const packageIsInstalled = (packageName /* : string */) =>
        projectPackageJson.devDependencies?.[packageName] != null ||
        projectPackageJson.dependencies?.[packageName] != null ||
        projectPackageJson.peerDependencies?.[packageName] != null;

      const installed = {
        nextJs: packageIsInstalled('next'),
        react: packageIsInstalled('react'),
        emotion: packageIsInstalled('@emotion/react'),
        flow: packageIsInstalled('flow-bin'),
        ts: packageIsInstalled('typescript'),
        graphql: packageIsInstalled('graphql'),
        relay: packageIsInstalled('react-relay'),
        apollo: packageIsInstalled('@apollo/client'),
      };

      const peerDependencyRequred = {
        '@emotion/eslint-plugin': installed.emotion,
        '@next/eslint-plugin-next': installed.nextJs,
        '@typescript-eslint/eslint-plugin': installed.ts,
        '@typescript-eslint/parser': installed.ts,
        'babel-eslint': true,
        'eslint-config-airbnb': true,
        'eslint-config-prettier': true,
        'eslint-plugin-eslint-comments': true,
        'eslint-plugin-flowtype': installed.flow,
        'eslint-plugin-import': true,
        'eslint-plugin-jest': true,
        'eslint-plugin-jsx-a11y': installed.react,
        'eslint-plugin-prettier': true,
        'eslint-plugin-promise': true,
        'eslint-plugin-react': installed.react,
        'eslint-plugin-react-hooks': installed.react,
        'eslint-plugin-relay': installed.relay,
        'eslint-plugin-sonarjs': true,
        'eslint-plugin-testing-library': installed.react,
        prettier: true,
        eslint: true,
      };

      const peerDependencies = Object.keys(peerDependencyRequred)
        .filter((name) => peerDependencyRequred[name])
        .reduce((res, name) => {
          res[name] =
            packageJson.devDependencies?.[name] ||
            packageJson.peerDependencies?.[name] ||
            packageJson.dependencies?.[name] ||
            'latest';
          return res;
        }, {});

      const newPackageJson = {
        ...projectPackageJson,
        devDependencies: {
          ...projectPackageJson.devDependencies,
          ...peerDependencies,
        },
      };
      const config = generateConfig(installed);

      const newPackageJsonString = JSON.stringify(newPackageJson, null, 2);
      const configString = JSON.stringify(config, null, 2);

      return Promise.allSettled([
        fs.promises
          .writeFile(projectPackageJsonPath, newPackageJsonString, 'utf8')
          .then(() => log(`Patched devDependencies inside '${projectPackageJsonPath}'`)),
        fs.promises
          .writeFile(configFilePath, configString, 'utf8')
          .then(() => log(`Saved configuration file: '${configFilePath}'`)),
      ]);
    });
}

const targetDir = __dirname.split('/node_modules')[0];

log(targetDir);

createConfigFiles(targetDir);
