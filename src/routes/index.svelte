<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/system';
	import { AppIconsGrid, AppIcon } from '$components/applications/homescreen';

	import { topbarVariant } from '$stores/system/topbar';
	import { navigationActive } from '$stores/system/navigation';
	import { lockscreenActive } from '$stores/system/lockscreen';

	onMount(() => {
		$navigationActive = false;
	});

	$: if (!$lockscreenActive) {
		$topbarVariant = 'dark';
	}
</script>

<PageMeta />
<section class="homescreen" {...$$restProps}>
	<AppWrapper>
		<AppIconsGrid>
			<AppIcon
				title="Contacts"
				iconUrl="/assets/images/applications/contacts/appicon.png"
				href="/contacts"
			/>
			<AppIcon
				title="Gobble Translate"
				iconUrl="/assets/images/applications/gobble-translate/appicon.png"
				href="/gobble-translate"
			/>
			<AppIcon
				title="Goblify"
				iconUrl="/assets/images/applications/goblify/appicon.png"
				href="/goblify"
			/>
			<AppIcon
				title="MySnakes"
				iconUrl="/assets/images/applications/mysnakes/appicon.png"
				href="/mysnakes"
			/>
			<AppIcon
				title="Gobgram"
				iconUrl="/assets/images/applications/gobgram/appicon.png"
				href="/gobgram"
			/>
			<AppIcon
				title="McGoblin"
				iconUrl="/assets/images/applications/mcgoblin/appicon.png"
				href="/mcgoblin"
			/>
			<AppIcon
				title="Goblr"
				iconUrl="/assets/images/applications/goblr/appicon.png"
				href="/goblr"
			/>
		</AppIconsGrid>
	</AppWrapper>
	<div class="background">
		<div class="background">
			<img src="/assets/images/system/lockscreen-background.jpg" alt="Homescreen background" />
		</div>
	</div>
</section>

<style lang="scss">
	.homescreen {
		position: relative;
		height: 100%;

		:global(.app-wrapper) {
			position: relative;
			height: auto;
			z-index: 1;
		}

		.background {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: $color-background--primary;

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				opacity: 0.15;
			}
		}
	}
</style>
