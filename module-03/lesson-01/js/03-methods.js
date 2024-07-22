/**
 * Методи масиву
 *
 * - join()
 * - split()
 * - slice()
 * - concat()
 * - indexOf()
 * - push() / pop()
 * - unshift() / shift()
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const coursesDesc = courses.join(' * ');
// console.log('coursesDesc:', coursesDesc);

const title = 'JavaScript is awesome';
const arrayFromTitle = title.split(' ');
// console.log('arrayFromTitle:', arrayFromTitle);

arrayFromTitle[arrayFromTitle.length - 1] = 'cool';

// console.log('arrayFromTitle:', arrayFromTitle);

const transformTitle = arrayFromTitle.join(' ');
// console.log('transformTitle:', transformTitle);

// const animals = ['🐼', '🦁', '🐨', '🐸', '🐵', '🐶'];
// const slicedAnimals = animals.slice();
// console.log(slicedAnimals);
// console.log(animals === slicedAnimals);

const animals = ['🐼', '🦁', '🐨', '🐸', '🐵', '🐶'];
const animals2 = ['🐬', '🐳'];
const zoo = ['🐏', '🐆', '🦍'];

const updatedZoo = zoo.concat(animals, animals2);
console.table(updatedZoo);

const dolphinIndex = updatedZoo.indexOf('🐬');
console.log('dolphinIndex:', dolphinIndex);
const giraffeIndex = updatedZoo.indexOf('🦒');
console.log('giraffeIndex:', giraffeIndex);

const newLength = updatedZoo.push('🐊', '🦒', '🐖');
console.table(updatedZoo);
// console.log(newLength);

const deletedValue = updatedZoo.pop();
// updatedZoo.pop().pop(); // '🐖'.pop()
// updatedZoo.pop();
// updatedZoo.pop();
console.table(updatedZoo);
console.log(deletedValue);

const shifted = updatedZoo.shift();
console.log(shifted);
console.table(updatedZoo);
const unshifted = updatedZoo.unshift('🦘');
console.log(unshifted);
console.table(updatedZoo);

// zoo.slice().splice(1, 1);
// console.log(zoo);
