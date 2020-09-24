module.exports = {
  rules: {
    // disallows debugger statements
    'no-debugger': 0,
    // disallow use of window.alert()
    'no-alert': 0,
    // disallows use of await in loops
    'no-await-in-loop': 0,
    // disallows assignment in a return statement, e.g. return foo = bar + 2;
    'no-return-assign': ['error'],
    // restricts the use of various...unsavory... JavaScript features. Takes an array of ESTree node types.
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // use const where possible, rather than let or var
    // prettier-ignore
    'prefer-const': [ 'error', { destructuring: 'all' } ],
    // enforces braces in an arrow function body where possible, but able to omit if not needed
    'arrow-body-style': [2, 'as-needed'],
    // every expression should be used or returned within the scope
    // prettier-ignore
    'no-unused-expressions': [ 2, { allowTaggedTemplates: true } ],
    // disallows changing the value of a parameter.
    'no-param-reassign': [2, { props: false }],
    // disables console. methods
    'no-console': 0,
    // enforces a certain number of classes per file, defaults to 1. Disabled due to several files with multiple, smaller React Class components
    'max-classes-per-file': 0,
    // Throws error if you have multiple levels in a ternary.
    'no-nested-ternary': 0,
    // Disabling the following 3 for backwards compatibility, but they will be added back in asap in favor of the comment below
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    // every variable should be used, exported, or returned
    // 'no-unused-vars': [
    //   'error',
    //   { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    // ],
  },
};
