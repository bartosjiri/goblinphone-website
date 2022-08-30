<script lang="ts">
	import { onMount } from 'svelte';

	import { popupMatch, addMatch, removeCurrentProfile } from '.';

	import type { Profile } from '.';

	export let profile: Profile;
	export let swipable: boolean;
	export let zIndex: number;

	let card: HTMLElement;
	let cardHeight: number;
	let cardWidth: number;
	let cardOverlayLike: HTMLElement;
	let cardOverlayDislike: HTMLElement;

	const SWIPE_CHOICE_THRESHOLD = 0.35;
	const SWIPE_ANIMATION_DURATION = 300;
	const SWIPE_MAX_OPACITY = 0.66;
	let startX = 0;
	let pullDeltaXPercentage = 0;
	let rotation = 0;

	const MATCH_SCORE_THRESHOLD = 0.6;
	const matchScore = Math.random();

	const onGestureMove = (e: MouseEvent | TouchEvent) => {
		const pointerX = 'touches' in e ? e.touches[0].pageX : e.pageX;
		let pullDeltaX = pointerX - startX;
		if (!pullDeltaX) return;

		pullDeltaXPercentage = pullDeltaX / cardWidth;
		rotation = pullDeltaX / 10;

		card.style.transform = `translateX(${pullDeltaX}px) rotate(${rotation}deg)`;
		cardOverlayLike.style.opacity = String(
			pullDeltaXPercentage <= 0 ? 0 : Math.min(pullDeltaXPercentage * 1.25, SWIPE_MAX_OPACITY)
		);
		cardOverlayDislike.style.opacity = String(
			pullDeltaXPercentage <= 0
				? Math.min(Math.abs(pullDeltaXPercentage) * 1.25, SWIPE_MAX_OPACITY)
				: 0
		);
	};

	const onGestureEnd = () => {
		window?.removeEventListener('mousemove', onGestureMove, true);
		window?.removeEventListener('touchmove', onGestureMove, true);
		window?.removeEventListener('mouseup', onGestureEnd);
		window?.removeEventListener('touchend', onGestureEnd);

		if (!pullDeltaXPercentage) return;

		if (pullDeltaXPercentage >= SWIPE_CHOICE_THRESHOLD) {
			handleProfileLike();
		} else if (pullDeltaXPercentage <= -SWIPE_CHOICE_THRESHOLD) {
			handleProfileDislike();
		} else {
			card.style.transform = 'translateX(0)';
			card.style.transition = `transform ${SWIPE_ANIMATION_DURATION}ms`;
			cardOverlayLike.style.opacity = String(0);
			cardOverlayLike.style.transition = `opacity ${SWIPE_ANIMATION_DURATION}ms`;
			cardOverlayDislike.style.opacity = String(0);
			cardOverlayDislike.style.transition = `opacity ${SWIPE_ANIMATION_DURATION}ms`;
		}

		setTimeout(() => {
			card.style.transform = '';
			card.style.transition = '';
			cardOverlayLike.style.transition = '';
			cardOverlayDislike.style.transition = '';
		}, SWIPE_ANIMATION_DURATION - 1);
	};

	const onGestureStart = (e: MouseEvent | TouchEvent) => {
		if (!swipable) return;

		pullDeltaXPercentage = 0;

		startX = 'touches' in e ? e.touches[0].pageX : e.pageX;

		window?.addEventListener('mousemove', onGestureMove, true);
		window?.addEventListener('touchmove', onGestureMove, true);
		window?.addEventListener('mouseup', onGestureEnd);
		window?.addEventListener('touchend', onGestureEnd);
	};

	onMount(() => {
		card.addEventListener('mousedown', onGestureStart);
		card.addEventListener('touchstart', onGestureStart);
	});

	const handleProfileLike = () => {
		card.style.transform = 'translate(4em) rotate(30deg)';
		card.style.transition = `transform ${SWIPE_ANIMATION_DURATION}ms`;
		cardOverlayLike.style.opacity = String(SWIPE_MAX_OPACITY);
		cardOverlayLike.style.transition = `opacity ${SWIPE_ANIMATION_DURATION}ms`;

		if (matchScore >= MATCH_SCORE_THRESHOLD) {
			$popupMatch = profile;
			addMatch(profile);
		}

		setTimeout(() => {
			removeCurrentProfile();
		}, SWIPE_ANIMATION_DURATION);
	};

	const handleProfileDislike = () => {
		card.style.transform = 'translate(-4em) rotate(-30deg)';
		card.style.transition = `transform ${SWIPE_ANIMATION_DURATION}ms`;
		cardOverlayDislike.style.opacity = String(SWIPE_MAX_OPACITY);
		cardOverlayDislike.style.transition = `opacity ${SWIPE_ANIMATION_DURATION}ms`;

		setTimeout(() => {
			removeCurrentProfile();
		}, SWIPE_ANIMATION_DURATION);
	};
</script>

<div class="profile-card" style={`z-index: ${zIndex};`}>
	<div
		bind:this={card}
		bind:clientHeight={cardHeight}
		bind:clientWidth={cardWidth}
		class="card"
		class:--active={swipable}
	>
		<div class="image">
			<img src={profile.imageUrl} alt="" />
			<div bind:this={cardOverlayDislike} class="overlay --disliked">
				<img src="/assets/images/applications/goblr/action-dislike.png" alt="" />
			</div>
			<div bind:this={cardOverlayLike} class="overlay --liked">
				<img src="/assets/images/applications/goblr/action-like.png" alt="" />
			</div>
		</div>
	</div>
	<div style={`height: ${cardHeight || 0}px; width: ${cardWidth || 0}px;`} />
	<div class="actions">
		<div class="action" on:click={handleProfileDislike}>
			<img src="/assets/images/applications/goblr/action-dislike.png" alt="" />
		</div>
		<div class="action" on:click={handleProfileLike}>
			<img src="/assets/images/applications/goblr/action-like.png" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	.profile-card {
		position: absolute;
		display: flex;
		flex-direction: column;
		padding-top: 0.475em;

		.card {
			position: absolute;
			width: 3.15em;
			height: 3.15em;

			display: flex;
			flex-direction: column;
			cursor: grab;

			&:active {
				cursor: grabbing;
			}

			.image {
				position: relative;
				border-radius: 0.1em;
				overflow: hidden;
				box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
				pointer-events: none;

				img {
					display: block;
					width: 100%;
					object-fit: contain;
				}

				.overlay {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					opacity: 0;

					img {
						display: block;
						width: 1.5em;
						height: 1.5em;
					}

					&.--disliked {
						background: red;
					}

					&.--liked {
						background: green;

						img {
							display: block;
							filter: hue-rotate(90deg);
						}
					}
				}
			}
		}

		.actions {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5em 0;
			background: #ffffff;

			.action {
				position: relative;
				display: flex;
				margin-right: 0.66em;
				cursor: pointer;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 0.75em;
					height: 0.75em;
					transform: translate(-50%, -50%);
					background: rgba(#000000, 0.15);
					border-radius: 50%;
					@include transition($transition--primary, background, border-radius);
				}

				img {
					display: block;
					height: 0.5em;
					object-fit: contain;
					@include transition($transition--primary, transform);
				}

				&:hover {
					&::after {
						background: rgba(#000000, 0.2);
					}

					img {
						transform: rotate(-4deg);
					}
				}

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
</style>
