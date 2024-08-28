/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: 'Audi',
    type: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://images.unsplash.com/photo-1666294715367-5a01360e30a5?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://cdn4.riastatic.com/photosnew/auto/photo/audi_q7__490766054f.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://www.detroitnews.com/gcdn/presto/2021/07/21/PDTN/5388587b-ae10-48e3-a04c-a8a4aef5fb10-HondaAccord_fr3-4-lake.JPG?width=700&height=395&fit=crop&format=pjpg&auto=webp',
  },
  {
    id: 6,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

const elements = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};

elements.container.insertAdjacentHTML('beforeend', createCarsMarkup(cars));
elements.form.addEventListener('submit', handlerFormSubmit);

function createCarsMarkup(items) {
  // return items.map((item) => { }).join('');
  return items.reduce((acc, item) => {
    return (acc += `
      <li class="car-item" data-id="${item.id}">
        <div>
          <img src="${item.img}" alt="${item.car} ${item.type}" />
        </div>
        <h3>${item.car}</h3>
        <p>${item.type}</p>
        <p>
          Price: <b>${item.price}</b>
        </p>
      </li>`);
  }, '');
}
function handlerFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.query.value.toLowerCase();
  const option = form.elements.options.value.toLowerCase();

  const filteredCars = cars
    .filter(car => car[option].toLowerCase().includes(query))
    .sort((a, b) => a[option].localeCompare(b[option]));

  elements.container.innerHTML = createCarsMarkup(filteredCars);

  form.reset();
}
