import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Lead-Claw_Landing_Page' : '',
  assetPrefix: isProd ? '/Lead-Claw_Landing_Page' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
