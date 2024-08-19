/**
 * Створення та додавання елементів
 */

/**
 * Створюємо заголовок
 */
const heroBlockEl = document.querySelector('.hero');

const titleEl = document.createElement('h1');
titleEl.classList.add('hero-title');
titleEl.textContent = 'Main navigation';
titleEl.style.color = 'teal';
titleEl.style.textTransform = 'uppercase';

const descEl = document.createElement('p');
descEl.style.fontWeight = 500;
descEl.textContent =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eos, veritatis dignissimos molestiae quod enim.';

heroBlockEl.append(titleEl, descEl);
// heroBlockEl.appendChild(titleEl);
// heroBlockEl.appendChild(descEl);
/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://plus.unsplash.com/premium_photo-1675873580218-9f1b8d4f5c96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 380;

heroBlockEl.append(imageEl);
/**
 * Створюємо та додаємо новий пункт меню
 */
const listEl = document.querySelector('.site-nav');
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const linkItemEl = document.createElement('a');
linkItemEl.classList.add('site-nav__link');
linkItemEl.textContent = 'Reviews';

navItemEl.append(linkItemEl);

listEl.append(navItemEl);
