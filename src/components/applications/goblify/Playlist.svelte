<script lang="ts">
	import { trackIndex, playlistTracks, next } from '.';
</script>

<div class="playlist">
	<div class="list">
		{#each $playlistTracks as track, index}
			<div class="track" class:--playing={$trackIndex === index} on:click={() => next(index)}>
				<div class="art">
					<img src={track.coverArtUrl} alt="" />
				</div>
				<div class="title">
					<span>{track.title}</span>
				</div>
				<div class="artist">
					<span>{track.artist}</span>
				</div>
				<div class="icon">
					<img src="/assets/images/applications/goblify/action-play.png" alt="" />
				</div>
			</div>
		{:else}
			<p>No tracks available</p>
		{/each}
	</div>
</div>

<style lang="scss">
	.playlist {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;

		.list {
			height: 100%;
			overflow-y: auto;

			.track {
				display: grid;
				grid-template-columns: auto 1fr auto;
				grid-template-rows: auto auto;
				column-gap: 0.15em;
				row-gap: 0.1em;
				cursor: pointer;
				margin-bottom: 0.15em;

				.art {
					grid-column: 1/2;
					grid-row: 1/3;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 0.75em;
					aspect-ratio: 1/1;
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
						line-height: 1;
					}
				}

				.artist {
					grid-column: 2/3;
					grid-row: 2/3;
					display: flex;

					span {
						font-size: 0.225em;
						line-height: 1;
						color: rgba(#ffffff, 0.75);
					}
				}

				.icon {
					grid-column: 3/4;
					grid-row: 1/3;
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-right: 0.1em;

					img {
						display: block;
						height: 0.3em;

						filter: invert(1);
						opacity: 0.5;
						@include transition($transition--primary, opacity, transform);
					}

					&::after {
						content: '';
						position: absolute;
						top: 50%;
						left: 50%;
						height: 0.5em;
						width: 0.5em;
						transform: translate(-50%, -50%);
						background: rgba(#ffffff, 0.2);
						border-radius: 50%;
						opacity: 0;
						@include transition($transition--primary, opacity, transform);
					}
				}

				&.--playing {
					.title {
						span {
							color: #4bb62f;
						}
					}

					.icon {
						img {
							filter: invert(62%) sepia(16%) saturate(1896%) hue-rotate(62deg) brightness(92%)
								contrast(92%);
							opacity: 1;
						}
					}
				}

				&:hover {
					.icon {
						img {
							opacity: 1;
							transform: rotate(-4deg);
						}

						&::after {
							opacity: 1;
						}
					}
				}

				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
