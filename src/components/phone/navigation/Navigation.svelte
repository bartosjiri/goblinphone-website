<script lang="ts">
	import { navigationActive } from '$components/phone/navigation';
</script>

<section class:navigation={true} class:--hidden={$navigationActive === false} {...$$restProps}>
	<div class="container">
		<a class="item" href="/" sveltekit:prefetch>
			<img src="/assets/images/phone/navigation/home.png" alt="" />
		</a>
	</div>
</section>

<style lang="scss">
	.navigation {
		margin-top: auto;
		background: rgba(#000000, 0.1);
		padding-bottom: 0.08em;

		.container {
			display: flex;
			justify-content: center;
			align-items: center;
			border-top: 2px solid $color-text--primary;
			padding: 0.1em;

			.item {
				position: relative;
				display: flex;
				height: 0.35em;
				width: 0.35em;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 0.5em;
					height: 0.5em;
					transform: translate(-50%, -50%);
					background: rgba(#000000, 0.15);
					border-radius: 8px;
					@include transition($transition--primary, background, border-radius);
				}

				img {
					display: block;
					width: 100%;
					object-fit: contain;
					z-index: 1;
					@include transition($transition--primary, transform);
				}

				&:hover {
					&::after {
						background: rgba(#000000, 0.2);
						border-radius: 12px;
					}

					img {
						transform: rotate(-10deg);
					}
				}
			}
		}

		&.--hidden {
			display: none;
		}
	}
</style>
