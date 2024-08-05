/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

numbers.forEach(number => (total += number));
// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function logItems(items) {
  console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
  // items.forEach((item, index, array) => {
  //   const template = `${index + 1} - ${item}`;
  //   console.log(template);
  // });
  items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
  nameList.forEach((name, idx, arr) => {
    console.log(`${name}: ${phoneList[idx]}`);
  });
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
// function calculateAverage(...numbers) {
function calculateAverage(numbers, ...rest) {
  // const rest = [ 1, 2, 3, 4 ]
  let total = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   total += numbers[i];
  // }
  // arguments.forEach(argument => {
  //   console.log(argument);
  // });

  rest.forEach((number, idx) => {
    total += number;
    console.log(numbers[idx]);
  });
  return total / rest.length;
}

// console.log(calculateAverage([1, 1, 1, 1, 1, 1], 1, 2, 3, 4)); // 2.5
// console.log(calculateAverage([2, 2, 2], 14, 8, 2)); // 8
// console.log(calculateAverage([3, 3, 3, 3, 3], 27, 43, 2, 8, 36)); // 23.2
