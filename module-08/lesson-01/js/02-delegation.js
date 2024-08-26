/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector('.container');

// const boxes = [...container.children];
// boxes.forEach(box => {
//   box.addEventListener('click', onBoxClick);
// });

// function onBoxClick(event) {
//   console.log('Current color: ', event.target.dataset.color);
// }

/**
 * Делегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
const container = document.querySelector('.container');

container.addEventListener('click', onContainerClick);

function onContainerClick(event) {
  // if (event.target.closest('.box.blue')) {
  //   console.log('🧙‍♂️✨');
  // }
  // if (!event.target.classList.contains('box')) {
  //   return;
  // }

  if (event.target === event.currentTarget) {
    return;
  }

  const color = event.target.dataset.color;
  console.log('color:', color);
}
