module.exports = {
  rules: {
    // eslint-ignore
    // check that anchor contains a valid href, e.g. "/link" or "#hash". Avoids using onClick handlers on <a> tags where you should use a button instead.
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  },
};
