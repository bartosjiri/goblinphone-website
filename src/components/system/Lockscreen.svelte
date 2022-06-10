<script lang="ts">
	import { TopBar } from './.';
	import { GoblifyWidget } from '$components/applications/goblify';

	import { lockscreenActive } from '$stores/system/lockscreen';

	import { dayjs, DAYJS_FORMAT_TIME, DAYJS_FORMAT_DAYDATE } from '$util/dayjs';

	let interval: ReturnType<typeof setInterval> | null = null;
	let currentTime: string = '';
	let currentDate: string = '';

	const setCurrentDatetime = () => {
		const now = dayjs();
		currentTime = now.format(DAYJS_FORMAT_TIME);
		currentDate = now.format(DAYJS_FORMAT_DAYDATE);
	};

	$: lockscreenActive
		? (interval = setInterval(setCurrentDatetime, 1000))
		: clearInterval(interval as any as number);

	const handleUnlock = () => {
		$lockscreenActive = false;
	};
</script>

<div class:lockscreen={true} class:--unlocked={!$lockscreenActive} {...$$restProps}>
	<div class="content" on:click={handleUnlock}>
		<TopBar timeDisabled />
		<div class="datetime">
			<div class="time">
				<span>{currentTime}</span>
			</div>
			<div class="date">
				<span>{currentDate}</span>
			</div>
		</div>
		<div class="widgets">
			<GoblifyWidget />
		</div>
		<div class="hint">
			<span>Tap to unlock</span>
		</div>
	</div>
	<div class="background">
		<img src="/assets/images/system/lockscreen-background.jpg" alt="Lockscreen background" />
	</div>
</div>

<style lang="scss">
	.lockscreen {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		z-index: 1000;
		transition: transform 0.5s ease-in-out;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		overflow: hidden;

		&.--unlocked {
			transform: translateY(-100%);
		}

		.content {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: grid;
			grid-template-rows: auto 1fr auto;
			grid-row-gap: 0.4em;
			padding: 1.2em 0.2em 0.4em;
			z-index: 1;
			cursor: pointer;

			.datetime {
				grid-row: 1/2;
				display: flex;
				flex-direction: column;
				align-items: center;

				.time {
					display: flex;

					span {
						font-size: 1em;
						font-weight: $font-weight--bold;
						line-height: 1;
						color: white;
					}
				}

				.date {
					display: flex;

					span {
						font-size: 0.4em;
						font-weight: $font-weight--bold;
						line-height: 1;
						color: white;
					}
				}
			}

			.widgets {
				grid-row: 2/3;
				display: flex;
				flex-direction: column;
			}

			.hint {
				grid-row: 3/4;
				display: flex;
				flex-direction: column;
				align-items: center;
				// margin-top: auto;

				span {
					font-size: 0.25em;
					font-weight: $font-weight--bold;
					line-height: 1;
					color: white;
				}
			}
		}

		.background {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: #000;

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				opacity: 0.75;
			}
		}
	}
</style>
