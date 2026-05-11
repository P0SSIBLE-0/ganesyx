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
    qualities: [70, 75, 80, 90, 100],
  },
};

export default nextConfig;
