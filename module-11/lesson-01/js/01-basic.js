/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const user = {
  id: 101,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
};

const requestBody = JSON.stringify(user);

const requestHeaders = new Headers({
  'Content-type': 'application/json; charset=UTF-8',
});

const options = {
  method: 'POST',
  body: requestBody,
  headers: requestHeaders,
};

// fetch(`${BASE_URL}/users`, options);

// fetch(`${BASE_URL}/use`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Something went wrong');
//     }

//     iziToast.success({
//       title: 'OK',
//       message: 'Successfully inserted record!',
//       position: 'topRight',
//     });
//     return response.json();
//   })
//   .then(data => {
//     console.log('fetch  data:', data);
//   })
//   .catch(error => {
//     iziToast.error({
//       title: '❌',
//       message: `${error}`,
//       position: 'topRight',
//     });
//   });

/**
 * Всередині функції запит, зовні обробка
 */
const usersContainerEl = document.querySelector('.users-list');

function fetchUsers() {
  return fetch(`${BASE_URL}/users`).then(response => {
    if (!response.ok) {
      throw new Error('Oops! Error has occures');
    }
    return response.json();
  });
}

fetchUsers()
  .then(users => {
    console.log('Loader start 🎬');

    const usersMarkup = users
      .map(user => {
        return `<li class="users-item">
        <p class="avatar">${user.username.slice(0, 1)}</p>
        <h2 class="name">${user.name}</h2>
        <a class="link" href="${user.website}">Website</a>
      </li>
        `;
      })
      .join('');

    usersContainerEl.insertAdjacentHTML('beforeend', usersMarkup);
  })
  .catch(err => {
    console.error(err.message);
  })
  .finally(() => {
    console.log('Loader finish 🏁');
  });
