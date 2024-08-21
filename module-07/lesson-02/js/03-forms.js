/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');

const handleFormSubmit = event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;
  const comment = form.elements.comment;

  const data = {
    formEmail: email.value,
    formPass: password.value,
    formMsg: comment.value,
  };
  console.log('data:', data);

  // const formData = {};
  // const form = new FormData(event.target);
  // form.forEach((value, key) => (formData[key] = value));
  // console.log(formData);

  form.reset();
};

form.addEventListener('submit', handleFormSubmit);
