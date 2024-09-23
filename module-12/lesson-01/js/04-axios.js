/**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 *
 * https://663bb44bfee6744a6ea2a652.mockapi.io/api/books
 */
const API_KEY = '663bb44bfee6744a6ea2a652';
const url = `https://${API_KEY}.mockapi.io/api`;

axios.defaults.baseURL = url;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// const mockInstanse = axios.create({}); // params for mockAPI
// mockInstanse.get();

// const placeholderInstanse = axios.create({}); // params for JSONPlaceholder
// placeholderInstanse.get();
/**
 * Read (GET)
 */

// function fetchBooks() {
//   return fetch('/books').then(res => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`/books/${bookId}`).then(res => res.json());
// }

async function fetchBooks() {
  try {
    const { data } = await axios.get('/books');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// const books = await fetchBooks();
// console.log('books:', books);

async function fetchBookById(id) {
  try {
    const { data } = await axios.get(`/books/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// const book = await fetchBookById(4);
// console.log('book:', book);
// fetchBookById(4);

/**
 * Create (POST)
 */

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }
const bookToAdd = {
  title: 'Тестова книга з CSS',
  author: 'Я',
  genres: ['CSS'],
  Rating: 9,
};

async function addBook(book = {}) {
  try {
    const { data } = await axios.post('/books', book);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// addBook(bookToAdd);

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   Rating: 9,
// })
//   .then(book => {
//     console.log('Прийшла відповідь від бекенда можна малювати');
//     console.log(book);
//   })
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   Rating: 7,
// }).then(book => {
//   console.log('Прийшла відповідь від бекенда можна малювати');
//   console.log(book);
// });

/**
 * Update (PUT/PATCH)
 */

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`/books/${bookId}`, options).then(res => res.json());
// }

async function updateBookById(update = {}, bookId) {
  try {
    const { data } = await axios.put(`/books/${bookId}`, update);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Манго" }, 17);

/**
 * Delete (DELETE)
 */

// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`/books/${bookId}`, options).then(res => res.json());
// }

async function removeBook(bookId) {
  try {
    const { data } = await axios.delete(`/books/${bookId}`);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// removeBook(15);
// removeBook(14);
