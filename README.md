# eslint-config-juni

NPM package for shared ESLint config used at JuniLearning.

## Usage

### For all projects:

1. `npm i --save-dev eslint-config-juni`
2. Install peer dependencies: `npx install-peerdeps --dev eslint-config-juni`
3. Create a file called `.eslintrc.js` in the project root, next to `package.json`. Leave it empty for now. The contents will vary depending on the repo's environment type.

### `.eslintrc.js` contents:

_React projects:_

```js
module.exports = {
  extends: ["juni/packages/base", "juni/packages/react"],
};
```

_Non-React projects_

```js
module.exports = {
  extends: ["juni/packages/base"],
};
```

(more configs coming soon)

## Lint pre-push & Husky
Enforce linting config on commits by using the [lint pre-push plugin](https://www.npmjs.com/package/lint-prepush). This lints all committed files when a user attempts to push their code and will block the push if there are any linting errors.

1. Install the packages: `npm install --save-dev lint-prepush husky` 
2. Add the following to `package.json`:
```json
  "husky": {
    "hooks": {
      "pre-push": "lint-prepush"
    }
  },
  "lint-prepush": {
    "base": "master",
    "tasks": {
      "*.js": [
        "eslint"
      ]
    }
  },
```

## VSCode setup

Enable format on save capabilities in VSCode using the Juni linting config.
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
