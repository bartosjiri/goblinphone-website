<script lang="ts">
	import { onMount } from 'svelte';

	import { dayjs, DAYJS_FORMAT_TIME } from '$util/dayjs';
	import { topbarVariant } from '$stores/ui/topbar';

	let currentTime: string = '0:00';

	const setCurrentTime = () => {
		currentTime = dayjs().format(DAYJS_FORMAT_TIME);
	};

	onMount(() => {
		setInterval(setCurrentTime, 1000);
	});
</script>

<div class:top-bar={true} class:--light={$topbarVariant === 'light'} {...$$restProps}>
	<div class="container">
		<div class="time">
			<span>{currentTime}</span>
		</div>
		<div class="utility">
			<img src="/assets/images/ui/topbar-icons.png" alt="Utility icons" />
		</div>
	</div>
</div>

<style lang="scss">
	.top-bar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		z-index: 100;

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0.15em 0.1em;

			.time {
				display: flex;

				span {
					font-size: 0.25em;
					font-weight: $font-weight--bold;
				}
			}

			.utility {
				// height: 1em;

				img {
					display: block;
					object-fit: contain;
					height: 0.2em;
				}
			}
		}

		&.--light {
			.container {
				.time {
					span {
						color: #ffffff;
					}
				}

				.utility {
					img {
						filter: invert(1);
					}
				}
			}
		}
	}
</style>
