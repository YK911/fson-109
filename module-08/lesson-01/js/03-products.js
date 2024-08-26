/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const container = document.querySelector('.products');
container.insertAdjacentHTML('beforeend', generateProductsMarkup(products));

function generateProductsMarkup(products) {
  return products
    .map(product => {
      return `
        <li class="item js-product-item" data-id="${product.id}">
          <img
            src="${product.img}"
            alt="${product.name}"
          />
          <h3>${product.name}</h3>
          <p>Price: <b>${product.price}</b> uah</p>
        </li>
        `;
    })
    .join('');
}

container.addEventListener('click', onCardClick);

function onCardClick(event) {
  // console.log(event.target);
  // console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    console.log('Click on UL');
    return;
  }
  // if (event.target.nodeName === 'UL') {
  //   console.log('Click on Ul');
  //   return;
  // }

  const currentEl = event.target.closest('.js-product-item');
  const id = Number(currentEl.dataset.id);
  const currentProduct = products.find(product => product.id === id);

  const instance = basicLightbox.create(`
   <div class="modal">
      <img
        src="${currentProduct.img}"
        alt="${currentProduct.name}"
      />
      <h2>${currentProduct.name}</h2>
      <h3>${currentProduct.price}</h3>
      <p>${currentProduct.description}</p>
    </div>
  `);
  instance.show();
}
