module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};
