/**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number, idx, arr) => {
//   return number === 151;
// });
// console.log(number);

/**
 * -----------------------------
 */
const allCars = [
  { make: 'Ford', model: 'F-150', type: 'super-truck', price: 127_110 },
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];

// console.log(allCars[0]?.price);
// console.log(allCars[0]?.wheel?.toLowerCase());
// console.log(allCars[0]?.color?.toLowerCase());

/**
 * Шукаємо машину за моделлю
 */
// const getCarByModel = (cars, model) => {
//   return cars.find((car, idx, arr) => {
//     return car.model === model;
//   });
// };
/**
 * Function represent object with information of car which find by model
 *
 * @param {Array} cars
 * @param {String} model
 * @param {} callback
 * @returns object with car info or undefined
 */
const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

// if (!getCarByModel(allCars, 'Cayenne')) {
//   console.log('Sorry, car sold out');
// }
/**
 * Шукаємо машину за типом кузова
 */
// const getCarByType = (cars, type) => {
//   return cars.find(car => {
//     return car.type === type;
//   });
// };
const getCarByType = (cars, type) => cars.find(car => car.type === type);

// console.log(getCarByType(allCars, 'sedan'));
// console.log(getCarByType(allCars, 'truck'));
// console.log(getCarByType(allCars, 'tank'));
