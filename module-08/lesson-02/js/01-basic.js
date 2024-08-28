/**
 * Деструктуризація об'єкта
 */
const skills = ['react.js', 'node.js'];

const user = {
  username: 'Jacob name',
  skills: {
    html: {
      syntax: 'pug',
      type: 'template',
    },
    css: false,
    js: true,
  },
  reviews: [
    {
      userid: 123,
      userName: 'Pypsik',
      userAvatar: 'avatar.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat.',
    },
  ],
};

// const { username } = user;
// console.log(username);

const { skills: userSkills = {}, userage = 0 } = user;
console.log(userSkills?.html?.syntax);
console.log(userage ? 'Good' : 'Bad');

/**
 * Глибока деструктуризація об'єкта
 */

// const {
//   skills,
//   skills: {
//     html: { syntax },
//     css,
//     js,
//   },
// } = user;

// console.log('skills', skills);

// console.log('html', html);
// console.log('syntax', syntax);
// console.log('css', css);
// console.log('js', js);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);

// console.log(arr);

// const photos = {
//   total: 1415,
//   total_pages: 118,
//   results: [
//     {
//       id: 'ym96FAhQ8o4',
//       slug: 'yellow-umbrella-ym96FAhQ8o4',
//       alternative_slugs: {
//         en: 'yellow-umbrella-ym96FAhQ8o4',
//         es: 'paraguas-amarillo-ym96FAhQ8o4',
//         ja: '黄色い傘-ym96FAhQ8o4',
//         fr: 'parapluie-jaune-ym96FAhQ8o4',
//         it: 'ombrello-giallo-ym96FAhQ8o4',
//         ko: '노란-우산-ym96FAhQ8o4',
//         de: 'gelber-regenschirm-ym96FAhQ8o4',
//         pt: 'guarda-chuva-amarelo-ym96FAhQ8o4',
//       },
//       created_at: '2017-12-20T07:29:31Z',
//       updated_at: '2024-08-28T15:49:27Z',
//       promoted_at: '2017-12-20T23:20:59Z',
//       width: 2739,
//       height: 2739,
//       color: '#f3d959',
//       blur_hash: 'LDRUupNd4X%do|RR%Kxs8zkWtQn%',
//       description: 'Umbrellas',
//       alt_description: 'yellow umbrella',
//       breadcrumbs: [
//         {
//           slug: 'backgrounds',
//           title: 'HQ Background Images',
//           index: 0,
//           type: 'landing_page',
//         },
//         {
//           slug: 'art',
//           title: 'Art Backgrounds',
//           index: 1,
//           type: 'landing_page',
//         },
//       ],
//       urls: {
//         raw: 'https://images.unsplash.com/photo-1513754934927-4606bafe9858?ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3',
//         full: 'https://images.unsplash.com/photo-1513754934927-4606bafe9858?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=85',
//         regular:
//           'https://images.unsplash.com/photo-1513754934927-4606bafe9858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=80&w=1080',
//         small:
//           'https://images.unsplash.com/photo-1513754934927-4606bafe9858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=80&w=400',
//         thumb:
//           'https://images.unsplash.com/photo-1513754934927-4606bafe9858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=80&w=200',
//         small_s3:
//           'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1513754934927-4606bafe9858',
//       },
//       links: {
//         self: 'https://api.unsplash.com/photos/yellow-umbrella-ym96FAhQ8o4',
//         html: 'https://unsplash.com/photos/yellow-umbrella-ym96FAhQ8o4',
//         download:
//           'https://unsplash.com/photos/ym96FAhQ8o4/download?ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww',
//         download_location:
//           'https://api.unsplash.com/photos/ym96FAhQ8o4/download?ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwxfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww',
//       },
//       likes: 1486,
//       liked_by_user: false,
//       current_user_collections: [],
//       sponsorship: null,
//       topic_submissions: {
//         'color-of-water': {
//           status: 'approved',
//           approved_on: '2022-03-21T21:48:44Z',
//         },
//         'textures-patterns': {
//           status: 'approved',
//           approved_on: '2024-02-28T06:23:24Z',
//         },
//       },
//       asset_type: 'photo',
//       user: {
//         id: 'bpBGexy0cJE',
//         updated_at: '2024-05-23T19:52:54Z',
//         username: 'simplelovelyuseful',
//         name: 'Catrin Johnson',
//         first_name: 'Catrin',
//         last_name: 'Johnson',
//         twitter_username: null,
//         portfolio_url: 'Https://simplelovelyuseful.com',
//         bio: '📲#findingjoyinthesmallthings \r\n💌 creative 💭 dreamer 🌞 joymaker 📸 legoartist 🌏Adelaide, South Australia',
//         location: 'Adelaide',
//         links: {
//           self: 'https://api.unsplash.com/users/simplelovelyuseful',
//           html: 'https://unsplash.com/@simplelovelyuseful',
//           photos: 'https://api.unsplash.com/users/simplelovelyuseful/photos',
//           likes: 'https://api.unsplash.com/users/simplelovelyuseful/likes',
//           portfolio:
//             'https://api.unsplash.com/users/simplelovelyuseful/portfolio',
//           following:
//             'https://api.unsplash.com/users/simplelovelyuseful/following',
//           followers:
//             'https://api.unsplash.com/users/simplelovelyuseful/followers',
//         },
//         profile_image: {
//           small:
//             'https://images.unsplash.com/profile-1567768526855-60276725e09cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//           medium:
//             'https://images.unsplash.com/profile-1567768526855-60276725e09cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//           large:
//             'https://images.unsplash.com/profile-1567768526855-60276725e09cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//         },
//         instagram_username: 'simplelovelyuseful',
//         total_collections: 13,
//         total_likes: 3,
//         total_photos: 57,
//         total_promoted_photos: 2,
//         total_illustrations: 0,
//         total_promoted_illustrations: 0,
//         accepted_tos: true,
//         for_hire: false,
//         social: {
//           instagram_username: 'simplelovelyuseful',
//           portfolio_url: 'Https://simplelovelyuseful.com',
//           twitter_username: null,
//           paypal_email: null,
//         },
//       },
//       tags: [
//         {
//           type: 'landing_page',
//           title: 'yellow',
//           source: {
//             ancestry: {
//               type: {
//                 slug: 'wallpapers',
//                 pretty_slug: 'HD Wallpapers',
//               },
//               category: {
//                 slug: 'colors',
//                 pretty_slug: 'Color',
//               },
//               subcategory: {
//                 slug: 'yellow',
//                 pretty_slug: 'Yellow',
//               },
//             },
//             title: 'HD Yellow Wallpapers',
//             subtitle: 'Download Free Yellow Wallpapers',
//             description:
//               'Choose from a curated selection of yellow wallpapers for your mobile and desktop screens. Always free on Unsplash.',
//             meta_title:
//               'Yellow Wallpapers: Free HD Download [500+ HQ] | Unsplash',
//             meta_description:
//               'Choose from hundreds of free yellow wallpapers. Download HD wallpapers for free on Unsplash.',
//             cover_photo: {
//               id: 'vC8wj_Kphak',
//               slug: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//               alternative_slugs: {
//                 en: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 es: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 ja: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 fr: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 it: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 ko: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 de: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 pt: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//               },
//               created_at: '2017-02-15T08:32:55Z',
//               updated_at: '2024-08-26T20:01:07Z',
//               promoted_at: '2017-02-15T08:32:55Z',
//               width: 3456,
//               height: 5184,
//               color: '#d9c0a6',
//               blur_hash: 'LQP=+Pxta$og%%j]WWj@Dhayofae',
//               description:
//                 'Find more inspiring photos: https://monaeendra.com/',
//               alt_description: 'flowers beside yellow wall',
//               breadcrumbs: [
//                 {
//                   slug: 'images',
//                   title: '1,000,000+ Free Images',
//                   index: 0,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'feelings',
//                   title: 'Feelings Images',
//                   index: 1,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'i-love-you',
//                   title: 'I Love You Images',
//                   index: 2,
//                   type: 'landing_page',
//                 },
//               ],
//               urls: {
//                 raw: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3',
//                 full: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
//                 regular:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
//                 small:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
//                 thumb:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
//                 small_s3:
//                   'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1487147264018-f937fba0c817',
//               },
//               links: {
//                 self: 'https://api.unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak',
//                 html: 'https://unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak',
//                 download: 'https://unsplash.com/photos/vC8wj_Kphak/download',
//                 download_location:
//                   'https://api.unsplash.com/photos/vC8wj_Kphak/download',
//               },
//               likes: 14281,
//               liked_by_user: false,
//               current_user_collections: [],
//               sponsorship: null,
//               topic_submissions: {
//                 'textures-patterns': {
//                   status: 'approved',
//                   approved_on: '2024-04-07T11:58:24Z',
//                 },
//               },
//               asset_type: 'photo',
//               premium: false,
//               plus: false,
//               user: {
//                 id: '-tVYuvmMiPA',
//                 updated_at: '2024-05-21T17:06:40Z',
//                 username: 'monaeendra',
//                 name: 'Mona Eendra',
//                 first_name: 'Mona',
//                 last_name: 'Eendra',
//                 twitter_username: null,
//                 portfolio_url: 'https://monaeendra.com/',
//                 bio: 'Passionate photographer capturing beauty and soul in people and places. I am available for collaborations!',
//                 location: 'Copenhagen',
//                 links: {
//                   self: 'https://api.unsplash.com/users/monaeendra',
//                   html: 'https://unsplash.com/@monaeendra',
//                   photos: 'https://api.unsplash.com/users/monaeendra/photos',
//                   likes: 'https://api.unsplash.com/users/monaeendra/likes',
//                   portfolio:
//                     'https://api.unsplash.com/users/monaeendra/portfolio',
//                   following:
//                     'https://api.unsplash.com/users/monaeendra/following',
//                   followers:
//                     'https://api.unsplash.com/users/monaeendra/followers',
//                 },
//                 profile_image: {
//                   small:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//                   medium:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//                   large:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//                 },
//                 instagram_username: 'monaeendra',
//                 total_collections: 0,
//                 total_likes: 289,
//                 total_photos: 39,
//                 total_promoted_photos: 11,
//                 total_illustrations: 0,
//                 total_promoted_illustrations: 0,
//                 accepted_tos: false,
//                 for_hire: true,
//                 social: {
//                   instagram_username: 'monaeendra',
//                   portfolio_url: 'https://monaeendra.com/',
//                   twitter_username: null,
//                   paypal_email: null,
//                 },
//               },
//             },
//             affiliate_search_query: null,
//           },
//         },
//         {
//           type: 'landing_page',
//           title: 'texture',
//           source: {
//             ancestry: {
//               type: {
//                 slug: 'backgrounds',
//                 pretty_slug: 'Backgrounds',
//               },
//               category: {
//                 slug: 'art',
//                 pretty_slug: 'Art',
//               },
//               subcategory: {
//                 slug: 'texture',
//                 pretty_slug: 'Texture',
//               },
//             },
//             title: 'Texture Backgrounds',
//             subtitle: 'Download Free Texture Background Images',
//             description:
//               "Regular backgrounds aren't enough for you? Get one with a little texture. Unsplash has a ton of gorgeous texture backgrounds, each with its own unique style, and each free to use!",
//             meta_title:
//               '900+ Texture Background Images: Download HD Backgrounds on Unsplash',
//             meta_description:
//               'Choose from hundreds of free texture backgrounds. Download beautiful, curated free backgrounds on Unsplash.',
//             cover_photo: {
//               id: 'vC8wj_Kphak',
//               slug: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//               alternative_slugs: {
//                 en: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 es: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 ja: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 fr: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 it: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 ko: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 de: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 pt: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//               },
//               created_at: '2017-02-15T08:32:55Z',
//               updated_at: '2024-08-26T20:01:07Z',
//               promoted_at: '2017-02-15T08:32:55Z',
//               width: 3456,
//               height: 5184,
//               color: '#d9c0a6',
//               blur_hash: 'LQP=+Pxta$og%%j]WWj@Dhayofae',
//               description:
//                 'Find more inspiring photos: https://monaeendra.com/',
//               alt_description: 'flowers beside yellow wall',
//               breadcrumbs: [
//                 {
//                   slug: 'images',
//                   title: '1,000,000+ Free Images',
//                   index: 0,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'feelings',
//                   title: 'Feelings Images',
//                   index: 1,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'i-love-you',
//                   title: 'I Love You Images',
//                   index: 2,
//                   type: 'landing_page',
//                 },
//               ],
//               urls: {
//                 raw: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3',
//                 full: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
//                 regular:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
//                 small:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
//                 thumb:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
//                 small_s3:
//                   'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1487147264018-f937fba0c817',
//               },
//               links: {
//                 self: 'https://api.unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak',
//                 html: 'https://unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak',
//                 download: 'https://unsplash.com/photos/vC8wj_Kphak/download',
//                 download_location:
//                   'https://api.unsplash.com/photos/vC8wj_Kphak/download',
//               },
//               likes: 14281,
//               liked_by_user: false,
//               current_user_collections: [],
//               sponsorship: null,
//               topic_submissions: {
//                 'textures-patterns': {
//                   status: 'approved',
//                   approved_on: '2024-04-07T11:58:24Z',
//                 },
//               },
//               asset_type: 'photo',
//               premium: false,
//               plus: false,
//               user: {
//                 id: '-tVYuvmMiPA',
//                 updated_at: '2024-05-21T17:06:40Z',
//                 username: 'monaeendra',
//                 name: 'Mona Eendra',
//                 first_name: 'Mona',
//                 last_name: 'Eendra',
//                 twitter_username: null,
//                 portfolio_url: 'https://monaeendra.com/',
//                 bio: 'Passionate photographer capturing beauty and soul in people and places. I am available for collaborations!',
//                 location: 'Copenhagen',
//                 links: {
//                   self: 'https://api.unsplash.com/users/monaeendra',
//                   html: 'https://unsplash.com/@monaeendra',
//                   photos: 'https://api.unsplash.com/users/monaeendra/photos',
//                   likes: 'https://api.unsplash.com/users/monaeendra/likes',
//                   portfolio:
//                     'https://api.unsplash.com/users/monaeendra/portfolio',
//                   following:
//                     'https://api.unsplash.com/users/monaeendra/following',
//                   followers:
//                     'https://api.unsplash.com/users/monaeendra/followers',
//                 },
//                 profile_image: {
//                   small:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//                   medium:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//                   large:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//                 },
//                 instagram_username: 'monaeendra',
//                 total_collections: 0,
//                 total_likes: 289,
//                 total_photos: 39,
//                 total_promoted_photos: 11,
//                 total_illustrations: 0,
//                 total_promoted_illustrations: 0,
//                 accepted_tos: false,
//                 for_hire: true,
//                 social: {
//                   instagram_username: 'monaeendra',
//                   portfolio_url: 'https://monaeendra.com/',
//                   twitter_username: null,
//                   paypal_email: null,
//                 },
//               },
//             },
//             affiliate_search_query: null,
//           },
//         },
//         {
//           type: 'landing_page',
//           title: 'color',
//           source: {
//             ancestry: {
//               type: {
//                 slug: 'wallpapers',
//                 pretty_slug: 'HD Wallpapers',
//               },
//               category: {
//                 slug: 'colors',
//                 pretty_slug: 'Color',
//               },
//             },
//             title: 'HD Color Wallpapers',
//             subtitle: 'Download Free Color Wallpapers',
//             description:
//               'Need a color wallpaper? Unsplash has every color, style, and aesthetic you can image, and all of our photos are free to use for all!',
//             meta_title:
//               'Color Wallpapers: Free HD Download [500+ HQ] | Unsplash',
//             meta_description:
//               'Choose from hundreds of free colors wallpapers. Download HD wallpapers for free on Unsplash.',
//             cover_photo: {
//               id: 'RnCPiXixooY',
//               slug: 'multicolored-hallway-RnCPiXixooY',
//               alternative_slugs: {
//                 en: 'multicolored-hallway-RnCPiXixooY',
//                 es: 'multicolored-hallway-RnCPiXixooY',
//                 ja: 'multicolored-hallway-RnCPiXixooY',
//                 fr: 'multicolored-hallway-RnCPiXixooY',
//                 it: 'multicolored-hallway-RnCPiXixooY',
//                 ko: 'multicolored-hallway-RnCPiXixooY',
//                 de: 'multicolored-hallway-RnCPiXixooY',
//                 pt: 'multicolored-hallway-RnCPiXixooY',
//               },
//               created_at: '2017-07-19T11:16:12Z',
//               updated_at: '2024-08-21T10:57:17Z',
//               promoted_at: '2017-07-19T13:49:23Z',
//               width: 3223,
//               height: 4834,
//               color: '#40738c',
//               blur_hash: 'LzIfTBo22WbbX,j@oybEFaWo$yoL',
//               description: null,
//               alt_description: 'multicolored hallway',
//               breadcrumbs: [
//                 {
//                   slug: 'images',
//                   title: '1,000,000+ Free Images',
//                   index: 0,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'feelings',
//                   title: 'Feelings Images',
//                   index: 1,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'beautiful',
//                   title: 'Beautiful Pictures & Images',
//                   index: 2,
//                   type: 'landing_page',
//                 },
//               ],
//               urls: {
//                 raw: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3',
//                 full: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
//                 regular:
//                   'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
//                 small:
//                   'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
//                 thumb:
//                   'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
//                 small_s3:
//                   'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1500462918059-b1a0cb512f1d',
//               },
//               links: {
//                 self: 'https://api.unsplash.com/photos/multicolored-hallway-RnCPiXixooY',
//                 html: 'https://unsplash.com/photos/multicolored-hallway-RnCPiXixooY',
//                 download: 'https://unsplash.com/photos/RnCPiXixooY/download',
//                 download_location:
//                   'https://api.unsplash.com/photos/RnCPiXixooY/download',
//               },
//               likes: 23961,
//               liked_by_user: false,
//               current_user_collections: [],
//               sponsorship: null,
//               topic_submissions: {
//                 'architecture-interior': {
//                   status: 'approved',
//                   approved_on: '2024-05-01T12:19:38Z',
//                 },
//                 wallpapers: {
//                   status: 'approved',
//                   approved_on: '2020-04-06T14:20:09Z',
//                 },
//               },
//               asset_type: 'photo',
//               premium: false,
//               plus: false,
//               user: {
//                 id: 'epp-qjGI_1Y',
//                 updated_at: '2024-08-21T03:56:56Z',
//                 username: 'efekurnaz',
//                 name: 'Efe Kurnaz',
//                 first_name: 'Efe',
//                 last_name: 'Kurnaz',
//                 twitter_username: 'efecankurnaz',
//                 portfolio_url: 'http://electricmaybe.com',
//                 bio: "Hey! I'm a Shopify expert daytime, taking pictures occassionally. If you have any idea to use my photos on, I'd love to see the result 👍🏻😌\r\nMostly Fuji x100t / sometimes iPhone 11 pro max.",
//                 location: 'Istanbul, Turkey',
//                 links: {
//                   self: 'https://api.unsplash.com/users/efekurnaz',
//                   html: 'https://unsplash.com/@efekurnaz',
//                   photos: 'https://api.unsplash.com/users/efekurnaz/photos',
//                   likes: 'https://api.unsplash.com/users/efekurnaz/likes',
//                   portfolio:
//                     'https://api.unsplash.com/users/efekurnaz/portfolio',
//                   following:
//                     'https://api.unsplash.com/users/efekurnaz/following',
//                   followers:
//                     'https://api.unsplash.com/users/efekurnaz/followers',
//                 },
//                 profile_image: {
//                   small:
//                     'https://images.unsplash.com/profile-1639041071160-72e401f7a951image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//                   medium:
//                     'https://images.unsplash.com/profile-1639041071160-72e401f7a951image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//                   large:
//                     'https://images.unsplash.com/profile-1639041071160-72e401f7a951image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//                 },
//                 instagram_username: 'efekurnaz',
//                 total_collections: 2,
//                 total_likes: 113,
//                 total_photos: 28,
//                 total_promoted_photos: 5,
//                 total_illustrations: 0,
//                 total_promoted_illustrations: 0,
//                 accepted_tos: true,
//                 for_hire: false,
//                 social: {
//                   instagram_username: 'efekurnaz',
//                   portfolio_url: 'http://electricmaybe.com',
//                   twitter_username: 'efecankurnaz',
//                   paypal_email: null,
//                 },
//               },
//             },
//             affiliate_search_query: null,
//           },
//         },
//       ],
//     },
//     {
//       id: 'E04Wks1qWTo',
//       slug: 'white-and-blue-box-beside-white-click-pen-E04Wks1qWTo',
//       alternative_slugs: {
//         en: 'white-and-blue-box-beside-white-click-pen-E04Wks1qWTo',
//         es: 'cuadro-blanco-y-azul-junto-al-boligrafo-blanco-E04Wks1qWTo',
//         ja: '白いクリックペンの横にある白と青のボックス-E04Wks1qWTo',
//         fr: 'boite-blanche-et-bleue-a-cote-du-stylo-a-clic-blanc-E04Wks1qWTo',
//         it: 'scatola-bianca-e-blu-accanto-alla-penna-a-scatto-bianca-E04Wks1qWTo',
//         ko: '흰색-클릭-펜-옆에-있는-흰색과-파란색-상자-E04Wks1qWTo',
//         de: 'weisser-und-blauer-kasten-neben-weissem-klickstift-E04Wks1qWTo',
//         pt: 'caixa-branca-e-azul-ao-lado-da-caneta-de-clique-branca-E04Wks1qWTo',
//       },
//       created_at: '2020-10-14T02:29:23Z',
//       updated_at: '2024-08-28T00:49:51Z',
//       promoted_at: null,
//       width: 3024,
//       height: 3024,
//       color: '#f3f340',
//       blur_hash: 'LJRoeRM|N3xV~kt2t1Rp9Qj=Rpt2',
//       description: 'Flatlay',
//       alt_description: 'white and blue box beside white click pen',
//       breadcrumbs: [
//         {
//           slug: 'backgrounds',
//           title: 'HQ Background Images',
//           index: 0,
//           type: 'landing_page',
//         },
//         {
//           slug: 'colors',
//           title: 'Color Backgrounds',
//           index: 1,
//           type: 'landing_page',
//         },
//         {
//           slug: 'yellow',
//           title: 'Yellow Backgrounds',
//           index: 2,
//           type: 'landing_page',
//         },
//       ],
//       urls: {
//         raw: 'https://images.unsplash.com/photo-1602642517480-4fec4fdd0b66?ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3',
//         full: 'https://images.unsplash.com/photo-1602642517480-4fec4fdd0b66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=85',
//         regular:
//           'https://images.unsplash.com/photo-1602642517480-4fec4fdd0b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=80&w=1080',
//         small:
//           'https://images.unsplash.com/photo-1602642517480-4fec4fdd0b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=80&w=400',
//         thumb:
//           'https://images.unsplash.com/photo-1602642517480-4fec4fdd0b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww&ixlib=rb-4.0.3&q=80&w=200',
//         small_s3:
//           'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1602642517480-4fec4fdd0b66',
//       },
//       links: {
//         self: 'https://api.unsplash.com/photos/white-and-blue-box-beside-white-click-pen-E04Wks1qWTo',
//         html: 'https://unsplash.com/photos/white-and-blue-box-beside-white-click-pen-E04Wks1qWTo',
//         download:
//           'https://unsplash.com/photos/E04Wks1qWTo/download?ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww',
//         download_location:
//           'https://api.unsplash.com/photos/E04Wks1qWTo/download?ixid=M3w2MDYwNzN8MHwxfHNlYXJjaHwyfHx5ZWxsb3d8ZW58MHwyfHx8MTcyNDg2NTU4Nnww',
//       },
//       likes: 34,
//       liked_by_user: false,
//       current_user_collections: [],
//       sponsorship: null,
//       topic_submissions: {},
//       asset_type: 'photo',
//       user: {
//         id: '03lQkBvkpYI',
//         updated_at: '2023-05-29T15:28:48Z',
//         username: 'devinrista',
//         name: 'Devin Rista',
//         first_name: 'Devin',
//         last_name: 'Rista',
//         twitter_username: null,
//         portfolio_url: 'https://fontbundles.net/devin-rista',
//         bio: null,
//         location: null,
//         links: {
//           self: 'https://api.unsplash.com/users/devinrista',
//           html: 'https://unsplash.com/@devinrista',
//           photos: 'https://api.unsplash.com/users/devinrista/photos',
//           likes: 'https://api.unsplash.com/users/devinrista/likes',
//           portfolio: 'https://api.unsplash.com/users/devinrista/portfolio',
//           following: 'https://api.unsplash.com/users/devinrista/following',
//           followers: 'https://api.unsplash.com/users/devinrista/followers',
//         },
//         profile_image: {
//           small:
//             'https://images.unsplash.com/profile-1600854596983-f304442369acimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//           medium:
//             'https://images.unsplash.com/profile-1600854596983-f304442369acimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//           large:
//             'https://images.unsplash.com/profile-1600854596983-f304442369acimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//         },
//         instagram_username: 'devinrista',
//         total_collections: 0,
//         total_likes: 184,
//         total_photos: 44,
//         total_promoted_photos: 0,
//         total_illustrations: 0,
//         total_promoted_illustrations: 0,
//         accepted_tos: true,
//         for_hire: false,
//         social: {
//           instagram_username: 'devinrista',
//           portfolio_url: 'https://fontbundles.net/devin-rista',
//           twitter_username: null,
//           paypal_email: null,
//         },
//       },
//       tags: [
//         {
//           type: 'landing_page',
//           title: 'yellow',
//           source: {
//             ancestry: {
//               type: {
//                 slug: 'wallpapers',
//                 pretty_slug: 'HD Wallpapers',
//               },
//               category: {
//                 slug: 'colors',
//                 pretty_slug: 'Color',
//               },
//               subcategory: {
//                 slug: 'yellow',
//                 pretty_slug: 'Yellow',
//               },
//             },
//             title: 'HD Yellow Wallpapers',
//             subtitle: 'Download Free Yellow Wallpapers',
//             description:
//               'Choose from a curated selection of yellow wallpapers for your mobile and desktop screens. Always free on Unsplash.',
//             meta_title:
//               'Yellow Wallpapers: Free HD Download [500+ HQ] | Unsplash',
//             meta_description:
//               'Choose from hundreds of free yellow wallpapers. Download HD wallpapers for free on Unsplash.',
//             cover_photo: {
//               id: 'vC8wj_Kphak',
//               slug: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//               alternative_slugs: {
//                 en: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 es: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 ja: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 fr: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 it: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 ko: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 de: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//                 pt: 'flowers-beside-yellow-wall-vC8wj_Kphak',
//               },
//               created_at: '2017-02-15T08:32:55Z',
//               updated_at: '2024-08-26T20:01:07Z',
//               promoted_at: '2017-02-15T08:32:55Z',
//               width: 3456,
//               height: 5184,
//               color: '#d9c0a6',
//               blur_hash: 'LQP=+Pxta$og%%j]WWj@Dhayofae',
//               description:
//                 'Find more inspiring photos: https://monaeendra.com/',
//               alt_description: 'flowers beside yellow wall',
//               breadcrumbs: [
//                 {
//                   slug: 'images',
//                   title: '1,000,000+ Free Images',
//                   index: 0,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'feelings',
//                   title: 'Feelings Images',
//                   index: 1,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'i-love-you',
//                   title: 'I Love You Images',
//                   index: 2,
//                   type: 'landing_page',
//                 },
//               ],
//               urls: {
//                 raw: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3',
//                 full: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
//                 regular:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
//                 small:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
//                 thumb:
//                   'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
//                 small_s3:
//                   'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1487147264018-f937fba0c817',
//               },
//               links: {
//                 self: 'https://api.unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak',
//                 html: 'https://unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak',
//                 download: 'https://unsplash.com/photos/vC8wj_Kphak/download',
//                 download_location:
//                   'https://api.unsplash.com/photos/vC8wj_Kphak/download',
//               },
//               likes: 14281,
//               liked_by_user: false,
//               current_user_collections: [],
//               sponsorship: null,
//               topic_submissions: {
//                 'textures-patterns': {
//                   status: 'approved',
//                   approved_on: '2024-04-07T11:58:24Z',
//                 },
//               },
//               asset_type: 'photo',
//               premium: false,
//               plus: false,
//               user: {
//                 id: '-tVYuvmMiPA',
//                 updated_at: '2024-05-21T17:06:40Z',
//                 username: 'monaeendra',
//                 name: 'Mona Eendra',
//                 first_name: 'Mona',
//                 last_name: 'Eendra',
//                 twitter_username: null,
//                 portfolio_url: 'https://monaeendra.com/',
//                 bio: 'Passionate photographer capturing beauty and soul in people and places. I am available for collaborations!',
//                 location: 'Copenhagen',
//                 links: {
//                   self: 'https://api.unsplash.com/users/monaeendra',
//                   html: 'https://unsplash.com/@monaeendra',
//                   photos: 'https://api.unsplash.com/users/monaeendra/photos',
//                   likes: 'https://api.unsplash.com/users/monaeendra/likes',
//                   portfolio:
//                     'https://api.unsplash.com/users/monaeendra/portfolio',
//                   following:
//                     'https://api.unsplash.com/users/monaeendra/following',
//                   followers:
//                     'https://api.unsplash.com/users/monaeendra/followers',
//                 },
//                 profile_image: {
//                   small:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//                   medium:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//                   large:
//                     'https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//                 },
//                 instagram_username: 'monaeendra',
//                 total_collections: 0,
//                 total_likes: 289,
//                 total_photos: 39,
//                 total_promoted_photos: 11,
//                 total_illustrations: 0,
//                 total_promoted_illustrations: 0,
//                 accepted_tos: false,
//                 for_hire: true,
//                 social: {
//                   instagram_username: 'monaeendra',
//                   portfolio_url: 'https://monaeendra.com/',
//                   twitter_username: null,
//                   paypal_email: null,
//                 },
//               },
//             },
//             affiliate_search_query: null,
//           },
//         },
//         {
//           type: 'search',
//           title: 'marker',
//         },
//         {
//           type: 'landing_page',
//           title: 'white',
//           source: {
//             ancestry: {
//               type: {
//                 slug: 'wallpapers',
//                 pretty_slug: 'HD Wallpapers',
//               },
//               category: {
//                 slug: 'colors',
//                 pretty_slug: 'Color',
//               },
//               subcategory: {
//                 slug: 'white',
//                 pretty_slug: 'White',
//               },
//             },
//             title: 'HD White Wallpapers',
//             subtitle: 'Download Free White Wallpapers',
//             description:
//               'Choose from a curated selection of white wallpapers for your mobile and desktop screens. Always free on Unsplash.',
//             meta_title:
//               'White Wallpapers: Free HD Download [500+ HQ] | Unsplash',
//             meta_description:
//               'Choose from hundreds of free white wallpapers. Download HD wallpapers for free on Unsplash.',
//             cover_photo: {
//               id: 'J4kK8b9Fgj8',
//               slug: 'white-book-marker-on-book-page-J4kK8b9Fgj8',
//               alternative_slugs: {
//                 en: 'white-book-marker-on-book-page-J4kK8b9Fgj8',
//                 es: 'marcador-de-libro-blanco-en-la-pagina-del-libro-J4kK8b9Fgj8',
//                 ja: 'ブックページの白いブックマーカー-J4kK8b9Fgj8',
//                 fr: 'marqueur-de-livre-blanc-sur-la-page-du-livre-J4kK8b9Fgj8',
//                 it: 'pennarello-bianco-del-libro-sulla-pagina-del-libro-J4kK8b9Fgj8',
//                 ko: '책-페이지의-흰색-책-마커-J4kK8b9Fgj8',
//                 de: 'weisser-buchmarker-auf-der-buchseite-J4kK8b9Fgj8',
//                 pt: 'marcador-de-livro-branco-na-pagina-do-livro-J4kK8b9Fgj8',
//               },
//               created_at: '2018-05-24T15:51:00Z',
//               updated_at: '2024-08-26T20:09:41Z',
//               promoted_at: '2018-05-25T09:44:47Z',
//               width: 4288,
//               height: 2848,
//               color: '#f3f3f3',
//               blur_hash: 'LNQ]+w~qIUt79F-;M{t7WBWBRjxu',
//               description: 'Knowledge enlightenment',
//               alt_description: 'white book marker on book page',
//               breadcrumbs: [
//                 {
//                   slug: 'images',
//                   title: '1,000,000+ Free Images',
//                   index: 0,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'stock',
//                   title: 'Stock Photos & Images',
//                   index: 1,
//                   type: 'landing_page',
//                 },
//                 {
//                   slug: 'cover',
//                   title: 'Cover Photos & Images',
//                   index: 2,
//                   type: 'landing_page',
//                 },
//               ],
//               urls: {
//                 raw: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3',
//                 full: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
//                 regular:
//                   'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
//                 small:
//                   'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
//                 thumb:
//                   'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
//                 small_s3:
//                   'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1527176930608-09cb256ab504',
//               },
//               links: {
//                 self: 'https://api.unsplash.com/photos/white-book-marker-on-book-page-J4kK8b9Fgj8',
//                 html: 'https://unsplash.com/photos/white-book-marker-on-book-page-J4kK8b9Fgj8',
//                 download: 'https://unsplash.com/photos/J4kK8b9Fgj8/download',
//                 download_location:
//                   'https://api.unsplash.com/photos/J4kK8b9Fgj8/download',
//               },
//               likes: 2175,
//               liked_by_user: false,
//               current_user_collections: [],
//               sponsorship: null,
//               topic_submissions: {},
//               asset_type: 'photo',
//               premium: false,
//               plus: false,
//               user: {
//                 id: 'Vh4F6Pp-svY',
//                 updated_at: '2024-07-25T09:56:16Z',
//                 username: 'olia',
//                 name: 'Olia Gozha',
//                 first_name: 'Olia',
//                 last_name: 'Gozha',
//                 twitter_username: 'OliaGozha',
//                 portfolio_url: 'https://gozha.net/',
//                 bio: 'Ukrainian • Indiemaker • Passionate designer • Art & craft enthusiast • Bookworm • Smiley introvert • Nature lover',
//                 location: 'Lviv, Ukraine',
//                 links: {
//                   self: 'https://api.unsplash.com/users/olia',
//                   html: 'https://unsplash.com/@olia',
//                   photos: 'https://api.unsplash.com/users/olia/photos',
//                   likes: 'https://api.unsplash.com/users/olia/likes',
//                   portfolio: 'https://api.unsplash.com/users/olia/portfolio',
//                   following: 'https://api.unsplash.com/users/olia/following',
//                   followers: 'https://api.unsplash.com/users/olia/followers',
//                 },
//                 profile_image: {
//                   small:
//                     'https://images.unsplash.com/profile-1630586313994-d8710486a0dbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//                   medium:
//                     'https://images.unsplash.com/profile-1630586313994-d8710486a0dbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//                   large:
//                     'https://images.unsplash.com/profile-1630586313994-d8710486a0dbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//                 },
//                 instagram_username: 'olechka_dumka',
//                 total_collections: 55,
//                 total_likes: 2894,
//                 total_photos: 58,
//                 total_promoted_photos: 28,
//                 total_illustrations: 0,
//                 total_promoted_illustrations: 0,
//                 accepted_tos: true,
//                 for_hire: false,
//                 social: {
//                   instagram_username: 'olechka_dumka',
//                   portfolio_url: 'https://gozha.net/',
//                   twitter_username: 'OliaGozha',
//                   paypal_email: null,
//                 },
//               },
//             },
//             affiliate_search_query: null,
//           },
//         },
//       ],
//     },
//   ],
// };

// const {
//   results: [firstPhotoData],
//   ...restParams
// } = photos;

// const firstPhotoData = photos.results[0];
// const totalPhotosCount = {
//   photos_meta: photos.total_pages,
//   total: photos.total,
// };
// console.log(firstPhotoData);
// console.log('totalPhotosCount:', totalPhotosCount);
// console.log(restParams);
