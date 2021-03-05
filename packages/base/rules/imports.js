module.exports = {
  plugins: ['import'],
  rules: {
    // Enforces using a default export if you only have one export from a file. Disabled as there is marginal value for high cost to implement, files with multiple exports might not necessitate a default export.
    'import/prefer-default-export': 0,
    // provides standards around importing a file with or without a file extension. Disabled for backwards compatibility.
    'import/extensions': 0,
    // Forbids the import of external modules that are not declared in package.json.
    'import/no-extraneous-dependencies': 2,
    // todo The following rule is disabled for backwards compatibility but should be added back in at a later point.
    // ensures an imported module can be resolve to a module on the local filesystem
    'import/no-unresolved': 0,
  },
};
