/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['files.stripe.com'],
  },
  env: {
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
}

module.exports = nextConfig
