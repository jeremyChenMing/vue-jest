module.exports = {
  // "presets": [
  //   "@vue/cli-plugin-babel/preset"
  // ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ],
  "plugins": [
    "transform-es2015-modules-commonjs",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
