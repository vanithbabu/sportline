import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sportlineadvantage.com',
          },
        ],
        destination: 'https://www.sportlineadvantage.com/:path*',
        permanent: true, // HTTP 301 Moved Permanently
      },
    ];
  },
};

export default nextConfig;
