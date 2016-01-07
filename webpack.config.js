/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

let entry;
let plugins;
let cssLoaderParams;

if (PROD) {
  entry = [
    path.resolve(__dirname, 'src/index.jsx'),
  ];
  cssLoaderParams = [
    'modules',
    'importLoaders=1',
    'localIdentName=[hash:base64:5]'
  ].join('&');
  plugins = [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        drop_console: true,
        unused: true,
        evaluate: true,
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ];
} else {
  entry = [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/index.jsx')
  ];
  cssLoaderParams = [
    'modules',
    'sourceMap',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&');
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ];
}

module.exports = {
  entry: {
    bundle: entry
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? '[name].[chunkhash].js' : '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          `css-loader?${cssLoaderParams}`
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins
};
