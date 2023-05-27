import { BrowserExtension } from '@/common/interface';

export const videoColorEnhancer: BrowserExtension = {
	id: 0,
	slug: 'video-color-enhancer',
	name: 'Video Color Enhancer',
	colorBg: 'red darken-3',
	colorText: '#e21601',
	description: '',
	logo: 'https://lh3.googleusercontent.com/B-sYif0eNzNjpkDgi-XucrI5tZ8jZspa6yeec_FF8C1sf4NicH5cJ6zAGP3I8JFuuGqYF6rQ2gQz-Vt0VOW0Au-uFw=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/video-color-enhancer/ahfioiamcnpgmfecmmnecajookbmgcdp',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/video-color-enhancer/hglaebagmkhohiebbkfjfahjdnbcadjj',
		},
	],
};
