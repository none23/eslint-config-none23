const config = {
  root: true
, env: {
    browser: true
  , commonjs: true
  , es6: true
  , jest: true
  , node: true
  }
, globals: {
    document: false
  , navigator: false
  , window: false
  }
, parser: 'babel-eslint'
, parserOptions: {
    ecmaVersion: 8
  , sourceType: 'module'
  , ecmaFeatures: {
      experimentalObjectRestSpread: true
    , generators: true
    , jsx: true
    }
  }
, plugins: [
    'flowtype'
  , 'import'
  , 'jsx-a11y'
  , 'node'
  , 'promise'
  , 'react'
  , 'standard'
  ]
, settings: {
    'import/ignore': [ 'node_modules' ]
  , 'import/extensions': ['.js']
  , 'import/resolver': { node: { extensions: ['.js', '.json'] } }
  }
, rules: {
    'accessor-pairs': 'warn'
  , 'array-callback-return': 'warn'
  , 'arrow-spacing': ['warn', {before: true, after: true}]
  , 'block-spacing': ['warn', 'always']
  , 'brace-style': ['warn', '1tbs', {allowSingleLine: true}]
  , 'camelcase': ['warn', {properties: 'never'}]
  , 'class-methods-use-this': 'warn'
  , 'comma-dangle': ['warn', {arrays: 'never', objects: 'never', imports: 'never', exports: 'never', functions: 'never'}]
  , 'comma-spacing': ['warn', {before: false, after: true}]
  , 'comma-style': [ 'warn', 'first' ]
  , 'constructor-super': 'warn'
  , 'curly': ['warn', 'multi-line']
  , 'default-case': ['warn', {commentPattern: '^no default$'}]
  , 'dot-location': ['warn', 'property']
  , 'eol-last': 'warn'
  , 'eqeqeq': ['warn', 'always', {'null': 'ignore'}]
  , 'func-call-spacing': ['warn', 'never']
  , 'generator-star-spacing': ['warn', {before: true, after: true}]
  , 'handle-callback-err': ['warn', '^(err|error)$']
  , 'indent': [ 0, 2, {VariableDeclarator: {'var': 1, 'let': 1, 'const': 2}, CallExpression: {'arguments': 'first'}, ArrayExpression: 'first', ObjectExpression: 'first', SwitchCase: 1}]
  , 'jsx-quotes': ['warn', 'prefer-single']
  , 'key-spacing': ['warn', {beforeColon: false, afterColon: true}]
  , 'keyword-spacing': ['warn', {before: true, after: true}]
  , 'max-len': 0
  , 'new-cap': ['warn', {newIsCap: true, capIsNew: false}]
  , 'new-parens': 'warn'
  , 'no-array-constructor': 'warn'
  , 'no-caller': 'warn'
  , 'no-class-assign': 'warn'
  , 'no-cond-assign': ['warn', 'always']
  , 'no-confusing-arrow': 'warn'
  , 'no-console': 0
  , 'no-compare-neg-zero': 'warn'
  , 'no-const-assign': 'warn'
  , 'no-constant-condition': ['warn', {checkLoops: false}]
  , 'no-control-regex': 'warn'
  , 'no-debugger': 'warn'
  , 'no-delete-var': 'warn'
  , 'no-dupe-args': 'warn'
  , 'no-dupe-class-members': 'warn'
  , 'no-dupe-keys': 'warn'
  , 'no-duplicate-case': 'warn'
  , 'no-empty-character-class': 'warn'
  , 'no-empty-pattern': 'warn'
  , 'no-eval': 'warn'
  , 'no-ex-assign': 'warn'
  , 'no-extend-native': 'warn'
  , 'no-extra-bind': 'warn'
  , 'no-extra-boolean-cast': 'warn'
  , 'no-extra-label': 'warn'
  , 'no-extra-parens': ['warn', 'functions']
  , 'no-fallthrough': 'warn'
  , 'no-floating-decimal': 'warn'
  , 'no-func-assign': 'warn'
  , 'no-global-assign': 'warn'
  , 'no-implied-eval': 'warn'
  , 'no-inner-declarations': ['warn', 'functions']
  , 'no-invalid-regexp': 'warn'
  , 'no-irregular-whitespace': 'warn'
  , 'no-iterator': 'warn'
  , 'no-label-var': 'warn'
  , 'no-labels': ['warn', {allowLoop: false, allowSwitch: false}]
  , 'no-lone-blocks': 'warn'
  , 'no-loop-func': 'warn'
  , 'no-mixed-operators': ['warn', {
      allowSamePrecedence: true
    , groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>']
      , ['==', '!=', '===', '!==', '>', '>=', '<', '<=']
      , ['&&', '||']
      , ['in', 'instanceof']]
    }]
  , 'no-mixed-spaces-and-tabs': 'warn'
  , 'no-multi-spaces': 'warn'
  , 'no-multi-str': 'warn'
  , 'no-multiple-empty-lines': ['warn', {max: 1, maxEOF: 0}]
  , 'no-native-reassign': 'warn'
  , 'no-negated-in-lhs': 'warn'
  , 'no-new': 'warn'
  , 'no-new-func': 'warn'
  , 'no-new-object': 'warn'
  , 'no-new-require': 'warn'
  , 'no-new-symbol': 'warn'
  , 'no-new-wrappers': 'warn'
  , 'no-obj-calls': 'warn'
  , 'no-octal': 'warn'
  , 'no-octal-escape': 'warn'
  , 'no-path-concat': 'warn'
  , 'no-proto': 'warn'
  , 'no-redeclare': 'warn'
  , 'no-regex-spaces': 'warn'
  , 'no-restricted-syntax': ['warn', 'LabeledStatement', 'WithStatement']
  , 'no-return-assign': ['warn', 'except-parens']
  , 'no-return-await': 'warn'
  , 'no-script-url': 'warn'
  , 'no-self-assign': 'warn'
  , 'no-self-compare': 'warn'
  , 'no-sequences': 'warn'
  , 'no-shadow-restricted-names': 'warn'
  , 'no-sparse-arrays': 'warn'
  , 'no-tabs': 'warn'
  , 'no-template-curly-in-string': 'warn'
  , 'no-this-before-super': 'warn'
  , 'no-throw-literal': 'warn'
  , 'no-trailing-spaces': 'warn'
  , 'no-undef': 'warn'
  , 'no-undef-init': 'warn'
  , 'no-unexpected-multiline': 'warn'
  , 'no-unmodified-loop-condition': 'warn'
  , 'no-unneeded-ternary': ['warn', {defaultAssignment: false}]
  , 'no-unreachable': 'warn'
  , 'no-unsafe-finally': 'warn'
  , 'no-unsafe-negation': 'warn'
  , 'no-unused-expressions': ['warn', {allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true}]
  , 'no-unused-labels': 'warn'
  , 'no-unused-vars': ['warn', {vars: 'local', varsIgnorePattern: '^_', args: 'none', ignoreRestSiblings: true}]
  , 'no-use-before-define': ['warn', {functions: false, classes: false, variables: false}]
  , 'no-useless-call': 'warn'
  , 'no-useless-computed-key': 'warn'
  , 'no-useless-concat': 'warn'
  , 'no-useless-constructor': 'warn'
  , 'no-useless-escape': 'warn'
  , 'no-useless-rename': ['warn', {ignoreDestructuring: false, ignoreImport: false, ignoreExport: false}]
  , 'no-useless-return': 'warn'
  , 'no-whitespace-before-property': 'warn'
  , 'no-with': 'warn'
  , 'object-property-newline': ['warn', {allowMultiplePropertiesPerLine: true}]
  , 'one-var': ['warn', {initialized: 'never'}]
  , 'operator-assignment': ['warn', 'always']
  , 'operator-linebreak': ['warn', 'after', {overrides: {'?': 'before', ':': 'before'}}]
  , 'padded-blocks': ['warn', {blocks: 'never', switches: 'never', classes: 'never'}]
  , 'prefer-promise-reject-errors': 'warn'
  , 'prefer-template': 'warn'
  , 'quotes': ['warn', 'single', {avoidEscape: true, allowTemplateLiterals: true}]
  , 'radix': 'warn'
  , 'require-yield': 'warn'
  , 'rest-spread-spacing': ['warn', 'never']
  , 'semi': ['warn', 'never']
  , 'semi-spacing': ['warn', {before: false, after: true}]
  , 'space-before-blocks': ['warn', 'always']
  , 'space-before-function-paren': ['warn', 'always']
  , 'space-in-parens': ['warn', 'never']
  , 'space-infix-ops': 'warn'
  , 'space-unary-ops': ['warn', {words: true, nonwords: false}]
  , 'spaced-comment': ['warn', 'always', {
      line: {
        markers: ['*package', '!', '/', ',']
      }
    , block: {
        balanced: true
      , markers: ['*package', '!', ',', ':', '::', 'flow-include']
      , exceptions: ['*']
      }
    }]
  , 'symbol-description': 'warn'
  , 'template-curly-spacing': ['warn', 'never']
  , 'template-tag-spacing': ['warn', 'never']
  , 'unicode-bom': ['warn', 'never']
  , 'use-isnan': 'warn'
  , 'valid-typeof': ['warn', { 'requireStringLiterals': true }]
  , 'wrap-iife': ['warn', 'any', { 'functionPrototypeMethods': true }]
  , 'yield-star-spacing': ['warn', 'both']
  , 'yoda': ['warn', 'never']
  , 'import/default': 'warn'
  , 'import/export': 'warn'
  , 'import/first': 'warn'
  , 'import/named': 'warn'
  , 'import/namespace': 'warn'
  , 'import/no-amd': 'warn'
  , 'import/no-duplicates': 'warn'
  , 'import/no-extraneous-dependencies': 'warn'
  , 'import/no-named-as-default': 'warn'
  , 'import/no-named-as-default-member': 'warn'
  , 'import/no-unresolved': ['warn', { commonjs: true }]
  , 'import/no-duplicates': 'warn'
  , 'import/no-webpack-loader-syntax': 'warn'
  , 'jsx-a11y/aria-props': 'warn'
  , 'jsx-a11y/heading-has-content': 'warn'
  , 'jsx-a11y/href-no-hash': 'warn'
  , 'jsx-a11y/label-has-for': 'warn'
  , 'jsx-a11y/mouse-events-have-key-events': 'warn'
  , 'jsx-a11y/aria-role': 'warn'
  , 'jsx-a11y/role-has-required-aria-props': 'warn'
  , 'jsx-a11y/role-supports-aria-props': 'warn'
  , 'jsx-a11y/img-has-alt': 'warn'
  , 'jsx-a11y/img-redundant-alt': 'warn'
  , 'jsx-a11y/no-access-key': 'warn'
  , 'node/no-deprecated-api': 'warn'
  , 'node/process-exit-as-throw': 'warn'
  , 'promise/param-names': 'warn'
  , 'react/forbid-prop-types': 'warn'
  , 'react/jsx-boolean-value': 'warn'
  , 'react/jsx-curly-spacing': ['warn', 'never']
  , 'react/jsx-equals-spacing': ['warn', 'never']
  , 'react/jsx-first-prop-new-line': 0 // OFF
  , 'react/jsx-indent': ['warn', 2]
  , 'react/jsx-indent-props': ['warn', 2]
  , 'react/jsx-no-bind': ['warn', {allowArrowFunctions: true, allowBind: false, ignoreRefs: true}]
  , 'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }]
  , 'react/jsx-no-undef': 'warn'
  , 'react/jsx-pascal-case': ['warn', {allowAllCaps: true , ignore: []}]
  , 'react/jsx-space-before-closing': 'warn'
  , 'react/jsx-uses-vars': 'warn'
  , 'react/jsx-uses-react': 'warn'
  , 'react/no-danger-with-children': 'warn'
  , 'react/no-deprecated': 'warn'
  , 'react/no-direct-mutation-state': 'warn'
  , 'react/no-did-update-set-state': 'warn'
  , 'react/no-is-mounted': 'warn'
  , 'react/no-unknown-property': 'warn'
  , 'react/no-unused-prop-types': 'warn'
  , 'react/prop-types': 'warn'
  , 'react/react-in-jsx-scope': 'warn'
  , 'react/require-render-return': 'warn'
  , 'react/self-closing-comp': 'warn'
  , 'react/style-prop-object': 'warn'
  , 'standard/array-bracket-even-spacing': ['warn', 'either']
  , 'standard/computed-property-even-spacing': ['warn', 'even']
  , 'standard/no-callback-literal': 'warn'
  , 'standard/object-curly-even-spacing': ['warn', 'either']
  , 'flowtype/define-flow-type': 'warn'
  , 'flowtype/require-valid-file-annotation': 'warn'
  , 'flowtype/use-flow-type': 'warn'
  }
}

module.exports = config
