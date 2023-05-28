import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const youtubeVideoSkipAdTrigger: BrowserExtension = {
	id: 0,
	slug: 'youtube-video-skip-ad-trigger',
	name: 'Youtube Video Skip Ad Trigger',
	colorText: '#05aa91',
	colorBg: 'green darken-1',
	description: '',
	logo: 'https://lh3.googleusercontent.com/9qmS9tz-EZWTFViEtZBLf4mD6oSPAZko-WM7LfKwnAZZ-Y0kzH6y3Ib1aMeq0jKtEWtFD4Az5GJxdjUJouPLSN9lwlM=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2017-06-16',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2018-05-31',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Optimized code',
				},
			],
		},
		{
			version: '1.1.1',
			date: '2018-05-31',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Removed bug of script crashing when installing the extension',
				},
			],
		},
		{
			version: '1.1.2',
			date: '2018-06-17',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Updated code to improve performance',
				},
				{
					type: ChangeLogType.Unspecified,
					text: 'Updated extension to support latest YouTube layout',
				},
			],
		},
		{
			version: '1.2.0',
			date: '2018-08-13',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initiate extension functionality without refreshing YouTube page after installing extension',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2018-12-15',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Updated extension to support latest YouTube layout',
				},
			],
		},
		{
			version: '1.4.0',
			date: '2019-01-11',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Further stability tweaks to skip ads',
				},
			],
		},
		{
			version: '2.0.0',
			date: '2019-05-17',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Close Ad-Banner automatically',
				},
				{
					type: ChangeLogType.Added,
					text: 'Option to turn On/Off automatic closing of Ad-Banner',
				},
				{
					type: ChangeLogType.Added,
					text: 'Options for Skip ad e.g. Immediately, After countdown, After 30 seconds, Never',
				},
				{
					type: ChangeLogType.Added,
					text: 'Screenshot for Options page',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added: Option to Reset Config to Defaults',
				},
			],
		},
		{
			version: '2.1.0',
			date: '2020-05-16',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Improved code structure',
				},
			],
		},
		{
			version: '2.1.1',
			date: '2020-09-14',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Issue of configuration not loading after browser starts',
				},
			],
		},
		{
			version: '2.1.2',
			date: '2023-05-14',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Perf: performance improvement',
				},
			],
		},
		{
			version: '2.2.0',
			date: '2023/05/14',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Updated to Manifest v3',
				},
			],
		},
	],
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/youtube-video-skip-ad-tri/hpnelpabemhjfjgiibgkliipaehnfcjk',
		},
		{
			browser: 'firefox',
			url: 'https://addons.mozilla.org/en-US/firefox/addon/youtube-video-skip-ad-trigger/',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/lnkpcgdgkaceefllfimplcbdagkadbcf',
		},
	],
};
