class Device{
  static allPower = 0;

  constructor(name, power){
  this.name = name,
  this.power = power,
  this.plugIn = false;
  }

  turnOn() {
  this.plugIn = true;
  Device.allPower += this.power;
  console.log(`${this.name} включен. Мощность ${this.name}: ${this.power} Вт. Общая мощность ${Device.allPower}`);
  }
  turnOff() {
  this.plugIn = false;
  Device.allPower -= this.power;
  console.log(`${this.name} выключен. Общая мощность ${Device.allPower}`);
  }
}

class Lamp extends Device {
  constructor(brightness, name, power) {
  super(name, power);
  this.brightness = brightness;
  }
  changeBrightness(newBrightness) {
  this.brightness = newBrightness;
  console.log(`Яркость ${this.name} изменена на ${this.brightness}.`);
  }
}

class Computer extends Device {
  constructor(brand, displaySize, memory, name, power) {
    super(name, power);
    this.brand = brand;
    this.displaySize = displaySize;
    this.memory = memory;
  }

  changeMemory(newMemory) {
    this.memory = newMemory;
    console.log(`Память устройства ${this.name} изменена на ${this.memory}.`);
  }
}


const desklamp = new Lamp(100, 'newlamp', 15)
console.log(desklamp)

desklamp.turnOn()
console.log(desklamp)

desklamp.changeBrightness(10)
console.log(desklamp)

const newLapTop = new Computer('HP', 17, 1024, 'miFirstPC', 50);

console.log(newLapTop)

newLapTop.turnOn()
newLapTop.changeMemory(2500)
console.log(newLapTop)

desklamp.turnOff()