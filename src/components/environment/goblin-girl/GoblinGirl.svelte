<script lang="ts">
	import {
		goblinGirlFocused,
		GOBLINGRLZ_URL,
		GOBLINGIRL_SPEECH
	} from '$components/environment/goblin-girl';
	import { PLATFORM_DOMAIN } from '$config/platform';

	let girl: HTMLElement;
	let speechWidth: number;
	let speech: string;

	$: if (girl) {
		girl.onmouseenter = () => {
			$goblinGirlFocused = true;
		};

		girl.onmouseleave = () => {
			$goblinGirlFocused = false;
		};

		scheduleSpeech();
	}

	const SPEECH_WIDTH_MAX = 412;
	const SPEECH_LENGTH_MIN = 5;
	const SPEECH_LENGTH_MAX = 10;
	const SPEECH_COOLDOWN_MIN = 15;
	const SPEECH_COOLDOWN_MAX = 30;

	const speak = (length: number) => {
		speech = GOBLINGIRL_SPEECH[Math.floor(Math.random() * GOBLINGIRL_SPEECH.length)];
		setTimeout(() => {
			speech = '';
		}, length);
	};

	const scheduleSpeech = () => {
		const speechLength =
			Math.random() * (SPEECH_LENGTH_MAX - SPEECH_LENGTH_MIN) + SPEECH_LENGTH_MIN * 1000;
		const speechCooldown =
			Math.random() * (SPEECH_COOLDOWN_MAX - SPEECH_COOLDOWN_MIN) + SPEECH_COOLDOWN_MIN * 1000;

		setInterval(() => {
			speak(speechLength);
			scheduleSpeech;
		}, speechCooldown);
	};
</script>

<div class:goblin-girl={true} {...$$restProps}>
	<a
		bind:this={girl}
		class="girl"
		class:--focused={$goblinGirlFocused}
		href={`${GOBLINGRLZ_URL}?ref=${PLATFORM_DOMAIN}`}
		target="_blank"
	>
		{#if speech}
			<div
				bind:clientWidth={speechWidth}
				class="speech"
				style={`font-size: ${((speechWidth || SPEECH_WIDTH_MAX / 2) / SPEECH_WIDTH_MAX) * 100}px;`}
			>
				<div class="text">
					<span>{speech}</span>
				</div>
				<div class="background">
					<img src="/assets/images/environment/goblin-girl/speech-bubble.png" alt="" />
				</div>
			</div>
		{/if}
		<div class="container">
			<img
				class="mouth"
				class:--active={speech}
				src="/assets/images/environment/goblin-girl/mouth.png"
				alt=""
			/>
			<img src="/assets/images/environment/goblin-girl/girl.png" alt="" />
		</div>
	</a>
</div>

<style lang="scss">
	.goblin-girl {
		position: fixed;
		bottom: 0;
		left: 0;
		max-width: 550px;
		z-index: -1;

		.girl {
			display: flex;
			filter: blur(4px);
			@include transition($transition--primary, filter, opacity);
			max-width: 800px;

			@include breakpoint($breakpoint--goblingirl) {
				opacity: 0;
				pointer-events: none;
			}

			.speech {
				position: absolute;
				width: 75%;
				top: 8%;
				bottom: 60%;
				left: 63%;
				transform-origin: 10% 100%;
				animation: speech 0.33s steps(1) infinite;

				.text {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 8%;
					z-index: 1;

					span {
						font-size: 0.28em;
						font-weight: $font-weight--bold;
						text-align: center;
						color: $color-text--primary;
					}
				}

				.background {
					position: absolute;

					img {
						display: block;
						width: 100%;
					}
				}
			}

			.container {
				img {
					display: block;
					max-height: 80vh;
					max-width: 90vw;
					width: 100%;

					&.mouth {
						position: absolute;
						top: 0;
						left: 0;
						opacity: 0;
						z-index: 1;
						pointer-events: none;

						&.--active {
							animation: mouth 0.33s steps(1) infinite;
						}
					}
				}
			}

			&.--focused {
				filter: none;
			}
		}

		@keyframes mouth {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 1;
			}
		}

		@keyframes speech {
			50% {
				transform: rotate(2deg);
			}
		}
	}
</style>
