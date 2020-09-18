module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // Enforces using a default export if you only have one export from a file
    'import/prefer-default-export': 0,
    // provides standards around importing a file with or without a file extension
    'import/extensions': 0,
  },
};
