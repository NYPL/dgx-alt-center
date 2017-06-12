var webpack = require('webpack');
var cleanBuild = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    filename: 'index.min.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    library: 'dgxAltCenter'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    // Cleans the Dist folder after every build.
    new cleanBuild(['dist']),
    // Minification (Utilized in Production)
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
}
