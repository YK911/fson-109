/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */
// const a = 1;
// const b = 1;

// const isEqual = a === b;
// console.log('isEqual:', isEqual);

// const a1 = 10;
// const b1 = 12;

// const isEqual1 = a1 === b1;
// console.log('isEqual1:', isEqual1);

// function makeComparison(a, b) {
//   const isEqual = a === b;
//   console.log(isEqual);
// }

// {
//   const value = 'John';
//   console.log(value);
// }

// const obj = {
//   key: 'value',
// };
// // makeComparison(1, 2);
// // makeComparison(11, 11);
// // makeComparison(111, 110);

// function multiply(number1, number2) {
//   // let  number1 = 5
//   // let  number2 = 3
//   // const result = number1 * number2;
//   // console.log(result);
//   // console.log(value);
//   const str = `Oparion finished with result ${number1 * number2}`;
//   // localStorage.setItem('operation', str);
//   return str; // 15

//   console.log('after return');

//   // return undefined;
// }

// const result = multiply(5, 3); //`Oparion finished with result ${number1 * number2}`
// console.log('result:', result);
// const anotherResult = multiply(10, 20); //`Oparion finished with result ${number1 * number2}`
// console.log('anotherResult:', anotherResult);

// function fnA() {
//   console.log('Inside fnA');
// }
// function fnB() {
//   console.log('Inside fnB');
// }
// function fnC() {
//   console.log('Inside fnC');
// }
// console.log('Before fnA execution');
// fnA();
// console.log('After fnA execution');
// console.log('Before fnB execution');
// fnB();
// console.log('After fnB execution');
// console.log('Before fnC execution');
// fnC();
// console.log('After fnC execution');
/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  const bmi =
    Number(weight.replace(',', '.')) / Number(height.replace(',', '.')) ** 2;
  // return Math.round(bmi * 10) / 10;
  return bmi.toFixed(2);
}

const weightEl = user_weight.value;
console.log('weightEl:', weightEl);
const heightEl = user_height.value;
console.log('heightEl:', heightEl);

const result = calcBMI(weightEl, heightEl);
console.log('result:', result);
bmi_result.textContent = result;
