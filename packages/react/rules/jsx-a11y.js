module.exports = {
  plugins: ['jsx-a11y'],
  rules: {
    // eslint-ignore
    // check that anchor contains a valid href, e.g. "/link" or "#hash". Avoids using onClick handlers on <a> tags where you should use a button instead.
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    // todo The following 3 are disabled for backwards compatibility, but should be added in later.
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
