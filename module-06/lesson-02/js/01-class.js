/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
//  #region
// const mango = {
//   userName: 'Mango',
//   userPassword: 'qwerty123',
//   showUserInfo() {
//     console.log(`${this.userName} 🔑: ${this.userPassword}`);
//   },
// };

// const poly = {
//   userName: 'Poly',
//   userPassword: 'asdfgh456',
//   showUserInfo() {
//     console.log(`${this.userName} 🔑: ${this.userPassword}`);
//   },
// };

// function User(userName, userPass) {
//   // this = {}
//   this.userName = userName;
//   this.userPass = userPass;
//   // return this
// }

// const showInfo = function () {
//   console.log(`${this.userName} 🔑: ${this.userPass}`);
// };

// const userMango = new User('Mango', 'qwe123');
// console.log('userMango:', userMango);
// User.prototype.showInfo = showInfo;

// userMango.showInfo();
//  #endregion

// class User {
//   _name; // protected
//   #email;
//   #password;
//   message;
//   age;

//   constructor(name, { password, email, message, age }) {
//     // console.log(name);
//     // console.log(password);
//     this._name = name;
//     this.#password = password;
//     this.#email = this.#checkEmail(email) ? email : '';
//     this.message = message;
//     this.age = age;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     const isValid = this.#checkEmail(newEmail);

//     isValid ? (this.#email = newEmail) : console.log('New email is not valid');
//   }

//   #checkEmail(emailValue) {
//     if (emailValue.includes('@')) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   showName() {
//     console.log(this.name);
//   }
// }

// const mangoParams = {
//   email: 'mangomail.com',
//   password: 'qwe123',
//   message: 'Hello world 😎',
//   age: 2,
// };

// const mango = new User('Mango', mangoParams);
// mango.email = 'Mango.mail.com';
// console.log(mango.email);
// console.log(mango.name);
// mango.name = 'Super Mango';
// mango.showName();
// console.log('mango:', mango);

// const poly = new User('Poly', 'asd456');
// console.log('poly:', poly);

class User {
  static amountOfUsers = 0;
  static createdAt = 0;

  _name; // protected
  #email;

  constructor(name, email) {
    this.id = User.createId();
    this._name = name;
    this.#email = email;

    User.addUsers();
  }

  static addUsers() {
    console.log('Inside static method');
    User.amountOfUsers += 1;
  }
  static createId() {
    return (User.createdAt = Date.now());
  }
}

const mango = new User('Mango', 'mango@mail.com');
console.log('mango:', mango);
const poly = new User('Poly', 'poly@mail.com');
const ajax = new User('Ajax', 'ajax@mail.com');

console.log(User.amountOfUsers);
console.log(User.createdAt);
