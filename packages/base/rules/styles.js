module.exports = {
  rules: {
    // Enforces using a default export if you only have one export from a file
    'import/prefer-default-export': 0,
    // provides standards around importing a file with or without a file extension
    'import/extensions': 0,
    // Enforces naming an otherwise anonymous function: https://eslint.org/docs/rules/func-names
    'func-names': 0,
    // enforces a space before function parameters, e.g. function foo() {} vs. function foo ()
    'space-before-function-paren': 0,
    // enforces trailing comma in an object or array (enabled in Prettier trailingComma)
    'comma-dangle': 0,
    // enforces break on a long time (enabled in Prettier printWidth)
    'max-len': 0,
    // disables underscores in identifiers
    'no-underscore-dangle': 0,
    // requires return statements to either always, or never, specify values
    'consistent-return': 0,
  },
};
