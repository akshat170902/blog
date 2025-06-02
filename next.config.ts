import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "travmigoz-destinationimages.s3.ap-south-1.amazonaws.com", 
      // add other domains as needed
    ],
  },
};

export default nextConfig;
