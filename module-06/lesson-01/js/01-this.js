/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */

function foo() {
  console.log('foo -> this', this);
}

// foo();

const fn = function () {
  console.log('fn -> this', this);
};

// fn();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  },
};
// console.log(user.showTag);
// user.showTag();

const person = {
  tag: 'Ajax',
  showTag() {
    console.log('showTag -> this', this);
  },
};
// person.showTag();
/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log('showTag -> this', this);
  console.log('showTag -> this.tag', this.tag);
}

// showTag();

const mango = {
  tag: 'Mango',
  // showUserTag: function () {
  //   console.log('showTag -> this', this);
  //   console.log('showTag -> this.tag', this.tag);
  // },
};

mango.showUserTag = showTag;
// console.log('mango', mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: 'Poly',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: 'Jacob',
  showTag() {
    // console.log('showTag -> this', this);
    // console.log('showTag -> this.tag', this.tag);
  },
  addAge: function () {
    const innerFn = () => {
      console.log(this);
    };
    innerFn();
  },
  changeName: () => {
    console.log(this);
  },
};

jacob.addAge();
jacob.changeName();

function invokeAction(callback) {
  console.log(callback);
  callback();
}

// invokeAction(jacob.showTag);

//* ПРАВИЛА ВИЗНАЧЕННЯ THIS
//? 1 Визначити з яким типом функції працюємо
//? 2 Маємо умовне поділення на два табори
//?   2.1 Перший це Function Declaration & Function Expression
//?   2.2 Другий це Arrow Function
//? 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
//? 4 Arrow Function місцем, де вона була створена
