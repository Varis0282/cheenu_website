import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow real photos to be used later (e.g. on the live site) without code
    // changes — just point a destination's `image` at one of these hosts.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    qualities: [60, 75, 90],
  },
};

export default nextConfig;
