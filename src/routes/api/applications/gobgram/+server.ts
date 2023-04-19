import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';

import { GOBGRAM_HASHTAGS, type Post } from '$components/applications/gobgram';

const TWITTER_SEARCH_URL = 'https://api.twitter.com/2/tweets/search/recent';

export const GET: RequestHandler = async () => {
	try {
		const hashtags = GOBGRAM_HASHTAGS.map((tag) => `#${tag}`).join(' OR ');
		// const handles = GOBGRAM_HANDLES.map(handle => `@${handle}`).join(" OR ")

		const params = {
			query: `(${hashtags}) has:images (has:hashtags OR has:mentions) -is:retweet`,
			expansions: 'attachments.media_keys,author_id',
			'tweet.fields': 'author_id,public_metrics',
			'media.fields': 'url',
			'user.fields': 'username,profile_image_url',
			max_results: '50'
		};

		const url = `${TWITTER_SEARCH_URL}?${new URLSearchParams(params)}`;

		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${env.TWITTER_API_TOKEN}`
			}
		});
		const data = await response.json();

		const posts: Post[] = [];
		for (const item of data.data) {
			const tweet = {
				id: item.id,
				description: item.text?.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''),
				imageUrl: data.includes.media?.find(
					(media: any) => media.media_key == item.attachments.media_keys[0]
				)?.url,
				likes: item.public_metrics.like_count,
				replies: item.public_metrics.reply_count
			};

			const _user = data.includes.users.find((user: any) => user.id == item.author_id);
			const user = {
				id: _user.id,
				name: _user.name,
				username: _user.username,
				imageUrl: _user.profile_image_url
			};

			const post = {
				tweet: {
					...tweet,
					url: `https://twitter.com/${user?.username}/status/${tweet.id}`
				},
				user: {
					...user,
					url: `https://twitter.com/${user?.username}`
				}
			};

			posts.push(post);

			return json(posts);
		}
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/applications/gobram/+server - error: ', err);
		}
		throw error(500);
	}
};
