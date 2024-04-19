/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "baraa-ecom.onrender.com",
      },
    ],
  },
};

module.exports = nextConfig;
