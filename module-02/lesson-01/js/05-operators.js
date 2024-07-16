/**
 * * Логічні оператори
 * --------------------------------
 * *  - Перетворення типів: логічне
 * *  - Оператор &&
 * *  - Оператор ||
 * *  - Оператор !
 */

// console.log('Boolean(true)      -> ', Boolean(true));
// console.log('Boolean(false)     -> ', Boolean(false));
// console.log('Boolean(NaN)       -> ', Boolean(NaN));
// console.log('Boolean(null)      -> ', Boolean(null));
// console.log('Boolean(undefined) -> ', Boolean(undefined));
// console.log('Boolean(0)         -> ', Boolean(0));
// console.log('Boolean("")        -> ', Boolean(''));
// console.log('Boolean(3.14)      -> ', Boolean(3.14));
// console.log('Boolean(-10)       -> ', Boolean(-10));
// console.log('Boolean("hello")   -> ', Boolean('hello'));
// console.log('Boolean("false")   -> ', Boolean('false'));
// console.log('Boolean("false")   -> ', Boolean(' '));

/**
 * --------------------------------
 */
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// Boolean(5) -> true
// console.log(5 && 4);
// console.log(5 && 'mango');

/**
 * --------------------------------
 */
// console.log(false || false); // false
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// Boolean(false) -> false
// console.log(false || 5);
// console.log(false || null);

/**
 * --------------------------------
 */
// console.log(!!true);
// console.log(!!false);
// Boolean(5); // true
// console.log(!!5); // короткий запис для приведення до булевого значенння
// console.log(!!'');

/**
 * --------------------------------
 */
console.log('true && 3                ->', true && 3); // 3

console.log('false && 3               ->', false && 3); // false

console.log("true && 4 && 'kiwi'      ->", true && 4 && 'kiwi'); // 'kiwi'

console.log("true && 0 && 'kiwi'      ->", true && 0 && 'kiwi'); // 0

console.log('true || 3                ->', true || 3); // true

console.log('true || 3 || 4           ->', true || 3 || 4); // true

console.log('true || false || 7       ->', true || false || 7); // true

console.log('null || 2 || undefined   ->', null || 2 || undefined); // 2

console.log('(1 && null && 2) > 0     ->', (1 && null && 2) > 0); // false

console.log('null || (!2 && 3) || 4   ->', null || (!2 && 3) || 4); // 4
