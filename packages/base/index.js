module.exports = {
  extends: [
    'airbnb',
    'prettier',
    './rules/best-practices',
    './rules/styles',
    './rules/prettier.js'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  rules: {},
  plugins: ['prettier', 'react-hooks'],
}
