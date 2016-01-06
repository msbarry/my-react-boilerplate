var webpack = require('webpack');
var path = require('path');
var ip = require('ip');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PROD = process.env.NODE_ENV === 'production';

var entry, plugins;

if (PROD) {
  entry = [
    path.resolve(__dirname, 'src/index.jsx')
  ];
  plugins = [
    new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", minChunks: Infinity}),
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
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ];
} else {
  entry = [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/index.jsx')
  ];
  plugins = [
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", minChunks: Infinity}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Move the index.html file
      inject: true // inject all files that are generated by webpack, e.g. bundle.js, main.css with the correct HTML tags
    })
  ];
}

module.exports = {
  entry: {
    bundle: entry,
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? "[name].[chunkhash].js" : "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
  plugins: plugins
};
