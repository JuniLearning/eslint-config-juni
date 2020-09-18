module.exports = {
  plugins: ['import'],
  rules: {
    // Enforces using a default export if you only have one export from a file
    'import/prefer-default-export': 0,
    // provides standards around importing a file with or without a file extension
    'import/extensions': 0,
  },
};
