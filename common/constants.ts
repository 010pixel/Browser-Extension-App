export const browserImageMapping: { [name: string]: string } = {
	chrome: 'chrome',
	firefox: 'firefox',
	edge: 'edge',
};

export const broswerNameMapping: { [name: string]: string } = {
	chrome: 'Chrome',
	firefox: 'Firefox',
	edge: 'Edge',
};

export enum EXTENSION_ACTIONS {
	INSTALL = 'INSTALL',
	UNINSTALL = 'UNINSTALL',
	UPDATE = 'UPDATE',
}

export const extensionActions = {
	[EXTENSION_ACTIONS.INSTALL]: 'Install',
	[EXTENSION_ACTIONS.UNINSTALL]: 'Uninstall',
	[EXTENSION_ACTIONS.UPDATE]: 'Update',
};

export const GAEventsByAction = {
	[EXTENSION_ACTIONS.INSTALL]: {
		eventAction: 'download',
		eventLabel: 'Download Extension',
	},
	[EXTENSION_ACTIONS.UNINSTALL]: {
		eventAction: 'uninstall',
		eventLabel: 'Uninstall Extension',
	},
	[EXTENSION_ACTIONS.UPDATE]: {
		eventAction: 'update',
		eventLabel: 'Update Extension',
	},
};
