/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
