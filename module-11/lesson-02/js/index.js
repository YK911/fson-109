/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 * format date toISOString()
 */
const API_KEY = '663bb44bfee6744a6ea2a652';
const BASE_URL = `https://${API_KEY}.mockapi.io/api`;

/**
 * Read (GET)
 */

function fetchContacts() {
  return fetch(`${BASE_URL}/contacts`).then(resp => {
    if (!resp.ok) {
      throw new Error('Something went wrong');
    }

    return resp.json();
  });
}

function fetchContactById(contactId) {
  return fetch(`${BASE_URL}/contacts/${contactId}`).then(resp => {
    if (!resp.ok) {
      throw new Error('Something went wrong');
    }

    return resp.json();
  });
}

// fetchContacts().then(data => console.log(data));
// fetchContactById(2).then(data => console.log(data));
// fetchContactById(4).then(data => console.log(data));

/**
 * Create (POST)
 */

function createDateForContact() {
  const date = new Date();
  return date.toISOString();
}

const contact = {
  createdAt: createDateForContact(),
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/904.jpg',
  name: 'Jud Lo',
  phone: '123-456-4321',
};

function addContact(contact) {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/contacts`, options).then(resp => {
    if (!resp.ok) {
      throw new Error('Something went wrong');
    }

    return resp.json();
  });
}

// addContact(contact);

/**
 * Update (PUT/PATCH)
 */

function updateContactById(update, contactId) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(update),
    headers: {
      'Content-type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/contacts/${contactId}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error('Something went wrong');
    }

    return resp.json();
  });
}

const updateContact = {
  name: 'Barbara Santa',
  phone: '333-333-4444',
};

// updateContactById(updateContact, 4);

/**
 * Delete (DELETE)
 */

function removeContact(contactId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/contacts/${contactId}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error('Something went wrong');
    }

    return resp.json();
  });
}

// removeContact(4);
