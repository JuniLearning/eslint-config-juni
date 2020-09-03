module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // shows an error when 1) A hook is called from a class-based component or non-React function, and 2) Hook is NOT called conditionally
    'react-hooks/rules-of-hooks': 'error',
    // warns when dependency arrays don't include all of the outside functions and properties that it mentions.
    'react-hooks/exhaustive-deps': 'warn',
  },
};
