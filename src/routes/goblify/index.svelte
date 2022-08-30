<script lang="ts">
	import { onMount } from 'svelte';

	import {
		Player,
		Playlist,
		playlistTracks,
		playlistActive,
		GOBLIFY_TRACKS
	} from '$components/applications/goblify';

	onMount(() => {
		if (!$playlistTracks.length) {
			const shuffledTracks = [...GOBLIFY_TRACKS];
			for (let i = shuffledTracks.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
			}
			$playlistTracks = shuffledTracks;
		}
	});
</script>

{#if $playlistActive}
	<Playlist />
{:else}
	<Player />
{/if}
