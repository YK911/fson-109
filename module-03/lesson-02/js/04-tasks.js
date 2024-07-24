/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {
  for (let i = 0; i < items.length; i++) {
    const message = `${i + 1} - ${items[i]}`;
    console.log(message);
  }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  const namesToArr = names.split(',');
  const phonesToArr = phones.split(',');

  for (let i = 0; i < namesToArr.length; i++) {
    const message = `${namesToArr[i]} - ${phonesToArr[i]}`;
    console.log(message);
  }
}

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */
function formatTime(minutes) {
  const hours = String(Math.floor(minutes / 60));
  const minute = String(minutes % 60);

  return `${hours.padStart(2, 0)}:${minute.padStart(2, 0)}`;
}

// 70 -> 60 - 1 hour + 10 minutes

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

/** Напишіть функцію, яка буде розбивати початковий масив
 * на потрібну кількість елементів розділюячи на декілька масивів.
 * Функція приймає 2 параметри:
 * - масив значень
 * - потрібну кількість елементіа в масиві
 * Функція повертає масив масивів
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

/**
 * Напишіть функції для роботи з колекцією навчальних курсів courses:
 * - addCourse(name) - додає курс до кінця колекції
 * - removeCourse(name) - видаляє курс із колекції
 * - updateCourse(oldName, newName) - змінює ім'я на нове
 */
// TODO: 'Ви вже маєте такий курс'
// TODO: 'Курс із таким ім'ям не знайдено'

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function addCourse(name) {
//   if (courses.includes(name)) {
//     return "Ви вже маєте такий курс";
//   }

//   courses.push(name);
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'

// function removeCourse(name) {
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// function updateCourse(oldName, newName) {}
// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(updateCourse('qwerty', 'NestJS')); // 'Курс із таким ім'ям не знайдено'

/**
Яким методом це можна зробити, якщо тип данних число, щось не знаходжу. Слайс не працює в данному випадку. ** Якщо дано два числа. І потрібно перевірити співпадіння перших двох цифр цих чисел. Потрібно перевести числа у рядок і далі працювати як з рядками? Чи є якийсь інший спосіб спеціально для чисел?
*/

function compareNumbers(param1, param2) {
  if (param1 < 10 || param2 < 10) {
    return 'Give me decimal numbers';
  }

  const firstNum = convertToDecimal(param1);
  console.log('compareNumbers  firstNum:', firstNum);
  const secondNum = convertToDecimal(param2);
  console.log('compareNumbers  secondNum:', secondNum);
  return firstNum === secondNum;

  // const param1ToStr = String(param1);
  // const param2ToStr = String(param2);

  // return param1ToStr.slice(0, 2) === param2ToStr.slice(0, 2);
}

function convertToDecimal(number) {
  let decimalNumber = number;

  while (decimalNumber > 100) {
    decimalNumber = Math.floor(decimalNumber / 10);
  }
  return decimalNumber;
}

const res = compareNumbers(12, 12_669);
console.log('res:', res);
