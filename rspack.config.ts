import { Configuration } from "@rspack/cli";

const isProduction = process.env.NODE_ENV === "production";

const config: Configuration = {
  mode: isProduction ? "production" : "development",
  entry: {
    main: "./src/index.jsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: "./dist",
  },
  devtool: isProduction ? false : "inline-source-map",
  devServer: {
    static: {
      directory: "./public",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: "css",
      },
      {
        test: /\.js$/,
        type: "jsx",
      },
      {
        test: /\.ts$/,
        type: "tsx",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: false,
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
        },
      },
    },
  },
};

export = config;
