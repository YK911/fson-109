/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

/* Operator in -> Boolean */
// console.log('good' in feedback); // true
// console.log('super' in feedback); // false

// let totalFeedback = 0; // undefined

// for (const key in feedback) {
//   console.log(key);
// console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

/**
 * ---------------------------------
 * Посилання на тип даних Object
 *  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// const keys = Object.keys(feedback);
// console.log(keys);

// let totalFeedback = 0;

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// let totalFeedback = 0;

// for (const value of values) {
//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

/**
 * Task
 *
 * Створи функцію для ведення статистики комп'ютерного клубу.
 * Функція приймає 1 параметр - це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
 * Функція повертає рядок з інформацією про те, скільки було користувачів та який середній час оренди комп'ютера.
 *
 * Приклад рядка `Count of players ${}, average time ${}`
 */

const players = {
  Den: 60,
  Kate: 130,
  William: 45,
  Matthew: 120,
  Ethan: 40,
  David: 55,
};

function getAverageTime(players) {
  const timeArray = Object.values(players);

  let totalPlayedTime = 0;
  for (const time of timeArray) {
    totalPlayedTime += time;
  }

  return `Count of players ${timeArray.length}, average time ${
    totalPlayedTime / timeArray.length
  }`;
}

// function getAverageTime(players) {
//   const timeArray = Object.values(players);
//   const playersCount = timeArray.length;

//   let totalPlayedTime = 0;

//   for (const time of timeArray) {
//     totalPlayedTime += time;
//   }
//   // console.log(totalPlayedTime);
//   const msg = `Count of players ${playersCount}, average time ${
//     totalPlayedTime / playersCount
//   }`;
//   // console.log('getAverageTime  msg:', msg);
//   return msg;
// }

const averageTime = getAverageTime(players);
console.log('averageTime:', averageTime);
