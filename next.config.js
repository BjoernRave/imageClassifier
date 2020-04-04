const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const dotEnvResult = require("dotenv").config();

module.exports = withBundleAnalyzer({
  env: {
    BACKEND_URL:
      process.env.NODE_ENV === "production" ? "" : "http://localhost:4000"
  },

  webpack: config => {
    config.node = {
      fs: "empty"
    };

    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["static"] = path.join(__dirname, "static");
    config.resolve.alias["lib"] = path.join(__dirname, "lib");
    config.resolve.alias["generated"] = path.join(__dirname, "generated");
    config.resolve.alias["pages"] = path.join(__dirname, "pages");

    return config;
  }
});
