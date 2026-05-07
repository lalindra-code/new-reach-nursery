/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://newreachnursery.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://newreachnursery.com/sitemap.xml',
    ],
  },
};
