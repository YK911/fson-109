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

const playlistName = 'My favorite songs';
const playlistRating = 4.8;
const playlistTracks = ['track-1', 'track-2', 'track-3'];
const playlistIsFavorite = true;

/**
 * -----------------------------------
 */
const propertyName = 'tracks';

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}
