/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((acc, number) => {
  if (number === 10) {
    return acc;
  }

  return (acc += number);
}, 0);
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, salary) => {
  // console.log(acc);
  // console.log(salary);
  return (acc += salary);
});
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((acc, player) => {
  return (acc += player.timePlayed);
}, 0);
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// const totalAmount = cart.reduce((acc, product) => {
//   return (acc += product.price * product.quantity);
// }, 0);

const totalAmount = cart.reduce((acc, product, idx) => {
  return (acc += `${idx + 1} - ${product.label}; `);
}, '');
console.log(totalAmount);

const productNames = cart.reduce((acc, product) => {
  acc.push(product.label);
  return acc; //
}, []);
// console.log('productNames  productNames:', productNames);
