module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": ["warn"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function", "function-declaration"],
      },
    ],
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-shadow": [
      "error",
      {
        allow: ["resolve", "reject", "done", "cb", "error", "err"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    "comma-dangle": ["off"],
    "react/jsx-one-expression-per-line": [
      "off",
      {
        allow: "single-child",
      },
    ],
  },
};
