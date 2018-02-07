module.exports = {
    extends: [
        './rules/base',
        './rules/prefer-spread',
        './rules/more',
        ].map(require.resolve),
    rules: {},
};
