import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const simplyCopyCurrentPageLink: BrowserExtension = {
	id: 0,
	slug: 'simply-copy-current-page-link',
	name: 'Simply Copy Current Page Link',
	colorText: '#2f62bd',
	colorBg: 'indigo',
	description: '',
	logo: 'https://lh3.googleusercontent.com/IS1UZeNKgXpBdUWXoh2gqxxhYpnJWvZuVgT4vVdAexc64dsKvs-5Xb407OL-6dfi-YUyuP7pyAVyQhlpEVu6QcBF=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2020-04-17',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
	],
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/simply-copy-current-page/mgafjmffjciapglpodaacoejmkchelff',
		},
		{
			browser: 'firefox',
			url: 'https://addons.mozilla.org/en-US/firefox/addon/simply-copy-current-page-link/',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/full-screen-video-for-you/anmejfoajpkaonccnefjfjgohochhpbp',
		},
	],
};
