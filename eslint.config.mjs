import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/", "node_modules/"],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        node: true
      }
    },
    rules: {

    }
  }
];
