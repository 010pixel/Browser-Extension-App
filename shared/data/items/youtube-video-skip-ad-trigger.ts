import { BrowserExtension } from '@/common/interface';

export const youtubeVideoSkipAdTrigger: BrowserExtension = {
	id: 0,
	slug: 'youtube-video-skip-ad-trigger',
	name: 'Youtube Video Skip Ad Trigger',
	colorText: '#05aa91',
	colorBg: 'green darken-1',
	description: '',
	logo: 'https://lh3.googleusercontent.com/9qmS9tz-EZWTFViEtZBLf4mD6oSPAZko-WM7LfKwnAZZ-Y0kzH6y3Ib1aMeq0jKtEWtFD4Az5GJxdjUJouPLSN9lwlM=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
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
