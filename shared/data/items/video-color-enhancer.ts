import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const videoColorEnhancer: BrowserExtension = {
	id: 0,
	slug: 'video-color-enhancer',
	name: 'Video Color Enhancer',
	colorBg: 'red darken-3',
	colorText: '#e21601',
	description: '',
	logo: 'https://lh3.googleusercontent.com/B-sYif0eNzNjpkDgi-XucrI5tZ8jZspa6yeec_FF8C1sf4NicH5cJ6zAGP3I8JFuuGqYF6rQ2gQz-Vt0VOW0Au-uFw=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2019-09-29',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.0.1',
			date: '2019-09-30',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Restricted domains to youtube.com, netflix.com, dailymotion.com, vimeo.com',
				},
				{
					type: ChangeLogType.Added,
					text: 'Solved issue of setting not saved when closing extension',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2019-10-05',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Made the extension available for most of the domains',
				},
				{
					type: ChangeLogType.Changed,
					text: 'Reduced Blur settings',
				},
			],
		},
		{
			version: '1.2.0',
			date: '2019-10-05',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Update all videos in the page',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2020-05-14',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Invert color option',
				},
			],
		},
	],
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
