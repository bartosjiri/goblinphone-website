<div class="posts-loading">
	<div class="header">
		<div class="image" />
		<div class="name" />
	</div>
	<div class="content" />
	<div class="description">
		<span />
		<span />
		<span />
	</div>
</div>

<style lang="scss">
	.posts-loading {
		display: grid;
		grid-template-rows: auto 1fr;
		row-gap: 0.1em;
		margin-bottom: 0.3em;
		animation: gobgram-loading 1s infinite;

		.header {
			display: grid;
			grid-template-columns: auto 1fr;
			column-gap: 0.125em;

			.image {
				height: 0.5em;
				width: 0.5em;
				background: rgba(#000000, 0.15);
				border-radius: 50%;
				overflow: hidden;
			}

			.name {
				height: 0.2em;
				width: 1.6em;
				margin: auto 0;
				background: rgba(#000000, 0.15);
			}
		}

		.content {
			width: 100%;
			height: 3em;
			background: rgba(#000000, 0.15);
		}

		.description {
			display: flex;
			flex-direction: column;

			span {
				height: 0.2em;
				background: rgba(#000000, 0.15);
				margin-bottom: 0.1em;

				&:nth-of-type(1) {
					width: 2em;
				}

				&:nth-of-type(2) {
					width: 1.6em;
				}

				&:nth-of-type(3) {
					width: 1.9em;
					margin-bottom: 0;
				}
			}
		}

		@keyframes gobgram-loading {
			0% {
				opacity: 1;
			}

			50% {
				opacity: 0.4;
			}
		}
	}
</style>
