import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
  entry: './app/scripts/main.jsx',
  output: {
    filename: './dist/scripts/main.min.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // compress: {warnings: true},
      include: /\.min\.js$/,
      minimize: true,
      comments: false
    }),
    new CopyWebpackPlugin([
      {from: './app/index.html', to: './dist/index.html'}
    ])
  ]
};
