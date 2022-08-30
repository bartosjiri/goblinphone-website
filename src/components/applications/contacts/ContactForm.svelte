<script lang="ts">
	import { goto } from '$app/navigation';

	import { Button } from '$components/phone/button';

	import type { Contact } from './.';

	export let contact: Contact | undefined = undefined;
	export let onSumbit: (contact: Contact) => void = () => undefined;
	export let submitLabel: string;

	$: name = contact?.name || '';
	$: description = contact?.description || '';
	$: imageUrl = contact?.imageUrl || '';
	$: link = contact?.href || '';

	let nameError = false;

	const handleSubmit = () => {
		name = name?.trim();
		description = description?.trim();
		imageUrl = imageUrl?.trim();
		link = link?.trim();

		if (name?.length === 0) {
			nameError = true;
			return;
		}

		onSumbit &&
			onSumbit({
				id: contact?.id,
				name,
				description,
				imageUrl,
				href: link
			});

		goto('/contacts');
	};

	const resetErrors = () => {
		nameError = false;
	};
</script>

<div class="contact-form">
	<div class="form">
		<div class="item">
			<div class="label">
				<span>Name*</span>
			</div>
			<input
				type="text"
				value={name}
				on:change={(e) => {
					name = e.currentTarget.value;
					resetErrors();
				}}
				on:blur={resetErrors}
			/>
			{#if nameError}
				<div class="error">
					<span>Name is required!</span>
				</div>
			{/if}
		</div>
		<div class="item">
			<div class="label">
				<span>Description</span>
			</div>
			<input
				type="text"
				value={description}
				on:change={(e) => {
					description = e.currentTarget.value;
				}}
			/>
		</div>
		<div class="item">
			<div class="label">
				<span>Profile picture URL</span>
			</div>
			<input
				type="text"
				value={imageUrl}
				on:change={(e) => {
					imageUrl = e.currentTarget.value;
				}}
			/>
		</div>
		<div class="item">
			<div class="label">
				<span>Link URL</span>
			</div>
			<input
				type="text"
				value={link}
				on:change={(e) => {
					link = e.currentTarget.value;
				}}
			/>
		</div>
	</div>
	<div class="actions">
		<Button onClick={handleSubmit}>{submitLabel}</Button>
		<Button element="a" href="/contacts">Cancel</Button>
	</div>
</div>

<style lang="scss">
	.contact-form {
		display: grid;
		grid-template-rows: 1fr auto;
		height: 100%;

		.form {
			display: flex;
			flex-direction: column;
			overflow-y: auto;

			.item {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.1em;

				.label {
					display: flex;

					span {
						font-size: 0.25em;
					}
				}

				input {
					display: flex;
					width: 100%;
					font-size: 0.2em;
					padding: 0.5em;
					border: 2px solid #e2e2e2;
					border-radius: 6px;
					box-sizing: border-box;
				}

				.error {
					display: flex;

					span {
						font-size: 0.18em;
						color: red;
					}
				}
			}
		}

		.actions {
			display: flex;
			justify-content: center;
			align-items: center;

			:global(a) {
				margin-left: 0.5em;
			}
		}
	}
</style>
