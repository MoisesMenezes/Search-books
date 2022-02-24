/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['books.google.com'],
  },
  env: {
    BOOK_KEY: process.env.BOOK_KEY ,
  },
};
