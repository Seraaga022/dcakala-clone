/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.dcakala.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "upload.vidbeen.ir",
        port: "",
      },
    ],
  },
};

export default nextConfig;
