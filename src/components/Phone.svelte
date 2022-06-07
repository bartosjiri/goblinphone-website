<div class="phone">
	<div class="thumb">
		<img src="/assets/images/thumb.png" alt="Thumb" />
	</div>
	<div class="foreground">
		<img src="/assets/images/phone-foreground.png" alt="Phone foregroung" />
	</div>
	<div class="content">
		<slot />
	</div>
	<div class="background">
		<img src="/assets/images/phone-background.png" alt="Phone background" />
	</div>
	<div class="space-keeper">
		<img src="/assets/images/phone-background.png" alt="Phone background" />
	</div>
</div>

<style lang="scss">
	.phone {
		$bottom-offset: -70px;
		position: fixed;
		bottom: $bottom-offset;
		right: 0;
		transform: translateX(-15%) rotate(-10deg);
		// filter: drop-shadow(0 0px 15px #ffffff);
		@include transition($transition--primary, transform, right);

		@include breakpoint($breakpoint--mobile-straight) {
			transform: translateX(15%) rotate(0deg);
		}

		@include breakpoint($breakpoint--mobile-zoomed) {
			transform: translateX(32%) rotate(0deg);
		}

		.thumb,
		.foreground,
		.background,
		.space-keeper {
			img {
				display: block;
				max-height: 100vh;
				max-width: 90vw;

				@include breakpoint($breakpoint--mobile-straight) {
					max-width: 176vw;
				}
			}
		}

		.thumb,
		.foreground,
		.background {
			position: absolute;
			top: 0;
			left: 0;
			pointer-events: none;
		}

		.thumb {
			z-index: 4;
		}

		.foreground {
			z-index: 3;
		}

		.content {
			position: absolute;
			top: 4%;
			left: 14%;
			right: 35%;
			bottom: 15%;
			display: flex;
			flex-direction: column;
			z-index: 2;
			overflow-y: auto;
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
