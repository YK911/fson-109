/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */
let msg; // undefined
// const input = confirm('Do you have access?'); // true
// if (input) {
//   msg = 'Connected to DataBase ✅';
// } else {
//   msg = 'Connection failed ❌';
// }
// console.log(msg);

// if (input !== false) {
//   msg = 'Connection failed ❌';
// }
// console.log(msg);

// console.log('Before');

// console.log('After');
// console.log(msg);
// const username = 'Mango';
// const getUserName = prompt('What is your nickname?');

// if (getUserName === 'Mango') {
//   msg = `Welcome, ${getUserName} ✅`;
// } else if (getUserName === 'Poly') {
//   msg = `Welcome, ${getUserName} ✅`;
// } else if (getUserName === 'Ajax') {
//   msg = `Welcome, ${getUserName} ✅`;
// } else {
//   msg = `Sorry, access denied ❌`;
// }

// console.log(msg);

/**
 * -----------------------------
 */
// Level 1 = 100  // Level 1. You have 100 points
// Level 2 = 1000 // Level 2. You have 1000 points
// Level 3 = 2000 // Level 3. You have 2000 points
// function getRandomPoints() {
//   let points;
//   const randomNumber = Math.random();
//   if (randomNumber > 0.7) {
//     points = Number.parseInt(randomNumber * 1000 + 1000);
//   } else if (randomNumber > 0.4) {
//     points = Number.parseInt(randomNumber * 1000);
//   } else {
//     points = Number.parseInt(randomNumber * 100);
//   }
//   return points;
// }

// const points = getRandomPoints();
// console.log('points:', points);

// if (points <= 100) {
//   console.log('You have 100 points');
// } else if (points > 100 && points <= 1000) {
//   console.log('You have 1000 points');
// } else {
//   console.log('You have 2000 points');
// }

/**
 * -----------------------------
 */
const balance = -1000;
let message;

// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }
//          true             1            2
// message = balance >= 0 ? 'Positive' : 'Negative';

message = balance >= 0 ? showPositiveBalance() : showNegativeBalance();

function showPositiveBalance() {
  return 'You have positive balance';
}
function showNegativeBalance() {
  return 'You have negative balance';
}

// 💩 code
// message =
//   balance >= 0
//     ? 'Positive'
//     : balance > 999
//     ? 'You are rich'
//     : balance < 100 && balance > 0
//     ? 'You have some money'
//     : 'Negative';

// console.log(message);
