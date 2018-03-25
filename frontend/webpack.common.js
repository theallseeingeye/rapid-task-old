const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');

// Constant with out paths
const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  ADD: path.resolve(__dirname, 'public/webpack-add'),
};
// const json = require('./file.json');


module.exports = {
  entry: path.join(paths.SRC, 'dom-loader.js'),
  output: {
    filename: 'app.bundle.js',
    path: paths.DIST,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
      favicon: path.join(paths.PUBLIC, 'favicon.ico'),
    }),
    // Copies the items in the folder into the dist.
    new CopyWebpackPlugin([
      {
        from: path.join(paths.ADD),
        to: path.join(paths.DIST),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
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
  },
};
