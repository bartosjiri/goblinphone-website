<div class="app-wrapper" {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.app-wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0.2em 0.15em;
	}
</style>
