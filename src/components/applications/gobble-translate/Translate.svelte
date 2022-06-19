<script lang="ts">
	import { Button } from '$components/system';

	import { generateTranslation } from './generateTranslation';

	let input: string;
	$: output = generateTranslation(input) || '';

	const handleRegenerate = () => {
		output = generateTranslation(input);
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(output);
		} catch (err) {
			console.error(err);
		}
	};
</script>

<div class="translate">
	<div class="input">
		<textarea bind:value={input} placeholder="Input text..." rows={5} />
	</div>
	<div class="languages">
		<div class="item">
			<span>Human</span>
		</div>
		<div class="arrows">
			<img src="/assets/images/applications/gobble-translate/arrows.png" alt="" />
		</div>
		<div class="item">
			<span>Goblin</span>
		</div>
	</div>
	<div class="output">
		<textarea value={output} rows={5} disabled />
	</div>
	<div class="action">
		<Button onClick={handleRegenerate}>
			<span>Get synonym</span>
		</Button>
		<Button onClick={handleCopy}>
			<span>Copy result</span>
		</Button>
	</div>
</div>

<style lang="scss">
	.translate {
		.input,
		.output {
			display: flex;
			flex-direction: column;
			justify-content: center;

			textarea {
				$padding: 0.5em;
				font-size: 0.27em;
				width: 100%;
				padding: $padding;
				resize: none;
				border: 2px solid #e2e2e2;
				border-radius: 6px;
				box-sizing: border-box;
			}
		}

		.output {
			textarea {
				font-family: sans-serif;
				color: $color-text--primary;
				-webkit-text-fill-color: $color-text--primary;
				background: #ffffff;
				opacity: 1 !important;
			}
		}

		.languages {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.item {
				display: flex;

				span {
					font-size: 0.25em;
					font-weight: $font-weight--bold;
				}
			}

			.arrows {
				img {
					display: block;
					height: 0.3em;
				}
			}
		}

		.action {
			display: flex;
			justify-content: center;
			margin-top: 0.2em;

			:global(button) {
				margin-right: 0.4em;

				&:last-of-type {
					margin-right: 0;
				}
			}
		}
	}
</style>
