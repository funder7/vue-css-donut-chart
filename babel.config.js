module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ],
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3,
      }
    ]
  ]
}
