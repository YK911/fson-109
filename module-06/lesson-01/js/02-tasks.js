function foo() {
  console.log('foo -> this', this);
}

// foo(); // Який this ???

/**
 * -------------------------
 */
const book = {
  title: 'React for beginners',
  showThis() {
    console.log('showThis -> this', this);
  },
  showTitle() {
    console.log('showTitle -> this.title', this.title);
  },
};

// book.showThis(); // Який this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ???

//? Task
//* Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
//* розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
//* кількістю з властивості stones.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const findStone = this.stones.find(stone => stone.name === stoneName);
    if (!findStone) {
      return `${stoneName} doesn't exist`;
    }

    return findStone.price * findStone.quantity;
  },
};

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Schebin')); // ❌

//? Task
//* Потрібно створити систему для продажу в інтернет-магазині.
//* В об'єкті продукту (product) потрібно створити метод discount (який буде приймати знижку клієнта в %) та повертати вартість товару з врахуванням знижки
//* В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунку вартості товару та логувати повідомлення про покупку
//* "Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

const product = {
  name: 'Smartphone',
  price: 500,
  discount(percent) {
    return this.price - (this.price * percent) / 100;
  },
};

const client = {
  name: 'Alice',
  discountPercent: 8,
  purchase() {
    const newPrice = product.discount(this.discountPercent);
    const msg = `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${newPrice}грн`;
    console.log(msg);
  },
};
client.purchase();

const newClient = {
  name: 'Dolores',
  discountPercent: 25,
  purchase: client.purchase,
};
newClient.purchase();
