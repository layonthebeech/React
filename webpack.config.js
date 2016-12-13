// In webpack.config.js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname + '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: path.resolve(__dirname +'/dist')
  },

  plugins: [HTMLWebpackPluginConfig]
}
