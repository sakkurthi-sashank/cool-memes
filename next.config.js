/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.redd.it", "i.imgur.com"],
  },
};

module.exports = nextConfig;
