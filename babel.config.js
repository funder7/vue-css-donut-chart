module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        // https://jestjs.io/docs/en/getting-started#using-babel
        targets: { node: 'current' }
      }
    ],
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      { corejs: 3 }
    ]
  ]
}
