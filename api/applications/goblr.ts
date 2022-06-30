import fetch from "isomorphic-unfetch"

import type { VercelRequest, VercelResponse } from "@vercel/node"

import { GOBLR_COLLECTIONS } from "../../src/constants/applications/goblr"

import type { Profile } from "../../src/components/applications/goblr"

const RARIBLE_API_URL = "https://api.rarible.org/v0.1/items/ETHEREUM"
const PROFILES_BATCH_COUNT = 10

const fetchProfilesBatch = async (_: VercelRequest, res: VercelResponse): Promise<VercelResponse> => {
  try {
    const profilesBatch: Profile[] = []

    for (let i = 0; i < PROFILES_BATCH_COUNT; i++) {
      const targetCollection = GOBLR_COLLECTIONS[Math.floor(Math.random() * GOBLR_COLLECTIONS.length)];
      const targetTokenId = Math.floor(Math.random() * targetCollection.tokenCount - 1);

      const imageResponse = await fetch(`${RARIBLE_API_URL}:${targetCollection.contractAddress}:${targetTokenId}`);
      const { meta: { content } } = await imageResponse.json();
      const targetImage = content.length > 1 ? content[1] : content[0];

      profilesBatch.push({
        contractAddress: targetCollection.contractAddress,
        tokenId: targetTokenId,
        imageUrl: targetImage?.url
      })
    }

    return res.status(200).json(profilesBatch)
  } catch (err) {
    return res.status(err.statusCode || 500).json({ ...err })
  }
}

export default fetchProfilesBatch