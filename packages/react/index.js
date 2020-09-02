module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    './rules/react',
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
}
