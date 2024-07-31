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
function findFriendByName(allFriends, friendName) {
  // allFriends = [...] friendName = 'Poly'
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);
    // 'Poly' === 'Poly'
    if (friend.name === friendName) {
      return friend;
    }
  }

  return null;
}
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {
  const friendNames = [];

  for (const friend of allFriends) {
    // console.log(friend.name);
    friendNames.push(friend.name);
  }

  return friendNames;
}

// console.log(getAllNames(friends));
/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  let onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      // console.log(friend.online);
      // console.log(friend.name);

      onlineFriends.push(friend.name);
    }
  }

  return onlineFriends.join(' | ');
}

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

// console.table(stones);

function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;

  for (const stone of stones) {
    // console.log(stone.name);
    if (stone.name === stoneName) {
      totalPrice = stone.price * stone.quantity;
      // return stone.price * stone.quantity;
    }
  }

  return totalPrice || `${stoneName} doesn't exist`;
}

// console.log(calcTotalPrice(stones, 'Щебінь')); // 400
// console.log(calcTotalPrice(stones, 'Смарагд')); // "..."
