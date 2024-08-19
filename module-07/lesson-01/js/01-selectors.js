/**
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */
// const selector = 'section > .container > .js-magic-btn[type="button"]';
// const btnEl = document.querySelector('.js-magic-btn');
// console.dir(btnEl);

// const btnsEl = document.querySelectorAll("[type='button']");
// console.log('btnsEl:', btnsEl);

// btnsEl.forEach(element => {
//   console.log(element.textContent);
// });

// let btns = Array.from(btnsEl);
// btns = [...btnsEl];
// console.log('btns:', btns);

const listEl = document.querySelector('.site-nav');
console.log('listEl:', listEl);

const itemEl = listEl.querySelector('.site-nav__item');
console.log('itemEl:', itemEl);

const linksEl = listEl.querySelectorAll('.site-nav__link');
console.log('linksEl:', linksEl);
