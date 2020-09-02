# eslint-config-juni

NPM package for shared ESLint config used at JuniLearning.

## Usage

1. `npm i --save-dev eslint-config-juni`
2. Install peer dependencies: `npx install-peerdeps --dev eslint-config-juni`
3. Available config options at the moment are 'base' and 'react'. If you include 'react' in your project, it will also include 'base,' but not vice-versa. Include them accordingly based on the environment of your project.
4. Create a file called `.eslintrc.js` in the project root, next to `package.json`:
   For non-React projects:

```js
module.exports = {
  extends: ["juni/base"],
};
```

For React projects:

```js
module.exports = {
  extends: ["juni/react"],
};
```

5. (optional) Enable format on save capabilities in VSCode using the Juni linting config.
   Add the following to `./.vscode/settings.json`:

```json
  // enables VSCode's default formatter
  "editor.formatOnSave": true,
  // disables the default formatter for all Javascript files. This will be handled by the Juni eslint config.
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // If you have the VSCode-prettier plugin, it will be disabled for Javascript files in favor of the prettier config in Juni's eslint config.
  "prettier.disableLanguages": [
    "javascript",
    "javascriptreact"
  ],
  "eslint.alwaysShowStatus": true
```

# How to publish

```bash
# run only once to install publishing tool
npm i np -g
```

```bash
np --no-tests
```
