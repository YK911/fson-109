/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 3, 6, 2, 3, 11];

const sorted = numbers.toSorted();

// console.log('sorted ', sorted);
// console.log('numbers ', numbers);

const letters = ['b', 'B', 'a', 'A'];
const sortedLetters = letters.toSorted();
// console.log('letters', letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */
// let result = numbers.toSorted((curEl, nextEl) => {
//   return curEl - nextEl;
// });
let result = numbers.toSorted((a, b) => a - b);
// console.log('result: ', result);

const descSortedNumbers = numbers.toSorted((a, b) => b - a);
const ascSortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-4', name: 'ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted(
  (a, b) => b.timePlayed - a.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted(
  (a, b) => a.timePlayed - b.timePlayed
);
console.table(sortedByWorstPlayers);

// По першій літері имені
const byName = players.toSorted((a, b) => {
  return a.name[0].localeCompare(b.name[0]);
});
console.table(byName);
