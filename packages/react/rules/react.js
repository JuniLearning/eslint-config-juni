module.exports = {
  plugins: ['react'],
  rules: {
    // warns if an array index is used as a key
    'react/no-array-index-key': 1,
    // disables requiring React to be declared in scope of JSX elements (React is defined globally in every file that uses it)
    'react/react-in-jsx-scope': 0,
    // warns if a class-based component should be a functional component
    'react/prefer-stateless-function': 1,
    // prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements. Backwards compatibility
    'react/no-unescaped-entities': 0,
    // ensures that any non-required prop types of a component has a corresponding defaultProps value. Disabled for backwards compatibility.
    'react/require-default-props': 0,
    // Defines file extensions that are allowed to have jsx. Allowing .js because all of our non-ts jsx files have a .js extension.
    // eslint-ignore
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    // Enforces adding prop-types. Disabled for backwards compatibility, but encouraged for future use & refactor
    'react/prop-types': 0,
    // Enforces destructuring props, and flags usages of directly instantiating, such as foo={props.bar}. Disabling because it's too strict, and there are cases where each are better to be used.
    'react/destructuring-assignment': 0,
    // Enforces type on buttons, e.g. <button type="submit" />. Disabling for backwards compabitibility.
    'react/button-has-type': 0,
    // Enforces order of lifecycle methods in a React class. Disabling for backwards compabitibility and low benefit to implement.
    'react/sort-comp': 0,
    // Allows you to add a list of prop types that will be forbidden. Disabling for backwards compabitibility.
    'react/forbid-prop-types': 0,
    // Enforces that every state variable is used. Disabling for backwards compatibility.
    'react/no-unused-state': 0,
    // Enforces state initialization style
    'react/state-in-constructor': ['error', 'never'],
    // Makes sure every ref that is passed is a ref object, not a string. Disabled for backwards compatibility.
    /*
      <div className="foo" ref="Hello world">
    */
    'react/no-string-refs': 0,
    // Bad: { ...props }. Disabling because this can be a helpful tool to reduce boilerplate.
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
  },
};
