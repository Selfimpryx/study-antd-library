const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

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
module.exports = {
  entry: path.join(__dirname, "../index.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  module: {
    unknownContextCritical: true,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 3,
            },
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 3,
            },
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.(scss|sass)$/,
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
  resolve: {
    alias: {
      react: path.join(
        __dirname,
        "../node_modules/react/umd/react.production.min.js"
      ),
      "react-dom": path.join(
        __dirname,
        "../node_modules/react-dom/umd/react-dom.production.min.js"
      ),
    },
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
      minify: true,
    }),
    new EslintWebpackPlugin({
      // eslint options
      extensions: ["js", "jsx", "ts", "tsx"],
      formatter: require.resolve("eslint-formatter-pretty"),
      eslintPath: require.resolve("eslint"),
      // 仅对更改的文件操作
      cache: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  stats: "errors-only",
};
