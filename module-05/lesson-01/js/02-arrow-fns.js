/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

function add(a, b, c) {
  // console.log(arguments);
  return a + b + c;
}

// const addArrow = (a, b, c) => a + b + c;
const addArrow = (...args) => {
  // console.log(args);
  let total = 0;
  for (const number of args) {
    total += number;
  }
  return total;
};

// console.log(add(5, 10, 15));
// console.log(add(45, 10, 15, 12, 11, 2));
// console.log(addArrow(45, 10, 15, 12, 11, 2));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

console.log(fnA());

const createObject = () => ({
  a: 5,
});

console.log('Arrow fn', createObject());

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, (x, y) => x + y);

calc(10, 8, (x, y) => x - y);
