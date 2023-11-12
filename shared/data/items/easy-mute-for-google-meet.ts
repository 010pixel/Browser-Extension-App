import { BrowserExtension, ChangeLogType } from '@/common/interface';
import { indigo } from '@mui/material/colors';

export const easyMuteForGoogleMeet: BrowserExtension = {
	id: 0,
	slug: 'easy-mute-for-google-meet',
	name: 'Easy Mute for Google Meet',
	description: '',
	colorText: indigo[400],
	colorBg: indigo[200],
	logo: 'https://lh3.googleusercontent.com/Flt0qpUDNIvDQtUpdvpgW_XRLy4hqVCKcJ9YdR_ZABimLd4FbGe9-fMRrCPcI5wclKW4306oknbN6I5vopmvMZz4=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2020/05/16',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2020/05/17',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'User settings to show badge as per their preference. Show all, only muted or only unmuted call total on the badge.',
				},
				{ type: ChangeLogType.Added, text: 'Ability to Mute by default when the call loads' },
			],
		},
		{
			version: '1.2.0',
			date: '2020/05/21',
			changes: [{ type: ChangeLogType.Changed, text: 'Updated Icons' }],
		},
		{
			version: '1.3.0',
			date: '2020/05/31',
			changes: [{ type: ChangeLogType.Added, text: 'Option to Turn Off Camera by default' }],
		},
		{
			version: '1.4.0',
			date: '2020/06/10',
			changes: [
				{ type: ChangeLogType.Added, text: 'Option to toggle Camera or Microphone by pressing Spacebar' },
				{ type: ChangeLogType.Added, text: 'Support for multiple languages in the options panel' },
			],
		},
		{
			version: '1.4.1',
			date: '2020/08/27',
			changes: [{ type: ChangeLogType.Fixed, text: 'Issue of extension not being able to load' }],
		},
		{
			version: '1.5.0',
			date: '2021/03/21',
			changes: [{ type: ChangeLogType.Added, text: 'mütesync support. https://mutesync.010pixel.com/' }],
		},
		{
			version: '1.5.1',
			date: '2021/04/10',
			changes: [{ type: ChangeLogType.Fixed, text: 'Issue of number of calls not updating on badge' }],
		},
		{
			version: '1.5.2',
			date: '2022/06/01',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Issue of extension not being able to load in the newer version of Google Meet',
				},
			],
		},
		{
			version: '1.5.3',
			date: '2022/06/18',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Issue of extension not being able to load in the newer version of Google Meet',
				},
			],
		},
		{
			version: '1.6.0',
			date: '2023/01/11',
			changes: [{ type: ChangeLogType.Added, text: 'Integrate search support' }],
		},
		{
			version: '1.6.1',
			date: '2023/01/20',
			changes: [{ type: ChangeLogType.Changed, text: 'Search' }],
		},
		{
			version: '1.7.0',
			date: '2023/10/28',
			changes: [
				{ type: ChangeLogType.Added, text: 'Paid Subscription' },
				{ type: ChangeLogType.Removed, text: 'Integrate search support' },
			],
		},
		{
			version: '1.7.1',
			date: '2023/10/30',
			changes: [{ type: ChangeLogType.Added, text: 'Improved page open experience' }],
		},
		{
			version: '1.7.2',
			date: '2023/10/30',
			changes: [{ type: ChangeLogType.Added, text: 'Solved a technical issue' }],
		},
		{
			version: '1.7.3',
			date: '2023/11/07',
			changes: [
				{ type: ChangeLogType.Changed, text: 'Improved design for Subscription' },
				{ type: ChangeLogType.Changed, text: 'Performance improvements' },
			],
		},
		{
			version: '1.7.4',
			date: '2023/11/13',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Improved experience to show Premium Only. Show Premium features on clicking the premium option',
				},
				{ type: ChangeLogType.Changed, text: 'Removed premium features box from the bottom of settings box' },
			],
		},
	],
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/easy-mute-for-google-meet/lgdalbjhcglejepghfomkmngebhaelga',
		},
		{
			browser: 'firefox',
			url: 'https://addons.mozilla.org/en-US/firefox/addon/google-meet-easy-mute/',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/easy-mute-for-google-meet/bnielpmobbfkagafnomghedppdlhobpb',
		},
	],
	feedbackForm:
		'https://docs.google.com/forms/d/e/1FAIpQLSdOiGCJpMWFEMKxrb69CdgRAs8gFHT9SJzMuiiyRF_k5rVKTA/viewform?embedded=true',
};
