"use strict";

const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const prodConfig = smp.wrap({
  mode: "production",
  devtool: "nosources-source-map",
  optimization: {
    splitChunks: {
      minSize: 100,
      cacheGroups: {
        vendors: {
          test: /(react|react-dom)/,
          chunks: "all",
          priority: -10,
        },
        default: {
          name: "common",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({
        cssProcessor: require("cssnano"),
      }),
      new TerserPlugin({
        exclude: /node_modules/,
        cache: true,
        parallel: 4,
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
  },
});

module.exports = merge(commonConfig, prodConfig);
