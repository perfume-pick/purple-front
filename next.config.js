/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fimgs.net",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/perpicks/auth/login/kakao/success:path*/",
  //       destination: `http://43.202.196.141:3000/perpicks/auth/login/kakao/success:path*/`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
