/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // We could give ** to get access all the remote images.
        hostname: 'www.thecocktaildb.com',
        pathname: '/images/**',
        port: '',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
