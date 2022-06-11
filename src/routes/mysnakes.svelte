<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';

	import { topbarVariant } from '$stores/system/topbar';
	import { navigationActive } from '$stores/system/navigation';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import { MYSNAKES_URL } from '$constants/applications/mysnakes';

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

<PageMeta title="MySnakes" />
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
