<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import * as Fathom from 'fathom-client';

	import { ANALYTICS_SCRIPT_URL } from '$constants/util/analytics';

	onMount(async () => {
		Fathom.load(import.meta.env.VITE_FATHOM_ID, {
			url: ANALYTICS_SCRIPT_URL
		});
	});

	$: $page.url.pathname, browser && Fathom.trackPageview();
</script>
