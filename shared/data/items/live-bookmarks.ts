import { BrowserExtension } from '@/common/interface';

export const LiveBookmarks: BrowserExtension = {
	id: 0,
	slug: 'live-bookmarks',
	name: 'Live Bookmarks',
	colorText: 'white-text text-lighten-2',
	colorBg: 'red lighten-2',
	description: 'A bookmark viewer to see all your bookmarks with screenshot of the webpage.',
	logo: 'https://lh3.googleusercontent.com/QETho-jUl6M2M4l470Y-ewbJJ8YWwPDEVSAz8SjT10W7-X9BD2WAgCIWovuVjJOk4GKHmR9MhZb5hCHIEFZhCf9x=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/live-bookmarks/ihfolgbjkckclahmpoejnoglilaeenji',
		},
	],
};
