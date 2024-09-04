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
					text: 'Initial release of the extension.',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2018-05-31',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: "Optimized the extension's code for better performance.",
				},
			],
		},
		{
			version: '1.1.1',
			date: '2018-05-31',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: "Fixed a bug that caused the extension's script to crash during installation.",
				},
			],
		},
		{
			version: '1.1.2',
			date: '2018-06-17',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: "Updated the extension's code to improve performance.",
				},
				{
					type: ChangeLogType.Unspecified,
					text: 'Enhanced compatibility with the latest YouTube layout.',
				},
			],
		},
		{
			version: '1.2.0',
			date: '2018-08-13',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initiated extension functionality without requiring a refresh of the YouTube page after installation.',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2018-12-15',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Updated the extension to support the latest YouTube layout.',
				},
			],
		},
		{
			version: '1.4.0',
			date: '2019-01-11',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Implemented further stability tweaks to improve ad skipping ads.',
				},
			],
		},
		{
			version: '2.0.0',
			date: '2019-05-17',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Introduced the automatic closure of Ad-Banners.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added an option to enable or disable the automatic closing of Ad-Banners.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added various skip ad options, including immediate, after countdown, after 30 seconds, and never.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added a screenshot for the Options page.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added an option to reset configuration settings to defaults.',
				},
			],
		},
		{
			version: '2.1.0',
			date: '2020-05-16',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Improved the code structure for better performance.',
				},
			],
		},
		{
			version: '2.1.1',
			date: '2020-09-14',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Resolved an issue where configuration settings were not loading after the browser starts.',
				},
			],
		},
		{
			version: '2.1.2',
			date: '2023-05-14',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Made performance improvements for a smoother experience.',
				},
			],
		},
		{
			version: '2.2.0',
			date: '2023-05-14',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Updated to Manifest v3.',
				},
			],
		},
		{
			version: '2.3.0',
			date: '2023-07-18',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added an option to skip ads after 60 seconds.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Now supports internationalization in multiple languages, including English, Chinese (China), French, Hindi, Indonesian, Italian, Japanese, Portuguese (Portugal), Spanish, and Vietnamese.',
				},
				{
					type: ChangeLogType.Fixed,
					text: 'Fixed the issue of the extension not working with the latest Skip Ads button.',
				},
				{
					type: ChangeLogType.Fixed,
					text: 'Resolved the issue of the extension manager showing an error when clicking on undefined elements.',
				},
			],
		},
		{
			version: '2.3.1',
			date: '2023-10-26',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Now opens the update page only once when the browser is updated for the first time.',
				},
			],
		},
		{
			version: '2.3.2',
			date: '2023-10-29',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Improved the page opening experience for better usability.',
				},
			],
		},
		{
			version: '2.4.0',
			date: '2023-10-30',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Introduced a paid subscription option.',
				},
			],
		},
		{
			version: '2.4.1',
			date: '2023-11-03',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Enhanced the design experience by removing tabs and displaying both Settings and Subscriptions on the same page.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added a profile dropdown for logged-in users.',
				},
				{
					type: ChangeLogType.Fixed,
					text: 'Fixed a bug where the Settings Form did not display the saved values correctly.',
				},
			],
		},
		{
			version: '2.4.2',
			date: '2023-11-04',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added support for opting out of analytics.',
				},
				{
					type: ChangeLogType.Changed,
					text: 'Improved the design of the Subscription feature.',
				},
				{
					type: ChangeLogType.Changed,
					text: 'Made performance improvements for a smoother experience.',
				},
			],
		},
		{
			version: '2.4.3',
			date: '2023-11-13',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Enhanced the experience of displaying premium features exclusively. Premium options are now easily accessible by clicking the premium option.',
				},
				{
					type: ChangeLogType.Changed,
					text: 'Removed the premium features box from the bottom of the settings panel.',
				},
			],
		},
		{
			version: '2.4.4',
			date: '2023-12-13',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: "Made the 'Skip Immediately' feature available for free.",
				},
			],
		},
		{
			version: '2.4.5',
			date: '2024-04-22',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Technical structural improvements',
				},
			],
		},
		{
			version: '2.4.6',
			date: '2024-05-13',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Improve Performance',
				},
			],
		},
		{
			version: '2.4.7',
			date: '2024-05-14',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Re-design the structure for performance improvements',
				},
			],
		},
		{
			version: '2.4.8',
			date: '2024-08-04',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Improved to make sure Google Chrome does not block the extension',
				},
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
	notice:
		'YouTube has been after all the developers who are providing ad-skipping features. They are working with Google Chrome to block All the extensions Skipping YouTube Ads. We are trying our best to keep the extension alive. Please support us with your patience and understanding. We hope you do not give us low rating because of what YouTube is doing. Thank you for your understanding.',
};
