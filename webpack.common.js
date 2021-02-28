const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {webpack.Configuration} */
const commonConfig = {
  entry: {
    app: path.resolve(__dirname, "src"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = commonConfig;
