module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 85,
        trailingComma: 'all',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],
  },
  plugins: ['prettier', 'react-hooks'],
};
