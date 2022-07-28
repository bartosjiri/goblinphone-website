<script lang="ts">
	import { Player, Playlist, playlistActive } from '$components/applications/goblify';
</script>

{#if $playlistActive}
	<Playlist />
{:else}
	<Player />
{/if}
