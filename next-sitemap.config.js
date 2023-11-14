module.exports = {
  siteUrl: 'https://iamsolo.kr',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api',
      },
    ],
    additionalSitemaps: ['https://iamsolo.kr/server-sitemap-index.xml'],
  },
};
