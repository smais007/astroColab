/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "*",
      "startup-template-sage.vercel.app",
      "tailwindui.com",
      "images.unsplash.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
