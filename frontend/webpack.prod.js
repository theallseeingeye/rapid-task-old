const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  // devtool: source-map is good for benchmarking the websites. It adds considerable size to the build. Turn off for full prod.
  // Leave as '' for max speed. See for more details/options: https://webpack.js.org/configuration/devtool/
  devtool: '',
  plugins: [
    // new webpack.IgnorePlugin(/gsap/),
    // Shrinks down the spaces and file size
    new UglifyJSPlugin({
    }),
    new CleanWebpackPlugin(['dist']),
    // This will turn off the additional logging and testing of the included libraries. Very good at reducing bundle size
    // especially using react.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_URL' : JSON.stringify('https://api.rapidtask.com/')
      }
    })
  ]
});