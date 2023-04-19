<script lang="ts">
	import { page } from '$app/stores';

	import { PLATFORM_DOMAIN } from '$config/platform';
</script>

{#if $page?.url?.hostname !== PLATFORM_DOMAIN}
	<a class:domain-announcement={true} href={`https://${PLATFORM_DOMAIN}`}>
		<span>
			The Goblin Phone will soon move to a new domain, be sure to click here and update your
			bookmarks!
		</span>
	</a>
{/if}

<style lang="scss">
	.domain-announcement {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		color: $color-text--primary;
		font-weight: $font-weight--bold;
		text-align: center;
		background: #fe8882;
	}
</style>
