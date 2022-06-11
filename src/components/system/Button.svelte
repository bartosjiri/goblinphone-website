<script lang="ts">
	export let element: string = 'button';
	export let color: string = '#000000';
	export let backgroundColor: string = '#e2e2e2';
	export let onClick: () => void = () => {};
</script>

<svelte:element
	this={element}
	class:button={true}
	on:click={onClick}
	style={`color: ${color}; background: ${backgroundColor};`}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.button {
		font-family: $font-family--primary;
		font-size: 0.25em;
		font-weight: $font-weight--bold;
		text-align: center;
		text-align: center;
		padding: 12px 16px 8px;
		padding: 0.48em 0.64em 0.32em;
		border: 2px solid #000;
		border-radius: 9px 7px 5px 8px;
		cursor: pointer;
		box-shadow: 0 1px 0 #000;
		filter: drop-shadow(0.15em 0.2em 0 rgba(0, 0, 0, 0.125));
		@include transition($transition--primary, transform, filter);

		&:hover {
			transform: translateY(-0.06em);
			filter: drop-shadow(0.15em 0.28em 0 rgba(0, 0, 0, 0.125));
		}
	}
</style>
