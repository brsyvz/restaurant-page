const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!index.html"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    open: true,
  }, 
  performance: {
    hints: false,
  },
};
