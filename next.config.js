/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{domains:["swiperjs.com","images.unsplash.com"]}, 
  skipMiddlewareUrlNormalize: true
}

module.exports = nextConfig
