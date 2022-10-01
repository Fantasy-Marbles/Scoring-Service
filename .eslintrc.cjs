module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ["app.js"],
  rules: {
    "new-cap": ["error", { "capIsNewExceptions": ["Router"] }]
  }
};
