/**  @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    optimizeFonts: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
