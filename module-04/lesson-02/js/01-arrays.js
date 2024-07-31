/**
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: 'Kiwi', online: true },
  { name: 'Mango', online: false },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
  { name: 'Star', online: true },
];

// console.table(friends);
// #region
/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {}
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {}

// console.log(getAllNames(friends));
/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {}

// console.log(getOnlineFriends(friends));
// #endregion
/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 * `stoneName doesn't exist`
 */

const stones = [
  { name: 'Топаз', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {}

// console.log(calcTotalPrice(stones, 'Щебінь'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
