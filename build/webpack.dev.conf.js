var utils = require('./utils')
var webpack = require('webpack')
var path = require('path')
var extractTextPlugin = require('extract-text-webpack-plugin')
var webpackBundleTracker = require('webpack-bundle-tracker')
var path = require('path')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    entry:{
        main: "./src/main.js"
    },
    output: {
        path: __dirname + "/src/assets/js/",
        filename: "[name].min.js"
    },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    loaders: [
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },
        {
            test: /\.vue$/,
            loader: "vue-loader"
        },
        {
            test: /\.(png|jg|gif|svg)$/,
            loader: 'file-loader',
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            options: {
                name: "[name].[ext]?[hash]"
            }
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }
    ]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new webpackBundleTracker({
        filename: "./webpack-stats.json"
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: true
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new extractTextPlugin({
        filename:  (getPath) => {
            var name = getPath('[name]');
            console.log(name);
            var path = "../../src/css/[name].min.css";
            return name === 'main'?getPath(path):getPath(path).replace('css', 'css/page');
        }
    })
//        new extractTextPlugin("../../css/local/[name].min.css")
  ]
})
