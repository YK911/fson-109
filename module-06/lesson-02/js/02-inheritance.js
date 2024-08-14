/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Vehicle {
  #seatsNumber = 2;
  constructor(make, model, seatNumber) {
    this.make = make;
    this.model = model;
    this.#seatsNumber = seatNumber;
  }
}

// const sportcar = new Vehicle('Pagani', 'Zonda', 2);
// console.log('sportcar:', sportcar);

// this = {}

class Car extends Vehicle {
  constructor(make, model, seatNumber, tankCapacity) {
    super(make, model, seatNumber);
    this.tankCapacity = tankCapacity;
  }
}

const porsche = new Car('Porsche', '911', 2, 150);
console.log('Porsche:', porsche);

class HotWheel extends Car {
  constructor(make, model, seatNumber, tankCapacity) {
    super(make, model, seatNumber, tankCapacity);
    this.superPower = 'fly';
  }
}

const hotWheel = new HotWheel('Batmobile', 'v1', 1, Infinity);
console.log('hotWheel:', hotWheel);

class Truck extends Car {
  constructor(make, model, seatNumber, tankCapacity) {
    super(make, model, seatNumber, tankCapacity);
    this.make = make + ' truck';
  }

  loadCapacity(weigth) {
    if (weigth > 1 && weigth < 100) {
      console.log('Load somthing');
      return;
    }
    console.log('Too heavy');
  }
}

const caterpiller = new Truck('Caterpiller', 'SuperPower1000', 2, 1000);
caterpiller.loadCapacity(250);
console.log(caterpiller);
