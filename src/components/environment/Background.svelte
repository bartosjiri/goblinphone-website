<div class:background={true} {...$$restProps}>
	<img src="/assets/images/environment/background.jpg" alt="Background" />
</div>

<style lang="scss">
	.background {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: -10;

		img {
			display: block;
			width: 100%;
			min-width: 2732px;
			height: auto;
			filter: blur(5px);
		}
	}
</style>
