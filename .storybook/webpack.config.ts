const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.concat([
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader?url=false"],
    },
  ]);
  config.plugins = config.plugins.concat([
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
  ]);

  return config;
};
