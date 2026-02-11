'use strict';

class Car {
  #make;
  #model;
  #_run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = run;
  }

  get #run() {
    return this.#_run;
  }

  set #run(value) {
    if (!Number.isInteger(value) || value <= 0) {
      console.log('Значение пробега должно быть целым и положительным');
      this.#_run = 'данные не введены';
      return;
    }
    this.#_run = value;
  }

  set changeRun(value) {
    if (this.#run > value) {
      console.log('Пробег должен быть не менее предыдущего значения');
      return;
    }
    this.#_run = value;
  }

  info() {
    console.log(`Марка: ${this.#make}, Модель: ${this.#model}, Пробег: ${this.#run}`);
  }
}
//----------------------------------------------

const newCar1 = new Car('Geely', 'Tugella', 280);
console.log(newCar1);
newCar1.info();

newCar1.changeRun = 40;
console.log(newCar1);
newCar1.info();

newCar1.changeRun = 540;
console.log(newCar1);
newCar1.info();
