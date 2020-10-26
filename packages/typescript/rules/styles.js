module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    /*
      Throws error on prefixing interface names with I (e.g. IUser). Disabling to keep convention with other interface-able languages.
     */
    '@typescript-eslint/interface-name-prefix': 0,
    // disables the use of any. Will probably add this back later, but adding for backwards compatibility.
    '@typescript-eslint/no-explicit-any': 0,
    // disabling in favor of the typescript-specific rule.
    'no-use-before-define': 0,
    // Throws warning when a variable is used before definition. Disabling for backwards compatibility because it also complains about react components being called in jsx before the definition in a file
    '@typescript-eslint/no-use-before-define': 0,
    // Throws warning if you use ! to assert non-nullish, e.g. foo.find(f => f.bar)! (normally this could be undefined)
    '@typescript-eslint/no-non-null-assertion': 0,
    // disabling because the vanilla version throws errors on optional chaining
    'no-unused-expressions': 0,
    // throws error on orphan expressions
    '@typescript-eslint/no-unused-expressions': 2,
    // throws error if you do not define a return type to a function. Disabling for backwards compatibility.
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
