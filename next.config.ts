import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
      { source: "/projects/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
