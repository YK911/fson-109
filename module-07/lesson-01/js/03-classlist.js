/**
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = '/contact';
const btnEl = document.querySelector('.js-toggle-btn');
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
linkEl.classList.add('site-nav__link--current');
linkEl.classList.replace('site-nav__link--current', 'active');

const res = linkEl.classList.contains('active');
console.log('res:', res);

// linkEl.classList.remove('site-nav__link');
btnEl.addEventListener('click', () => {
  // linkEl.classList.toggle('site-nav__link--current');
});
