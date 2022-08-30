import { writable, get } from 'svelte/store';

import type { Writable } from 'svelte/store';
import type { Profile } from '.';

const GOBLR_STOREKEY = '__goblinphone-goblr';

export const loading = writable(true);
export const error = writable(false);
export const profiles: Writable<Profile[]> = writable([]);

export const popupMatch: Writable<Profile | null> = writable(null);

export const getProfiles = async (): Promise<void> => {
	loading.set(true);

	try {
		const response = await fetch('/api/applications/goblr');
		const data = await response.json();

		if (response.status !== 200) {
			error.set(true);
			loading.set(false);
			return;
		}

		const cachedProfiles = get(profiles);
		profiles.set([...data, ...cachedProfiles]);
		loading.set(false);
	} catch (err) {
		error.set(true);
		loading.set(false);
	}
};

export const removeCurrentProfile = (): void => {
	const cachedProfiles = get(profiles);
	profiles.set(cachedProfiles.slice(0, -1));
};

export const loadStoredMatches = () => {
	const storedMatches = localStorage?.getItem(GOBLR_STOREKEY);
	const matches = [];

	if (storedMatches && storedMatches.length) {
		try {
			matches.push(...JSON.parse(storedMatches));
		} catch (err) {
			localStorage?.removeItem(GOBLR_STOREKEY);
			console.error(err);
		}
	}

	return matches;
};

export const addMatch = (match: Profile) => {
	const matches = [...loadStoredMatches()];
	matches.push(match);

	localStorage?.setItem(GOBLR_STOREKEY, JSON.stringify(matches));
};

export const deleteMatch = (match: Profile) => {
	const matches = [...loadStoredMatches()];

	const targetMatches = matches?.filter(
		(p: Profile) => p.contractAddress !== match.contractAddress || p.tokenId !== match.tokenId
	);

	localStorage?.setItem(GOBLR_STOREKEY, JSON.stringify(targetMatches));
};
