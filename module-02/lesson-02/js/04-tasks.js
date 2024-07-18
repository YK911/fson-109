/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 20;
const b = 100;

for (let index = a; index < b; index += 1) {
  if (index % 5 === 0) {
    // console.log(index);
  }
}

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 5;
const max = 15;

function calculateTotal(min, max) {
  let total = 0;

  for (let index = min; index <= max; index++) {
    if (index !== 0 && index % 2 === 0) {
      total += index;
    }
  }

  return total;
}

const result = calculateTotal(min, max);
console.log('result:', result);

function calculateTotalEvenNumber(min, max) {
  let total = 0;
  let counter = min;

  while (counter < max) {
    if (counter !== 0 && counter % 2 === 0) {
      total += counter;
    }
    counter += 1;
  }

  return total;
}

console.log(calculateTotalEvenNumber(1, 10));
