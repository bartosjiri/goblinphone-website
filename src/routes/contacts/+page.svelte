<script lang="ts">
	import { onMount } from 'svelte';

	import { Button } from '$components/phone/button';
	import { ContactCard, loadContacts } from '$components/applications/contacts';

	import type { Contact } from '$components/applications/contacts';

	let contacts: Contact[] = [];

	onMount(() => {
		contacts = [...loadContacts()];
	});

	const onDelete = () => {
		contacts = [...loadContacts()];
	};
</script>

<div class="content">
	{#each contacts as contact (contact.id)}
		<ContactCard {contact} {onDelete} />
	{:else}
		<p>empty</p>
	{/each}
</div>
<div class="actions">
	<Button element="a" href="/contacts/add">Add new contact</Button>
</div>

<style lang="scss">
	.content {
		overflow-y: auto;
	}

	.actions {
		margin-top: 0.2em;
		display: flex;
		justify-content: center;
	}
</style>
