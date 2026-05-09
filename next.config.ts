import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "office.ganesyx.in",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      }
    ],
  },
};

export default nextConfig;
