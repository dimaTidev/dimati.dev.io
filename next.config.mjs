import mdx from '@next/mdx';

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
      },
    ],
    domains: ['cdn.sanity.io'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Add MDX support
});

export default nextConfig;
