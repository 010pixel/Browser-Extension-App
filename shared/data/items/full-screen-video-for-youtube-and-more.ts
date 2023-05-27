import { BrowserExtension } from '@/common/interface';

export const fullScreenVideoForYoutubeAndMore: BrowserExtension = {
	id: 0,
	slug: 'full-screen-video-for-youtube-and-more',
	name: 'Full Screen Video for Youtube and more',
	colorText: '#07bad8',
	colorBg: 'teal',
	description: '',
	logo: 'https://lh3.googleusercontent.com/UFWLWaPyXbPa4c-MUau55XQL7JNo9HRZi7D4QvI9TOs216I5Q8QCcUhTaGlegzWRmI3ARIv_F3LzFxdOsyjY2yzGuQ=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/full-screen-video-for-you/gbmnhnmodfphgecokgbppdeepkodjglg',
		},
		{
			browser: 'firefox',
			url: 'https://addons.mozilla.org/en-US/firefox/addon/full-screen-video-for-youtube/',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/full-screen-video-for-you/anmejfoajpkaonccnefjfjgohochhpbp',
		},
	],
};
