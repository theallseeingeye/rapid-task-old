const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.prod.js'); // This file extends the production settings

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
    // Removes the bundle_analyzer folder.
    new CleanWebpackPlugin(['bundle_analyzer']),
  ]
});