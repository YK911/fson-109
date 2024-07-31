/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  changeName(newName) {},
  addTrack(track) {},
  updateRating(newRating) {},
  getTracksCount() {},
};

console.log(playlist);
// playlist.changeName('New playlist name');
// console.log(playlist.getTracksCount());

// playlist.addTrack('new track 1');
// console.log(playlist.getTracksCount());

// playlist.addTrack('new track 2');
// console.log(playlist.getTracksCount());

// playlist.updateRating(4);
// console.log(playlist);
