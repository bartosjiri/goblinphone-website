<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/phone/app-wrapper';
	import { Button } from '$components/phone/button';

	import { topbarVariant } from '$components/phone/top-bar';
	import { navigationActive } from '$components/phone/navigation';

	import { PLATFORM_DOMAIN } from '$config/platform';
	import { MCGOBLIN_URL } from '$components/applications/mcgoblin';

	onMount(() => {
		$topbarVariant = 'light';
		$navigationActive = true;
	});
</script>

<PageMeta title="McGoblin" />
<section class="mcgoblin" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="logo">
				<img src="/assets/images/applications/mcgoblin/appicon.png" alt="" />
			</div>
			<div class="notice">
				<div class="image">
					<img src="/assets/images/applications/mcgoblin/unavailable.gif" alt="" loading="lazy" />
				</div>
				<div class="text">
					<p>We currently do not deliver to your location, sucker</p>
				</div>
				<div class="action">
					<Button
						element="a"
						href={`${MCGOBLIN_URL}?ref=${PLATFORM_DOMAIN}`}
						target="_blank"
						backgroundColor="#fe8882"
					>
						<span>Browse menu</span>
					</Button>
				</div>
			</div>
		</div>
	</AppWrapper>
</section>

<style lang="scss">
	.mcgoblin {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background: #ec5952;

		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;

			.logo {
				display: flex;
				justify-content: center;
				margin-bottom: 0.5em;

				img {
					display: block;
					height: 1em;
				}
			}

			.notice {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 0.02em;

				.image {
					display: flex;
					margin-bottom: 0.1em;

					img {
						display: block;
						height: 2.5em;
						margin: 0 auto;
						object-fit: contain;
						border: 4px solid $color-text--primary;
						border-radius: 4px;
					}
				}

				.text {
					p {
						font-size: 0.3em;
						text-align: center;
					}
				}
			}

			.action {
				display: flex;
				justify-content: center;
				margin-top: 0.2em;
			}
		}
	}
</style>
