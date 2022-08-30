<script lang="ts">
	import { Button } from '$components/phone/button';
	import {
		ProfileCard,
		MatchPopup,
		profiles,
		loading,
		getProfiles
	} from '$components/applications/goblr';

	$: if ($profiles?.length < 5) {
		getProfiles();
	}
</script>

<MatchPopup />
<div class="content">
	{#if $loading && !$profiles?.length}
		<div class="loading">
			<img src="/assets/images/applications/goblr/appicon.png" alt="" />
		</div>
	{:else if $profiles.length}
		{#each $profiles as profile, index}
			<ProfileCard {profile} swipable={index == $profiles.length - 1} zIndex={index} />
		{/each}
	{:else}
		<div class="error">
			<span>{'Server error :('}</span>
		</div>
	{/if}
	{#if $profiles?.length || !$loading}
		<div class="actions">
			<Button element="a" href="/goblr/list">Your matches</Button>
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;

		.loading {
			margin-top: 0.5em;
			animation: goblr-loading 1s infinite;

			img {
				display: block;
				height: 1.2em;
				width: 1.2em;
			}

			@keyframes goblr-loading {
				0% {
					opacity: 1;
				}

				50% {
					opacity: 0.4;
				}
			}
		}

		.error {
			margin-top: 0.5em;
			display: flex;
			justify-content: center;

			span {
				font-size: 0.35em;
			}
		}
	}

	.actions {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: auto;
		margin-bottom: 1.2em;
	}
</style>
