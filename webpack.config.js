/* eslint-env node */

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "loco-core.js",
    library: "LocoCore",
    libraryTarget: "umd"
  }
};
