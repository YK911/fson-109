/**
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

const xmas2024 = '2024-12-25T23:45:15';

const xmas = new Date(xmas2024);
// console.log('currentDate:', xmas);

const mounth = ['January', 'February', '...'];

const currentYear = new Date(2024, 0);
// console.log('currentYear:', currentYear);

const date1 = Date.now();
console.log('date1:', date1);

const deltaTime = xmas - date1;
const seconds = deltaTime / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;

console.log('seconds', seconds);
console.log('minutes:', minutes);
console.log('hours:', hours);
console.log('days:', days);

console.log(xmas.getDate());
console.log(xmas.getFullYear());
console.log(xmas.getSeconds());

xmas.setFullYear(2044);
console.log('currentDate:', xmas);
