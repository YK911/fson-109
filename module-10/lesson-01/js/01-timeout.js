/**
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До виклику setTimeout');
// console.time('Start synchronous code');
// for (let i = 0; i < 100_000; i++) {
//   console.log('For is working');
// }
// console.timeEnd('Start synchronous code');
// setTimeout(() => {
//   console.log('1 - Всередині зворотного виклику для setTimeout');
// }, 0);

// setTimeout(() => {
//   console.log('2 - Всередині зворотного виклику для setTimeout');
// }, 0);

// console.log('Після виклику setTimeout');

/**
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = time => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};
const timeoutId = setTimeout(logger, 2000, 2000);

clearTimeout(timeoutId);

/**
 * Можливість передати параметри для колбеку
 */
const callback = (name, country) => {
  console.log(`Hello, my name is ${name}, I'm from ${country}`);
};
const id = setTimeout(callback, 3000, 'Mango', 'USA');
