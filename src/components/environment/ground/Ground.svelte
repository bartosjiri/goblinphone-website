<div class:ground={true} {...$$restProps}>
	<img src="/assets/images/environment/ground/ground.png" alt="" />
</div>

<style lang="scss">
	.ground {
		position: fixed;
		bottom: -375px;
		left: 50%;
		transform: translateX(-50%);
		z-index: -9;

		img {
			display: block;
			width: 100%;
			min-width: calc(2480px * 1);
			height: auto;
			filter: blur(3px);
		}
	}
</style>
