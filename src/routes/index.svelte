<script lang="ts">
	import { PageMeta } from '$util/meta';

	import Phone from '$components/phone/Phone.svelte';
	// import GoblinGirl from '$components/GoblinGirl.svelte';
	import Ground from '$components/environment/Ground.svelte';
	import Background from '$components/environment/Background.svelte';
</script>

<PageMeta />
<section class="index-page">
	<Phone>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>

		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
		<p>Test</p>
	</Phone>
	<!-- <GoblinGirl /> -->
	<Ground />
	<Background />
</section>

<style lang="scss">
	.index-page {
		position: relative;
		max-width: 100vw;
		max-height: 100vh;
		overflow: hidden;
	}
</style>
