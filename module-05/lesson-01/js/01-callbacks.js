/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function fnA(message, callback) {
  // callback = function (number) {
  //   console.log('Log during fnB execution ', number);
  // };
  console.log(message);
  console.log('callback:', callback);
  callback(51); // undefined(51)
}

function fnB(number) {
  console.log('Log during fnB execution ', number);
}

// fnA('A message', fnB);

/**
 * Функція calc(a, b, callback)
 */

function showCalcResult(a, b, callback) {
  // a = 2
  // b = 3
  const result = callback(a, b);
  console.log('showCalcResult  result:', result);
}

const sum = function (valueA, valueB) {
  const sum = valueA + valueB;
  // console.log('Callback function sum:', sum);
  return sum;
};
const multiply = function (valueA, valueB) {
  return valueA * valueB;
};
const divide = function (valueA, valueB) {
  return valueA / valueB;
};

// showCalcResult(2, 3, sum);
// showCalcResult(10, 8, multiply);
// showCalcResult(800, 8, divide);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву.
 * Функція each повинна повернути новий масив, елементами якого
 * будуть результати виклику коллбека.
 */

function each(array, callback) {
  // console.log(array);
  // console.log(callback);
  const transformedArray = [];

  for (const value of array) {
    // console.log('each  value:', value);
    // console.log(callback(value));
    transformedArray.push(callback(value));
  }

  return transformedArray;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
); // [128, 98, 72, 50, 32]
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// ); // [54, 39, 26, 15, 6]
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
