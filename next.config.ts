import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images : {
    unoptimized:true,
    remotePatterns: [

      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
        
      }
    ]
    
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);