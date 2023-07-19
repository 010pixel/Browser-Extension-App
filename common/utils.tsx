import ReactGA from 'react-ga4';
import { EXTENSION_ACTIONS } from './constants';
import { PageRedirectionObject } from './interface';

export const getBrowserName = () => {
	const test = (regexp: any) => {
		return regexp.test(window.navigator.userAgent);
	};
	switch (true) {
		case test(/edg/i):
			return 'Microsoft Edge';
		case test(/trident/i):
			return 'Microsoft Internet Explorer';
		case test(/firefox|fxios/i):
			return 'Mozilla Firefox';
		case test(/opr\//i):
			return 'Opera';
		case test(/ucbrowser/i):
			return 'UC Browser';
		case test(/samsungbrowser/i):
			return 'Samsung Browser';
		case test(/chrome|chromium|crios/i):
			return 'Google Chrome';
		case test(/safari/i):
			return 'Apple Safari';
		default:
			return 'Other';
	}
};

export const getExtensionStoreName = () => {
	const browserName = getBrowserName();
	if (['Microsoft Edge', 'Microsoft Internet Explorer'].includes(browserName)) {
		return 'Edge Add-ons';
	}
	if (['Mozilla Firefox'].includes(browserName)) {
		return 'Mozilla Firefox Add-on';
	}
	return 'Google Chrome Store';
};

export const trackPageView = () => {
	ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export function trackEvent(options: any) {
	if (!window) return;
	const { eventName, eventCategory, eventAction, eventLabel, value, items } = options;
	console.log('event', eventName, {
		eventCategory,
		eventAction,
		eventLabel,
		value,
		items,
	});
	ReactGA.gtag('event', eventName, {
		eventCategory,
		eventAction,
		eventLabel,
		value,
		items,
	});
}

export function trackPurchase(options: any) {
	const { appName, appSlug, version, analyticsEventActions } = options;
	const browserName = getBrowserName();
	trackEvent({
		eventName: 'purchase',
		eventCategory: browserName,
		eventAction: analyticsEventActions.eventAction,
		eventLabel: analyticsEventActions.eventLabel,
		value: 1,
		items: [
			{
				item_id: appSlug,
				item_name: appName,
				affiliation: getExtensionStoreName(),
				item_brand: browserName,
				item_variant: `version=${version}`,
			},
		],
	});
}

export function doPageRedirection(
	pageRedirection: PageRedirectionObject[],
	currentPageType: 'MAIN' | EXTENSION_ACTIONS
) {
	const hasPageRedirection =
		pageRedirection?.length &&
		pageRedirection?.find(
			(pageRedirection: PageRedirectionObject) => !pageRedirection.type || pageRedirection.type === currentPageType
		);
	if (hasPageRedirection) {
		trackEvent({
			eventName: 'page_redirection',
			eventCategory: `page_redirection_from_${currentPageType}`,
			eventAction: 'page_redirection',
			eventLabel: hasPageRedirection.url,
			value: 1,
			items: [],
		});
		setTimeout(() => {
			window.location.href = hasPageRedirection.url;
		}, 10);
	}
}
