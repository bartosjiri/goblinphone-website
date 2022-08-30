<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/phone/app-wrapper';
	import { Translate } from '$components/applications/gobble-translate';

	import { topbarVariant } from '$components/phone/top-bar';
	import { navigationActive } from '$components/phone/navigation';

	onMount(() => {
		$topbarVariant = 'dark';
		$navigationActive = true;
	});
</script>

<PageMeta title="Gobble Translate" />
<section class="gobble-translate" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="header">
				<div class="logo">
					<img src="/assets/images/applications/gobble-translate/appicon.png" alt="" />
				</div>
				<div class="title">
					<span>Gobble Translate</span>
				</div>
			</div>
			<div class="content">
				<Translate />
			</div>
		</div>
	</AppWrapper>
</section>

<style lang="scss">
	.gobble-translate {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background: #ffffff;

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
