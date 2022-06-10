<script lang="ts">
	import { onMount } from 'svelte';

	import { AppWrapper } from '$components/ui';
	import { topbarVariant } from '$stores/ui/topbar';
	import { navigationActive } from '$stores/ui/navigation';

	onMount(() => {
		$topbarVariant = 'light';
		$navigationActive = true;
	});
</script>

<section class="mcgoblin" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="notice">
				<div class="image">
					<img
						src="/assets/images/applications/mcgoblin/unavailable.gif"
						alt="McGoblin unavailable"
					/>
				</div>
				<div class="text">
					<p>Sorry, we currently do not deliver to your location.</p>
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
		background: #7d8c4c;

		.notice {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 2rem;

			.image {
				display: flex;

				img {
					display: block;
					width: 80%;
					margin: 0 auto;
					object-fit: contain;
					border: 4px solid $color-text--primary;
					border-radius: 4px;
				}
			}

			.text {
				p {
					font-size: 2rem;
					text-align: center;
				}
			}
		}
	}
</style>
