<div class="phone" {...$$restProps}>
	<div class="thumb">
		<img src="/assets/images/phone/thumb.png" alt="Thumb" />
	</div>
	<div class="foreground">
		<img src="/assets/images/phone/foreground.png" alt="Phone foreground" />
	</div>
	<div class="content">
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

		@include breakpoint($breakpoint--mobile-straight) {
			left: 50%;
			transform: translateX(-50%) rotate(0);
		}

		.thumb,
		.foreground,
		.background,
		.space-keeper {
			img {
				display: block;
				max-height: 100vh;
				max-width: 100vw;
				@include transition($transition--primary, max-height);

				@include breakpoint($breakpoint--mobile-straight) {
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
			overflow-y: auto;
			z-index: 2;
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
