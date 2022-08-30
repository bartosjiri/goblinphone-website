import { writable, get } from 'svelte/store';

import type { Writable } from 'svelte/store';

export type Track = {
	title: string;
	artist: string;
	audioUrl: string;
	coverArtUrl: string;
	artistUrl: string;
};

export const audioElement: Writable<HTMLAudioElement> = writable();
export const sourceElement: Writable<HTMLSourceElement> = writable();

export const trackIndex = writable(0);
export const trackLength = writable(0);
export const trackProgress = writable(0);
export const trackIndexesHistory: Writable<number[]> = writable([]);

export const isPlaying = writable(false);
export const isShuffling = writable(true);
export const isRepeating = writable(false);

export const playlistTracks: Writable<Track[]> = writable([]);
export const playlistActive = writable(false);

export const load = () => {
	const audio = get(audioElement);
	const source = get(sourceElement);

	if (audio && source) {
		const tracks = get(playlistTracks);
		source.src = tracks[get(trackIndex)].audioUrl;
		audio.load();
		audio.volume = 0.8;
		audio.ondurationchange = () => {
			trackLength.set(audio.duration);
		};
		audio.onended = () => {
			if (get(isRepeating)) {
				return switchToTrackIndex(get(trackIndex));
			}

			next();
		};
	}
};

const generateRandomTrackIndex: () => number = () => {
	const tracks = get(playlistTracks);
	const randomIndex = Math.floor(Math.random() * tracks.length);

	if (randomIndex === get(trackIndex)) {
		return generateRandomTrackIndex();
	}

	return randomIndex;
};

const switchToTrackIndex = (targetIndex: number, backwards = false) => {
	const currentIndex = get(trackIndex);
	const currentHistory = get(trackIndexesHistory);

	if (backwards) {
		trackIndexesHistory.set([...currentHistory.slice(0, -1)]);
	}

	if (!backwards && targetIndex !== currentIndex) {
		trackIndexesHistory.set([...currentHistory, targetIndex]);
	}

	trackIndex.set(targetIndex);
	trackProgress.set(0);
	load();
	play();
};

export const play = () => {
	const audio = get(audioElement);

	isPlaying.set(true);
	if (audio) audio.play();
};

export const pause = () => {
	const audio = get(audioElement);

	isPlaying.set(false);
	if (audio) audio.pause();
};

export const next = (targetIndex: number | null = null) => {
	if (targetIndex !== null) {
		return switchToTrackIndex(targetIndex);
	}

	const currentIndex = get(trackIndex);

	if (get(isShuffling)) {
		const randomIndex = generateRandomTrackIndex();
		return switchToTrackIndex(randomIndex);
	}

	const tracks = get(playlistTracks);
	const nextIndex = currentIndex + 1 >= tracks.length ? 0 : currentIndex + 1;
	switchToTrackIndex(nextIndex);
};

export const previous = () => {
	const currentIndex = get(trackIndex);
	const currentHistory = get(trackIndexesHistory);

	if (currentHistory.length < 1) {
		if (get(isShuffling)) {
			const randomIndex = generateRandomTrackIndex();
			return switchToTrackIndex(randomIndex, true);
		}

		const tracks = get(playlistTracks);
		const prevIndex = currentIndex - 1 < 0 ? tracks.length - 1 : currentIndex - 1;
		return switchToTrackIndex(prevIndex, true);
	}

	const currentProgress = get(trackProgress);
	if (currentProgress < 0.75) {
		return switchToTrackIndex(currentIndex, true);
	}

	switchToTrackIndex(currentHistory[currentHistory.length - 1], true);
};
