import type { MemberObject } from '../types';

export const avinashupadhya99: MemberObject = {
	// GitHub username (required)
	github: 'avinashupadhya99',
	//
	// Everything below here is optional. By default, we pull most profile data from your GitHub profile. You can override that data here, as well as provide some additional account links below.
	//
	// Name - If not defined here, it will default to your display name on GitHub. If that's not defined, then your GitHub username.
	name: 'Avinash Upadhyaya',
	//
	// Main URL - If not defined here, it will default to the website displayed on your GitHub profile. If that's not defined, then a link to your GitHub profile will be displayed.
	// mainUrl: 'https://virtualcoffee.io',
	//
	// Bio - Accepts [markdown](https://spec.commonmark.org/0.30/). Please keep your bio to a reasonable length. Refer to our [members page](https://virtualcoffee.io/members/) for examples.
	bio: `DevOps Engineer who loves most things Cloud Native. Love tinkering with new tech and meeting new folks!`,
	//
	// Links - You can add one of each type, except website - you can add as many `website` accounts as you wish.
	accounts: [
		{ type: 'linkedin', username: 'avinash-upadhyaya' },
		// { type: 'dev', username: 'yourUserName' },
		// { type: 'codenewbie', username: 'yourUserName' },
		{ type: 'twitter', username: 'avinash_ukr' },
		{ type: 'twitch', username: 'avinashupadhyaya' },
		// { type: 'youtube', channelId: 'yourChannelId' }, OR { type: 'youtube', customUrl: 'https://www.youtube.com/c/yourCustomUrl' },
		{ type: 'polywork', username: 'avinashupadhya99' },
		// { type: 'medium', username: 'yourUserName' },
		// { type: 'hashnode', username: 'yourUserName' },
		// { type: 'website', url: 'https://virtualcoffee.io', title: 'Title of link' },
	],
};