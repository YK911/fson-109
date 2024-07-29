/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = 'Mango'; // username: 'Mango'
const email = 'mango@mail.com'; // email: 'mango@mail.com'
const tel = '+38 099 123-45-67';

const credentials = {
  username,
  email,
  tel,
};

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

/**
 * -------------------------
 */

const inputName = 'color';
const bgValue = 'bgColor';

const colorPickerData = {
  [inputName]: 'tomato',
};
colorPickerData[bgValue] = 'lightgreen';
colorPickerData['color'] = 123;

// console.log(inputName);

// console.log(colorPickerData);

/**
 * Task
 *
 * Створи функцію яка буде приймати 3 аргументи та формувати об'єкт покупки
 * 1 Назва продукту
 * 2 Кількість одиниць
 * 3 Ціна за 1 одиницю товару
 * Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.
 */

function createBasket(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    totalPrice: price * quantity,
  };
}

// const basketInfo = createBasket('drones', 50, 100_000);
// console.log('basketInfo:', basketInfo);

console.log(createBasket('drones', 50, 100_000));
