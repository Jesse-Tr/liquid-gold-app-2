/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-cs55-13-2023.pantheonsite.io',
        pathname: '**',
      },
    ],
  }
  
}

module.exports = nextConfig


