import { BrowserExtension, ChangeLogType } from '@/common/interface';

export const pipBuddyYourFriendly: BrowserExtension = {
	id: 0,
	slug: 'pip-buddy-your-friendly',
	name: 'PIP Buddy - Your friendly Picture in Picture',
	colorText: '#eb5757',
	colorBg: 'red lighten-2',
	description: '',
	logo: 'https://lh3.googleusercontent.com/PHC4y-OYbKsrhpaVC81F7eCB4QT9EbY6GJf34hrFLbXmgYgBCVBMHXGUf1CHv8jEF54YdOIguRwcvCNkTTnHau02Wqo=w128-h128-e365-rj-sc0x00ffffff',
	banner: '',
	changelog: [
		{
			version: '1.0.0',
			date: '2020-05-31',
			changes: [
				{
					type: ChangeLogType.Unspecified,
					text: 'Initial upload',
				},
			],
		},
		{
			version: '1.0.1',
			date: '2020-06-02',
			changes: [
				{
					type: ChangeLogType.Fixed,
					text: 'Issue of Picture in Picture not starting automatically',
				},
			],
		},
		{
			version: '1.1.0',
			date: '2020-06-09',
			changes: [
				{
					type: ChangeLogType.Added,
					text: 'Added option to opt-out of Google Analytics',
				},
			],
		},
	],
	links: [
		{
			browser: 'chrome',
			url: 'https://chrome.google.com/webstore/detail/pip-buddy-your-friendly-p/jddigbonbobbfkgbebpmpffppmgmnnoa',
		},
		{
			browser: 'edge',
			url: 'https://microsoftedge.microsoft.com/addons/detail/pip-buddy-your-friendly/omjnegnaeijedgiaclnmhfmfmiagbcme',
		},
	],
};
