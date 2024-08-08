/**
 * Метод flatMap
 */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  {
    id: '004',
    likes: 0,
    tags: ['js', 'nodejs', 'react'],
    users: [{ id: 'qwe-123', name: 'Mango', friends: ['Poly', 'Ajax'] }],
  },
];

// const tags = tweets.map((tweet, index, array) => {
//   return tweet.tags;
// });

const tags = tweets.flatMap((tweet, index, array) => {
  return tweet.tags;
});

console.log(tags);
