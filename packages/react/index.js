module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y.js',
    '../base',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  rules: {},
};
