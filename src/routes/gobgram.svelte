<script lang="ts">
	import { onMount } from 'svelte';

	import { PageMeta } from '$util/meta';
	import { AppWrapper } from '$components/phone/app-wrapper';
	import { Button } from '$components/phone/button';

	import {
		PostCard,
		PostsLoading,
		NewPost,
		posts,
		loading,
		newPostActive,
		getPosts
	} from '$components/applications/gobgram';

	import { topbarVariant } from '$components/phone/top-bar';
	import { navigationActive } from '$components/phone/navigation';

	onMount(async () => {
		$topbarVariant = 'dark';
		$navigationActive = true;
		$newPostActive = false;
		getPosts();
	});
</script>

<PageMeta title="Gobgram" />
<section class="gobgram" {...$$restProps}>
	<AppWrapper>
		<div class="container">
			<div class="header">
				<div class="title">
					<span>Gobgram</span>
				</div>
				<div class="action">
					<Button onClick={() => ($newPostActive = true)}>
						<span>New post</span>
					</Button>
				</div>
			</div>
			<div class="content">
				{#if $loading}
					<div class="loading">
						{#each Array(2) as _}
							<PostsLoading />
						{/each}
					</div>
				{:else if $posts.length}
					{#each $posts as post}
						<PostCard {post} />
					{/each}
				{:else}
					<div class="error">
						<div class="logo">
							<img src="/assets/images/applications/gobgram/appicon.png" alt="" />
						</div>
						<div class="text">
							<span>Gobgram is temporary unavailable</span>
						</div>
					</div>
				{/if}
			</div>
			<NewPost />
		</div>
	</AppWrapper>
</section>

<style lang="scss">
	.gobgram {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background: #ffffff;
		overflow: hidden;

		.container {
			position: relative;
			display: grid;
			grid-template-rows: auto 1fr auto;
			height: 100%;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 0.3em;

				.title {
					display: flex;
					margin-right: 0.2em;

					span {
						font-size: 0.35em;
						font-weight: bold;
					}
				}

				.action {
					display: flex;
				}
			}

			.content {
				overflow-y: auto;

				.loading {
					display: flex;
					flex-direction: column;
					overflow: hidden;
					height: 100%;
				}

				.error {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100%;

					.logo {
						display: flex;
						width: 1em;
						height: 1em;
						margin-bottom: 0.2em;

						img {
							display: block;
							width: 100%;
						}
					}

					.text {
						display: flex;

						span {
							font-size: 0.35em;
							font-weight: $font-weight--bold;
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>
