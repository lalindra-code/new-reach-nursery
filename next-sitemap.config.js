/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://newreachnursery.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
