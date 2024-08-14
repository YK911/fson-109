/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: User ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

class Blogger {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.numberOfPosts = params.numberOfPosts;
    this.topics = params.topics;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }
  updatePostCount(value) {
    value = Number(value);
    if (typeof value === 'number' && !isNaN(value) && value > 0) {
      this.numberOfPosts += value;
      return;
    }

    console.log(`Incorrect value: ${value}`);
  }
}

const mango = new Blogger({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

// console.log(Number('qwe'));
