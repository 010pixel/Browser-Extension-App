import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const tabbieEasyTabViewer: BrowserExtension = {
	id: 0,
	slug: 'tabbie-easy-tab-viewer',
	name: 'Tabbie : easy tab viewer',
	colorText: '#e53a34',
	colorBg: 'red darken-2',
	description: '',
	logo: 'https://lh3.googleusercontent.com/YD0_ceAPF3btuhHdiFKrT_BhQq6rr7-Rd_hFp3_U1VpPof-kZN8tgC5qN9itDwNoEgeQKx2w4SprIOz7KlTP9QUDBw=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2018-02-28',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.0.1',
			date: '2018-03-01',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Minor bug fixes on loading',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2018-03-06',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Minor fix for smoother loading of navigation items',
				},
				{
					type: ChangeLogType.Added,
					text: 'Sidebar with new options',
				},
				{
					type: ChangeLogType.Added,
					text: 'Themes selection',
				},
				{
					type: ChangeLogType.Added,
					text: 'Compact design option',
				},
				{
					type: ChangeLogType.Added,
					text: 'Reset settings feature',
				},
				{
					type: ChangeLogType.Added,
					text: 'Links to follow on social media',
				},
				{
					type: ChangeLogType.Added,
					text: 'Link to Donate page',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2018-06-14',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Copy single link',
				},
				{
					type: ChangeLogType.Added,
					text: 'Copy all links',
				},
			],
		},
		{
			version: '1.3.1',
			date: '2018-08-08',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added HotKey to open Tabbie Window (Alt+Shift+T)',
				},
			],
		},
		{
			version: '1.4.0',
			date: '2018-09-07',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Confirm action for closing any window',
				},
			],
		},
		{
			version: '1.4.1',
			date: '2018-09-07',

			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Hide other windows',
				},
			],
		},
		{
			version: '1.5.0',
			date: '2018-09-07',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Hide other windows',
				},
			],
		},
		{
			version: '1.6.0',
			date: '2018-10-03',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Discard/Suspend Tab feature',
				},
				{
					type: ChangeLogType.Added,
					text: 'Titles and close buttons when filtering by favourite and discarded',
				},
				{
					type: ChangeLogType.Fixed,
					text: 'Issue of domain filter crashing',
				},
			],
		},
	],
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/tabbie-easy-tab-viewer/dfklamfdbffkjofhkeeclclpcpejoaaf',
		},
		{
			browser: 'firefox',
			url: 'https://addons.mozilla.org/en-US/firefox/addon/tabbie-easy-tab-viewer/',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/tabbie-easy-tab-viewer/phdlcenfblbogbbkgldfildmbhhmcndk',
		},
	],
};
