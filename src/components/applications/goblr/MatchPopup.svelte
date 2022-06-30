<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	import { Button } from '$components/system';

	import { popupMatch } from '.';

	import { GOBLR_URL_BASE } from '$constants/applications/goblr';
	import { PLATFORM_DOMAIN } from '$constants/util/platform';

	const handleClose = () => {
		$popupMatch = null;
	};
</script>

{#if !!$popupMatch}
	<div class="match-popup" in:fade out:fade>
		<div class="content" in:fly={{ y: 200, duration: 300 }} out:fade>
			<div class="image">
				<img src={$popupMatch.imageUrl} alt="" />
			</div>
			<div class="title">
				<span>It's a match!</span>
			</div>
			<div class="actions">
				<Button
					element="a"
					href={`${GOBLR_URL_BASE}/${$popupMatch?.contractAddress}/${$popupMatch?.tokenId}/?ref=${PLATFORM_DOMAIN}`}
					target="_blank"
					onClick={handleClose}
				>
					<span>View profile</span>
				</Button>
				<Button onClick={handleClose}>
					<span>Continue</span>
				</Button>
			</div>
			<img
				class="decoration --first"
				src="/assets/images/applications/goblr/action-like.png"
				alt=""
			/>
			<img
				class="decoration --second"
				src="/assets/images/applications/goblr/action-like.png"
				alt=""
			/>
			<img
				class="decoration --third"
				src="/assets/images/applications/goblr/action-like.png"
				alt=""
			/>
			<img
				class="decoration --fourth"
				src="/assets/images/applications/goblr/action-like.png"
				alt=""
			/>
			<img
				class="decoration --fifth"
				src="/assets/images/applications/goblr/action-like.png"
				alt=""
			/>
		</div>
	</div>
{/if}

<style lang="scss">
	.match-popup {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba($color-text--primary, 0.66);
		z-index: 999;
		overflow: hidden;

		.content {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0.15em;
			border-radius: 0.1em;
			background: $color-background--primary;

			.image {
				width: 1.25em;
				height: 1.25em;
				margin-bottom: 0.1em;
				border-radius: 0.1em;
				overflow: hidden;

				img {
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}

			.title {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				span {
					font-size: 0.4em;
				}
			}

			.actions {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 0.2em;

				:global(a) {
					margin-right: 0.5em;
				}
			}

			.decoration {
				position: absolute;
				display: block;

				&.--first {
					top: 0.1em;
					left: 0.3em;
					width: 0.6em;
					height: 0.6em;
					transform: rotate(-30deg);
				}

				&.--second {
					top: 0.25em;
					right: 0.25em;
					width: 0.8em;
					height: 0.8em;
					transform: rotate(45deg);
				}

				&.--third {
					top: 0.75em;
					left: 0.65em;
					width: 0.35em;
					height: 0.35em;
					transform: rotate(-20deg);
				}

				&.--fourth {
					top: 1.1em;
					right: 0.45em;
					width: 0.5em;
					height: 0.5em;
					transform: rotate(13deg);
				}

				&.--fifth {
					top: 1.1em;
					left: 0.45em;
					width: 0.4em;
					height: 0.4em;
					transform: rotate(-60deg);
				}
			}
		}
	}
</style>
