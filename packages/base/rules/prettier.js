module.exports = {
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
};
