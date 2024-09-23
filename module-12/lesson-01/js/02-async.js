/**
 * Синтаксис async/await
 * try...catch
 */

// const fetchTodos = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Some error ocured');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       return data;
//     });
// };

const refs = {
  form: document.querySelector('.js-todos-form'),
  todosList: document.querySelector('.js-todos'),
  loader: document.querySelector('.js-loader'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { todoCount } = form.elements;

  refs.loader.classList.add('isVisible');

  fetchTodos(todoCount.value)
    .then(createTodosMarkup) // return markup string
    .then(markup => {
      refs.todosList.insertAdjacentHTML('beforeend', markup);
    })
    // .then(todos => {
    //   const markup = createTodosMarkup(todos);
    //   refs.todosList.insertAdjacentHTML('beforeend', markup);
    // })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      refs.loader.classList.remove('isVisible');
      form.reset();
    });
}

async function fetchTodos(per_page_count) {
  const searchParams = new URLSearchParams({
    _page: 1,
    _limit: per_page_count,
  });

  const url = `https://jsonplaceholder.typicode.com/todos?${searchParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Some error ocured');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function createTodosMarkup(arr) {
  return arr
    .map(item => {
      return `
      <li class="todo-item">
        <input class="todo-filed" type="checkbox" ${
          item.completed ? 'checked' : ''
        } />
        <p class="todo-desc">${item.title}</p>
      </li>`;
    })
    .join('');
}
