/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "rb.gy",
      "image.tmdb.org",
      "occ-0-5391-58.1.nflxso.net",
      "occ-0-5460-114.1.nflxso.net",
      "occ-0-5391-185.1.nflxso.net",
      "occ-0-5391-185.1.nflxso.net",
      "occ-0-5386-116.1.nflxso.net",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
