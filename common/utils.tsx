export const getBrowserName = function() {
var test = function(regexp: any) {return regexp.test(window.navigator.userAgent)}
switch (true) {
    case test(/edg/i): return "Microsoft Edge";
    case test(/trident/i): return "Microsoft Internet Explorer";
    case test(/firefox|fxios/i): return "Mozilla Firefox";
    case test(/opr\//i): return "Opera";
    case test(/ucbrowser/i): return "UC Browser";
    case test(/samsungbrowser/i): return "Samsung Browser";
    case test(/chrome|chromium|crios/i): return "Google Chrome";
    case test(/safari/i): return "Apple Safari";
    default: return "Other";
}
};

export const getExtensionStoreName = () => {
    const browserName = getBrowserName();
    return ["Microsoft Edge", "Microsoft Internet Explorer"].includes(browserName) ? 'Edge Add-ons' : ["Mozilla Firefox"].includes(browserName) ? 'Mozilla Firefox Add-on' : 'Google Chrome Store';
}

export function trackEvent(options: any) {
    if (typeof window !== "undefined") {
        return;
    }
    const {eventName, eventCategory, eventAction, eventLabel, value, items} = options;
    (window as any).gtag('event', eventName, {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        value: value,
        items: items
    });
}

export function trackPurchase(options: any) {
    const {appName, appSlug, version, analyticsEventActions} = options;
    const browserName = getBrowserName();
    trackEvent({
        eventName: 'purchase',
        eventCategory: browserName,
        eventAction: analyticsEventActions.eventAction,
        eventLabel: analyticsEventActions.eventLabel,
        value: 1,
        items: [{
            item_id: appSlug,
            item_name: appName,
            affiliation: getExtensionStoreName(),
            item_brand: browserName,
            item_variant: 'version=' + version,
        }],
    })
}