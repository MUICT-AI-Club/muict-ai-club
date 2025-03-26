import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/muict-ai-club',
  assetPrefix: '/muict-ai-club/',
};

export default nextConfig;