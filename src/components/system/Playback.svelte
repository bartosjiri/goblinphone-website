<script lang="ts">
	import { onMount } from 'svelte';

	import { playing, progress, volume, track } from '$stores/system/playback';

	let audioElement: HTMLAudioElement;

	$: {
		if (audioElement) {
			$playing ? audioElement.play() : audioElement.pause();
			$progress ? (audioElement.currentTime = $progress) : 0;
			$volume ? (audioElement.volume = $volume) : 0;
			$track?.filename ? (audioElement.src = $track.filename) : null;
		}
	}

	// $: $playing ? audioElement?.play() : audioElement?.pause();
	// $: $progress ? (audioElement?.currentTime = $progress) : null;
	// // $: $volume ? (audioElement.volume = $volume) : null;
	// $: audioElement?.volume ? 0.5 : 0;
	// $: $track?.filename ? (audioElement?.src = $track.filename) : null;

	onMount(() => {
		audioElement = document.createElement('audio');
		audioElement.addEventListener('timeupdate', () => {
			$progress = audioElement.currentTime;
		});
		audioElement.addEventListener('volumechange', () => {
			$volume = audioElement.volume;
		});
	});
</script>
