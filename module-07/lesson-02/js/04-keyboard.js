/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// const handleKeyboard = event => {
//   console.log(event);

//   // console.log(event.code);
//   // console.log(event.key);
// };

// document.addEventListener('keypress', handleKeyboard);
// document.addEventListener('keydown', handleKeyboard);

/**
 * Обробка комбінацій клавіш
 */

// const handleKeyboardCombinations = event => {
//   if (event.code === 'Escape') {
//     console.log('😊');
//   } else {
//     console.log('🥺');
//   }
// };

const handleKeyboardCombinations = event => {
  if (event.code === 'KeyC' && event.metaKey) {
    console.log('Copypaste denied ❌');
    event.preventDefault();
  }
  if (event.code === 'KeyI' && event.altKey && event.metaKey) {
    console.log('Copypaste denied ❌');
    event.preventDefault();
  }
};

// document.addEventListener('keydown', handleKeyboardCombinations);

// document.addEventListener('contextmenu', evt => {
//   evt.preventDefault();
// });
document.addEventListener('keydown', event => {
  if (event.metaKey && event.code === 'KeyL') {
    window.close();
    console.log('here');

    // event.preventDefault();
  }
});
