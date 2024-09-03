/**
 * LocalStorage
 */
// const user = {
//   name: 'Mango',
//   position: { lat: 123, lon: 321 },
//   email: '',
//   email: undefined,
//   subscription: null,
//   someKey: NaN,

//   getPosition: function () {
//     const lat = this.position.lat;
//     const lon = this.position.lon;
//   },
// };

// const userToJSON = JSON.stringify(user);
// console.log('userToJSON:', userToJSON);

// const convertedUser = JSON.parse(userToJSON);
// console.log('convertedUser:', convertedUser);

/** Приклад циклічних посилань */
// const user = {
//   name: 'Mango',
//   age: 20,
// };

// const pizza = {
//   type: 'Margaritta',
//   price: 123,
//   isCooked: true,
// };

// user.order = pizza;
// pizza.customer = user;
// const stringifyUser = JSON.stringify(user, (key, value) => {
//   if (key === 'order') return;
//   return value;
// });
// // console.log('stringifyUser:', stringifyUser);
// import { LS_USER_SETTINGS } from './config.js';
// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// console.log(window.localStorage);
// console.log(window.sessionStorage);

// localStorage.setItem('name', 'Mango');
// localStorage.setItem('age', 23);
// localStorage.setItem('isActive', true);
// localStorage.setItem('friends', ['Poly', 'Ajax']);

// const friends = localStorage.getItem('friends');
// console.log('friends:', typeof friends);
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
// localStorage.setItem('friends', JSON.stringify(['Poly', 'Ajax']));
// const friends = [123, 321];

// localStorage.setItem('friends', JSON.stringify(friends));
// const userSettings = {
//   theme: 'light',
//   isNavbarOpen: false,
//   userToker: {
//     token: ' 123qwe',
//     type: 'Bearer',
//   },
//   statuses: ['user', 'admin', 'manager'],
// };
// const settingToJSON = JSON.stringify(userSettings);
// localStorage.setItem(LS_USER_SETTINGS, settingToJSON);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
// const friends = localStorage.getItem('friends');
// console.log('friends:', JSON.parse(friends));
// console.log('friends:', JSON.parse(localStorage.getItem('friends')));

/**
 * Видалення
 */
// localStorage.removeItem('friends');
// localStorage.clear();
/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// localStorage.setItem('fn', function add(a, b) {
//   return a + b;
// });

// const addFn = JSON.parse(localStorage.getItem('fn')); // ❌ помилка парсу

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};
