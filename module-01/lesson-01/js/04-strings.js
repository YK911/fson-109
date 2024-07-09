/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів в рядках
 * - Незмінність рядків
 */

const firstName = 'Chelsy';
const lastName = 'Emerald';

const fullName = firstName + ' ' + lastName;
// console.log("fullName:", fullName);

const greeting = 'Hello' + ' ' + firstName + ' ' + lastName + '!';
// console.log("greeting:", greeting);
const usefullGreeting = `Hello ${firstName} ${lastName}!`;
// console.log("usefullGreeting:", usefullGreeting);

const quantity = 15;
const orderingMessage = `You ordered ${100 + quantity} bot`;
// console.log("orderingMessage:", orderingMessage)

const message = 'This string is 28 chars long';

// console.log(message[0]); // firts char
// console.log(message[15]); // some char
// console.log(message[message.length - 1]); // last char

const messageLength = message.length;
// console.log("messageLength:", messageLength)

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
