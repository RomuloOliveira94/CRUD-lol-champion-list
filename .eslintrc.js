module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "2018",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/state-in-constructor": "off",
    "import/no-unresolved": 0,
    "import/no-duplicates": 0,
  },
};
