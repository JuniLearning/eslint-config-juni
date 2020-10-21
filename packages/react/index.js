module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y.js',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  rules: {},
};
