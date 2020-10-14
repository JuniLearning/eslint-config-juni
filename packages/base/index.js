module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    './rules/best-practices',
    './rules/styles',
    './rules/prettier.js',
    './rules/imports.js',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  rules: {},
};
