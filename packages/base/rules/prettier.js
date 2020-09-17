module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // If an arrow function has one parameter, don't use parenthesis: e.g. const foo = bar => value; vs. const foo = (bar) => value;
        arrowParens: 'avoid',
        // length of a line that Prettier will wrap on
        printWidth: 85,
        /*
         Trailing comma on _multi-line_ objects and arrays
         good: [
           'foo',
           'bar',
           'baz',
         ]

         bad: [
           'foo',
           'bar',
           'baz'
          ]
        */
        trailingComma: 'all',
        // use spaces vs. tabs
        useTabs: false,
        // number of spaces when tab key is pressed
        tabWidth: 2,
        // use single quotes vs. double quotes where possible
        singleQuote: true,
        // use semicolons where possible
        semicolons: true,
      },
    ],
  },
};
