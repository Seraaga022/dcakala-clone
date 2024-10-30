/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.dcakala.com",
        pathname: "/public/images/product/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
