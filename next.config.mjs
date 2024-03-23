/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brown-mechanical-bandicoot-153.mypinata.cloud",
        port: "",
      },
    ],
  },
};

export default nextConfig;
