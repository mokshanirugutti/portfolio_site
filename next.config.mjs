/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'skillicons.dev',
              pathname: '/icons',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            pathname: '/**',
          }
      ],
  },
};

export default nextConfig;
