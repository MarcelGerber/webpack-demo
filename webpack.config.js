const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  infrastructureLogging: {
    debug: /webpack\.cache/,
  },
  entry: {
    app: "./src/main.js",
  },
  devtool: "inline-source-map",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "./src",
  },
};
