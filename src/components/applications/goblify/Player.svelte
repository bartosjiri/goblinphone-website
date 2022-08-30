<script lang="ts">
	import {
		audioElement,
		trackIndex,
		isPlaying,
		isShuffling,
		isRepeating,
		trackProgress,
		trackLength,
		playlistTracks,
		play,
		pause,
		next,
		previous
	} from '.';

	import { dayjs } from '$util/dayjs';

	import { PLATFORM_DOMAIN } from '$config/platform';

	let timeline: HTMLElement;

	const handleTimelineClick = (e: MouseEvent) => {
		const timelineClientRect = timeline.getBoundingClientRect();
		const clickPositionX = e.clientX;

		const relativeProgress = (clickPositionX - timelineClientRect.left) / timelineClientRect.width;

		// @NOTE: https://github.com/sveltejs/svelte/issues/3524
		// $trackProgress = $trackLength * relativeProgress;
		$audioElement.currentTime = $trackLength * relativeProgress;
	};

	const toggleShuffle = () => {
		$isShuffling = !$isShuffling;
	};

	const toggleRepeat = () => {
		$isRepeating = !$isRepeating;
	};
</script>

<div class="player">
	<a
		class="metadata"
		href={`${$playlistTracks[$trackIndex]?.artistUrl}?ref=${PLATFORM_DOMAIN}`}
		target="_blank"
	>
		<div class="art">
			<img src={$playlistTracks[$trackIndex]?.coverArtUrl} alt="" />
		</div>
		<div class="title">
			<span>{$playlistTracks[$trackIndex]?.title}</span>
		</div>
		<div class="artist">
			<span>{$playlistTracks[$trackIndex]?.artist}</span>
		</div>
	</a>
	<div class="timeline" bind:this={timeline} on:click={handleTimelineClick}>
		<div class="bar">
			<div class="current" style={`width: ${($trackProgress / $trackLength) * 100}%;`} />
		</div>
		<div class="stats">
			<div class="progress">
				<span>{dayjs.duration($trackProgress || 0, 'seconds').format('m:ss')}</span>
			</div>
			<div class="length">
				<span>{dayjs.duration($trackLength || 0, 'seconds').format('m:ss')}</span>
			</div>
		</div>
	</div>

	<div class="controls">
		<div class="action shuffle" class:--active={$isShuffling} on:click={toggleShuffle}>
			<img src="/assets/images/applications/goblify/action-shuffle.png" alt="" />
		</div>
		<div class="play-controls">
			<div class="action previous" on:click={previous}>
				<img src="/assets/images/applications/goblify/action-next.png" alt="" />
			</div>
			<div class="action play" on:click={$isPlaying ? pause : play}>
				<img
					class:--hidden={!$isPlaying}
					src="/assets/images/applications/goblify/action-pause.png"
					alt=""
				/>
				<img
					class:--hidden={$isPlaying}
					src="/assets/images/applications/goblify/action-play.png"
					alt=""
				/>
			</div>
			<div class="action next" on:click={() => next()}>
				<img src="/assets/images/applications/goblify/action-next.png" alt="" />
			</div>
		</div>
		<div class="action repeat" class:--active={$isRepeating} on:click={toggleRepeat}>
			<img src="/assets/images/applications/goblify/action-repeat.png" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	.player {
		display: flex;
		flex-direction: column;

		.metadata {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.art {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				aspect-ratio: 1/1;
				overflow: hidden;

				img {
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}

			.title {
				display: flex;
				width: 100%;
				margin-top: 0.1em;

				span {
					font-size: 0.4em;
					line-height: 1;
					color: #ffffff;
				}
			}

			.artist {
				display: flex;
				width: 100%;

				span {
					font-size: 0.325em;
					line-height: 1;
					color: rgba(#ffffff, 0.75);
				}
			}
		}

		.timeline {
			position: relative;
			margin: 0.25em 0 0.1em;
			padding-top: 0.1em;
			cursor: pointer;

			.bar {
				position: relative;
				display: flex;
				background: rgba(#ffffff, 0.33);
				height: 0.06em;

				.current {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					display: block;
					width: 20%;
					background: #ffffff;
					pointer-events: none;
				}
			}

			.stats {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 0.05em;

				.progress,
				.length {
					display: flex;

					span {
						font-size: 0.25em;
						font-weight: $font-weight--bold;
					}
				}
			}
		}

		.controls {
			display: grid;
			grid-template-columns: 1fr 5fr 1fr;
			column-gap: 0.2em;
			padding: 0.15em;

			.play-controls {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				column-gap: 0.1em;
			}

			.action {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				img {
					position: relative;
					display: block;
					width: 100%;
					filter: invert(1);
				}

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					height: 100%;
					aspect-ratio: 1/1;
					transform: translate(-50%, -50%);
					background: rgba(#ffffff, 0.2);
					border-radius: 50%;
					opacity: 0;
					@include transition($transition--primary, opacity, transform);
				}

				&:hover {
					&::after {
						opacity: 1;
					}

					img {
						transform: rotate(-4deg);
					}
				}

				&.play {
					img {
						opacity: 1;

						&.--hidden {
							height: 0;
							width: 0;
							opacity: 0;
							pointer-events: none;
						}
					}
				}

				&.previous {
					img {
						transform: rotate(180deg);
					}

					&:hover {
						img {
							transform: rotate(176deg);
						}
					}
				}

				&.--active {
					img {
						filter: invert(62%) sepia(16%) saturate(1896%) hue-rotate(62deg) brightness(92%)
							contrast(92%);
					}
				}
			}
		}
	}
</style>
