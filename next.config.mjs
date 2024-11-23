/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.dcakala.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
