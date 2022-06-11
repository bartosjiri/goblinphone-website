export { default as ContactCard } from "./ContactCard.svelte";
export { default as ContactForm } from "./ContactForm.svelte";

export {
  loadContacts,
  loadContact,
  addContact,
  updateContact,
  deleteContact
} from "./manageContacts";

export type { Contact } from "./Contact.types";