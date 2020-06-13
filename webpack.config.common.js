const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".ts"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    // TypeScript compile without type-checking
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    // TypeScript type-checking
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HtmlWebpackPlugin({
      hash: true,
    }),
  ],
};
