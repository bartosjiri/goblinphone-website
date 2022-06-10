<script lang="ts">
	// import { onMount } from 'svelte';

	import { playing, volume, track } from '$stores/system/playback';

	const handleWidgetClick = (e: MouseEvent) => {
		e.stopPropagation();
	};

	// onMount(() => {
	// 	$playing = true;
	// 	$volume = 0.5;
	// 	$track = {
	// 		filename: '/assets/audio/pendulum.mp3',
	// 		title: 'Pendulum',
	// 		artist: 'The Pendulum'
	// 	};
	// });
</script>

<div class:goblify-widget={true} on:click={handleWidgetClick} {...$$restProps}>
	<div class="content">
		<div class="info">
			<div class="image">
				<img src="/assets/images/applications/goblify/pendulum-cover.png" alt="Pendulum cover" />
			</div>
			<div class="title">
				<span>Pendulum</span>
			</div>
			<div class="artist">
				<span> The Pendulum </span>
			</div>
		</div>
		<div class="controls">
			<div class="item">
				<img src="/assets/images/system/audio-next.png" alt="Previous" />
			</div>
			<div class="item">
				<img
					src={`/assets/images/system/audio-${playing ? 'pause' : 'play'}.png`}
					alt={$playing ? 'Pause' : 'Play'}
				/>
			</div>
			<div class="item">
				<img src="/assets/images/system/audio-next.png" alt="Next" />
			</div>
		</div>
		<div class="volume">
			<input type="range" />
		</div>
	</div>
	<div class="background" />
</div>

<style lang="scss">
	.goblify-widget {
		position: relative;
		cursor: default;

		.content {
			position: relative;
			padding: 0.22em;
			z-index: 1;

			.info {
				display: grid;
				grid-template-columns: 1em 1fr;
				grid-template-rows: auto auto;
				column-gap: 0.2em;
				margin-bottom: 0.4em;

				.image {
					grid-column: 1/2;
					grid-row: 1/3;
					border-radius: 0.12em;
					overflow: hidden;

					img {
						display: block;
						width: 100%;
						object-fit: cover;
					}
				}

				.title {
					grid-column: 2/3;
					grid-row: 1/2;
					display: flex;

					span {
						font-size: 0.3em;
						font-weight: bold;
					}
				}

				.artist {
					grid-column: 2/3;
					grid-row: 2/3;
					display: flex;

					span {
						font-size: 0.3em;
						// font-weight: bold;
					}
				}
			}

			.controls {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				padding: 0 0.2em;
				margin-bottom: 0.4em;

				.item {
					display: flex;
					padding: 0.1em;
					cursor: pointer;
					// justify-content: center;

					img {
						display: block;
					}

					&:nth-of-type(1) {
						img {
							height: 0.3em;
							transform: rotate(180deg);
							opacity: 0.4;
						}
					}

					&:nth-of-type(2) {
						img {
							height: 0.3em;
							margin: auto;
						}
					}

					&:nth-of-type(3) {
						img {
							height: 0.3em;
							opacity: 0.4;
							margin-left: auto;
						}
					}
				}
			}

			.volume {
				display: flex;

				input {
					width: 100%;
				}
			}
		}

		.background {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			// background: rgba(#fff, 0.9);
			border-radius: 0.1em;
			// filter: blur(2px);
			// backdrop-filter: blur(0.4em);
			// background-blend-mode: overlay;
			box-shadow: inset 1em 1em 20em rgba(255, 255, 255, 1);
			// filter: blur(1px);
			// background: inherit;
		}
	}
</style>
