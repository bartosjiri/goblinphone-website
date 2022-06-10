<script>
	import { Phone } from '$components/phone';
	import { TopBar, Navigation } from '$components/ui';
	import { Background, Ground } from '$components/environment';

	import '../styles/__global.scss';
</script>

<main>
	<Phone>
		<TopBar />
		<slot />
		<Navigation />
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
