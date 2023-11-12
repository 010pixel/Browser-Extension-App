import { EXTENSION_ACTIONS } from '@/common/constants';
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
		{
			version: '2.3.0',
			date: '2023/07/18',
			changes: [
				{ type: ChangeLogType.Added, text: 'Option to Skip Ad After 60 seconds' },
				{
					type: ChangeLogType.Added,
					text: 'Support for Internationalization support with English, Chinese (China), French, Hindi, Indonesian, Italian, Japanese, Portuguese (Portugal), Spanish, Vietnamese',
				},
				{ type: ChangeLogType.Fixed, text: 'Issue of extension not working with latest Skip Ads button' },
				{ type: ChangeLogType.Fixed, text: 'Issue of extension manager showing error click of undefined' },
			],
		},
		{
			version: '2.3.1',
			date: '2023/10/26',
			changes: [
				{ type: ChangeLogType.Added, text: 'Open update only once when the browser is updated for the first time' },
			],
		},
		{
			version: '2.3.2',
			date: '2023/10/29',
			changes: [{ type: ChangeLogType.Added, text: 'Improved page open experience' }],
		},
		{
			version: '2.4.0',
			date: '2023/10/30',
			changes: [{ type: ChangeLogType.Added, text: 'Paid Subscription' }],
		},
		{
			version: '2.4.1',
			date: '2023/11/03',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Better Design Experience, Removed Tabs and showing both Settings and Subscriptions on the same page',
				},
				{ type: ChangeLogType.Added, text: 'Profile Dropdown for logged-in users' },
				{ type: ChangeLogType.Fixed, text: 'Bug of Settings Form not showing the saved value' },
			],
		},
		{
			version: '2.4.2',
			date: '2023/11/04',
			changes: [
				{ type: ChangeLogType.Added, text: 'Support for Opt-out from Analytics' },
				{ type: ChangeLogType.Changed, text: 'Improved design for Subscription' },
				{ type: ChangeLogType.Changed, text: 'Performance improvements' },
			],
		},
		{
			version: '2.4.3',
			date: '2023/11/13',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Improved experience of showing Premium Only. Show Premium features on clicking the premium option',
				},
				{ type: ChangeLogType.Changed, text: 'Removed premium features box from the bottom of settings box' },
			],
		},
	],
	feedbackForm:
		'https://docs.google.com/forms/d/e/1FAIpQLSfjOjf0mp41O5FIMdo2gKKEp7yKHoHd_FWYhw5RnoAvjEGvfA/viewform?embedded=true',
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
