// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'vue3',
        ts: true,
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'taro-hooks',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
      'taro-hooks',
    ],
  ],
};