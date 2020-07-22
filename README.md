# eslint-config-juni
NPM package for shared ESLint config used at JuniLearning.


# How to publish
```bash
# run only once to install publishing tool
npm i np -g 
```

```bash
np --no-tests
```

## Usage
1. `npm i --save-dev eslint-config-juni`
2. Install peer dependencies: `npx install-peerdeps --dev eslint-config-juni`
3. Create a file called `.eslintrc.js` in the project root, next to `package.json`:
```js
module.exports = {
  extends: ['juni'],
};
```

4. (optional) Enable format on save capabilities in VSCode using the Juni linting config. 
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
