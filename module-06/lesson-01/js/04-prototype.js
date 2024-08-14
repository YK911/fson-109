/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */
const monkey = {
  type: 'Gorilla',
  roar() {
    console.log('AAAAAA!!!');
  },
};
const animal = {
  legs: 4,
};

animal.__proto__ = monkey;

const bark = () => {
  console.log('Woof');
};

const dog = Object.create(animal);
dog.name = 'Mango';
dog.bark = bark;

const cat = {};
cat.name = 'Jupiter';
cat.__proto__ = animal;
// console.log(cat);

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

for (const key in cat) {
  if (cat.hasOwnProperty(key)) {
    // console.log(key); // "name"
  }
}

const catKeys = Object.keys(cat);
// console.log('catKeys:', catKeys);

const cucumber = Object.assign({}, monkey);
console.log('cucumber:', cucumber);
console.log('monkey:', monkey);
const cucumber1 = monkey;

console.log(monkey === cucumber);
console.log(monkey === cucumber1);

/**
 * ----------------------------------------
 */
const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);
