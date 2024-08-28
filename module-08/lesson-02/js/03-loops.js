/**
 * Деструктуризація об'єкта в циклі
 */

const students = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

/**
 * Без деструктуризації
 */
// const names = [];

// for (const student of students) {
//   console.log(student);
//   names.push(student.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */
const names = [];

for (const { name } of students) {
  names.push(name);
}

console.log(names);
