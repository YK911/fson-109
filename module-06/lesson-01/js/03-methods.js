/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

const showThis = function (a, b, arr) {
  console.log(...arguments);

  // console.log(a);
  // console.log(b);
  // console.log(arr);
  console.log('showThis -> this', this);
};

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };
// const objB = {
//   a: 15,
//   b: 110,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.call(objB, 50, 10, [1000, 2000, 3000]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */
const changeColor = function (color) {
  // console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

changeColor.call(hat, 'orange');
// console.log(hat);

const sweater = {
  color: 'green',
};

changeColor.call(sweater, 'blue');
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor('yellow');
// console.log(hat);

changeSweaterColor('red');
// console.log(sweater);

/**
 * -------------------------------
 */
const counter = {
  value: 0,
  increment(value) {
    // console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    // console.log('decrement -> this', this);
    this.value -= value;
  },
  showValue() {
    return `Current value: ${this.value}`;
  },
};

const updateCounter = function (value, callback) {
  callback(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
updateCounter(100, counter.decrement.bind(counter));
updateCounter(10, counter.increment.bind(counter));
updateCounter(10, counter.increment.bind(counter));
updateCounter(8, counter.increment.bind(counter));
updateCounter(7, counter.increment.bind(counter));
console.log(counter.showValue());
