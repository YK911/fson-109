/**
 * TODO: Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.".
 * TODO: Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 26;
let timestring = '';

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв.`;
// }

timestring = `${hours} г. ` + (minutes > 0 ? `${minutes} хв.` : '');

// console.log(timestring);

/**
 * TODO: Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * TODO: Якщо до дедлайну 0 днів - виведи рядок "Today"
 * TODO: Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * TODO: Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * TODO: Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 45;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }
