/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'skillicons.dev',
              pathname: '/icons',
          },
      ],
  },
};

export default nextConfig;
