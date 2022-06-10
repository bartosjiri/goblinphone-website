<script lang="ts">
	export let display: HTMLElement;

	let thumb: HTMLElement;
	let bounds: DOMRect;

	const moveThumb = (e: MouseEvent) => {
		const cursorX = e.clientX;
		const leftX = cursorX - bounds.x;
		const rotateDegMax = 27;
		const rotateDegMin = -27;

		thumb.style.transform = `rotate(${
			((rotateDegMax - rotateDegMin) * leftX) / bounds.width + rotateDegMin
		}deg)`;
	};

	$: if (display) {
		display.onmouseenter = () => {
			bounds = display.getBoundingClientRect();
			document.addEventListener('mousemove', moveThumb);
		};

		display.onmouseleave = () => {
			document.removeEventListener('mousemove', moveThumb);
			thumb.style.transform = 'rotate(0deg)';
		};
	}
</script>

<div bind:this={thumb} class:thumb={true} {...$$restProps}>
	<img src="/assets/images/phone/thumb.png" alt="Thumb" />
</div>

<style lang="scss">
	.thumb {
		transform-origin: 72% 82%;
		transition: transform 75ms ease-in-out;
	}
</style>
