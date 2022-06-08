<script>
	import Phone from '$components/phone/Phone.svelte';
	import Ground from '$components/environment/Ground.svelte';
	import Background from '$components/environment/Background.svelte';

	import '../styles/__global.scss';
</script>

<main>
	<Phone>
		<slot />
	</Phone>
	<Ground />
	<Background />
</main>

<style lang="scss">
	:global(main) {
		position: relative;
		max-width: 100vw;
		max-height: 100vh;
		overflow: hidden;
	}
</style>
