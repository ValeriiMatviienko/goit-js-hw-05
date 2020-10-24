class Car {
 // Write code under this line
    static getSpecs(car) {
      return (`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`)
  }
    constructor(car) {
      this._maxSpeed = car.maxSpeed;
      this._speed = 0;
      this._isOn = false;
      this._distance = 0;
      this._price = car.price;
  }
    get price() {
      return this._price;
  }
    set price(value) {
      this._price = value;
  }
    turnOn() {
      this._isOn = true;
  }
    turnOff() {
      this._isOn = false;
      this._speed = 0;
  }
    accelerate(value) {
      if (this._speed + value < this._maxSpeed) {
      this._speed += value;
    }
  }
    decelerate(value) {
      if (this.speed - value < 0) {
      this.speed = this.speed - value;
    }
  }
    drive(hours) {
        if (this._isOn) {
        this._distance = this._speed * hours;
    }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
