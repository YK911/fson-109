/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

// const userName = document.querySelector('.js-user-name');

// const handleInput = event => {
//   console.dir(event.target.value);
// };
// const handleFocus = event => {
//   console.log('Carret inside in input');
// };

// userName.addEventListener('input', handleInput);
// userName.addEventListener('focus', handleFocus);
// userName.addEventListener('blur', handleInput);
/**
 * Користувач вводить в input своє ім'я
 * після втрати фокусу отримує alert з повідомленням-привітанням
 */
const userName = document.querySelector('.js-user-name');

const handleBlur = event => {
  const input = event.target;
  alert(`Welcome onboard dear ${input.value}`);
  input.value = '';
};

userName.addEventListener('blur', handleBlur);
