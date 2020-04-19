module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js?$": "babel-jest"
  },
  // transformIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(element-ui))"],
  
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    // 原版本
    // "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    // "**/tests/unit/list.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    "**/tests/unit/practice.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  // collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.{js,vue}"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}
