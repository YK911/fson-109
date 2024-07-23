/**
 * Псевдомасив arguments і Array.from()
 */

function foo() {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

const add = function (arguments) {
  const args = Array.from(arguments);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calсAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calсAverage() {}

console.log(calсAverage(1, 2, 3, 4)); // 2.5
console.log(calсAverage(14, 8, 2)); // 8
console.log(calсAverage(27, 43, 2, 8, 36)); // 23.2
