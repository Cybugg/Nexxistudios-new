/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // ✅ must be an object, not a boolean
  },
};

export default nextConfig;
