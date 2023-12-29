/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-cs55-13-2023.pantheonsite.io',
        pathname: '/wp-content/uploads/2023/12/**',
      },
    ],
  }
  
}

module.exports = nextConfig


