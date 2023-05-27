import { BrowserExtension } from '@/common/interface';
import { easyMuteForGoogleMeet } from './items/easy-mute-for-google-meet';
import { fullScreenVideoForYoutubeAndMore } from './items/full-screen-video-for-youtube-and-more';
import { googleMeetEasyMute } from './items/google-meet-easy-mute';
import { pipBuddyYourFriendly } from './items/pip-buddy-your-friendly';
import { rexmoji } from './items/rexmoji';
import { simplyCopyCurrentPageLink } from './items/simply-copy-current-page-link';
import { slashForSearch } from './items/slash-for-search';
import { tabbieEasyTabViewer } from './items/tabbie-easy-tab-viewer';
import { videoColorEnhancer } from './items/video-color-enhancer';
import { youtubeVideoSkipAdTrigger } from './items/youtube-video-skip-ad-trigger';

const exntensions: BrowserExtension[] = [
	{ ...googleMeetEasyMute, id: 0 },
	{ ...easyMuteForGoogleMeet, id: 1 },
	{ ...rexmoji, id: 2 },
	{ ...youtubeVideoSkipAdTrigger, id: 3 },
	{ ...slashForSearch, id: 4 },
	{ ...videoColorEnhancer, id: 5 },
	{ ...tabbieEasyTabViewer, id: 6 },
	{ ...fullScreenVideoForYoutubeAndMore, id: 7 },
	{ ...simplyCopyCurrentPageLink, id: 8 },
	{ ...pipBuddyYourFriendly, id: 9 },
];

export default exntensions;
