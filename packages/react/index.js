module.exports = {
  extends: [
    '../../node_modules/eslint-config-airbnb',
    '../../node_modules/eslint-config-prettier',
    '../../node_modules/eslint-config-prettier/react',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y.js',
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
