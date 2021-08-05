"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const getStyleLoaders = (cssOptions, preProcess) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: cssOptions,
    },
    {
      loader: "postcss-loader",
      options: {},
    },
  ];

  if (preProcess) {
    loaders.push(
      {
        loader: "resolve-url-loader",
        options: {
          // root:"../"
        },
      },
      {
        loader: preProcess,
        options: {
          sourceMap: true,
        },
      }
    );
  }
  return loaders;
};

module.exports = smp.wrap({
  entry: path.join(__dirname, "../index.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  mode: "production",
  devtool: "nosources-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.scss$/,
        use: getStyleLoaders({}, "sass-loader"),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
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
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
  },
  stats: "errors-only",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
    }),
    new FriendlyErrorsWebpackPlugin(),
    new EslintWebpackPlugin({
      // eslint options
      extensions: ["js", "jsx", "ts", "tsx"],
      formatter: require.resolve("eslint-formatter-pretty"),
      eslintPath: require.resolve("eslint"),
      // 仅对更改的文件操作
      cache: true,
    }),
  ],
});
