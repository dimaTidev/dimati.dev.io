import mdx from "@next/mdx";

const withMDX = mdx();

const nextConfig = withMDX({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "swiperjs.com" },
    ],
    domains: ["cdn.sanity.io"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"], // MDX support
  output: "export", // Required for GitHub Pages
  experimental: { mdxRs: false }, // Might help avoid conflicts with MDX for GitHub Pages
});

export default nextConfig;