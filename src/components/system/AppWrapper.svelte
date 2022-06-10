<div class:app-wrapper={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.app-wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0.2em 0.15em;
		padding-top: 0.6em;
	}
</style>
