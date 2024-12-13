// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// @ts-check

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config: { plugins: any[] }, { isServer }: any) {
    // Ensure MiniCssExtractPlugin is used only on the client-side
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }

    return config;
  },

  // Other Next.js config options here
};

module.exports = nextConfig;
