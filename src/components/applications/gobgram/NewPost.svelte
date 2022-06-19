<script lang="ts">
	import { Button } from '$components/system';

	import { newPostActive } from '.';

	import { GOBGRAM_HASHTAGS } from '$constants/applications/gobgram';

	const handleClose = () => {
		$newPostActive = false;
	};
</script>

<div class:new-post={true} class:--active={$newPostActive}>
	<div class="popup">
		<div class="title">
			<span>Create a new post</span>
		</div>
		<div class="description">
			<span>You can add a new post by including one of the following hashtags:</span>
			<!-- {#each GOBGRAM_HANDLES as handle}
				<p class="hashtag">@{handle}</p>
			{/each} -->
			{#each GOBGRAM_HASHTAGS as hashtag}
				<p class="hashtag">#{hashtag}</p>
			{/each}
			<p />
		</div>
		<div class="actions">
			<Button element="a" href="https://twitter.com" target="_blank" onClick={handleClose}>
				<span>New post</span>
			</Button>
			<Button onClick={handleClose}>
				<span>Close</span>
			</Button>
		</div>
	</div>
	<div class="overlay" />
</div>

<style lang="scss">
	.new-post {
		display: none;
		position: absolute;
		flex-direction: column;
		justify-content: center;
		top: 0;
		bottom: -0.2em;
		left: -0.15em;
		right: -0.15em;
		background: rgba(#000, 0.66);

		.popup {
			display: flex;
			flex-direction: column;
			background: $color-background--primary;
			margin: 0.2em;
			padding: 0.15em;
			border: 2px solid $color-text--primary;

			.title {
				display: flex;
				margin-bottom: 0.1em;

				span {
					font-size: 0.275em;
					font-weight: $font-weight--bold;
				}
			}

			.description {
				display: flex;
				flex-direction: column;

				span {
					font-size: 0.225em;
				}

				p {
					display: block;
					font-size: 0.2em;
				}
			}

			.actions {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 0.2em;

				:global(a) {
					margin-right: 0.5em;
				}
			}
		}

		&.--active {
			display: flex;
		}
	}
</style>
