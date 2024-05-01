/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2gloyfobyb8yo.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
