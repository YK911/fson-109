/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */
// let a = 1;
// let b = a;

// b += 1;

// console.log('a', a);
// console.log('b', b);

const a = [1, 2, 3];
const b = a;

// console.log('a', a);
// console.log('b', b);

a[0] = 500;
b[2] = '🐨';
a.length = 0;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// console.log([] === []);
// console.log([1, 2, 3] === [1, 2, 3]);
