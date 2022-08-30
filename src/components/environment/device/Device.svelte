<script lang="ts">
	import { Thumb } from '$components/environment/thumb';

	import { goblinGirlFocused } from '$components/environment/goblin-girl';

	let display: HTMLElement;
	let displayWidth: number;

	const DISPLAY_WIDTH_MAX = 414;
</script>

<div class:device={true} class:--unfocused={$goblinGirlFocused} {...$$restProps}>
	<Thumb bind:display />
	<div class="bezel">
		<img src="/assets/images/environment/device/bezel.png" alt="" />
	</div>
	<div
		bind:this={display}
		bind:clientWidth={displayWidth}
		class="content"
		style={`font-size: ${((displayWidth || DISPLAY_WIDTH_MAX / 2) / DISPLAY_WIDTH_MAX) * 100}px;`}
	>
		<slot />
	</div>
	<div class="background">
		<img src="/assets/images/environment/device/background.png" alt="" />
	</div>
	<div class="space-keeper">
		<img src="/assets/images/environment/device/background.png" alt="" />
	</div>
</div>

<style lang="scss">
	.device {
		position: fixed;
		bottom: -10%;
		left: 100%;
		transform: translateX(-100%) rotate(-10deg);
		@include transition($transition--primary, transform, left, bottom, filter);
		pointer-events: none;

		@include breakpoint($breakpoint--mobile) {
			left: 50%;
			transform: translateX(-50%) rotate(0);
		}

		:global(.thumb),
		.bezel,
		.background,
		.space-keeper {
			:global(img) {
				display: block;
				max-height: 100vh;
				max-width: 100vw;
				@include transition($transition--primary, max-height);

				@include breakpoint($breakpoint--mobile) {
					max-width: 260vw;
				}
			}
		}

		.content {
			position: absolute;
			top: 4%;
			bottom: 18%;
			left: 34%;
			right: 34%;
			display: flex;
			flex-direction: column;
			color: $color-text--primary;
			background: $color-background--primary;
			overflow-y: auto;
			pointer-events: all;
			z-index: 2;

			:global(*::selection) {
				background: rgba($color-text--primary, 0.33);
			}
		}

		:global(.thumb),
		.bezel,
		.background {
			position: absolute;
			top: 0;
			left: 0;
			pointer-events: none;
		}

		:global(.thumb) {
			z-index: 4;
		}

		.bezel {
			z-index: 3;
		}

		.background {
			z-index: 1;
		}

		.space-keeper {
			img {
				opacity: 0;
			}
		}

		&.--unfocused {
			filter: blur(4px);
			transform: translateX(-80%);
		}
	}
</style>
