import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/Lead-Claw_Landing_Page' : '',
  assetPrefix: isGitHubPages ? '/Lead-Claw_Landing_Page' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
