// const leftOperand = Number(left.value);
// const rightOperand = Number(right.value);

// multiply(leftOperand, rightOperand);

// /** Functions */
// function multiply(x, y) {
//   // let x = undefined
//   // let y = undefined
//   const result = x * y;
//   resultValue.textContent = result;
//   // return undefined
// }

// const result1 = multiply(8, 10);
// console.log('result1:', result1);
// const res = multiply(11, 10);
// console.log('res:', res);

// const multiply = function (x, y) {
//   return x * y;
// };
// const res = multiply(11, 10);
// console.log('res:', res);
// const arrowFunction = () => {};
// arrowFunction();
/**
 * Псевдомасив arguments і Array.from()
 */

// function foo() {
//   console.log(arguments);
//   const realArgs = Array.from(arguments);
//   console.log('foo  realArgs:', realArgs);
//   const arrFromSpread = [...arguments];
//   console.log('foo  arrFromSpread:', arrFromSpread);

//   realArgs.slice();
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);
// foo(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// const add = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(add(1, 2, 3)); // 6
// console.log(add(1, 2, 4, 5, 6)); // 18

/**
 * Напиши функцію calсAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

/**
 *
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} d
 * @returns
 */
function calсAverage(a, b, c, d) {
  const numberCount = arguments.length;
  // console.log('calсAverage  numberCount:', numberCount);
  let sum = 0;

  for (const argument of arguments) {
    sum += argument;
  }

  // console.log(sum);
  return sum / numberCount;
}

console.log(calсAverage(1, 2, 3, 4)); // 2.5
console.log(calсAverage(14, 8, 2)); // 8
console.log(calсAverage(27, 43, 2, 8, 36)); // 23.2
