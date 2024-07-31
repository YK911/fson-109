/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

// class Playlist {
//   constructor(name, rating) {
//     this.name = name;
//     this.rating = rating;
//   }

//   getRating() {
//     console.log(this.rating);
//   }
// }

// const favouritePlaylist = new Playlist('Playlist 1', 10);
// const relaxPlaylist = new Playlist('Playlist relax', 20);
// const trainigPlaylist = new Playlist('Playlist training', 100);
// console.log(favouritePlaylist);
// console.log(relaxPlaylist);
// console.log(trainigPlaylist);

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  // genres: {
  //   pop: [],
  //   rock: [],
  //   indy: [],
  //   getGenre() {
  //     console.log(this);
  //   },
  // },
  changeName(newName = 'Relax playlist') {
    console.log(this);
    // playlist.name = newName;
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTracksCount() {
    return this.tracks.length;
  },
  // getGenre() {
  //   console.log(this);
  // },
};
// playlist.genres.getGenre();
// playlist.getGenre();

// const newPlaylist = {
//   ...playlist,
//   name: 'Relax',
// };

// console.log(playlist);
// playlist.changeName('New playlist name');
// playlist.changeName('New playlist name');
// newPlaylist.changeName('Training');
// console.log(playlist.getTracksCount());
// console.log('playlist', playlist);
// console.log('newPlaylist', newPlaylist);

playlist.addTrack('new track 1');
// console.log(playlist);
console.log(playlist.getTracksCount());

playlist.addTrack('new track 2');
console.log(playlist.getTracksCount());

playlist.updateRating(4);
console.log(playlist);
