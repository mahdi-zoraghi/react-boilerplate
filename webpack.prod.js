const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

/** @type {webpack.Configuration} */
const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[contenthash].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "/css/app.[chunkhash].css",
    }),
    new WebpackManifestPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "reactvendor",
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!react)(!react-dom)[\\/]/,
          name: "vendors",
        },
      },
    },
  },
};

module.exports = merge(common, prodConfig);
