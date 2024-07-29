/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const playlistName = 'My favorite songs';
// const playlistRating = 4.8;
// const playlistTracks = ['track-1', 'track-2', 'track-3'];
// const playlistIsFavorite = true;

// const playlist = {
//   tracks: ['track-1', 'track-2', 'track-3'],
//   name: 'My favorite songs',
//   rating: 4.8,
//   ganres: [{ rock: 'Thunder' }, { rap: 'All eyes on me' }],
// };

// playlist.isFavourite = true;

// console.log('After adding favourites', playlist);

// console.log(playlist.rating);
// console.log(playlist.tracks[1]);
// console.log(playlist.ganres[1].rap);

// const songName = playlist['name'];
// console.log('songName:', songName);

// playlist.rating = 5;
// console.log(playlist);

/**
 * -----------------------------------
 */
const propertyName = 'tracks';

const playlist = {
  tracks: ['track-1', 'track-2', 'track-3'],
  name: 'My favorite songs',
  rating: 4.8,
  ganres: [{ rock: 'Thunder' }, { rap: 'All eyes on me' }],
};

dropdown.addEventListener('change', evt => {
  const selectEl = evt.target;
  const selectedOptionIndex = selectEl.selectedIndex;
  const selectedOptionText =
    selectEl.options[selectedOptionIndex].text.toLowerCase();

  console.log(selectedOptionText);

  const res = playlist[selectedOptionText];
  console.log('res:', res);
});

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

const a = 1;
const b = 2;

foo({ a, b });
foo({ a: 5, b: 10 });
