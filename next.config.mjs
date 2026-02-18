/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "https://ryachavan.github.io/Portfolio-Website/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
