module.exports = {
  outputDir: 'dist/myLib',
  publicPath: '/myLib',
  assetsDir: 'static',
  chainWebpack: (config) => {
    // https://github.com/vuejs/vue-cli/issues/5536
    // 本来想图片资源通过相对路径应用，但在主项目无法找到图片。则放在 public 下了。
    config.plugin('copy').use(require.resolve('copy-webpack-plugin'), [
      [
        {
          from: 'public',
          // to: 'dist/myLib',
        },
      ],
    ])
  },
}
