<div class:app-wrapper={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.app-wrapper {
		display: flex;
		flex-direction: column;

		$wrapper-padding-top: 0.6em;
		$wrapper-padding-bottom: 0.2em;
		padding: $wrapper-padding-top 0.15em;
		padding-bottom: $wrapper-padding-bottom;
		height: 100%;
		height: calc(100% - $wrapper-padding-top - $wrapper-padding-bottom);
	}
</style>
