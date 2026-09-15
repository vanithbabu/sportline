import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['doodlebluelive.com'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sportlineadvantage.com',
          },
        ],
        destination: 'https://sportlineadvantage.com/:path*',
        permanent: true, // HTTP 301 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
