module.exports = {
  rules: {
    // Enforces naming an otherwise anonymous function: https://eslint.org/docs/rules/func-names. Disabling as we use anonymous functions often.
    'func-names': 0,
    // enforces a space before function parameters, e.g. function foo() {} vs. function foo ()
    'space-before-function-paren': 2,
    // enforces trailing comma in an object or array (enabled in Prettier trailingComma)
    'comma-dangle': 0,
    // enforces break on a long time (enabled in Prettier printWidth)
    'max-len': 0,
    // disables underscores in identifiers
    'no-underscore-dangle': 0,
    // requires return statements to either always, or never, specify values. Disabling for flexibility.
    'consistent-return': 0,
    // enforces lines between methods in a class. Disabling for backwards compability && low benefit.
    'lines-between-class-members': 0,
    // enforces naming variables camelcase. Disabling for flexibility.
    camelcase: 0,
  },
};
