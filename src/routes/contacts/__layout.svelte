<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/system';

	import { topbarVariant } from '$stores/system/topbar';
	import { navigationActive } from '$stores/system/navigation';

	onMount(() => {
		$topbarVariant = 'dark';
		$navigationActive = true;
	});
</script>

<PageMeta title="Contacts" />
<section class="contacts" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="header">
				<div class="logo">
					<img src="/assets/images/applications/contacts/appicon.png" alt="Contacts logo" />
				</div>
				<div class="title">
					<span>Contacts</span>
				</div>
			</div>
			<slot />
		</div>
	</AppWrapper>
</section>

<style lang="scss">
	.contacts {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background: #ffffff;
		overflow: hidden;

		.container {
			display: grid;
			grid-template-rows: auto 1fr auto;
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
						width: 0.4em;
						overflow: hidden;
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

			// .content {
			// 	overflow-y: auto;
			// }

			// .actions {
			// 	display: flex;
			// 	justify-content: center;
			// }
		}
	}
</style>
