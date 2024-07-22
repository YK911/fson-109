/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for та for...of
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', ['Neptun', 'Saturn']];
// console.table(friends);
// const isPolyFriend = friends.includes('Poly');
// console.log('isPolyFriend:', isPolyFriend);

// function customIncludes(array, friendName) {
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === friendName) {
//     console.log(`Hoorray we find ${array[i]}`);
//     return true;
//   }
// }

//   return false;
// }

// const isPolyFriend = customIncludes(friends, 'Poly');
// console.log('isPolyFriend:', isPolyFriend);
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let friend of friends) {
//   friend = 'Empty';
// }
// console.log(friends);

// for (let i = 0; i < friends.length; i++) {
//   friends[i] = 'Empty';
// }
// console.log(friends);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// for (let row = 0; row < matrix.length; row++) {
//   // console.log(matrix[row]);

//   for (let col = 0; col < matrix[row].length; col++) {
//     const element = matrix[row][col];
//     console.log('element:', element);
//   }
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = '8 11';
const values1 = '10 10';

function rectSquare(param) {
  const paramToArray = param.split(' ');
  const width = paramToArray[0];
  const height = paramToArray[1];

  return width * height;

  // const square = width * height;
  // return square;
}

// const res1 = rectSquare(values);
// console.log('res1:', res1);
// const res2 = rectSquare(values1);
// console.log('res2:', res2);
/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

function printFruits(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`printFruits  ${index + 1}:`, element);
  }
}

// printFruits(fruits);
