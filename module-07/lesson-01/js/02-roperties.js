/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const imageEl = document.querySelector('.hero__image');
// console.log(imageEl.alt);
// console.log(imageEl.src);
// console.log(imageEl.width);
// console.log(imageEl);

// imageEl.src =
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.alt = 'Cute little kitty';
// imageEl.width = 480;

// const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl:', heroTitleEl);
// const textInsideTitle = heroTitleEl.textContent;
// console.log('textInsideTitle:', textInsideTitle);

// setTimeout(() => {
//   heroTitleEl.querySelector('small').textContent = '😉';
// }, 2000);

// console.log(heroTitleEl.firstChild);
// console.log(heroTitleEl.children[0]);

// heroTitleEl.textContent = "I'm <b>super cute</b> cat 😎";

/**
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */
// imageEl.setAttribute('loading', 'lazy');
// const inputEl = document.querySelector('.js-input');
// let res = inputEl.getAttribute('type');
// res = inputEl.getAttribute('value');
// console.log('res:', res);
// // inputEl.setAttribute('type', 'password');
// inputEl.removeAttribute('value');
// console.log();

// if (!inputEl.hasAttribute('disabled')) {
//   inputEl.setAttribute('disabled', true);
// }

/**
 * Data-атрибути
 */
const actions = document.querySelectorAll('.actions button');
// console.log('actions:', actions);
actions[1].setAttribute('data-type-value', 'First btn');
let res = actions[1].dataset;
console.log('res:', res);
actions.forEach(action => {
  action.addEventListener('click', evt => {
    const actionType = evt.currentTarget.dataset.action;
    console.log('actionType:', actionType);
  });
});
