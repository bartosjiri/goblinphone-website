<script lang="ts">
	import { dayjs, DAYJS_FORMAT_TIME } from '$util/dayjs';
	import { topbarVariant } from '$components/phone/top-bar';

	export let timeDisabled = false;

	let interval: ReturnType<typeof setInterval> | null = null;
	let currentTime = '';

	const setCurrentTime = () => {
		currentTime = dayjs().format(DAYJS_FORMAT_TIME);
	};

	$: !timeDisabled
		? (interval = setInterval(setCurrentTime, 1000))
		: clearInterval(interval as unknown as number);
</script>

<div class:top-bar={true} class:--light={$topbarVariant === 'light'} {...$$restProps}>
	<div class="container">
		<div class:time={true} class:--disabled={timeDisabled}>
			<span>{currentTime}</span>
		</div>
		<div class="utility">
			<img src="/assets/images/phone/top-bar/icons.png" alt="" />
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
		pointer-events: none;

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

				&.--disabled {
					display: none;
				}
			}

			.utility {
				// height: 1em;
				margin-left: auto;

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
