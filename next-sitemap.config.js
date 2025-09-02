/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://vitruvity.com",
    generateRobotsTxt: true,
    outDir: "public",
};
