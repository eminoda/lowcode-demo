const path = require('path')
module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  mode: 'development',
  output: {
    library: {
      // library.name 必须是有效变量 valid identifier。不能为 hello-app
      name: 'hello_app',
      // type: 'var',
      // type: 'window',
      // type: 'commonjs',
      // type: 'commonjs2',
      type: 'umd2',
      // type: 'jsonp',
    },
    // configuration.output has an unknown property 'jsonpFunction'.
    // jsonpFunction: 'webpackJsonp_hello',
  },
  devtool: 'hidden-source-map',
}
