// const elems = {
//   lsBtn: document.querySelector('.js-ls-btn'),
//   ssBtn: document.querySelector('.js-ss-btn'),
// };

// elems.lsBtn.addEventListener('click', setStorageData);
// elems.ssBtn.addEventListener('click', setStorageData);

// function setStorageData(event) {
//   if (event.target.className === 'js-ls-btn') {
//     localStorage.setItem('elem', event.target.className);
//   } else {
//     sessionStorage.setItem('elem', event.target.className);
//   }
// }

const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

populateTextarea();
/**
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */
textarea.addEventListener('input', handleMessage);

function handleMessage(event) {
  // let data;
  // if (typeof event.target.value !== 'string') {
  //   data = JSON.stringify(event.target.value);
  // }
  // data = event.target.value;

  localStorage.setItem(STORAGE_KEY, event.target.value);
}
/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
// const populateTextarea = localStorage.getItem(STORAGE_KEY) ?? '';
// console.log('populateTextarea:', populateTextarea);

// textarea.value = populateTextarea;

function populateTextarea() {
  console.log('start read LS');

  try {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage === null) {
      throw new Error('Local storage is empty');
    }

    textarea.value = savedMessage;
  } catch (error) {
    console.warn(error.message);
  }

  console.log('finish read LS');
}
