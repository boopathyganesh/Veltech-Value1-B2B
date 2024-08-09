/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inrdeals.sgp1.cdn.digitaloceanspaces.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'thecodeplayer.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
}

module.exports = nextConfig
