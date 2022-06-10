<script lang="ts">
	import Thumb from './Thumb.svelte';

	let display: HTMLElement;
	let displayWidth: number;

	const DISPLAY_WIDTH_MAX = 414;
</script>

<div class:phone={true} {...$$restProps}>
	<Thumb bind:display />
	<div class="foreground">
		<img src="/assets/images/phone/foreground.png" alt="Phone foreground" />
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
		<img src="/assets/images/phone/background.png" alt="Phone background" />
	</div>
	<div class="space-keeper">
		<img src="/assets/images/phone/background.png" alt="" />
	</div>
</div>

<style lang="scss">
	.phone {
		$bottom-offset: -75px;

		position: fixed;
		bottom: $bottom-offset;
		left: 100%;
		transform: translateX(-100%) rotate(-10deg);
		@include transition($transition--primary, transform, left, bottom);

		@include breakpoint($breakpoint--mobile) {
			left: 50%;
			transform: translateX(-50%) rotate(0);
		}

		:global(.thumb),
		.foreground,
		.background,
		.space-keeper {
			:global(img) {
				display: block;
				max-height: 100vh;
				max-width: 100vw;
				@include transition($transition--primary, max-height);

				@include breakpoint($breakpoint--mobile) {
					max-height: calc(100vh - $bottom-offset);
					max-width: 240vw;
				}
			}
		}

		.content {
			position: absolute;
			top: 4%;
			bottom: 19%;
			left: 32%;
			right: 32%;
			display: flex;
			flex-direction: column;
			color: $color-text--primary;
			background: $color-background--primary;
			overflow-y: auto;
			z-index: 2;

			:global(*::selection) {
				background: rgba($color-text--primary, 0.33);
			}
		}

		:global(.thumb),
		.foreground,
		.background {
			position: absolute;
			top: 0;
			left: 0;
			pointer-events: none;
		}

		:global(.thumb) {
			z-index: 4;
		}

		.foreground {
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
	}
</style>
