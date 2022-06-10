<script lang="ts">
	export let href: string | undefined = undefined;
	export let title: string;
	export let iconUrl: string | undefined = undefined;
</script>

<div class:app-icon={true} {...$$restProps}>
	<a class="link" {href}>
		<div class="icon">
			<img
				src={iconUrl || `/assets/images/applications/homescreen/appicon-placeholder.png`}
				alt={`${title} icon`}
			/>
		</div>
		<div class="title">
			<span>{title}</span>
		</div>
	</a>
</div>

<style lang="scss">
	.app-icon {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		.link {
			display: flex;
			flex-direction: column;
			justify-content: center;
			display: grid;
			grid-template-rows: auto 1fr;
			@include transition($transition--primary, transform);

			.icon {
				overflow: hidden;
				@include transition($transition--primary, filter);

				img {
					display: block;
					object-fit: cover;
					width: 100%;
					@include transition($transition--primary, transform);
				}
			}

			$title-background-color: #f2eddc;

			.title {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 0.22em;
				font-weight: $font-weight--bold;
				line-height: 1.2;
				text-align: center;
				color: $color-text--primary;
				background: #f2eddc;
				margin-bottom: auto;
				border: 2px solid $color-text--primary;
				border-radius: 9px 7px 5px 8px;
				box-shadow: 0 1px 0 #000;
				filter: drop-shadow(0.15em 0.2em 0 rgba(0, 0, 0, 0.125));
				@include transition($transition--primary, background, filter);
			}

			&:hover {
				transform: translateY(-0.04em);

				.icon {
					filter: drop-shadow(0.02em 0.08em 0 rgba(0, 0, 0, 0.125));

					img {
						transform: rotate(2deg);
					}
				}

				.title {
					background: darken($title-background-color, 8%);
					filter: drop-shadow(0.15em 0.3em 0 rgba(0, 0, 0, 0.125));
				}
			}
		}
	}
</style>
