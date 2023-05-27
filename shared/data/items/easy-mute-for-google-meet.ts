import { BrowserExtension } from '@/common/interface';
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
};
