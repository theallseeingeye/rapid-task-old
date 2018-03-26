const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');

const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  ADD: path.resolve(__dirname, 'public/webpack-add'),
};

module.exports = {
  entry: path.join(paths.SRC, 'dom-loader.js'),
  output: {
    filename: 'app.bundle.js',
    path: paths.DIST,
  },
  plugins: [
      new HtmlWebpackPlugin({
        // Tell what folder we are templating for injection of code on build.
        template: path.join(paths.PUBLIC, 'index.html')
      })
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
