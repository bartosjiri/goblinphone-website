import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { GOBLR_COLLECTIONS, type Profile } from '$components/applications/goblr';

const RARIBLE_API_URL = 'https://api.rarible.org/v0.1/items/ETHEREUM';
const PROFILES_BATCH_COUNT = 10;

export const GET: RequestHandler = async () => {
	try {
		const profilesBatch: Profile[] = [];

		for (let i = 0; i < PROFILES_BATCH_COUNT; i++) {
			const targetCollection =
				GOBLR_COLLECTIONS[Math.floor(Math.random() * GOBLR_COLLECTIONS.length)];
			const targetTokenId = Math.floor(Math.random() * targetCollection.tokenCount - 1);

			const imageResponse = await fetch(
				`${RARIBLE_API_URL}:${targetCollection.contractAddress}:${targetTokenId}`
			);

			const {
				meta: { content }
			} = await imageResponse.json();
			const targetImage = content.length > 1 ? content[1] : content[0];

			profilesBatch.push({
				contractAddress: targetCollection.contractAddress,
				tokenId: targetTokenId,
				imageUrl: targetImage?.url
			});
		}

		return json(profilesBatch);
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/applications/gobram/+server - error: ', err);
		}
		throw error(500);
	}
};
