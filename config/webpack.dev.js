"use strict";

const path = require("path");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const devConfig = {
  entry: path.join(__dirname, "../index.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    compress: true,
    contentBase: path.join(__dirname, "../dist"),
    stats: "errors-only",
  },
};

module.exports = merge(commonConfig, devConfig);
