<script lang="ts">
	import { onMount } from 'svelte';

	import { Button } from '$components/phone/button';
	import { loadStoredMatches, deleteMatch } from '$components/applications/goblr';

	import type { Profile } from '$components/applications/goblr';

	import { GOBLR_URL_BASE } from '$components/applications/goblr';
	import { PLATFORM_DOMAIN } from '$config/platform';

	let matches: Profile[] = [];

	onMount(() => {
		matches = loadStoredMatches();
	});

	const handleDelete = (match: Profile) => {
		deleteMatch(match);
		matches = loadStoredMatches();
	};
</script>

<div class="list">
	<div class="title">
		<span>Your matches</span>
	</div>
	<div class="items">
		{#each matches as match (`${match.contractAddress}-${match.tokenId}`)}
			<div class="item">
				<div class="content">
					<div class="image">
						<img src={match.imageUrl} alt="" />
					</div>
					<div class="actions">
						<a
							class="action"
							href={`${GOBLR_URL_BASE}/${match.contractAddress}/${match.tokenId}/?ref=${PLATFORM_DOMAIN}`}
							target="_blank"
						>
							<img src="/assets/images/applications/contacts/action-link.png" alt="" />
						</a>
						<div class="action" on:click={() => handleDelete(match)}>
							<img src="/assets/images/applications/contacts/action-delete.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="empty">
				<span>{'No matches yet :('}</span>
			</div>
		{/each}
	</div>
</div>
<div class="actions">
	<Button element="a" href="/goblr">Back</Button>
</div>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.title {
			display: flex;
			margin-bottom: 0.1em;

			span {
				font-size: 0.3em;
				font-weight: $font-weight--bold;
			}
		}

		.items {
			display: flex;
			flex-direction: column;
			overflow-y: auto;

			.item {
				padding: 0.1em;
				margin-bottom: 0.15em;
				border: 2px solid darken(#f2f2f2, 20%);
				border-radius: 0.2em;
				background: #f2f2f2;
				filter: drop-shadow(0.015em 0.02em 0 rgba(0, 0, 0, 0.125));

				.content {
					display: grid;
					grid-template-columns: auto 1fr;
					column-gap: 0.2em;

					.image {
						height: 1.6em;
						width: 1.6em;
						display: flex;
						overflow: hidden;
						border-radius: 0.2em;

						img {
							display: block;
							width: 100%;
							object-fit: cover;
						}
					}

					.actions {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 0.2em;
						margin-bottom: 0.1em;

						.action {
							position: relative;
							display: flex;
							margin-right: 0.25em;
							cursor: pointer;

							&::after {
								content: '';
								position: absolute;
								top: 50%;
								left: 50%;
								width: 0.5em;
								height: 0.5em;
								transform: translate(-50%, -50%);
								background: rgba(#000000, 0.15);
								border-radius: 50%;
								@include transition($transition--primary, background, border-radius);
							}

							img {
								display: block;
								height: 0.34em;
								object-fit: contain;
								@include transition($transition--primary, transform);
							}

							&:hover {
								&::after {
									background: rgba(#000000, 0.2);
								}

								img {
									transform: rotate(-4deg);
								}
							}

							&:last-child {
								margin-right: 0;
							}
						}
					}
				}
			}

			.empty {
				display: flex;
				justify-content: center;

				span {
					font-size: 0.35em;
				}
			}
		}
	}

	.actions {
		margin-top: 0.2em;
		display: flex;
		justify-content: center;
	}
</style>
