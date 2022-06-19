<script lang="ts">
	import type { Post } from './Gobgram.types';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';

	export let post: Post;
</script>

<div class="post-card">
	<a class="header" href={`${post.user.url}?ref=${PLATFORM_DOMAIN}`} target="_blank">
		<div class="image">
			<img src={post.user.imageUrl} alt="" />
		</div>
		<div class="name">
			<span>{post.user.name}</span>
		</div>
	</a>
	<a class="content" href={`${post.tweet.url}?ref=${PLATFORM_DOMAIN}`} target="_blank">
		<div class="image">
			<img src={post.tweet.imageUrl} alt="" />
		</div>
		<div class="likes">
			<span>{post.tweet.likes} like{post.tweet.likes !== 1 ? 's' : ''}</span>
		</div>
		<div class="description">
			<span><strong>{post.user.name}</strong> {post.tweet.description}</span>
		</div>
	</a>
</div>

<style lang="scss">
	.post-card {
		display: grid;
		grid-template-rows: auto 1fr;
		row-gap: 0.1em;
		margin-bottom: 0.3em;

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

				img {
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}

			.name {
				display: flex;
				margin: auto 0;

				span {
					font-size: 0.25em;
					font-weight: $font-weight--bold;
					color: $color-text--primary;
				}
			}
		}

		.content {
			display: flex;
			flex-direction: column;

			.image {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: rgba(#000000, 0.15);
				width: 100%;
				min-height: 3em;
				margin-bottom: 0.05em;

				img {
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}

			.likes {
				display: flex;

				span {
					font-size: 0.2em;
					font-weight: $font-weight--bold;
					color: $color-text--primary;
				}
			}

			.description {
				display: flex;

				span {
					font-size: 0.2em;
					color: $color-text--primary;

					strong {
						font-weight: $font-weight--bold;
					}
				}
			}
		}

		&:last-of-type {
			margin-bottom: 0;
		}
	}
</style>
