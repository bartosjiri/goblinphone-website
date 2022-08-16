<script lang="ts">
	import { onMount } from 'svelte';

	import { audioElement, sourceElement, trackProgress, playlistTracks, load } from '.';

	let audio: HTMLAudioElement;
	let source: HTMLSourceElement;

	onMount(() => {
		$audioElement = audio;
		$sourceElement = source;
	});

	$: if ($playlistTracks.length) load();
</script>

<audio bind:this={audio} bind:currentTime={$trackProgress}>
	<source bind:this={source} type="audio/mpeg" />
</audio>
