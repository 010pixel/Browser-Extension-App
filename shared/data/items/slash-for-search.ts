import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const slashForSearch: BrowserExtension = {
	id: 0,
	slug: 'slash-for-search',
	name: 'Slash for Search',
	colorText: '#9647fb',
	colorBg: 'purple',
	description: '',
	logo: 'https://lh3.googleusercontent.com/o8Z-XX3_rS1uRbLZix2UUgdSbwm8WoUTb6UIs6Pwk_n37nGZI3fBm_ewbfgpeWaEUG0d-nVQasaCysKcwP08viMWcw=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2023-02-01',
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
			url: 'https://chrome.google.com/webstore/detail/slash-for-search/jbacgbhfdiomihpdmpnchbldjbkgmccc?hl=en',
		},
	],
};
