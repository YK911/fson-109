/**
 * Методи рядків
 *
 *  - slice()
 *  - toLowerCase() / toUpperCase()
 *  - includes()
 *  - startsWith() / endsWith()
 *  - indexOf()
 *  - trim()
 */

// const username = 'Jacob Mercer';

// const usernameLength = username.length;
// // console.log('usernameLength:', usernameLength);

// const copyOfUsername = username.slice(1, 5);
// // console.log('copyOfUsername:', copyOfUsername);
// const copyOfUsername1 = username.slice(0, 8);
// // console.log('copyOfUsername1:', copyOfUsername1);

// const fullCopy = username.slice();
// // console.log('fullCopy:', fullCopy);
// const lastUsernameIndex = username.length - 1;
// // console.log('lastUsernameIndex:', lastUsernameIndex);
// const copyTillTheEnd = username.slice(-1, -6);
// // console.log('copyTillTheEnd:', copyTillTheEnd);

// // const text =
// //   "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.";

// const text = 'This refers to your core muscles, which in';

// // console.log(text.length);
// // const maxLength = 50;

// // if (maxLength < text.length) {
// //   console.log('Sorry your description is too long');
// // } else {
// //   console.log(text);
// // }

// const checkValueFromDB = 'honda';
// const firstLetter = checkValueFromDB.slice(0, 1);
// console.log('firstLetter:', firstLetter);
// const restLetters = checkValueFromDB.slice(1);
// console.log('restLetters:', restLetters);
// const capitaliseFirstLetter = firstLetter.toUpperCase();

// const finalWord = capitaliseFirstLetter + restLetters;
// console.log('finalWord:', finalWord);

// function getValue(event) {
//   const userValue = event.target.value;
//   const normalizedUserValue = userValue.trim();
//   console.log('getValue  normalizedUserValue:', normalizedUserValue);
//   // console.log(userValue.toUpperCase());
//   if (normalizedUserValue.toLowerCase() === checkValueFromDB.toLowerCase()) {
//     console.log('🎉 Hoorray you add Honda');
//   } else {
//     console.log('🎉 Sorry you missed');
//   }
// }
// userInput.addEventListener('blur', getValue);

// // ============

// const searchValue = 'Core muscles';
// const exDescription = exerciseDesc.innerText;
// console.log('exDescription:', exDescription);
// const isIncludes = exDescription.includes(searchValue);
// console.log('isIncludes:', isIncludes);

// const isStartsWith = exDescription.startsWith('T');
// console.log('isStartsWith:', isStartsWith);
// const isStartsWith1 = exDescription.startsWith('h', 1);
// console.log('isStartsWith1:', isStartsWith1);

// const isInDesc = exDescription.indexOf(
//   '<object data="" type=""></object>bliques'
// );
// console.log('isInDesc:', isInDesc);

// const descText = '    maintaining posture       ';
// const normalizeText = descText.trim();
// console.log('normalizeText:', normalizeText);

/**
 * Функція getFileName(file) приймає один параметр file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
 Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
 Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
 Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
 В іншому разі функція повертала підрядок з іменем файлу, але без розширення"
 */

function getFileName(file) {
  // console.log(file);
  const dotPosition = file.indexOf('.');
  // console.log('dotPosition:', dotPosition);

  if (dotPosition === -1) {
    return file;
  }

  return file.slice(0, dotPosition);
}

// function getFileName(file) {
//   const start = 0;
//   const end = file.indexOf('.');
//   return end > -1 ? file.slice(start, end) : file;
// }

const res1 = getFileName('styles.css');
console.log('res1:', res1);
const res2 = getFileName('styles');
console.log('res2:', res2);
