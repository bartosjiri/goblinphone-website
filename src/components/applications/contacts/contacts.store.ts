import { nanoid } from 'nanoid';

import { CONTACTS_DEFAULT } from '.';

import type { Contact } from '.';

const CONTACTS_STOREKEY = '__goblinphone-contacts';

export const loadStoredContacts = () => {
	const storedContacts = localStorage?.getItem(CONTACTS_STOREKEY);
	const contacts = [];

	if (storedContacts && storedContacts.length) {
		try {
			contacts.push(...JSON.parse(storedContacts));
		} catch (err) {
			localStorage?.removeItem(CONTACTS_STOREKEY);
			console.error(err);
		}
	}

	return contacts;
};

export const loadContacts = () => {
	const contacts = [...loadStoredContacts()];

	if (CONTACTS_DEFAULT && CONTACTS_DEFAULT.length) {
		const defaultContacts = CONTACTS_DEFAULT.map((contact) => ({
			...contact,
			id: nanoid()
		}));
		contacts.push(...defaultContacts);
	}

	if (contacts.length) {
		contacts.sort((a: Contact, b: Contact) =>
			a.name?.toLowerCase() > b.name?.toLowerCase() ? 1 : -1
		);
	}

	return contacts;
};

export const loadContact = (id: Contact['id']) => {
	const contacts = [...loadStoredContacts()];
	return contacts.find((contact) => contact.id === id);
};

export const addContact = (contact: Contact) => {
	const contacts = [...loadStoredContacts()];
	contacts.push({
		...contact,
		id: nanoid(),
		deletable: true
	});

	localStorage?.setItem(CONTACTS_STOREKEY, JSON.stringify(contacts));
};

export const updateContact = (contact: Contact) => {
	const contacts = [...loadStoredContacts()];

	const targetContact = contacts.find((c: Contact) => c.id === contact.id);
	contacts[contacts.indexOf(targetContact)] = { ...contact, deletable: true };

	localStorage.setItem(CONTACTS_STOREKEY, JSON.stringify(contacts));
};

export const deleteContact = (contact: Contact) => {
	const contacts = [...loadStoredContacts()];

	const targetContacts = contacts?.filter((c: Contact) => c.id !== contact.id);

	localStorage.setItem(CONTACTS_STOREKEY, JSON.stringify(targetContacts));
};
