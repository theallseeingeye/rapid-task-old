const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.staging.js');

// This file extends the production settings
// Adjusted for Heroku for rapid deployment staging test on:

// To load the Bundle Analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = merge(common, {
  STAGE: path.resolve(__dirname, 'bundle_analyzer'),
});


module.exports = merge(common, {
  output: {
    filename: 'app.bundle.js',
    path: paths.STAGE,
  },

  plugins: [
    new BundleAnalyzerPlugin,
    new CleanWebpackPlugin(['bundle_analyzer']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});