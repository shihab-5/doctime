/** @type {import('next').NextConfig} */

/** @type {import('next').Next} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['@better-auth/kysely-adapter', 'kysely'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
    domains: ['images.squarespace-cdn.com'],
  },
};

export default nextConfig;
// const nextConfig = {
//   /* config options here */
//   experimental: {
//     serverActions: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
      
      
      
//     ],

//   },
  
//   reactCompiler: true,
// };

// export default nextConfig;
