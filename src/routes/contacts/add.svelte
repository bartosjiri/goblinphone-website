<script lang="ts">
	import { ContactForm } from '$components/applications/contacts';

	import { addContact } from '$components/applications/contacts';
</script>

<div class="contacts-add">
	<div class="title">
		<span>Add new contact</span>
	</div>
	<ContactForm onSumbit={addContact} submitLabel="Add" />
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
