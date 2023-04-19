<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/phone/app-wrapper';

	import { topbarVariant } from '$components/phone/top-bar';
	import { navigationActive } from '$components/phone/navigation';

	onMount(async () => {
		$topbarVariant = 'dark';
		$navigationActive = true;
	});
</script>

<PageMeta title="Goblr" />
<section class="goblr" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="header">
				<div class="logo">
					<img src="/assets/images/applications/goblr/appicon.png" alt="" />
				</div>
				<div class="title">
					<span>Goblr</span>
				</div>
			</div>
			<slot />
		</div>
	</AppWrapper>
</section>

<style lang="scss">
	.goblr {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background: #ffffff;
		overflow: hidden;

		.container {
			display: grid;
			grid-template-rows: auto 1fr;
			height: 100%;

			.header {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 0.3em;

				.logo {
					display: flex;

					img {
						display: block;
						height: 0.4em;
					}
				}

				.title {
					display: flex;
					margin-left: 0.2em;

					span {
						font-size: 0.35em;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
