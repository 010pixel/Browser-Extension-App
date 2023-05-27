import { BrowserExtension } from '@/common/interface';
import { easyMuteForGoogleMeet } from './easy-mute-for-google-meet';

export const googleMeetEasyMute: BrowserExtension = {
	...easyMuteForGoogleMeet,
	slug: 'google-meet-easy-mute',
};
