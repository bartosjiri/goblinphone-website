<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/phone/app-wrapper';
	import { Button } from '$components/phone/button';

	import { playlistActive } from '$components/applications/goblify';

	import { topbarVariant } from '$components/phone/top-bar';
	import { navigationActive } from '$components/phone/navigation';

	onMount(async () => {
		$topbarVariant = 'light';
		$navigationActive = true;
	});

	const togglePlaylist = () => {
		$playlistActive = !$playlistActive;
	};
</script>

<PageMeta title="Goblify" />
<section class="goblify" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="header">
				<div class="app">
					<div class="logo">
						<img src="/assets/images/applications/goblify/appicon.png" alt="" />
					</div>
					<div class="title">
						<span>Goblify</span>
					</div>
				</div>
				<div class="menu">
					<Button onClick={togglePlaylist}>
						<span>{$playlistActive ? 'Open Player' : 'Open Playlist'}</span>
					</Button>
				</div>
			</div>
			<slot />
		</div>
	</AppWrapper>
</section>

<style lang="scss">
	.goblify {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		color: #ffffff;
		background: #1d1d1d;
		overflow: hidden;

		.container {
			display: grid;
			grid-template-rows: auto 1fr;
			height: 100%;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 0.3em;

				.app {
					display: flex;
					align-items: center;

					.logo {
						display: flex;

						img {
							display: block;
							height: 0.4em;
						}
					}

					.title {
						display: flex;
						margin-left: 0.2em;

						span {
							font-size: 0.35em;
							font-weight: bold;
						}
					}
				}

				.menu {
					display: flex;
				}
			}
		}
	}
</style>
