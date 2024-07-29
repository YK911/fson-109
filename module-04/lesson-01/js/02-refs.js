/**
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

// console.log([1, 2, 3] === [1, 2, 3]);
// console.log({ a: 1, b: 2, c: 3 } === { a: 1, b: 2, c: 3 });

const a = {
  x: 10,
  y: 20,
  z: 30,
};

const b = a;

b.x = 150;

// console.log(a.x);

/**
 * --------------------------
 */

const arr = [1, 2, 3];
// console.log('arr:', arr);
// console.log('obj:', a);
// arr.x = 123;
// console.log(arr['x']);
// arr['0'] = 10_000;
// console.log(arr);

function foo() {
  console.log('hello');
}

// console.dir(foo);
// console.log(foo.name);

// foo.x = 123;
// console.dir(foo);
