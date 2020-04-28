const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'dgx-alt-center': [
      path.resolve(__dirname, 'src/index.js'),
    ],
  },
  output: {
    filename: 'index.min.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'umd',
    library: 'dgxAltCenter'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  // Minification (Utilized in Production)
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
        },
      }),
    ],
  },
  plugins: [
    // Cleans the Dist folder after every build.
    new CleanWebpackPlugin()
  ]
}
