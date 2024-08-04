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
}

module.exports = nextConfig
