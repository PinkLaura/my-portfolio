/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/my-portfolio/' : '',
  basePath: isProd ? '/my-portfolio/.' : '',
  output: 'export'
};

/*const withVideos = require('next-videos')

module.exports = withVideos({
  distDir: '../../.next',
});*/

export default nextConfig;