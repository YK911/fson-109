/**
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');
colorPickerContainerEl.style.display = 'flex';
colorPickerContainerEl.style.gap = '20px';

colorPickerContainerEl.style = {};
colorPickerContainerEl.style.display = 'flex';
colorPickerContainerEl.style.gap = '20px';
/**
 * Пишемо функцію для створення розмітки колорпікера
 */

// const boxesWithOptions = options.map(option => {
//   const boxEl = document.createElement('div');
//   boxEl.style.backgroundColor = option.color;
//   boxEl.style.width = '30px';
//   boxEl.style.height = '30px';
//   boxEl.setAttribute('data-label', option.label);

//   return boxEl;
// });

for (const option of options) {
  const boxEl = document.createElement('div');
  boxEl.style.backgroundColor = option.color;
  boxEl.style.width = '30px';
  boxEl.style.height = '30px';
  boxEl.setAttribute('data-label', option.label);

  colorPickerContainerEl.append(boxEl);
}
// console.log(boxesWithOptions);
// colorPickerContainerEl.append(...boxesWithOptions);
