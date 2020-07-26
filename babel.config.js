module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    // Jest Config
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
  },
};
