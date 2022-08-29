<div class="scene">
	<slot />
</div>

<style lang="scss">
	.scene {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 2500px;
	}
</style>
