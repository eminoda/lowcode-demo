module.exports = {
  outputDir: 'dist/myLib',
  assetsDir: 'static',
  // 参考 qiankun 覆写 __webpack_public_path__ 为主项目根路径，解决图片加载问题。就不用下面的 publicPath，chainWebpack copy 方案了。
  // publicPath: '/myLib',
  // chainWebpack: (config) => {
  //   // https://github.com/vuejs/vue-cli/issues/5536
  //   // 本来想图片资源通过相对路径应用，但在主项目无法找到图片。则放在 public 下了。
  //   config.plugin('copy').use(require.resolve('copy-webpack-plugin'), [
  //     [
  //       {
  //         from: 'public',
  //         // to: 'dist/myLib',
  //       },
  //     ],
  //   ])
  // },
}
