/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */
import { BASE_POKEMON_URL } from './config.js';

const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-container'),
};
refs.form.addEventListener('submit', onFormSubmit);

function fetchPokemon(searchQuery = '') {
  return fetch(`${BASE_POKEMON_URL}/pokemon/${searchQuery}`).then(response => {
    if (!response.ok) {
      throw new Error('Упс... щось пішло не так, спробуйте ще раз');
    }

    return response.json();
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query } = form.elements;

  fetchPokemon(query.value)
    .then(data => {
      const pokemonMarkup = createMarkup(data);
      refs.container.innerHTML = pokemonMarkup;
    })
    .catch(error => {
      iziToast.error({
        title: '❌',
        message: error.message,
        position: 'topRight',
      });
    });
}

function createMarkup({ abilities, name, weight, height, sprites }) {
  const abilityListItems = abilities
    .map(({ ability: { name } }) => `<li>${name}</li>`)
    .join('');

  return `<article class="card">
        <div class="card-img-top">
          <img src="${sprites?.other?.home?.front_default}" alt="${name}" />
        </div>
        <div class="card-body">
          <h2 class="card-title">Ім'я: ${name}</h2>
          <p class="card-text">Вага: ${weight}</p>
          <p class="card-text">Зростання: ${height}</p>

          <p class="card-text"><b>Уміння</b></p>
          <ul class="list-group">
            ${abilityListItems}
          </ul>
        </div>
      </article>`;
}
