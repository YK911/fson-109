/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */
import { BASE_URL, API_KEY } from './config.js';

function fetchImages(params) {
  const urlParams = new URLSearchParams(params);

  return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error('Oops');
    }

    return response.json();
  });
}

const imagesBoxEl = document.querySelector('.js-images');
const params = {
  q: 'pug',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 30,
};

fetchImages(params)
  .then(data => {
    const { hits } = data;
    const imagesMarkup = hits.reduce((acc, item) => {
      return (acc += `<article><img src="${item.previewURL} " alt="${item.tags} " /></article>`);
    }, '');

    imagesBoxEl.innerHTML = imagesMarkup;
  })
  .catch(e => console.log(e));
