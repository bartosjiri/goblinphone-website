<script>
	import { Analytics } from '$util/analytics';

	import { Phone } from '$components/phone';
	import { TopBar, Navigation, Lockscreen } from '$components/system';
	import { Scene, Background, Ground } from '$components/environment';
	import { Playback } from '$components/applications/goblify';

	import { Goblingirl } from '$components/goblingirl';

	import '../styles/__global.scss';
</script>

<Analytics />

<main>
	<Scene>
		<Phone>
			<Lockscreen />
			<TopBar />
			<slot />
			<Navigation />
			<Playback />
		</Phone>
		<Goblingirl />
	</Scene>
	<Ground />
	<Background />
</main>

<style lang="scss">
	:global(main) {
		position: relative;
		max-width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
