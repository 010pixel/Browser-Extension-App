export interface ExtensionLink {
	browser: string;
	url: string;
}

export enum ChangeLogType {
	Unspecified = 'unspecified',
	Added = 'added',
	Changed = 'changed',
	Deprecated = 'deprecated',
	Removed = 'removed',
	Fixed = 'fixed',
	Security = 'security',
}

export interface ChangeLogChange {
	type?: ChangeLogType;
	text: string;
}

export interface ChangeLogItem {
	version: string;
	date: string;
	changes: ChangeLogChange[];
}

export interface BrowserExtension {
	id: number;
	slug: string;
	name: string;
	colorBg?: string;
	colorText?: string;
	description: string;
	logo: string;
	banner: string;
	links: ExtensionLink[];
	changelog?: ChangeLogItem[];
	showOnHome?: boolean;
}
