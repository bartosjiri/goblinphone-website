<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { ContactForm, loadContact, updateContact } from '$components/applications/contacts';

	import type { Contact } from '$components/applications/contacts';

	let contact: Contact | undefined = undefined;
	onMount(() => {
		const targetContact = loadContact($page.params.id);
		if (!targetContact) {
			return goto('/contacts');
		}
		contact = { ...targetContact };
	});
</script>

<div class="contacts-add">
	<div class="title">
		<span>Edit contact</span>
	</div>
	<ContactForm {contact} onSumbit={updateContact} submitLabel="Save" />
</div>

<style lang="scss">
	.contacts-add {
		display: flex;
		flex-direction: column;

		.title {
			display: flex;
			margin-bottom: 0.1em;

			span {
				font-size: 0.3em;
				font-weight: $font-weight--bold;
			}
		}
	}
</style>
