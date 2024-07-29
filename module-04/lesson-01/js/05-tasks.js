/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = !user.premium;

// console.log(user);
const keys = Object.keys(user);
// console.log('keys:', keys);

let msg = '';

for (const key of keys) {
  msg += `${key}: ${user[key]}\n`;
}
// console.log(msg);

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salaryValues = Object.values(salaries);
console.log('salaryValues:', salaryValues);

let totalSalary = 0;

if (salaryValues.length === 0) {
  console.log(totalSalary);
}

for (const salary of salaryValues) {
  totalSalary += salary;
}
console.log(totalSalary);

//  https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
//  https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode
