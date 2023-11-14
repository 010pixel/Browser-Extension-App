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
					text: 'First release of the extension.',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2020/05/17',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added settings for badge display preferences, including options to show all calls, only muted calls, or only unmuted calls on the badge.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Introduced default mute setting when joining a call.',
				},
			],
		},
		{
			version: '1.2.0',
			date: '2020/05/21',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Updated extension icons for a refreshed look.',
				},
			],
		},
		{
			version: '1.3.0',
			date: '2020/05/31',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Now includes the option to automatically turn off your camera when starting a call.',
				},
			],
		},
		{
			version: '1.4.0',
			date: '2020/06/10',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Enabled quick toggles for camera and microphone using the Spacebar shortcut.',
				},
				{
					type: ChangeLogType.Added,
					text: 'Added support for multiple languages in the options panel.',
				},
			],
		},
		{
			version: '1.4.1',
			date: '2020/08/27',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Resolved the issue of extension loading errors.',
				},
			],
		},
		{
			version: '1.5.0',
			date: '2021/03/21',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Now supports mütesync. Learn more at https://mutesync.010pixel.com/.',
				},
			],
		},
		{
			version: '1.5.1',
			date: '2021/04/10',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Fixed the issue of the badge not updating the number of calls.',
				},
			],
		},
		{
			version: '1.5.2',
			date: '2022/06/01',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Fixed compatibility issues with newer versions of Google Meet.',
				},
			],
		},
		{
			version: '1.5.3',
			date: '2022/06/18',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Fixed compatibility issues with newer versions of Google Meet.',
				},
			],
		},
		{
			version: '1.6.0',
			date: '2023/01/11',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Integrated search support for enhanced functionality.',
				},
			],
		},
		{
			version: '1.6.1',
			date: '2023/01/20',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Improved the search feature for a better user experience.',
				},
			],
		},
		{
			version: '1.7.0',
			date: '2023/10/28',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Introduced a paid subscription option for premium features.',
				},
				{
					type: ChangeLogType.Removed,
					text: 'Removed integrated search support to streamline functionality.',
				},
			],
		},
		{
			version: '1.7.1',
			date: '2023/10/30',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Improved the page opening experience for users.',
				},
			],
		},
		{
			version: '1.7.2',
			date: '2023/10/30',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Resolved a technical issue for smoother operation.',
				},
			],
		},
		{
			version: '1.7.3',
			date: '2023/11/07',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Enhanced the design of the subscription feature for a more appealing user interface.',
				},
				{
					type: ChangeLogType.Changed,
					text: 'Implemented performance improvements for smoother operation.',
				},
			],
		},
		{
			version: '1.7.4',
			date: '2023/11/13',
			changes: [
				{
					type: ChangeLogType.Changed,
					text: 'Improved the experience to show premium features exclusively. Premium options are now easily accessible by clicking the premium option.',
				},
				{
					type: ChangeLogType.Changed,
					text: 'Removed the premium features box from the bottom of the settings panel.',
				},
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
