<section class="navigation" {...$$restProps}>
	<div class="container">
		<a class="item" href="/">
			<img src="/assets/images/ui/home.png" alt="Home" />
		</a>
	</div>
</section>

<style lang="scss">
	.navigation {
		margin-top: auto;
		background: rgba(#000000, 0.1);

		.container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: $layout-padding;
			border-top: 2px solid $color-text--primary;

			.item {
				position: relative;
				display: flex;
				height: 3rem;
				width: 3rem;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 5rem;
					height: 5rem;
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
						border-radius: 50%;
					}

					img {
						transform: rotate(-10deg);
					}
				}
			}
		}
	}
</style>
