/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
    domains: ["eyetopixel.com"],
  },
};

export default nextConfig;
