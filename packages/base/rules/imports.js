module.exports = {
  plugins: ['import'],
  rules: {
    // Enforces using a default export if you only have one export from a file.
    'import/prefer-default-export': 0,
    // provides standards around importing a file with or without a file extension. Disabled for backwards compatibility.
    'import/extensions': 0,
    // todo The following two are disabled for backwards compatibility but should be added back in at a later point.
    // Forbids the import of external modules that are not declared in package.json.
    'import/no-extraneous-dependencies': 0,
    // ensures an imported module can be resolve to a module on the local filesystem
    'import/no-unresolved': 0,
  },
};
