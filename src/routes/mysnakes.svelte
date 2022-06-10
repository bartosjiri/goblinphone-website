<script lang="ts">
	import { onMount } from 'svelte';

	import { topbarVariant } from '$stores/ui/topbar';
	import { navigationActive } from '$stores/ui/navigation';

	import { PLATFORM_DOMAIN } from '$constants/platform';

	const MYSNAKES_URL = 'https://mysnakes.me';

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		if (typeof window !== 'undefined') {
			window.open(`${MYSNAKES_URL}?ref=${PLATFORM_DOMAIN}`, '_blank');
		}
	};

	onMount(() => {
		$topbarVariant = 'dark';
		$navigationActive = true;
	});
</script>

<section class="mysnakes" on:click={handleClick} {...$$restProps}>
	<div class="overlay" />
	<iframe src={MYSNAKES_URL} title="MySnakes" />
</section>

<style lang="scss">
	.mysnakes {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background: #60fc1f;
		padding-top: 0.55em;

		.overlay {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			cursor: pointer;
		}

		iframe {
			position: relative;
			height: 100%;
		}
	}
</style>
