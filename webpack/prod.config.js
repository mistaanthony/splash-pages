require('babel/register');

var path = require('path');
var webpack = require('webpack');
var writeStats = require('./utils/write-stats');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');
var autoprefixer = require('autoprefixer-core');

var assetsPath = path.join(__dirname, '../public/bundle');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './app/client/bootstrap.js',
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/bundle/',
  },
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' },
      { test: /\.js$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel'] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 version'] })],
  progress: true,
  plugins: [
    new ExtractTextPlugin('[name]-[chunkhash].css'),

    // set process.env to reflect the browser or server values
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production'),
        ANIMATIONS_DISABLED: process.env.ANIMATIONS_DISABLED === 'true',
      },
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
        },
    }),

    function() { this.plugin('done', writeStats); },
  ],
};
