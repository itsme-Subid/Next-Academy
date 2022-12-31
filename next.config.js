/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.hp.com',
        port: '',
        pathname: '/app/assets/**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  },
}

module.exports = nextConfig
