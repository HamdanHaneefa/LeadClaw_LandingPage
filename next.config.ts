import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Lead-Claw_Landing_Page',
  assetPrefix: '/Lead-Claw_Landing_Page',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
