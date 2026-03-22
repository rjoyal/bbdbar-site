/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bbdbar.com",
  generateRobotsTxt: true,
  outDir: "./public",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
