<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/system';
	import { AppIconsGrid, AppIcon } from '$components/applications/homescreen';

	import { topbarVariant } from '$stores/system/topbar';
	import { navigationActive } from '$stores/system/navigation';

	onMount(() => {
		$topbarVariant = 'dark';
		$navigationActive = false;
	});
</script>

<PageMeta />

<AppWrapper>
	<AppIconsGrid>
		<AppIcon
			title="Gobble Translate"
			iconUrl="/assets/images/applications/gobble-translate/appicon.png"
			href="/gobble-translate"
		/>
		<AppIcon
			title="McGoblin"
			iconUrl="/assets/images/applications/mcgoblin/appicon.png"
			href="/mcgoblin"
		/>
		<AppIcon title="Gobblify" />
		<AppIcon title="Screecher? (Twitter)" />
		<AppIcon title="Tinder?" />
		<AppIcon title="Contacts" />
		<AppIcon
			title="MySnakes"
			iconUrl="/assets/images/applications/mysnakes/appicon.png"
			href="/mysnakes"
		/>
	</AppIconsGrid>
</AppWrapper>
