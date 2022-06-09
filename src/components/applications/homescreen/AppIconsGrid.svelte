<div class="app-icons-grid" {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.app-icons-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.2em;
		row-gap: 0.3em;
	}
</style>
