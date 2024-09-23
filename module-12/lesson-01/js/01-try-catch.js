/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 */

// import { parseJSON } from './handler.js';

// console.log('Before try...catch');

// try {
//   console.log('Syntax error');

//   parseJSON('Invalid JSON string'); // error ❌

//   console.log('Result');
// } catch (error) {
//   console.dir(error);
//   console.warn(error.message);
// }

// console.log('After try...catch');

console.log('Before try...catch');
// try {

setTimeout(() => {
  try {
    console.log('Inside try...catch');

    JSON.parse('Str');

    console.log('after error');
  } catch (error) {
    console.log(error);
  }
}, 1000);
// } catch (error) {
//   console.log(error);
// }
console.log('After try...catch');
