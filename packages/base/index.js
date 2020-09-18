module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    './rules/best-practices',
    './rules/styles',
    './rules/prettier.js',
    './rules/imports.js',
  ].map(require.resolve),
  env: {
    exmaVersion: 2020,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {},
};
