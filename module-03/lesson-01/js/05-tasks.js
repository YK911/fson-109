/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

function sumEvenNumber(numbers) {
  let total = 0;

  for (const number of numbers) {
    const isEven = number % 2 === 0;
    // console.log(number, isEven);

    if (isEven) {
      total += number;
    }
  }

  return total;
}

const sum = sumEvenNumber(numbers);
// console.log('sum:', sum);
/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

function showContacts(names, phones) {
  const namesArray = names.split(',');
  const phonesArray = phones.split(',');

  if (namesArray.length === phonesArray.length) {
    for (let index = 0; index < namesArray.length; index++) {
      const name = namesArray[index];
      const phone = phonesArray[index];
      console.log(`${name} has phone number ${phone}`);
    }
  }
  // console.log('showContacts  phonesArray:', phonesArray);
  // console.log('showContacts  namesArray:', namesArray);
}

// showContacts(names, phones);
/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = '    Welcome to the future in the past       ';
function printText(text) {
  const trimmedText = text.trim();
  const textToArray = trimmedText.split(' ');
  // console.log('printText  textToArray:', textToArray);
  const start = 1;
  const end = textToArray.length - 1;
  const slicedArr = textToArray.slice(start, end);
  console.log('result:', slicedArr.join(' '));
}

printText(string);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
// console.log(min); // 1
