import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const rexmoji: BrowserExtension = {
	id: 0,
	slug: 'rexmoji',
	name: 'Rexmoji',
	colorText: '#422523',
	colorBg: 'amber lighten-2',
	description: '',
	logo: 'https://lh3.googleusercontent.com/cOfKbKuoJq6I9w883oq2Do4KdeMzcE2RGRnDRcYCEBpWU457321dVHLz6A37E6DLEN_nncTkjhyfFUEtr4X_ac7tqw=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2020-05-08',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.0.1',
			date: '2020-05-10',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Code refactoring',
				},
			],
		},
		{
			version: '1.0.2',
			date: '2020-05-15',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Solved issue of emoji not loading when coming from google meet home page',
				},
			],
		},
		{
			version: '1.0.3',
			date: '2020-05-18',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Solved issue of analytics error where events were triggered without any pageview initiated',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2020-06-18',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added Custom Emojis selection',
				},
			],
		},
		{
			version: '1.1.1',
			date: '2020-08-28',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Solved: Rexmoji not being able to load',
				},
			],
		},
		{
			version: '1.1.2',
			date: '2020-10-17',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: "Solved: User's name and avatar not loading",
				},
			],
		},
		{
			version: '1.1.3',
			date: '2021-04-16',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Solved: Rexmoji not loading on certain zoom calls',
				},
			],
		},
		{
			version: '1.1.4',
			date: '2021-06-01',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: "Solved: User's name and avatar not loading",
				},
			],
		},

		{
			version: '1.2.0',
			date: '2022-07-10',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Solved: Rexmoji widget not loading on Google Meet',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2022-07-11',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added: support for i18n',
				},
			],
		},
		{
			version: '1.3.1',
			date: '2023-02-21',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added: install, update, uninstall pages',
				},
			],
		},
	],
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/rexmoji/nbecjgkalhdijjiicijfnnnmdcamdmif',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/lnkpcgdgkaceefllfimplcbdagkadbcf',
		},
	],
};
