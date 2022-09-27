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
      "occ-0-5386-116.1.nflxso.net",
      "occ-0-5391-58.1.nflxso.net",
      "occ-0-1190-2774.1.nflxso.net",
      "assets.nflxext.com",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
