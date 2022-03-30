const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var webpack = require("webpack");

module.exports = {
  entry: "./src/accessibility.js",
  mode: "production",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "api"),
    libraryTarget: "umd",
    auxiliaryComment: "accessibility output",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
  })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
