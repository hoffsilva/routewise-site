import type { NextConfig } from 'next';

const APP_STORE_URL = 'https://apps.apple.com/us/app/routewise-mobile/id6756224699';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old static page used in QR codes / store links
      { source: '/app.html', destination: APP_STORE_URL, permanent: false },
      { source: '/app', destination: APP_STORE_URL, permanent: false },
    ];
  },
};

export default nextConfig;
