module.exports = {
  siteUrl: 'https://iamsolo.kr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api',
      },
    ],
  },
};
