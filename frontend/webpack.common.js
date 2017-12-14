const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

// Constant with out paths
const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    filename: 'app.bundle.js',
    path: paths.DIST,
    publicPath: '',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Rapid Task',
      template: path.join(paths.PUBLIC, 'index.html'),
      favicon: path.join(paths.PUBLIC, 'favicon.ico'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  }
};