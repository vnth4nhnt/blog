import { DEFAULT_LOCALE } from "./i18n/constants";
import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "dracula",
};

export const siteConfig: SiteConfig = {
	title: "vnth4nhnt's blog",
	subtitle: "hihi haha",
	lang: DEFAULT_LOCALE as SiteConfig["lang"], // Language code, e.g. 'en', 'zh-CN', 'ja', etc.
	themeColor: {
		hue: 225, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/876448.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		// quality: "mid", // Optional: output quality for Astro image optimization
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "stolen from the internet", // Credit text to be displayed
			url: "https://google.com", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-light-32.png",
			theme: "light",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-dark-32.png",
			theme: "dark",
			sizes: "32x32",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		// {
		// 	name: "YouTube",
		// 	url: "https://youtube.com",
		// 	external: true,
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/102765.gif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	// avatarQuality: "high", // Optional: output quality for Astro image optimization
	name: "vnth4nhnt",
	bio: "Learn. Build. Break. Repeat.",
	links: [
		{
			name: "X",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/vnth4nhnt",
		},
		{
			name: "linkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/vnth4nhnt/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/vnth4nhnt",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-SA 4.0",
	url: "https://creativecommons.org/licenses/by-sa/4.0/",
};
