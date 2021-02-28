const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const PORT = 3000;

/** @type {webpack.Configuration} */
const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: PORT,
    hot: true,
    after() {
      console.log(`devServer running on port ${PORT}`);
    },
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = merge(common, devConfig);
