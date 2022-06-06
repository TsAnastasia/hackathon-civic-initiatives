const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    publicPath: "/hackathon-civic-initiatives/",
  },
  devtool: "source-map",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "../.env.production"),
    }),
  ],
};
