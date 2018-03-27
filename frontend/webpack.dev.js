const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');

const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
};

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    host: '192.168.0.10',
    // Helps allows refresh page on the React Router
    historyApiFallback: { index: '/' },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL' : JSON.stringify('http://127.0.0.1:8000/')
      }
    }),
    new HtmlWebpackPlugin({
      // Tell what folder we are templating for injection of code on build.
      template: path.join(paths.PUBLIC, 'index.html'),

      // Injects the following into the index.html
      // Google map api script
      GoogleMapsApi: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARSQ8iW164toKMcCXzROmKAR5qXNxXpok&callback=initMap'
    }),
  ],
  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
  },
});