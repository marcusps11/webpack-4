const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const bourbon = require('node-bourbon').includePaths;
const normalize = require('node-normalize-scss').includePaths;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const entry = [path.resolve(__dirname, 'src/scripts/index.js'), path.resolve(__dirname, 'src/styles/main.scss')];

module.exports = {
  entry: entry,
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    hot: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", "css-loader", 'postcss-loader'
         ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "sass-loader?"  + JSON.stringify({
            includePaths: [
              bourbon,
              normalize,
              './node_modules/bootstrap-sass/assets/stylesheets'
            ]
          }),'postcss-loader'
        ]
      }]},
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: "styles/[name].css",
          chunkFilename: "[id].css"
        }),
        // new HtmlWebpackPlugin()

      ]
    }
