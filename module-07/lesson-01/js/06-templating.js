/**
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
const containerEl = document.querySelector('.container');

// console.log('innerHTML', titleEl.innerHTML);
// console.log('textContent', titleEl.textContent);

// containerEl.innerHTML =
//   '<b>Lorem ipsum dolor sit amet.</b> Method <code>push()</code>';

// containerEl.append('Lorem ipsum dolor sit amet.');

// containerEl.innerHTML = '';

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
const markup = `
  <article>
    <h2>Phone</h2>
    <p>Price <b>2000</b></p>
  </article>
`;

containerEl.insertAdjacentHTML('beforeend', markup);
