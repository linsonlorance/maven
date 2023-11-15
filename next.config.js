/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.resolve.alias["@app"] = path.resolve(__dirname, "app");
    return config;
  },
};

module.exports = nextConfig;
