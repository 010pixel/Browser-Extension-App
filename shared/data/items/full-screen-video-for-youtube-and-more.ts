import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const fullScreenVideoForYoutubeAndMore: BrowserExtension = {
	id: 0,
	slug: 'full-screen-video-for-youtube-and-more',
	name: 'Full Screen Video for Youtube and more',
	colorText: '#07bad8',
	colorBg: 'teal',
	description: '',
	logo: 'https://lh3.googleusercontent.com/UFWLWaPyXbPa4c-MUau55XQL7JNo9HRZi7D4QvI9TOs216I5Q8QCcUhTaGlegzWRmI3ARIv_F3LzFxdOsyjY2yzGuQ=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2018-06-08',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2018-06-12',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Youtube home page unable to scroll',
				},
				{
					type: ChangeLogType.Fixed,
					text: 'Turn on youtube video when clicked from home page',
				},
				{
					type: ChangeLogType.Added,
					text: 'Press ESC key to switch off full screen mode',
				},
			],
		},
		{
			version: '1.2.0',
			date: '2018-08-13',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'added code to support latest youtube changes since July2018',
				},
			],
		},
		{
			version: '1.2.1',
			date: '2018-08-13',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'bug of click trigger not resizing video',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2018-08-13',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'initiate extension functionality without refreshing youtube/vimeo/dailymotion page after installing extension',
				},
			],
		},
		{
			version: '1.3.1',
			date: '2018-08-16',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'youtube fullscreen css',
				},
			],
		},
		{
			version: '1.3.2',
			date: '2018-08-18',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'youtube fullscreen style',
				},
			],
		},
	],
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
