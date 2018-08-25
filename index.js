const config = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: true,
      jsx: true
    }
  },

  extends: [
    "airbnb",
    "plugin:eslint-comments/recommended",
    "plugin:redux-saga/recommended",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended"
  ],

  settings: {
    "import/ignore": ["node_modules"],
    "import/extensions": [".js", ".json"],
    "import/resolver": { node: { paths: path.resolve(__dirname, ".") } }
  },

  plugins: [
    "eslint-comments",
    "flowtype",
    "import",
    "jest",
    "jsx-a11y",
    "node",
    "prettier",
    "react",
    "redux-saga"
  ],

  rules: {
    camelcase: "off",
    "no-nested-ternary": "off",
    "no-multiple-empty-lines": ["error", { max: 3, maxEOF: 0 }],
    "no-underscore-dangle": "off",
    "no-unreachable": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }
    ],
    "object-curly-newline": "off",
    "padded-blocks": [
      "error",
      { blocks: "never", switches: "never", classes: "never" }
    ],
    "prefer-const": "error",
    radix: "off",

    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",

    "import/default": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/extensions": ["error", "never"],
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",

    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/no-access-key": "error",

    "node/no-deprecated-api": "error",
    "node/process-exit-as-throw": "error",

    "react/forbid-prop-types": ["error", { forbid: ["any"] }],
    "react/default-props-match-prop-types": "off", // Flow
    "react/jsx-curly-brace-presence": "off", // styled-jsx
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "react/no-array-index-key": "off",
    "react/no-unused-prop-types": "off", // Flow
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true }
    ],
    "react/sort-comp": "off",

    "flowtype/define-flow-type": "error",
    "flowtype/require-valid-file-annotation": "error",
    "flowtype/use-flow-type": "error",

    "prettier/prettier": "error"
  }
};

module.exports = config;
