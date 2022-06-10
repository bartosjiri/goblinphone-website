<script>
	import { Phone } from '$components/phone';
	import { TopBar, Navigation, Lockscreen, Playback } from '$components/system';
	import { Background, Ground } from '$components/environment';

	import '../styles/__global.scss';
</script>

<main>
	<Phone>
		<Lockscreen />
		<TopBar />
		<slot />
		<Navigation />
		<!-- <Playback /> -->
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
