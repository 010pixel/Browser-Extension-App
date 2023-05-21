/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://browser.010pixel.com',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	exclude: () => {
		return ['/g*', '/e*', '/y*', '/t*', '/v*', '/p*', '/f*', '/s*', '/r*', '*/install', '*/update', '*/uninstall'];
	},
};
