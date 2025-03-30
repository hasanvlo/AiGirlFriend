/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // For Google avatar images
  },
  env: {
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  },
};

module.exports = nextConfig; 