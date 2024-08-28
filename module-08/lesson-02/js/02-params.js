/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
// function getUserName(obj = {}) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// З деструктуризацією
// function getUserName(obj) {
//   const { username, skills: { html, css, js } = {} } = obj;

//   console.log(
//     `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

function getUserName({ username, skills: { html, css, js } = {} } = {}) {
  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`
  );
}

getUserName(user);
