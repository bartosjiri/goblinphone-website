<script>
	import { Analytics } from '$util/analytics';

	import { Device } from '$components/environment/device';
	import { TopBar } from '$components/phone/top-bar';
	import { Navigation } from '$components/phone/navigation';
	import { Lockscreen } from '$components/phone/lockscreen';
	import { Scene } from '$components/environment/scene';
	import { Background } from '$components/environment/background';
	import { Ground } from '$components/environment/ground';
	import { GoblinGirl } from '$components/environment/goblin-girl';
	import { Playback } from '$components/applications/goblify';

	import '../styles/__global.scss';
</script>

<Analytics />

<main>
	<Scene>
		<Device>
			<Lockscreen />
			<TopBar />
			<slot />
			<Navigation />
			<Playback />
		</Device>
		<GoblinGirl />
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
