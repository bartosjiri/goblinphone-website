<script lang="ts">
	import { deleteContact } from '.';

	import { PLATFORM_DOMAIN } from '$config/platform';

	import type { Contact } from '.';

	export let contact: Contact;
	export let onDelete: () => void;

	const { id, name, description, href, imageUrl, backgroundColor, deletable } = contact;

	const handleDelete = () => {
		if (deletable) {
			deleteContact(contact);
			onDelete();
		}
	};

	let imageElement: HTMLImageElement;

	$: if (imageElement) {
		imageElement.onerror = () => {
			imageElement.src = '/assets/images/applications/contacts/contact-placeholder.png';
		};
	}
</script>

<div
	class:contact-card={true}
	style={backgroundColor ? `background: ${backgroundColor};` : ''}
	{...$$restProps}
>
	<div class="content">
		<div class="image">
			<img
				bind:this={imageElement}
				src={imageUrl || '/assets/images/applications/contacts/contact-placeholder.png'}
				alt={name || ''}
			/>
		</div>
		<div class="name">
			<span>{name || ''}</span>
		</div>
		<div class="description">
			<span>{description || ''}</span>
		</div>
	</div>
	<div class="actions">
		<a
			class="action"
			class:--disabled={!href}
			href={href ? `${contact.href}?ref=${PLATFORM_DOMAIN}` : null}
			target="_blank"
		>
			<img src="/assets/images/applications/contacts/action-link.png" alt="" />
		</a>
		<a
			class="action"
			class:--disabled={!deletable}
			href={deletable ? `/contacts/edit/${id}` : null}
		>
			<img src="/assets/images/applications/contacts/action-edit.png" alt="" />
		</a>
		<div class="action" class:--disabled={!deletable} on:click={handleDelete}>
			<img src="/assets/images/applications/contacts/action-delete.png" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	.contact-card {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.15em;
		padding: 0.1em;
		border: 2px solid darken(#f2f2f2, 20%);
		border-radius: 0.2em;
		background: #f2f2f2;
		filter: drop-shadow(0.015em 0.02em 0 rgba(0, 0, 0, 0.125));
		@include transition($transition--primary, border, transform, filter);

		&:hover {
			border: 2px solid darken(#f2f2f2, 40%);
			filter: drop-shadow(0.015em 0.028em 0 rgba(0, 0, 0, 0.125));
		}

		.content {
			display: grid;
			grid-template-columns: 0.8em 1fr;
			grid-template-rows: auto auto;
			column-gap: 0.2em;
			row-gap: 0.05em;

			.image {
				grid-column: 1/2;
				grid-row: 1/3;
				display: flex;
				overflow: hidden;

				img {
					display: block;
					width: 100%;
					height: 0.8em;
					object-fit: cover;
					border: 2px solid darken(#f2f2f2, 20%);
					border-radius: 0.2em;
				}
			}

			.name {
				grid-column: 2/3;
				grid-row: 1/2;
				display: flex;

				span {
					font-size: 0.3em;
					line-height: 1;
					color: $color-text--primary;
				}
			}

			.description {
				grid-column: 2/3;
				grid-row: 2/3;
				display: flex;

				span {
					font-size: 0.22em;
					line-height: 1;
					color: rgba($color-text--primary, 0.65);
				}
			}
		}

		.actions {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 0.2em;
			margin-bottom: 0.1em;

			.action {
				position: relative;
				display: flex;
				margin-right: 0.25em;
				cursor: pointer;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 0.5em;
					height: 0.5em;
					transform: translate(-50%, -50%);
					background: rgba(#000000, 0.15);
					border-radius: 50%;
					@include transition($transition--primary, background, border-radius);
				}

				img {
					display: block;
					height: 0.34em;
					object-fit: contain;
					@include transition($transition--primary, transform);
				}

				&:hover {
					&::after {
						background: rgba(#000000, 0.2);
					}

					img {
						transform: rotate(-4deg);
					}
				}

				&:last-child {
					margin-right: 0;
				}

				&.--disabled {
					cursor: default;

					&::after {
						background: rgba(#000000, 0.05);
					}

					img {
						opacity: 0.15;
					}
				}
			}
		}
	}
</style>
