const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.prod.js');

// This file extends the production settings
// Adjusted for Heroku for rapid deployment staging test on:


const paths = merge(common, {
  STAGE: path.resolve(__dirname, 'staging'),
});


module.exports = merge(common, {
  output: {
    filename: 'app.bundle.js',
    path: paths.STAGE,
  },

  plugins: [
    new CleanWebpackPlugin(['staging']),
    // This will turn off the additional logging and testing of the included libraries. Very good at reducing bundle size
    // especially using react.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});