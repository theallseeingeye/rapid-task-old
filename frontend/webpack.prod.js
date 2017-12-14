const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // devtool: source-map is good for benchmarking the websites. It adds considerable size to the build. Turn off for full prod.
  // Leave as '' for max speed. See for more details/options: https://webpack.js.org/configuration/devtool/
  //devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // This will turn off the additional logging and testing of the included libraries. Very good at reducing bundle size
    // especially using react.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});