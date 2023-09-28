const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Find and remove NextJS css rules.
    const cssRulesIdx = config.module.rules.findIndex((r) => r.oneOf);
    if (cssRulesIdx === -1) {
      throw new Error("Could not find NextJS CSS rule to overwrite.");
    }
    config.module.rules.splice(cssRulesIdx, 1);

    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
    };
    // Add a simpler rule for global css anywhere.
    config.plugins.push(
      new MiniCssExtractPlugin({
        runtime: false,
        ignoreOrder: true,
        filename: "static/chunks/pages/[name].css",
        chunkFilename: "static/chunks/pages/[name].css",
      })
    );

    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            url: {
              // skip any data URLs of type image/svg+xml
              filter: (url) => !url.startsWith("data:image/svg+xml"),
            },
          },
        },
        "sass-loader",
      ],
    });

    config.module.rules.push({
      test: /\.(tsx|ts)/,
      use: [defaultLoaders.babel],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: false } }],
    });

    return config;
  },
};
