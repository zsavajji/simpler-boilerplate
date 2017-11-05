const webpack = require('webpack'),
      path    = require('path'),
      conf    = require('./package.json').config;

module.exports = {
  entry: {
    vendor: ['jquery'],
    main: path.resolve(conf.scripts.dev + 'main.js')
  },
  output: {
    filename: 'bundle.[name].js',
    publicPath: path.resolve(conf.dist),
    path: path.resolve(conf.scripts.dist)
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true
    })
  ]
}
